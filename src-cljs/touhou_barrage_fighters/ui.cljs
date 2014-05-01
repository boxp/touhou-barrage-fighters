(ns touhou-barrage-fighters.ui
  (:require [dommy.core :as dommy]
            [touhou-barrage-fighters.data :as dt]
            [goog.fx.dom :as fxdom]
            [cljs.core.async :refer [<! >! timeout put!]])
  (:use-macros [dommy.macros :only [deftemplate node sel1]]
               [cljs.core.async.macros :only [go]]))

(deftemplate in-map [player]
  [:div#map.content
    [:div#map-list
      [:div#youkai-taiji "妖怪退治"]
      [:div#akai-koumu "紅い妖霧の謎"]]])

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
  
(deftemplate in-temple [player]
  [:div#wrapper.root
    [:div#sidebar
      [:div#temple.sidebar-banner "博霊神社"]
      [:div#customize.sidebar-banner "カスタマイズ"]
      [:div#rest.sidebar-banner "休憩所"]
      [:div#start.sidebar-banner "出発"]]
    [:div#temple-content.content.current {:name "temple-content"}
      [:div#info 
        [:p (str "id: " (:name player))]
        [:div#watch]]
      [:div#watch]
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

(defn battle
  [player enemys chan]
  (node 
    [:div#battle
      [:div#battle-info]
      [:div#battle-field]]))

(defn say!
  [chara genre]
  (set! (.-innerHTML (sel1 :#serihu))
     (rand-nth (genre (:words chara)))))

(defn switch-character!
  [target chara-or-key]
  (let [chara (if (keyword? chara-or-key)
                (get dt/characters chara-or-key)
                chara-or-key)]
    (set! (.. (sel1 target) -style -backgroundImage)
      (str "url(" (:img chara) ")"))
    target))

(defn switch-behave!
  [target bef-exp exp]
  (-> (sel1 target)
    (dommy/remove-class! bef-exp)
    (dommy/add-class! exp)))

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

(defn start-watch!
  []
  (let [watch (sel1 :#watch)]
    (go (while true
          (dommy/set-text! watch (. (js/Date.) toLocaleString))
          (<! (timeout 1000))))))
