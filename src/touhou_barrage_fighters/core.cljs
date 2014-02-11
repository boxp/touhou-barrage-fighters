(ns touhou-barrage-fighters.core
  (:use [touhou-barrage-fighters.data :only [characters player ->Player]]
        [touhou-barrage-fighters.debug :only [print-chara]])
  (:use-macros [dommy.macros :only [sel1]])
  (:require [touhou-barrage-fighters.storage :as st]
            [dommy.core :as dommy]
            [touhou-barrage-fighters.ui :as ui]
            [goog.net.cookies :as cks]))

(defn in-map
  "出撃先を決定する"
  []
  (dommy/replace! (sel1 :.root) (ui/in-map)))

(defn ^:export tutorial-win
  []
  (dommy/replace! (sel1 :.root) (ui/tutorial)))

(defn ^:export in-temple-win
  []
  ; 画面を神社に
  (dommy/replace! (sel1 :.root) (ui/in-temple @player))
  ; 台詞の設定
  (ui/say! (-> @player :member first) :in-temple)
  (.setInterval js/window
    #(ui/say! (-> @player :member first) :in-temple)
    10000)
  ; キャラクターの設定
  (dommy/listen! (sel1 :#tatie)
    :click
    #(do
      ; キャラクターの画像変更
      (ui/behave! (-> @player :member first) :ikari)
      (ui/say! (-> @player :member first) :selected)
      (.setTimeout js/window
        (fn [] (ui/behave! (-> @player :member first) :normal))
        4000)))
  ; 出発ボタンの設定
  (dommy/listen! (sel1 :#start)
    :click
    #(do
      (ui/close-shutter!)
      (in-map)
      (.setTimeout js/window
        ui/open-shutter!
        2000))))

(defn ^:export init-player
  []
  (let [name (. (sel1 :input#player-name) -value)
        pass (. (sel1 :input#player-pass) -value)
        new-player (->Player name pass 0 {} [(:reimu characters)] 0)]
    (reset! player new-player)
    (st/save new-player)
    (tutorial-win)))

(defn main 
  []
  ; ユーザー登録
  (if (cks/get "player")
    ; ゲームスタート
    (do
      (st/load)
      (in-temple-win))
    ; set signup ui
    (dommy/replace! (sel1 :.root) (ui/init-acount))))

(set! *print-fn* #(.log js/console %))
(set! (.-onload js/window) main)
