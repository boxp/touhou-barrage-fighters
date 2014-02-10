// Compiled by ClojureScript 0.0-2138
goog.provide('touhou_barrage_fighters.core');
goog.require('cljs.core');
goog.require('touhou_barrage_fighters.debug');
goog.require('touhou_barrage_fighters.data');
goog.require('touhou_barrage_fighters.ui');
goog.require('goog.net.cookies');
goog.require('goog.net.cookies');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('touhou_barrage_fighters.storage');
goog.require('touhou_barrage_fighters.storage');
goog.require('touhou_barrage_fighters.ui');
goog.require('touhou_barrage_fighters.debug');
goog.require('touhou_barrage_fighters.data');
touhou_barrage_fighters.core.tutorial_win = (function tutorial_win(){return dommy.core.replace_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("root"))[0]),touhou_barrage_fighters.ui.tutorial.call(null));
});
goog.exportSymbol('touhou_barrage_fighters.core.tutorial_win', touhou_barrage_fighters.core.tutorial_win);
touhou_barrage_fighters.core.in_temple_win = (function in_temple_win(){dommy.core.replace_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("root"))[0]),touhou_barrage_fighters.ui.in_temple.call(null,cljs.core.deref.call(null,touhou_barrage_fighters.data.player)));
touhou_barrage_fighters.ui.say_BANG_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"member","member",4231101964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,touhou_barrage_fighters.data.player))),new cljs.core.Keyword(null,"in-temple","in-temple",3345930599));
window.setInterval((function (){return touhou_barrage_fighters.ui.say_BANG_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"member","member",4231101964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,touhou_barrage_fighters.data.player))),new cljs.core.Keyword(null,"in-temple","in-temple",3345930599));
}),10000);
dommy.core.listen_BANG_.call(null,document.getElementById("tatie"),new cljs.core.Keyword(null,"click","click",1108654330),(function (){touhou_barrage_fighters.ui.behave_BANG_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"member","member",4231101964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,touhou_barrage_fighters.data.player))),new cljs.core.Keyword(null,"ikari","ikari",1114158440));
touhou_barrage_fighters.ui.say_BANG_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"member","member",4231101964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,touhou_barrage_fighters.data.player))),new cljs.core.Keyword(null,"selected","selected",2205476365));
return window.setTimeout((function (){return touhou_barrage_fighters.ui.behave_BANG_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"member","member",4231101964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,touhou_barrage_fighters.data.player))),new cljs.core.Keyword(null,"normal","normal",4269125721));
}),4000);
}));
return dommy.core.listen_BANG_.call(null,document.getElementById("start"),new cljs.core.Keyword(null,"click","click",1108654330),(function (){touhou_barrage_fighters.ui.close_shutter_BANG_.call(null);
return window.setTimeout(touhou_barrage_fighters.ui.open_shutter_BANG_,2000);
}));
});
goog.exportSymbol('touhou_barrage_fighters.core.in_temple_win', touhou_barrage_fighters.core.in_temple_win);
touhou_barrage_fighters.core.init_player = (function init_player(){var name = document.querySelector("input#player-name").value;var pass = document.querySelector("input#player-pass").value;var new_player = touhou_barrage_fighters.data.__GT_Player.call(null,name,pass,0,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reimu","reimu",1122298928).cljs$core$IFn$_invoke$arity$1(touhou_barrage_fighters.data.characters)], null),0);cljs.core.reset_BANG_.call(null,touhou_barrage_fighters.data.player,new_player);
touhou_barrage_fighters.storage.save.call(null,new_player);
return touhou_barrage_fighters.core.tutorial_win.call(null);
});
goog.exportSymbol('touhou_barrage_fighters.core.init_player', touhou_barrage_fighters.core.init_player);
touhou_barrage_fighters.core.main = (function main(){if(cljs.core.not_EQ_.call(null,"",document.cookie))
{touhou_barrage_fighters.storage.load.call(null);
return touhou_barrage_fighters.core.in_temple_win.call(null);
} else
{return dommy.core.replace_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("root"))[0]),touhou_barrage_fighters.ui.init_acount.call(null));
}
});
cljs.core._STAR_print_fn_STAR_ = (function (p1__6472_SHARP_){return console.log(p1__6472_SHARP_);
});
window.onload = touhou_barrage_fighters.core.main;
