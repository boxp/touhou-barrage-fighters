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
                     (-> dt/equipments (:equipment enemy) :p-defence))
        m-defence (+ (:m-defence enemy)
                     (-> dt/equipments (:equipment enemy) :m-defence))
        p-damage (- p-attack p-defence)
        m-damage (- m-attack m-defence)
        damage (max p-damage m-damage)]
      (if (< damage 0)
        0
        damage)))

(defn battle-loop
  [place player enemy]
  (print (:name player) "vs" (:name enemy))
  (go-loop [player-hp (:hp player)
            enemy-hp (:hp enemy)
            player-cards (:cards player)
            enemy-cards (:cards enemy)]
    (let [player-card ((first player-cards) dt/spells)
          enemy-card ((first enemy-cards) dt/spells)
          hit-player->enemy (hit? player enemy player-card)
          hit-enemy->player (hit? enemy player enemy-card)
          damage-player->enemy (calc-damage-point player enemy player-card)
          damage-enemy->player (calc-damage-point enemy player player-card)
          new-player-hp (- player-hp damage-enemy->player)
          new-enemy-hp (- enemy-hp damage-player->enemy)
          new-player-cards (rest player-cards)
          new-enemy-cards (rest enemy-cards)]
      (print (:name player) "の攻撃")
      (print "スペルカード「" (:name player-card) "」")
      (print (if hit-player->enemy "ヒット！" "外れた!"))
      (print (:name enemy) ":残りライフ" new-enemy-hp)
      (print (:name enemy) "の攻撃")
      (print (if hit-player->enemy "ヒット！" "外れた!"))
      (print "スペルカード「" (:name enemy-card) "」")
      (print (:name player) ":残りライフ" new-player-hp)
      (if 
        (or (< new-player-hp 0)
            (< new-enemy-hp 0))
        {:player 
          (dt/->Character 
            (:name player)
            (:words player)
            new-player-hp
            (:p-attack player)
            (:m-attack player)
            (:p-defence player)
            (:m-defence player)
            (:job player)
            (:cards player)
            (:equipment player)
            (:level player)
            (:exp player)
            (:img player))
        :enemy
          (dt/->Character 
            (:name player)
            (:words enemy)
            new-enemy-hp
            (:p-attack enemy)
            (:m-attack enemy)
            (:p-defence enemy)
            (:m-defence enemy)
            (:job enemy)
            (:cards enemy)
            (:equipment enemy)
            (:level enemy)
            (:exp enemy)
            (:img enemy))}
        (recur new-player-hp
               new-enemy-hp
               new-player-cards
               new-enemy-cards)))))

(defn ready-for-battle
  [player-member enemy-member]
  (go-loop [p-member player-member
            e-member enemy-member]
    ))
