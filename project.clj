(defproject touhou-barrage-fighters "0.1.0-SNAPSHOT"
:description "A Tactics touhou SNS game."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [prismatic/dommy "0.1.1"]
                 [ring/ring-jetty-adapter "1.1.6"]
                 [cljs-http "0.1.2"]]
  :plugins [[lein-cljsbuild "1.0.1"]]
  ;clj/cljsで共有するソースコードを設定
  :crossovers [touhou-barrage-fighters.data]
  :main touhou-barrage-fighters.core
  :source-paths ["src-clj"]
  :uberjar-name "touhou-barrage-fighters-standalone.jar"
  :min-lein-version "2.0.0"
  :cljsbuild {
    :builds [{
      ;clj/cljsで共有するソースコードのパスを設定
      :crossover-path "crossover-src"
      ;ソースコードを配置するパス
      :source-paths ["src-cljs"]
      ;nodejsか標準を選択
      ;ClojureScriptコンパイラの基本オプション
      ;(ClojureScriptのドキュメントを良く見てね)
      :compiler {
        ;標準設定: target/cljsbuild-main.js
        :optimizations :simple
        :externs ["jslib/externs.js"]
        :pretty-print true}}]})
