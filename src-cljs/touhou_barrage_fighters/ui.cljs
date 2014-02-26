(ns touhou-barrage-fighters.ui
  (:require [dommy.core :as dommy]
            [goog.fx.dom :as fxdom]
            [cljs.core.async :refer [<! timeout put!]])
  (:use-macros [dommy.macros :only [deftemplate sel1]]
               [cljs.core.async.macros :only [go]]))

(deftemplate in-map [player]
  [:div#map.content
    [:div#map-list
      [:div#youkai-taiji "妖怪退治"]
      [:div#akai-koumu "紅い妖霧の謎"]]])

;(deftemplate temple [player]
;  [:div#temple-content.content
;    [:div#info (str "id: " (:name player))]
;    [:div#character
;      [:div#tatie {:src (-> (nth (:member player) (:main player)) :img :normal)}]
;      [:div#serihu-wrapper
;        [:img#hukidasi {:src "img/chara/hukidasi.png"}]
;        [:div#serihu]]]])

(deftemplate temple [player]
  [:div#temple-content.content
    [:div#info (str "id: " (:name player))]
    [:div#character
      [:div.tatie.normal
        {:style 
          {:background-image (str "url(" (-> (nth (:member player) (:main player)) :img) ")")}}]
      [:div#serihu-wrapper
        [:img#hukidasi {:src "img/chara/hukidasi.png"}]
        [:div#serihu]]]])

(deftemplate init-acount []
  [:div#form-wrapper.root
    [:div#form       
      [:p#name-lbl "プレイヤー名:"]
      [:input#player-name]
      [:p#pass-lbl "パスワード:"]
      [:input#player-pass]
      [:input#game-start {:type "button"
                          :value "スタート"}]]])
  
;(deftemplate in-temple [player]
;  [:div#wrapper.root
;    [:div#sidebar
;      [:div#temple.sidebar-banner "博霊神社"]
;      [:div#customize.sidebar-banner "カスタマイズ"]
;      [:div#rest.sidebar-banner "休憩所"]
;      [:div#start.sidebar-banner "出発"]]
;    [:div#temple-content.content.current {:name "temple-content"}
;      [:div#info (str "id: " (:name player))]
;      [:div#character
;        [:img#tatie {:src (-> (nth (:member player) (:main player)) :img :normal)}]
;        [:div#serihu-wrapper
;          [:img#hukidasi {:src "img/chara/hukidasi.png"}]
;          [:div#serihu]]]]
;    [:div#map.content {:name "map"}
;      [:ul#map-list
;        [:li "妖怪退治"]
;        [:li "紅い妖霧の謎"]]]])

(deftemplate in-temple [player]
  [:div#wrapper.root
    [:div#sidebar
      [:div#temple.sidebar-banner "博霊神社"]
      [:div#customize.sidebar-banner "カスタマイズ"]
      [:div#rest.sidebar-banner "休憩所"]
      [:div#start.sidebar-banner "出発"]]
    [:div#temple-content.content.current {:name "temple-content"}
      [:div#info (str "id: " (:name player))]
      [:div#character
        [:div#temple-tatie.tatie.normal
          {:style 
            {:background-image (str "url(" (-> (nth (:member player) (:main player)) :img) ")")}}]
        [:div#serihu-wrapper
          [:img#hukidasi {:src "img/chara/hukidasi.png"}]
          [:div#serihu]]]]
    [:div#map.content {:name "map"}
      [:ul#map-list
        [:li "妖怪退治"]
        [:li "紅い妖霧の謎"]]]])

(deftemplate battle-field
  [field-name]
  [:div#wrapper.root
    [:div#content]
    [:div#cards]])

(defn switch-content 
  [id]
  (dommy/remove-class! (sel1 :.current) :current)
  (dommy/add-class! (sel1 id) :current))

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
         :value "OK"}]]])

(defn say!
  [chara genre]
  (set! (.-innerHTML (sel1 :#serihu))
     (rand-nth (genre (:words chara)))))

(defn switch-behave!
  [target bef-exp exp]
  (dommy/remove-class! (sel1 target) bef-exp)
  (dommy/add-class! (sel1 target) exp))

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

(defn departure
  [place]
  (go (close-shutter!)
      (<! (timeout 1000))
      (dommy/replace! (sel1 :.root) (battle-field place))
      (open-shutter!)))
