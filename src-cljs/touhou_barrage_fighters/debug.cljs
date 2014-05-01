(ns touhou-barrage-fighters.debug
  (:require [touhou-barrage-fighters.data :as data]
            [cljs.core.async :refer [<!]]
            [touhou-barrage-fighters.battle :as bt]
            [clojure.string :refer [join]])
  (:use-macros [cljs.core.async.macros :only [go]]))

(def ^:export *character-chan* (atom nil))
(def ^:export *player-chan* (atom nil))

(defn print-chara
  "print character parameter"
  [chara]
  (str
    "体力:" (-> chara :parameters :hp) "\n"
    "物理攻撃力:" (-> chara :parameters :p-attack) "\n"
    "魔法攻撃力:" (-> chara :parameters :m-attack) "\n"
    "物理防御力:" (-> chara :parameters :p-defence) "\n"
    "魔法防御力:" (-> chara :parameters :m-defence) "\n"
    "職業:" (name (:job chara)) "\n"
    "装備:" (name (:equipment chara)) "\n"
    "ドロップ時のセリフ\n" (join (-> chara :words :get) "\n") "\n"
    "神社でのセリフ\n" (join (-> chara :words :in-temple) "\n") "\n"
    "攻撃時のセリフ\n" (join (-> chara :words :attack) "\n") "\n"
    "ダメージを受けた時のセリフ\n" (join (-> chara :words :damage) "\n") "\n"
    "選択された時のセリフ\n" (join (-> chara :words :selected) "\n") "\n"
    "手持ちのスペルカード\n" (:cards chara)))

(defn ^:export character-add!
  [chara]
  (let [chara-key (keyword chara)
        new-chara (chara-key data/characters)]
    (set! (. @data/player -member) (conj (:member @data/player) new-chara))))

(defn ^:export battle-test
  []
  (go (let [attacker (:alice data/characters)
            target (:reimu data/characters)
            result (bt/battle :lake attacker target)]
    (js/alert (str (:name attacker) ":" (-> result :attacker :hp)
                   (:name target) ":" (-> result :target :hp))))))

(defn ^:export get-damage-point
  []
  (let [player (:alice data/characters)
        enemy (:reimu data/characters)
        spell (:shanghai data/spells)]
    (bt/calc-damage-point player enemy spell)))
