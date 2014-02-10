// Compiled by ClojureScript 0.0-2138
goog.provide('touhou_barrage_fighters.ui');
goog.require('cljs.core');
goog.require('goog.fx.dom');
goog.require('goog.fx.dom');
goog.require('dommy.core');
goog.require('dommy.core');
touhou_barrage_fighters.ui.init_acount = (function init_acount(){var dom6418 = document.createElement("div");dom6418.className = "root";
dom6418.setAttribute("id","form-wrapper");
dom6418.appendChild((function (){var dom6419 = document.createElement("div");dom6419.setAttribute("id","form");
dom6419.appendChild((function (){var dom6420 = document.createElement("p");dom6420.setAttribute("id","name-lbl");
dom6420.appendChild(document.createTextNode("\u30D7\u30EC\u30A4\u30E4\u30FC\u540D:"));
return dom6420;
})());
dom6419.appendChild((function (){var dom6421 = document.createElement("input");dom6421.setAttribute("id","player-name");
return dom6421;
})());
dom6419.appendChild((function (){var dom6422 = document.createElement("p");dom6422.setAttribute("id","pass-lbl");
dom6422.appendChild(document.createTextNode("\u30D1\u30B9\u30EF\u30FC\u30C9:"));
return dom6422;
})());
dom6419.appendChild((function (){var dom6423 = document.createElement("input");dom6423.setAttribute("id","player-pass");
return dom6423;
})());
dom6419.appendChild((function (){var dom6424 = document.createElement("input");dom6424.setAttribute("id","game-start");
if("button")
{dom6424.setAttribute("type","button");
} else
{}
if("\u30B9\u30BF\u30FC\u30C8")
{dom6424.setAttribute("value","\u30B9\u30BF\u30FC\u30C8");
} else
{}
if("touhou_barrage_fighters.core.init_player();")
{dom6424.setAttribute("onClick","touhou_barrage_fighters.core.init_player();");
} else
{}
return dom6424;
})());
return dom6419;
})());
return dom6418;
});
touhou_barrage_fighters.ui.in_temple = (function in_temple(player){var dom6438 = document.createElement("div");dom6438.className = "root";
dom6438.setAttribute("id","wrapper");
dom6438.appendChild((function (){var dom6439 = document.createElement("div");dom6439.setAttribute("id","sidebar");
dom6439.appendChild((function (){var dom6440 = document.createElement("div");dom6440.className = "sidebar-banner";
dom6440.setAttribute("id","temple");
dom6440.appendChild(document.createTextNode("\u535A\u970A\u795E\u793E"));
return dom6440;
})());
dom6439.appendChild((function (){var dom6441 = document.createElement("div");dom6441.className = "sidebar-banner";
dom6441.setAttribute("id","customize");
dom6441.appendChild(document.createTextNode("\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA"));
return dom6441;
})());
dom6439.appendChild((function (){var dom6442 = document.createElement("div");dom6442.className = "sidebar-banner";
dom6442.setAttribute("id","rest");
dom6442.appendChild(document.createTextNode("\u4F11\u61A9\u6240"));
return dom6442;
})());
dom6439.appendChild((function (){var dom6443 = document.createElement("div");dom6443.className = "sidebar-banner";
dom6443.setAttribute("id","start");
dom6443.appendChild(document.createTextNode("\u51FA\u767A"));
return dom6443;
})());
return dom6439;
})());
dom6438.appendChild((function (){var dom6444 = document.createElement("div");dom6444.setAttribute("id","content");
dom6444.appendChild((function (){var dom6445 = document.createElement("div");dom6445.setAttribute("id","info");
dom6445.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("id: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(player))].join('')));
return dom6445;
})());
dom6444.appendChild((function (){var dom6446 = document.createElement("div");dom6446.setAttribute("id","character");
dom6446.appendChild((function (){var dom6447 = document.createElement("img");dom6447.setAttribute("id","tatie");
if(cljs.core.truth_(new cljs.core.Keyword(null,"normal","normal",4269125721).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"member","member",4231101964).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(player))))))
{dom6447.setAttribute("src",new cljs.core.Keyword(null,"normal","normal",4269125721).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"member","member",4231101964).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(player)))));
} else
{}
return dom6447;
})());
dom6446.appendChild((function (){var dom6448 = document.createElement("div");dom6448.setAttribute("id","serihu-wrapper");
dom6448.appendChild((function (){var dom6449 = document.createElement("img");dom6449.setAttribute("id","hukidasi");
if("img/chara/hukidasi.png")
{dom6449.setAttribute("src","img/chara/hukidasi.png");
} else
{}
return dom6449;
})());
dom6448.appendChild((function (){var dom6450 = document.createElement("div");dom6450.setAttribute("id","serihu");
return dom6450;
})());
return dom6448;
})());
return dom6446;
})());
return dom6444;
})());
return dom6438;
});
touhou_barrage_fighters.ui.tutorial = (function tutorial(){var dom6459 = document.createElement("div");dom6459.className = "root";
dom6459.setAttribute("id","tutorial-wrapper");
dom6459.appendChild((function (){var dom6460 = document.createElement("div");dom6460.setAttribute("id","message-wrapper");
dom6460.appendChild((function (){var dom6461 = document.createElement("div");dom6461.setAttribute("id","tutorial-lbl");
dom6461.appendChild(document.createTextNode("\u3042\u3089\u3059\u3058"));
return dom6461;
})());
dom6460.appendChild((function (){var dom6462 = document.createElement("div");dom6462.setAttribute("id","message");
dom6462.appendChild(document.createTextNode("\u5E7B\u60F3\u90F7\u306E\u4E16\u754C\u3078\u3088\u3046\u3053\u305D\uFF01"));
dom6462.appendChild((function (){var dom6463 = document.createElement("br");return dom6463;
})());
dom6462.appendChild(document.createTextNode("\u5996\u602A\u304C\u591A\u304F\u4F4F\u3080\u3053\u306E\u4E16\u754C\u3067\u306F\u3001\u6BCE\u65E5\u6BCE\u65E5\u7F6A\u306E\u306A\u3044\u4EBA\u9593\u9054\u304C\u8972\u308F\u308B\u4E8B\u4EF6\u304C\u7D76\u3048\u307E\u305B\u3093\u3002"));
dom6462.appendChild((function (){var dom6464 = document.createElement("br");return dom6464;
})());
dom6462.appendChild(document.createTextNode("\u3053\u306E\u307E\u307E\u3067\u306F\u4EBA\u9593\u306E\u91CC\u306F\u58CA\u6EC5\u3001\u4EBA\u985E\u306F\u6EC5\u3073\u3066\u3057\u307E\u3044\u307E\u3059\u3002"));
dom6462.appendChild((function (){var dom6465 = document.createElement("br");return dom6465;
})());
dom6462.appendChild(document.createTextNode("\u4EBA\u985E\u304C\u6EC5\u3073\u306A\u3044\u70BA\u306B\u3082\u3001 \u795E\u793E\u3067\u6C17\u6301\u3061\u3088\u3055\u305D\u3046\u306B\u5BDD\u3066\u3044\u308B\u5DEB\u5973\u3092\u53E9\u304D\u8D77\u3053\u3057\u3001\u5171\u306B\u5996\u602A\u9000\u6CBB\u306E\u65C5\u306B\u51FA\u304B\u3051\u307E\u3057\u3087\u3046\uFF01"));
return dom6462;
})());
dom6460.appendChild((function (){var dom6466 = document.createElement("input");dom6466.setAttribute("id","pos-button");
if("button")
{dom6466.setAttribute("type","button");
} else
{}
if("OK")
{dom6466.setAttribute("value","OK");
} else
{}
if("touhou_barrage_fighters.core.in_temple_win();")
{dom6466.setAttribute("onClick","touhou_barrage_fighters.core.in_temple_win();");
} else
{}
return dom6466;
})());
return dom6460;
})());
return dom6459;
});
touhou_barrage_fighters.ui.say_BANG_ = (function say_BANG_(chara,genre){return document.getElementById("serihu").innerHTML = cljs.core.rand_nth.call(null,genre.call(null,new cljs.core.Keyword(null,"words","words",1127222811).cljs$core$IFn$_invoke$arity$1(chara)));
});
touhou_barrage_fighters.ui.behave_BANG_ = (function behave_BANG_(chara,exp){return document.getElementById("tatie").src = exp.call(null,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(chara));
});
touhou_barrage_fighters.ui.close_shutter_BANG_ = (function close_shutter_BANG_(){var shutter = document.getElementById("shutter");var max_height = document.body.clientHeight;var resizer = (new goog.fx.dom.ResizeHeight(shutter,0,max_height,1000));return resizer.play();
});
touhou_barrage_fighters.ui.open_shutter_BANG_ = (function open_shutter_BANG_(){var shutter = document.getElementById("shutter");var max_height = document.body.clientHeight;var resizer = (new goog.fx.dom.ResizeHeight(shutter,max_height,0,1000));return resizer.play();
});
