(ns touhou-barrage-fighters.storage
  (:use [touhou-barrage-fighters.data :only [->Word ->Player ->Character]])
  (:require [goog.net.cookies :as cks]))

(defn character-rec->map
  [chara]
  {:name (:name chara)
   :words {:get (-> chara :words :get)
           :in-temple (-> chara :words :in-temple)
           :attack (-> chara :words :attack)
           :damage (-> chara :words :damage)
           :selected (-> chara :words :selected)}
   :hp (-> chara :hp)
   :p-attack (-> chara :p-attack)
   :m-attack (-> chara :m-attack)
   :p-defence (-> chara :p-defence)
   :m-defence (-> chara :m-defence)
   :job (:job chara)
   :cards (:cards chara)
   :equipment (:equipment chara)
   :level (:level chara)
   :exp (:exp chara)
   :img (:img chara)})

(defn character-repair
  [chara]
  (->Character
    (:name chara)
    (->Word
      (-> chara :words :get)
      (-> chara :words :in-temple)
      (-> chara :words :attack)
      (-> chara :words :damage)
      (-> chara :words :selected))
    (-> chara :hp)
    (-> chara :p-attack)
    (-> chara :m-attack)
    (-> chara :p-defence)
    (-> chara :m-defence)
    (keyword (chara :job))
    (chara :cards)
    (keyword (chara :equipment))
    (chara :level)
    (chara :exp)
    (chara :img)))

(defn ^:export save 
  [player]
  "プレイヤーデータをセーブ"
  (let [member (map character-rec->map (:member player))
        cards (clj->js (:cards player))]
    (cks/set "player"
      (js/escape
        (.stringify js/JSON 
          (clj->js
            {:name (:name player)
             :pass (:pass player)
             :lv (:lv player)
             :cards cards
             :member member
             :main (:main player)}))))))

(defn ^:export load
  []
  "プレイヤーデータをロード"
  (let [player-map (js->clj (.parse js/JSON (js/unescape (cks/get "player"))) :keywordize-keys true)
        member (vec (map character-repair (player-map :member)))
        name (player-map :name)
        pass (player-map :pass)
        lv (player-map :lv)
        cards (player-map :cards)
        main (player-map :main)]
    (->Player name pass lv cards member main)))
