(ns touhou-barrage-fighters.core
  (:require [ring.adapter.jetty :as jetty]
            [clojure.string :refer [split]])
  (:import (java.io FileInputStream))
  (:gen-class))

(defn slurp-content
  [accept url]
  (if (empty? (re-seq #"text" accept))
    (FileInputStream. url)
    (slurp url)))

(defn return-contents
  [req] 
  (let [headers (:headers req)
        url (if (= (:uri req) "/")
              "index.html"
              (str "." (:uri req)))
        accept (split (get headers "accept") #",")]
    (println (first accept) (slurp (:body req)) (:uri req))
    {:status 200
     :headers {"Content-Type" (first accept)}
     :body (slurp-content (first accept) url)}))

(defn run-index-jetty!
  [port]
    (jetty/run-jetty return-contents {:port port :join? false}))

(defn -main
  [& args]
  (let [port (Integer. (first args))]
    (run-index-jetty! port)))
