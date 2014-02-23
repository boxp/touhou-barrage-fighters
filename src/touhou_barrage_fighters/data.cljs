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
  {:magic-clothe (->Equipment "魔法使いの服" 0 2 "魔力を通しにくい素材で出来た特殊な服、夏は少し暑い。")
   :human-clothe (->Equipment "普通の服" 1 1 "幻想郷の呉服店にある安価な服、風通しの良い素材で出来ている。")})

; spell cards table
(def spells
  {:reigeki (->Spell "霊撃" 1 1 "使用者の周りに衝撃はを放つ、敵との間合いを使う時に役立つ。")
   :barrage-mini (->Spell "弾幕(小)" 2 2 "小さい弾を乱れ撃つ、当たると凄く痛い。")
   :barrage-mid (->Spell "弾幕(中)" 3 3 "丸い大きな弾を乱れ撃つ、見かけによらず当たるともの凄く痛い。")
   :barrage-big (->Spell "弾幕(大)" 5 5 "人がすっぽり埋まる大きさの弾を乱れ撃つ、慈悲はない。")
   :shanghai (->Spell "上海人形" 130 0 "二本の槍を手に持った人形を懐から取り出す、赤いリボンがチャームポイント。使用者の霊力が消えるまで留まり続ける。")})

; character main record
(defrecord Character [words hp p-attack m-attack p-defence m-defence job cards equipment level exp img])

; characters table
(def characters
  {:alice (->Character 
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
            10
            2
            4
            2
            4
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
            {:normal "img/chara/alice/normal.png"
             :wink "img/chara/alice/wink.png"
             :akire "img/chara/alice/akire.png"
             :odoroki "img/chara/alice/odoroki.png"
             :naki "img/chara/alice/naki.png"
             :ikari "img/chara/alice/ikari.png"
             :warai "img/chara/alice/warai.png"})
   :reimu (->Character
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
              10
              3
              3
              3
              3
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
              {:normal "img/chara/reimu/normal.png"
               :kane "img/chara/reimu/kane.png"
               :akire "img/chara/reimu/akire.png"
               :odoroki "img/chara/reimu/odoroki.png"
               :naki "img/chara/reimu/naki.png"
               :ikari "img/chara/reimu/ikari.png"
               :egao "img/chara/reimu/egao.png"})})
