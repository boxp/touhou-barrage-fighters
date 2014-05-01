(ns touhou-barrage-fighters.storage
  (:require [clojure.java.jdbc :as sql]
            [grimoire-cloud.oauth :as oauth]))

(def url (or (System/getenv "DATABASE_URL") "postgresql://localhost:5432/local"))

(defn init-user-table
  "データベースのテーブルを定義します"
  [url]
  (sql/db-do-commands url
    (sql/create-table-ddl :acounts [:id :text] [:pass :text] [:token :text] [:tokensecret :text])))

(defn save-acount!
  "アカウントをデータベースに登録"
  [url acount twitter]
  (let [access-token (oauth/twitter->access-token twitter)]
    (sql/insert! url
      :acounts {:id (:id acount)
                :pass (:pass acount)
                :token (:token access-token)
                :tokensecret (:secret access-token)})))

(defn load-acount
  "アカウントをデータベースからロード"
  [url]
  (sql/query url
    ["select * from acounts"]))

(defn delete-acount!
  "テーブルからアカウントを削除する"
  [url acount]
  (sql/db-do-commands url
    [(str "delete * from acounts where id='" 
          (:id acount) "'")]))
