(ns touhou-barrage-fighters.battle
  (:require [cljs.core.async :refer [<! put! timeout]]
            [clojure.walk :refer [prewalk]]
            [touhou-barrage-fighters.data :as dt])
  (:use-macros [cljs.core.async.macros :only [go-loop]]))

(def youkai-taiji
  [[:yousei1
    :yousei2]
   [:yousei2 :yousei3
    :ru-mia]
   [:chirno
    :daiyousei]])

(defn enemy-key->record
  [enemy-vec]
  (prewalk #(% dt/characters) enemy-vec))

(defn hit?
  [player enemy card]
  (let [p-attack (+ (:p-attack player)
                    (:p-attack card))
        m-attack (+ (:m-attack player)
                    (:m-attack card))
        p-defence (+ (:p-defence enemy)
                     (-> dt/equipments (:equipment enemy) :p-defence))
        m-defence (+ (:m-defence enemy)
                     (-> dt/equipments (:equipment enemy) :m-defence))
        p-damage (- p-attack p-defence)
        m-damage (- m-attack m-defence)
        reacha-value (rand (if (> p-damage m-damage)
                             p-attack
                             m-attack))
        target-value (rand (if (> p-damage m-damage)
                             p-defence
                             m-defence))]
    (> reacha-value target-value)))

(defn calc-damage-point
  [player enemy card]
  (let [p-attack (+ (:p-attack player)
                    (:p-attack card))
        m-attack (+ (:m-attack player)
                    (:m-attack card))
        p-defence (+ (:p-defence enemy)
                     (-> enemy :equipment dt/equipments :p-defence))
        m-defence (+ (:m-defence enemy)
                     (-> enemy :equipment dt/equipments :m-defence))
        p-damage (- p-attack p-defence)
        m-damage (- m-attack m-defence)
        damage (max p-damage m-damage)]
      (if (< damage 0)
        0
        damage)))

(defn battle
  " 選択した２つのキャラクター戦闘させる"
  [place attacker target]
  (print (:name attacker) "vs" (:name target))
  (let [attacker-cards (:cards attacker)
        target-cards (:cards target)
        attacker-card ((first attacker-cards) dt/spells)
        target-card ((first target-cards) dt/spells)
        attacker-hp (:hp attacker)
        target-hp (:hp target)
        hit-attacker->target (hit? attacker target attacker-card)
        damage-attacker->target (if hit-attacker->target 
                                  (calc-damage-point attacker target attacker-card)
                                  0)
        new-target-hp (- target-hp damage-attacker->target)
        new-attacker-cards (rest attacker-cards)]
    (print (:name attacker) "の攻撃")
    (print "スペルカード「" (:name attacker-card) "」")
    (print (if hit-attacker->target "ヒット！" "外れた!"))
    (print (:name target) "に" damage-attacker->target "のダメージ")
    {:attacker 
      (merge attacker {:cards new-attacker-cards})
     :target
      (merge target {:hp new-target-hp})}))

(defn halt?
  "全滅しているかを問う述語"
  [member]
  (every? #(% :hp zero?) member))

(defn battle-loop
  [player-member enemy-member]
  (go-loop [p-member player-member
            e-member enemy-member]
    ; 終わり？
    (if 
      (or 
        ; どちらかが全滅
        (or (halt? player-member)
              (halt? enemy-member))))))
