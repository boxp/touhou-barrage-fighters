(defproject touhou-barrage-fighters "0.1.0-SNAPSHOT"
:description "A Tactics touhou SNS game."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [prismatic/dommy "0.1.1"]
                 [cljs-http "0.1.2"]]
  :plugins [[lein-cljsbuild "1.0.1"]]
  :cljsbuild {
    :builds [{
      ;ソースコードを配置するパス
      :source-paths ["src/touhou_barrage_fighters"]
      ;nodejsか標準を選択
      ;ClojureScriptコンパイラの基本オプション
      ;(ClojureScriptのドキュメントを良く見てね)
      :compiler {
        ;標準設定: target/cljsbuild-main.js
        :optimizations :simple
        :externs ["jslib/externs.js"]
        :pretty-print true}}]})
