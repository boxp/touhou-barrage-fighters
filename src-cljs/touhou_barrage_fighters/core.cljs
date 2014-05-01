(ns touhou-barrage-fighters.core
  (:use [touhou-barrage-fighters.data :only [->Player characters]]
        [touhou-barrage-fighters.debug :only [print-chara *character-chan* *player-chan*]]
        [cljs.core.async :only [<! >! put! timeout chan close!]])
  (:use-macros [dommy.macros :only [sel1 sel]]
               [cljs.core.async.macros :only [go]])
  (:require [touhou-barrage-fighters.storage :as st]
            [dommy.core :as dommy]
            [touhou-barrage-fighters.ui :as ui]
            [goog.net.cookies :as cks]))

(defn character-loop
  "キャラクターを喋らせる"
  [chan chara]
  ; for debug
  (reset! *character-chan* chan)
  ; 台詞の設定
  (go (loop [input (<! chan)
             character chara]
        (let [new-chara (or (get characters (:update input)) character)]
          (case (-> input keys first)
            :touch (<! (go
                         (ui/say! character :selected)
                         (ui/switch-behave! :#temple-tatie :normal :ikari)
                         (<! (timeout 3000))
                         (ui/switch-behave! :#temple-tatie :ikari :normal)))
            :timeout (try (ui/say! character :in-temple)
                       (catch js/Object e (close! chan)))
            :update (ui/switch-character! :#temple-tatie new-chara)
            :exit nil)
          (recur (<! chan) new-chara))))
  (go (while true
        (put! chan {:timeout true})
        (<! (timeout 10000)))))

(defn ^:export tutorial
  []
  (js/alert
    (str
      "あらすじ\n"
      "幻想郷の世界へようこそ！\n"
       "妖怪が多く住むこの世界では、毎日毎日罪のない人間達が襲わる事件が絶えません。\n" 
       "このままでは人間の里は壊滅、人類は滅びてしまいます。\n" 
       "人類が滅びない為にも、 神社で気持ちよさそうに寝ている巫女を叩き起こし、共に妖怪退治の旅に出かけましょう！")))

(defn ^:export in-temple-win
  [player player-chan]
  (let [chara-chan (chan)]
    ; 画面を神社に
    (dommy/replace! (sel1 :.root) (ui/in-temple player))
    ; 神社へのボタン
    (dommy/listen! (sel1 :#temple) 
                   :click #(ui/switch-content :#temple-content))
    ; 出撃ボタン
    (dommy/listen! (sel1 :#start)
                   :click #(ui/switch-content :#map))
    ; キャラクターを喋らせ始める
    (character-loop chara-chan (-> player :member first))
    ; 立ち絵の判定
    (dommy/listen! (sel1 :#temple-tatie) 
                 :click #(put! chara-chan {:touch %}))
    ; 時計をスタートさせる
    (ui/start-watch!)))

(defn ^:export init-player
  []
  (let [name (. (sel1 :input#player-name) -value)
        pass (. (sel1 :input#player-pass) -value)
        new-player (->Player name pass 0 {} [(:alice characters)] 0)]
    (st/save new-player)
    new-player))

(defn main 
  []
  (let [player-chan (chan)]
    ; for debug
    (reset! *player-chan* player-chan)
    ; ユーザー登録
    (if (cks/get "player")
      ; ゲームスタート
      (doto (st/load)
        (in-temple-win player-chan))
      ; set signup ui
      (go
        (dommy/replace! (sel1 :.root) (ui/init-acount))
        (dommy/listen! (sel1 :#game-start)
                       :click #(put! player-chan (init-player)))
        ; 認証ボタンが押されるまでブロック
        (doto (<! player-chan)
          (in-temple-win player-chan))
        (tutorial)))))

(set! *print-fn* #(.log js/console (apply str %&)))
(set! (.-onload js/window) main)
