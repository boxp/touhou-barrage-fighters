(ns touhou-barrage-fighters.ui
  (:require [dommy.core :as dommy]
            [goog.fx.dom :as fxdom])
  (:use-macros [dommy.macros :only [deftemplate sel1]]))

(deftemplate init-acount []
  [:div#form-wrapper.root
    [:div#form       
      [:p#name-lbl "プレイヤー名:"]
      [:input#player-name]
      [:p#pass-lbl "パスワード:"]
      [:input#player-pass]
      [:input#game-start {:type "button"
                          :value "スタート"
                          :onClick "touhou_barrage_fighters.core.init_player();"}]]])
  
(deftemplate in-temple [player]
  [:div#wrapper.root
    [:div#sidebar
      [:div#temple.sidebar-banner "博霊神社"]
      [:div#customize.sidebar-banner "カスタマイズ"]
      [:div#rest.sidebar-banner "休憩所"]
      [:div#start.sidebar-banner "出発"]]
    [:div#content 
      [:div#info (str "id: " (:name player))]
      [:div#character
        [:img#tatie {:src (-> (nth (:member player) (:main player)) :img :normal)}]
        [:div#serihu-wrapper
          [:img#hukidasi {:src "img/chara/hukidasi.png"}]
          [:div#serihu]]]]])

(deftemplate tutorial []
  [:div#tutorial-wrapper.root
    [:div#message-wrapper
      [:div#tutorial-lbl "あらすじ"]
      [:div#message 
        "幻想郷の世界へようこそ！" [:br]
         "妖怪が多く住むこの世界では、毎日毎日罪のない人間達が襲わる事件が絶えません。" [:br]
         "このままでは人間の里は壊滅、人類は滅びてしまいます。" [:br]
         "人類が滅びない為にも、 神社で気持ちよさそうに寝ている巫女を叩き起こし、共に妖怪退治の旅に出かけましょう！"]
      [:input#pos-button 
        {:type "button"
         :value "OK"
         :onClick "touhou_barrage_fighters.core.in_temple_win();"}]]])

(defn say!
  [chara genre]
  (set! (.-innerHTML (sel1 :#serihu))
     (rand-nth (genre (:words chara)))))

(defn behave!
  [chara exp]
  (set! (. (sel1 :#tatie) -src)
     (exp (:img chara))))

(defn close-shutter!
  []
  (let [shutter (sel1 :#shutter)
        max-height (.. js/document -body -clientHeight)
        resizer (fxdom/ResizeHeight. shutter 0 max-height 1000)]
    (. resizer play)))

(defn open-shutter!
  []
  (let [shutter (sel1 :#shutter)
        max-height (.. js/document -body -clientHeight)
        resizer (fxdom/ResizeHeight. shutter max-height 0 1000)]
    (. resizer play)))
