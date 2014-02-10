(ns touhou-barrage-fighters.core
  (:use [touhou-barrage-fighters.data :only [characters player ->Player say]]
        [touhou-barrage-fighters.debug :only [print-chara]]
        [touhou-barrage-fighters.ui :only [init-acount in-temple tutorial say! close-shutter! open-shutter! behave!]])
  (:use-macros [dommy.macros :only [sel1]])
  (:require [touhou-barrage-fighters.storage :as st]
            [dommy.core :as dommy]
            [goog.net.cookies :as cks]))

(defn ^:export tutorial-win
  []
  (dommy/replace! (sel1 :.root) (tutorial)))

(defn ^:export in-temple-win
  []
  ; 画面を神社に
  (dommy/replace! (sel1 :.root) (in-temple @player))
  ; 台詞の設定
  (say! (-> @player :member first) :in-temple)
  (.setInterval js/window
    #(say! (-> @player :member first) :in-temple)
    10000)
  ; キャラクターの設定
  (dommy/listen! (sel1 :#tatie)
    :click
    #(do
      ; キャラクターの画像変更
      (behave! (-> @player :member first) :ikari)
      (say! (-> @player :member first) :selected)
      (.setTimeout js/window
        (fn [] (behave! (-> @player :member first) :normal))
        4000)))
  ; 出発ボタンの設定
  (dommy/listen! (sel1 :#start)
    :click
    #(do
      (close-shutter!)
      (.setTimeout js/window
        open-shutter!
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
  (if (not= "" (. js/document -cookie))
    ; ゲームスタート
    (do
      (st/load)
      (in-temple-win))
    ; set signup ui
    (dommy/replace! (sel1 :.root) (init-acount))))

(set! *print-fn* #(.log js/console %))
(set! (.-onload js/window) main)
