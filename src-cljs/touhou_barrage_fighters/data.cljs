(ns touhou-barrage-fighters.data)

; player record
(defrecord Player [name pass lv cards member main])

; word record
(defrecord Word [get in-temple attack damage selected])

; equipment record
(defrecord Equipment [name p-defence m-attack doc])

; spell card record
(defrecord Spell [name p-attack m-attack doc])

; equipments table
(def equipments
  {:magic-clothe (->Equipment "魔法使いの服" 0 20 "魔力を通しにくい素材で出来た特殊な服、夏は少し暑い。")
   :human-clothe (->Equipment "普通の服" 10 10 "幻想郷の呉服店にある安価な服、風通しの良い素材で出来ている。")
   :fairy-clothe (->Equipment "妖精の服" 10 10 "妖精が元々身に着けている服、何故プレイヤーが持っているのだろう…")})

; spell cards table
(def spells
  {:reigeki (->Spell "霊撃" 1 1 "使用者の周りに衝撃はを放つ、敵との間合いを使う時に役立つ。")
   :barrage-mini (->Spell "弾幕(小)" 2 2 "小さい弾を乱れ撃つ、当たると凄く痛い。")
   :barrage-mid (->Spell "弾幕(中)" 3 3 "丸い大きな弾を乱れ撃つ、見かけによらず当たるともの凄く痛い。")
   :barrage-big (->Spell "弾幕(大)" 5 5 "人がすっぽり埋まる大きさの弾を乱れ撃つ、慈悲はない。")
   :shanghai (->Spell "上海人形" 130 0 "二本の槍を手に持った人形を懐から取り出す、赤いリボンがチャームポイント。使用者の霊力が消えるまで留まり続ける。")})

; character main record
(defrecord Character [name words hp p-attack m-attack p-defence m-defence job cards equipment level exp img])

; characters table
(def characters
  {:alice (->Character 
            "アリス・マーガトロイド"
            (->Word 
              ["森の人形遣いアリス・マーガトロイドよ、よろしくね。"]
              ["紅茶は好きだけど、コーヒーもまた良い物ね。"
               "これは何かしら…キノコ茶？魔理沙のお土産なの？ちょ、ちょっとだけいただこうかしら"
               "人形のお手入れも楽じゃないわよ、あなたも少し手伝ってちょうだい？"]
              ["甘いわね"
               "弾幕はブレイン、常識よ"
               "ごめんなさい、先を急いでいるの"]
              ["楽しくなって来たじゃない"
               "痛いわ…"]
              ["何か用かしら？"
               "人の事じろじろ見て、どういうつもり？"
               "刺すわよ"])
            100
            20
            40
            20
            40
            :witch
            [:reigeki 
             :reigeki
             :barrage-mini
             :barrage-mini
             :barrage-mid
             :barrage-mid
             :barrage-big
             :barrage-big
             :shanghai]
            :magic-clothe
            0
            0
            "img/chara/alice.png")
   :reimu (->Character
            "博霊 霊夢"
            (->Word
              ["博麗神社の巫女、博麗霊夢よ。まぁよろしくね。"]
              ["お茶を入れてくれるの？気が利くわね、ありがとう。"
               "巫女に見えないって？そんな事どうでもいいじゃないの"
               "こんなに天気が良いっていうのに参拝客の一人も居ないわね、アンタ、暇ならちょっと勧誘して来なさいよ"]
              ["いい加減にしなさい！"
               "倒れなさい！"
               "これで終わりね"]
              ["痛いわね！"
               "許さないわよ！"
               "お灸が必要ね！"]
              ["呼んだかしら？"
               "何？しつこいわね"
               "…退治が必要なようね"])
              100
              30
              30
              30
              30
              :human
              [:reigeki
               :reigeki
               :barrage-mini
               :barrage-mini
               :barrage-mid
               :barrage-mid
               :barrage-big
               :barrage-big
               :shanghai]
              :human-clothe
              0
              0
              "img/chara/reimu.png")
   :yousei1 (->Character
              "妖精A"
              (->Word
                ["これからよろしくね！"]
                ["まっくの〜うち〜まっくの〜うち〜♪"
                 "神社ってちょっと退屈するわ〜"
                 "みんなどこに行ったのかな"]
                ["えい！"
                 "負けないよ！"
                 "やらないとやられるわ…"]
                ["げぇっ！"
                 "痛い痛い！"
                 "やったなぁ〜"]
                ["なぁに？"])
              50
              10
              10
              10
              10
              :fairy
              [:barrage-mini
               :barrage-mini
               :barrage-mini
               :barrage-mini
               :barrage-mid
               :barrage-mid]
              :fairy-clothe
              0
              0
              "img/chara/yousei1.png")
   :yousei2 (->Character
              "妖精B"
              (->Word
                ["よろしくね〜!"]
                ["まっくの〜うち〜まっくの〜うち〜♪"
                 "神社ってちょっと退屈するわ〜"
                 "みんなどこに行ったのかな"]
                ["えい！"
                 "負けないよ！"
                 "やらないとやられるわ…"]
                ["げぇっ！"
                 "痛い痛い！"
                 "やったなぁ〜"]
                ["なぁに？"])
              50
              10
              10
              10
              10
              :fairy
              [:barrage-mini
               :barrage-mini
               :barrage-mini
               :barrage-mini
               :barrage-mid
               :barrage-mid]
              :fairy-clothe
              0
              0
              "img/chara/yousei2.png")
   :yousei3 (->Character
              "妖精C"
              (->Word
                ["よろしくね〜!"]
                ["まっくの〜うち〜まっくの〜うち〜♪"
                 "神社ってちょっと退屈するわ〜"
                 "みんなどこに行ったのかな"]
                ["えい！"
                 "負けないよ！"
                 "やらないとやられるわ…"]
                ["げぇっ！"
                 "痛い痛い！"
                 "やったなぁ〜"]
                ["なぁに？"])
              50
              10
              10
              10
              10
              :fairy
              [:barrage-mini
               :barrage-mini
               :barrage-mini
               :barrage-mini
               :barrage-mid
               :barrage-mid]
              :fairy-clothe
              0
              0
              "img/chara/yousei3.png")})

;;;;;;;;;;;; This file autogenerated from src-cljx/touhou_barrage_fighters/data.cljx
