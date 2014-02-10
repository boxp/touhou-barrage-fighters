// Compiled by ClojureScript 0.0-2138
goog.provide('touhou_barrage_fighters.data');
goog.require('cljs.core');
touhou_barrage_fighters.data.player = cljs.core.atom.call(null,null);

/**
* @constructor
* @param {*} name
* @param {*} pass
* @param {*} lv
* @param {*} cards
* @param {*} member
* @param {*} main
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
touhou_barrage_fighters.data.Player = (function (name,pass,lv,cards,member,main,__meta,__extmap){
this.name = name;
this.pass = pass;
this.lv = lv;
this.cards = cards;
this.member = member;
this.main = main;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
touhou_barrage_fighters.data.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap.call(null,this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.call(null,this__3988__auto____$1,k__3989__auto__,null);
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k5809,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k5809,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5809,new cljs.core.Keyword(null,"pass","pass",1017337731)))
{return self__.pass;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5809,new cljs.core.Keyword(null,"lv","lv",1013907708)))
{return self__.lv;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5809,new cljs.core.Keyword(null,"cards","cards",1108335317)))
{return self__.cards;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5809,new cljs.core.Keyword(null,"member","member",4231101964)))
{return self__.member;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5809,new cljs.core.Keyword(null,"main","main",1017248043)))
{return self__.main;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k5809,else__3991__auto__);
} else
{return null;
}
}
}
}
}
}
}
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__5808){var self__ = this;
var this__3995__auto____$1 = this;var pred__5811 = cljs.core.keyword_identical_QMARK_;var expr__5812 = k__3996__auto__;if(cljs.core.truth_(pred__5811.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__5812)))
{return (new touhou_barrage_fighters.data.Player(G__5808,self__.pass,self__.lv,self__.cards,self__.member,self__.main,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5811.call(null,new cljs.core.Keyword(null,"pass","pass",1017337731),expr__5812)))
{return (new touhou_barrage_fighters.data.Player(self__.name,G__5808,self__.lv,self__.cards,self__.member,self__.main,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5811.call(null,new cljs.core.Keyword(null,"lv","lv",1013907708),expr__5812)))
{return (new touhou_barrage_fighters.data.Player(self__.name,self__.pass,G__5808,self__.cards,self__.member,self__.main,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5811.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),expr__5812)))
{return (new touhou_barrage_fighters.data.Player(self__.name,self__.pass,self__.lv,G__5808,self__.member,self__.main,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5811.call(null,new cljs.core.Keyword(null,"member","member",4231101964),expr__5812)))
{return (new touhou_barrage_fighters.data.Player(self__.name,self__.pass,self__.lv,self__.cards,G__5808,self__.main,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5811.call(null,new cljs.core.Keyword(null,"main","main",1017248043),expr__5812)))
{return (new touhou_barrage_fighters.data.Player(self__.name,self__.pass,self__.lv,self__.cards,self__.member,G__5808,self__.__meta,self__.__extmap,null));
} else
{return (new touhou_barrage_fighters.data.Player(self__.name,self__.pass,self__.lv,self__.cards,self__.member,self__.main,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3996__auto__,G__5808),null));
}
}
}
}
}
}
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,pr_pair__4005__auto__,"#touhou-barrage-fighters.data.Player{",", ","}",opts__4004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pass","pass",1017337731),self__.pass],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lv","lv",1013907708),self__.lv],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cards","cards",1108335317),self__.cards],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"member","member",4231101964),self__.member],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"main","main",1017248043),self__.main],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3994__auto__))
{return cljs.core._assoc.call(null,this__3993__auto____$1,cljs.core._nth.call(null,entry__3994__auto__,0),cljs.core._nth.call(null,entry__3994__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pass","pass",1017337731),self__.pass],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lv","lv",1013907708),self__.lv],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cards","cards",1108335317),self__.cards],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"member","member",4231101964),self__.member],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"main","main",1017248043),self__.main],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__5808){var self__ = this;
var this__3987__auto____$1 = this;return (new touhou_barrage_fighters.data.Player(self__.name,self__.pass,self__.lv,self__.cards,self__.member,self__.main,G__5808,self__.__extmap,self__.__hash));
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
touhou_barrage_fighters.data.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pass","pass",1017337731),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"lv","lv",1013907708),null,new cljs.core.Keyword(null,"cards","cards",1108335317),null,new cljs.core.Keyword(null,"main","main",1017248043),null,new cljs.core.Keyword(null,"member","member",4231101964),null], null), null),k__3998__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new touhou_barrage_fighters.data.Player(self__.name,self__.pass,self__.lv,self__.cards,self__.member,self__.main,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3998__auto__)),null));
}
});
touhou_barrage_fighters.data.Player.cljs$lang$type = true;
touhou_barrage_fighters.data.Player.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"touhou-barrage-fighters.data/Player");
});
touhou_barrage_fighters.data.Player.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write.call(null,writer__4023__auto__,"touhou-barrage-fighters.data/Player");
});
touhou_barrage_fighters.data.__GT_Player = (function __GT_Player(name,pass,lv,cards,member,main){return (new touhou_barrage_fighters.data.Player(name,pass,lv,cards,member,main));
});
touhou_barrage_fighters.data.map__GT_Player = (function map__GT_Player(G__5810){return (new touhou_barrage_fighters.data.Player(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__5810),new cljs.core.Keyword(null,"pass","pass",1017337731).cljs$core$IFn$_invoke$arity$1(G__5810),new cljs.core.Keyword(null,"lv","lv",1013907708).cljs$core$IFn$_invoke$arity$1(G__5810),new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(G__5810),new cljs.core.Keyword(null,"member","member",4231101964).cljs$core$IFn$_invoke$arity$1(G__5810),new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(G__5810),null,cljs.core.dissoc.call(null,G__5810,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"lv","lv",1013907708),new cljs.core.Keyword(null,"cards","cards",1108335317),new cljs.core.Keyword(null,"member","member",4231101964),new cljs.core.Keyword(null,"main","main",1017248043))));
});

/**
* @constructor
* @param {*} get
* @param {*} in_temple
* @param {*} attack
* @param {*} damage
* @param {*} selected
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
touhou_barrage_fighters.data.Word = (function (get,in_temple,attack,damage,selected,__meta,__extmap){
this.get = get;
this.in_temple = in_temple;
this.attack = attack;
this.damage = damage;
this.selected = selected;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
touhou_barrage_fighters.data.Word.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap.call(null,this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.call(null,this__3988__auto____$1,k__3989__auto__,null);
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k5815,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k5815,new cljs.core.Keyword(null,"get","get",1014006472)))
{return self__.get;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5815,new cljs.core.Keyword(null,"in-temple","in-temple",3345930599)))
{return self__.in_temple;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5815,new cljs.core.Keyword(null,"attack","attack",3901612474)))
{return self__.attack;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5815,new cljs.core.Keyword(null,"damage","damage",3969744609)))
{return self__.damage;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5815,new cljs.core.Keyword(null,"selected","selected",2205476365)))
{return self__.selected;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k5815,else__3991__auto__);
} else
{return null;
}
}
}
}
}
}
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__5814){var self__ = this;
var this__3995__auto____$1 = this;var pred__5817 = cljs.core.keyword_identical_QMARK_;var expr__5818 = k__3996__auto__;if(cljs.core.truth_(pred__5817.call(null,new cljs.core.Keyword(null,"get","get",1014006472),expr__5818)))
{return (new touhou_barrage_fighters.data.Word(G__5814,self__.in_temple,self__.attack,self__.damage,self__.selected,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5817.call(null,new cljs.core.Keyword(null,"in-temple","in-temple",3345930599),expr__5818)))
{return (new touhou_barrage_fighters.data.Word(self__.get,G__5814,self__.attack,self__.damage,self__.selected,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5817.call(null,new cljs.core.Keyword(null,"attack","attack",3901612474),expr__5818)))
{return (new touhou_barrage_fighters.data.Word(self__.get,self__.in_temple,G__5814,self__.damage,self__.selected,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5817.call(null,new cljs.core.Keyword(null,"damage","damage",3969744609),expr__5818)))
{return (new touhou_barrage_fighters.data.Word(self__.get,self__.in_temple,self__.attack,G__5814,self__.selected,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5817.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),expr__5818)))
{return (new touhou_barrage_fighters.data.Word(self__.get,self__.in_temple,self__.attack,self__.damage,G__5814,self__.__meta,self__.__extmap,null));
} else
{return (new touhou_barrage_fighters.data.Word(self__.get,self__.in_temple,self__.attack,self__.damage,self__.selected,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3996__auto__,G__5814),null));
}
}
}
}
}
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,pr_pair__4005__auto__,"#touhou-barrage-fighters.data.Word{",", ","}",opts__4004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"get","get",1014006472),self__.get],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in-temple","in-temple",3345930599),self__.in_temple],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attack","attack",3901612474),self__.attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"damage","damage",3969744609),self__.damage],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected","selected",2205476365),self__.selected],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3994__auto__))
{return cljs.core._assoc.call(null,this__3993__auto____$1,cljs.core._nth.call(null,entry__3994__auto__,0),cljs.core._nth.call(null,entry__3994__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"get","get",1014006472),self__.get],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in-temple","in-temple",3345930599),self__.in_temple],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attack","attack",3901612474),self__.attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"damage","damage",3969744609),self__.damage],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected","selected",2205476365),self__.selected],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__5814){var self__ = this;
var this__3987__auto____$1 = this;return (new touhou_barrage_fighters.data.Word(self__.get,self__.in_temple,self__.attack,self__.damage,self__.selected,G__5814,self__.__extmap,self__.__hash));
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
touhou_barrage_fighters.data.Word.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"damage","damage",3969744609),null,new cljs.core.Keyword(null,"attack","attack",3901612474),null,new cljs.core.Keyword(null,"in-temple","in-temple",3345930599),null,new cljs.core.Keyword(null,"selected","selected",2205476365),null], null), null),k__3998__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new touhou_barrage_fighters.data.Word(self__.get,self__.in_temple,self__.attack,self__.damage,self__.selected,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3998__auto__)),null));
}
});
touhou_barrage_fighters.data.Word.cljs$lang$type = true;
touhou_barrage_fighters.data.Word.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"touhou-barrage-fighters.data/Word");
});
touhou_barrage_fighters.data.Word.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write.call(null,writer__4023__auto__,"touhou-barrage-fighters.data/Word");
});
touhou_barrage_fighters.data.__GT_Word = (function __GT_Word(get,in_temple,attack,damage,selected){return (new touhou_barrage_fighters.data.Word(get,in_temple,attack,damage,selected));
});
touhou_barrage_fighters.data.map__GT_Word = (function map__GT_Word(G__5816){return (new touhou_barrage_fighters.data.Word(new cljs.core.Keyword(null,"get","get",1014006472).cljs$core$IFn$_invoke$arity$1(G__5816),new cljs.core.Keyword(null,"in-temple","in-temple",3345930599).cljs$core$IFn$_invoke$arity$1(G__5816),new cljs.core.Keyword(null,"attack","attack",3901612474).cljs$core$IFn$_invoke$arity$1(G__5816),new cljs.core.Keyword(null,"damage","damage",3969744609).cljs$core$IFn$_invoke$arity$1(G__5816),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(G__5816),null,cljs.core.dissoc.call(null,G__5816,new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"in-temple","in-temple",3345930599),new cljs.core.Keyword(null,"attack","attack",3901612474),new cljs.core.Keyword(null,"damage","damage",3969744609),new cljs.core.Keyword(null,"selected","selected",2205476365))));
});

/**
* @constructor
* @param {*} name
* @param {*} p_defence
* @param {*} m_attack
* @param {*} doc
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
touhou_barrage_fighters.data.Equipment = (function (name,p_defence,m_attack,doc,__meta,__extmap){
this.name = name;
this.p_defence = p_defence;
this.m_attack = m_attack;
this.doc = doc;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap.call(null,this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.call(null,this__3988__auto____$1,k__3989__auto__,null);
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k5821,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k5821,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5821,new cljs.core.Keyword(null,"p-defence","p-defence",3104437093)))
{return self__.p_defence;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5821,new cljs.core.Keyword(null,"m-attack","m-attack",1877370650)))
{return self__.m_attack;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5821,new cljs.core.Keyword(null,"doc","doc",1014003882)))
{return self__.doc;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k5821,else__3991__auto__);
} else
{return null;
}
}
}
}
}
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__5820){var self__ = this;
var this__3995__auto____$1 = this;var pred__5823 = cljs.core.keyword_identical_QMARK_;var expr__5824 = k__3996__auto__;if(cljs.core.truth_(pred__5823.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__5824)))
{return (new touhou_barrage_fighters.data.Equipment(G__5820,self__.p_defence,self__.m_attack,self__.doc,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5823.call(null,new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),expr__5824)))
{return (new touhou_barrage_fighters.data.Equipment(self__.name,G__5820,self__.m_attack,self__.doc,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5823.call(null,new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),expr__5824)))
{return (new touhou_barrage_fighters.data.Equipment(self__.name,self__.p_defence,G__5820,self__.doc,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5823.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882),expr__5824)))
{return (new touhou_barrage_fighters.data.Equipment(self__.name,self__.p_defence,self__.m_attack,G__5820,self__.__meta,self__.__extmap,null));
} else
{return (new touhou_barrage_fighters.data.Equipment(self__.name,self__.p_defence,self__.m_attack,self__.doc,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3996__auto__,G__5820),null));
}
}
}
}
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,pr_pair__4005__auto__,"#touhou-barrage-fighters.data.Equipment{",", ","}",opts__4004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),self__.p_defence],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),self__.m_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1014003882),self__.doc],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3994__auto__))
{return cljs.core._assoc.call(null,this__3993__auto____$1,cljs.core._nth.call(null,entry__3994__auto__,0),cljs.core._nth.call(null,entry__3994__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),self__.p_defence],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),self__.m_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1014003882),self__.doc],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__5820){var self__ = this;
var this__3987__auto____$1 = this;return (new touhou_barrage_fighters.data.Equipment(self__.name,self__.p_defence,self__.m_attack,self__.doc,G__5820,self__.__extmap,self__.__hash));
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
touhou_barrage_fighters.data.Equipment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"doc","doc",1014003882),null,new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),null], null), null),k__3998__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new touhou_barrage_fighters.data.Equipment(self__.name,self__.p_defence,self__.m_attack,self__.doc,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3998__auto__)),null));
}
});
touhou_barrage_fighters.data.Equipment.cljs$lang$type = true;
touhou_barrage_fighters.data.Equipment.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"touhou-barrage-fighters.data/Equipment");
});
touhou_barrage_fighters.data.Equipment.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write.call(null,writer__4023__auto__,"touhou-barrage-fighters.data/Equipment");
});
touhou_barrage_fighters.data.__GT_Equipment = (function __GT_Equipment(name,p_defence,m_attack,doc){return (new touhou_barrage_fighters.data.Equipment(name,p_defence,m_attack,doc));
});
touhou_barrage_fighters.data.map__GT_Equipment = (function map__GT_Equipment(G__5822){return (new touhou_barrage_fighters.data.Equipment(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__5822),new cljs.core.Keyword(null,"p-defence","p-defence",3104437093).cljs$core$IFn$_invoke$arity$1(G__5822),new cljs.core.Keyword(null,"m-attack","m-attack",1877370650).cljs$core$IFn$_invoke$arity$1(G__5822),new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(G__5822),null,cljs.core.dissoc.call(null,G__5822,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),new cljs.core.Keyword(null,"doc","doc",1014003882))));
});

/**
* @constructor
* @param {*} name
* @param {*} p_attack
* @param {*} m_attack
* @param {*} doc
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
touhou_barrage_fighters.data.Spell = (function (name,p_attack,m_attack,doc,__meta,__extmap){
this.name = name;
this.p_attack = p_attack;
this.m_attack = m_attack;
this.doc = doc;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
touhou_barrage_fighters.data.Spell.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap.call(null,this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.call(null,this__3988__auto____$1,k__3989__auto__,null);
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k5827,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k5827,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5827,new cljs.core.Keyword(null,"p-attack","p-attack",2810834359)))
{return self__.p_attack;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5827,new cljs.core.Keyword(null,"m-attack","m-attack",1877370650)))
{return self__.m_attack;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5827,new cljs.core.Keyword(null,"doc","doc",1014003882)))
{return self__.doc;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k5827,else__3991__auto__);
} else
{return null;
}
}
}
}
}
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__5826){var self__ = this;
var this__3995__auto____$1 = this;var pred__5829 = cljs.core.keyword_identical_QMARK_;var expr__5830 = k__3996__auto__;if(cljs.core.truth_(pred__5829.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__5830)))
{return (new touhou_barrage_fighters.data.Spell(G__5826,self__.p_attack,self__.m_attack,self__.doc,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5829.call(null,new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),expr__5830)))
{return (new touhou_barrage_fighters.data.Spell(self__.name,G__5826,self__.m_attack,self__.doc,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5829.call(null,new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),expr__5830)))
{return (new touhou_barrage_fighters.data.Spell(self__.name,self__.p_attack,G__5826,self__.doc,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5829.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882),expr__5830)))
{return (new touhou_barrage_fighters.data.Spell(self__.name,self__.p_attack,self__.m_attack,G__5826,self__.__meta,self__.__extmap,null));
} else
{return (new touhou_barrage_fighters.data.Spell(self__.name,self__.p_attack,self__.m_attack,self__.doc,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3996__auto__,G__5826),null));
}
}
}
}
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,pr_pair__4005__auto__,"#touhou-barrage-fighters.data.Spell{",", ","}",opts__4004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),self__.p_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),self__.m_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1014003882),self__.doc],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3994__auto__))
{return cljs.core._assoc.call(null,this__3993__auto____$1,cljs.core._nth.call(null,entry__3994__auto__,0),cljs.core._nth.call(null,entry__3994__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),self__.p_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),self__.m_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1014003882),self__.doc],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__5826){var self__ = this;
var this__3987__auto____$1 = this;return (new touhou_barrage_fighters.data.Spell(self__.name,self__.p_attack,self__.m_attack,self__.doc,G__5826,self__.__extmap,self__.__hash));
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
touhou_barrage_fighters.data.Spell.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),null,new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"doc","doc",1014003882),null], null), null),k__3998__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new touhou_barrage_fighters.data.Spell(self__.name,self__.p_attack,self__.m_attack,self__.doc,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3998__auto__)),null));
}
});
touhou_barrage_fighters.data.Spell.cljs$lang$type = true;
touhou_barrage_fighters.data.Spell.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"touhou-barrage-fighters.data/Spell");
});
touhou_barrage_fighters.data.Spell.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write.call(null,writer__4023__auto__,"touhou-barrage-fighters.data/Spell");
});
touhou_barrage_fighters.data.__GT_Spell = (function __GT_Spell(name,p_attack,m_attack,doc){return (new touhou_barrage_fighters.data.Spell(name,p_attack,m_attack,doc));
});
touhou_barrage_fighters.data.map__GT_Spell = (function map__GT_Spell(G__5828){return (new touhou_barrage_fighters.data.Spell(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__5828),new cljs.core.Keyword(null,"p-attack","p-attack",2810834359).cljs$core$IFn$_invoke$arity$1(G__5828),new cljs.core.Keyword(null,"m-attack","m-attack",1877370650).cljs$core$IFn$_invoke$arity$1(G__5828),new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(G__5828),null,cljs.core.dissoc.call(null,G__5828,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),new cljs.core.Keyword(null,"doc","doc",1014003882))));
});
touhou_barrage_fighters.data.equipments = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"magic-clothe","magic-clothe",788188445),touhou_barrage_fighters.data.__GT_Equipment.call(null,"\u9B54\u6CD5\u4F7F\u3044\u306E\u670D",10,30,"\u9B54\u529B\u3092\u901A\u3057\u306B\u304F\u3044\u7D20\u6750\u3067\u51FA\u6765\u305F\u7279\u6B8A\u306A\u670D\u3001\u590F\u306F\u5C11\u3057\u6691\u3044\u3002"),new cljs.core.Keyword(null,"human-clothe","human-clothe",950183325),touhou_barrage_fighters.data.__GT_Equipment.call(null,"\u666E\u901A\u306E\u670D",10,10,"\u5E7B\u60F3\u90F7\u306E\u5449\u670D\u5E97\u306B\u3042\u308B\u5B89\u4FA1\u306A\u670D\u3001\u98A8\u901A\u3057\u306E\u826F\u3044\u7D20\u6750\u3067\u51FA\u6765\u3066\u3044\u308B\u3002")], null);
touhou_barrage_fighters.data.spells = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reigeki","reigeki",2101791684),touhou_barrage_fighters.data.__GT_Spell.call(null,"\u970A\u6483",10,10,"\u4F7F\u7528\u8005\u306E\u5468\u308A\u306B\u885D\u6483\u306F\u3092\u653E\u3064\u3001\u6575\u3068\u306E\u9593\u5408\u3044\u3092\u4F7F\u3046\u6642\u306B\u5F79\u7ACB\u3064\u3002"),new cljs.core.Keyword(null,"barrage-mini","barrage-mini",3158335382),touhou_barrage_fighters.data.__GT_Spell.call(null,"\u5F3E\u5E55(\u5C0F)",30,30,"\u5C0F\u3055\u3044\u5F3E\u3092\u4E71\u308C\u6483\u3064\u3001\u5F53\u305F\u308B\u3068\u51C4\u304F\u75DB\u3044\u3002"),new cljs.core.Keyword(null,"barrage-mid","barrage-mid",3576931405),touhou_barrage_fighters.data.__GT_Spell.call(null,"\u5F3E\u5E55(\u4E2D)",50,50,"\u4E38\u3044\u5927\u304D\u306A\u5F3E\u3092\u4E71\u308C\u6483\u3064\u3001\u898B\u304B\u3051\u306B\u3088\u3089\u305A\u5F53\u305F\u308B\u3068\u3082\u306E\u51C4\u304F\u75DB\u3044\u3002"),new cljs.core.Keyword(null,"barrage-big","barrage-big",3576920837),touhou_barrage_fighters.data.__GT_Spell.call(null,"\u5F3E\u5E55(\u5927)",80,80,"\u4EBA\u304C\u3059\u3063\u307D\u308A\u57CB\u307E\u308B\u5927\u304D\u3055\u306E\u5F3E\u3092\u4E71\u308C\u6483\u3064\u3001\u6148\u60B2\u306F\u306A\u3044\u3002"),new cljs.core.Keyword(null,"shanghai","shanghai",4561485949),touhou_barrage_fighters.data.__GT_Spell.call(null,"\u4E0A\u6D77\u4EBA\u5F62",130,0,"\u4E8C\u672C\u306E\u69CD\u3092\u624B\u306B\u6301\u3063\u305F\u4EBA\u5F62\u3092\u61D0\u304B\u3089\u53D6\u308A\u51FA\u3059\u3001\u8D64\u3044\u30EA\u30DC\u30F3\u304C\u30C1\u30E3\u30FC\u30E0\u30DD\u30A4\u30F3\u30C8\u3002\u4F7F\u7528\u8005\u306E\u970A\u529B\u304C\u6D88\u3048\u308B\u307E\u3067\u7559\u307E\u308A\u7D9A\u3051\u308B\u3002")], null);
touhou_barrage_fighters.data.SpellCardBattler = (function (){var obj5833 = {};return obj5833;
})();
touhou_barrage_fighters.data.say = (function say(this$,genre){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.touhou_barrage_fighters$data$SpellCardBattler$say$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.touhou_barrage_fighters$data$SpellCardBattler$say$arity$2(this$,genre);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (touhou_barrage_fighters.data.say[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (touhou_barrage_fighters.data.say["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SpellCardBattler.say",this$);
}
}
})().call(null,this$,genre);
}
});
touhou_barrage_fighters.data.grow = (function grow(this$,get_exp){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.touhou_barrage_fighters$data$SpellCardBattler$grow$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.touhou_barrage_fighters$data$SpellCardBattler$grow$arity$2(this$,get_exp);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (touhou_barrage_fighters.data.grow[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (touhou_barrage_fighters.data.grow["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SpellCardBattler.grow",this$);
}
}
})().call(null,this$,get_exp);
}
});
touhou_barrage_fighters.data.attack = (function attack(this$,target,spell_key){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.touhou_barrage_fighters$data$SpellCardBattler$attack$arity$3;
} else
{return and__3396__auto__;
}
})())
{return this$.touhou_barrage_fighters$data$SpellCardBattler$attack$arity$3(this$,target,spell_key);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (touhou_barrage_fighters.data.attack[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (touhou_barrage_fighters.data.attack["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SpellCardBattler.attack",this$);
}
}
})().call(null,this$,target,spell_key);
}
});

/**
* @constructor
* @param {*} words
* @param {*} hp
* @param {*} p_attack
* @param {*} m_attack
* @param {*} p_defence
* @param {*} m_defence
* @param {*} job
* @param {*} cards
* @param {*} equipment
* @param {*} level
* @param {*} exp
* @param {*} img
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
touhou_barrage_fighters.data.Character = (function (words,hp,p_attack,m_attack,p_defence,m_defence,job,cards,equipment,level,exp,img,__meta,__extmap){
this.words = words;
this.hp = hp;
this.p_attack = p_attack;
this.m_attack = m_attack;
this.p_defence = p_defence;
this.m_defence = m_defence;
this.job = job;
this.cards = cards;
this.equipment = equipment;
this.level = level;
this.exp = exp;
this.img = img;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>12){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
touhou_barrage_fighters.data.Character.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap.call(null,this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.call(null,this__3988__auto____$1,k__3989__auto__,null);
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k5835,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"words","words",1127222811)))
{return self__.words;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"hp","hp",1013907578)))
{return self__.hp;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"p-attack","p-attack",2810834359)))
{return self__.p_attack;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"m-attack","m-attack",1877370650)))
{return self__.m_attack;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"p-defence","p-defence",3104437093)))
{return self__.p_defence;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"m-defence","m-defence",4231833186)))
{return self__.m_defence;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"job","job",1014009647)))
{return self__.job;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"cards","cards",1108335317)))
{return self__.cards;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"equipment","equipment",2090260736)))
{return self__.equipment;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"level","level",1116770038)))
{return self__.level;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"exp","exp",1014005135)))
{return self__.exp;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5835,new cljs.core.Keyword(null,"img","img",1014008629)))
{return self__.img;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k5835,else__3991__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__5834){var self__ = this;
var this__3995__auto____$1 = this;var pred__5837 = cljs.core.keyword_identical_QMARK_;var expr__5838 = k__3996__auto__;if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"words","words",1127222811),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(G__5834,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"hp","hp",1013907578),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,G__5834,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,G__5834,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,G__5834,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,G__5834,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"m-defence","m-defence",4231833186),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,G__5834,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"job","job",1014009647),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,G__5834,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,G__5834,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"equipment","equipment",2090260736),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,G__5834,self__.level,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"level","level",1116770038),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,G__5834,self__.exp,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"exp","exp",1014005135),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,G__5834,self__.img,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5837.call(null,new cljs.core.Keyword(null,"img","img",1014008629),expr__5838)))
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,G__5834,self__.__meta,self__.__extmap,null));
} else
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3996__auto__,G__5834),null));
}
}
}
}
}
}
}
}
}
}
}
}
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4003__auto__,pr_pair__4005__auto__,"#touhou-barrage-fighters.data.Character{",", ","}",opts__4004__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"words","words",1127222811),self__.words],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hp","hp",1013907578),self__.hp],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),self__.p_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),self__.m_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),self__.p_defence],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m-defence","m-defence",4231833186),self__.m_defence],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"job","job",1014009647),self__.job],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cards","cards",1108335317),self__.cards],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"equipment","equipment",2090260736),self__.equipment],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1116770038),self__.level],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exp","exp",1014005135),self__.exp],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"img","img",1014008629),self__.img],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3994__auto__))
{return cljs.core._assoc.call(null,this__3993__auto____$1,cljs.core._nth.call(null,entry__3994__auto__,0),cljs.core._nth.call(null,entry__3994__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
touhou_barrage_fighters.data.Character.prototype.touhou_barrage_fighters$data$SpellCardBattler$ = true;
touhou_barrage_fighters.data.Character.prototype.touhou_barrage_fighters$data$SpellCardBattler$say$arity$2 = (function (this$,genre){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,document.querySelectorAll("#serihu")).innerHTML = cljs.core.rand_nth.call(null,genre.call(null,new cljs.core.Keyword(null,"words","words",1127222811).cljs$core$IFn$_invoke$arity$1(this$__$1)));
});
touhou_barrage_fighters.data.Character.prototype.touhou_barrage_fighters$data$SpellCardBattler$grow$arity$2 = (function (this$,get_exp){var self__ = this;
var this$__$1 = this;var level_flag = math.pow(new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(this$__$1));this$__$1.exp = (new cljs.core.Keyword(null,"exp","exp",1014005135).cljs$core$IFn$_invoke$arity$1(this$__$1) + get_exp);
if(((new cljs.core.Keyword(null,"exp","exp",1014005135).cljs$core$IFn$_invoke$arity$1(this$__$1) + get_exp) > level_flag))
{this$__$1.level = (new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(this$__$1) + 1);
return this$__$1;
} else
{return null;
}
});
touhou_barrage_fighters.data.Character.prototype.touhou_barrage_fighters$data$SpellCardBattler$attack$arity$3 = (function (this$,target,spell_key){var self__ = this;
var this$__$1 = this;var spell = cljs.core.get.call(null,touhou_barrage_fighters.data.spells,spell_key);var p_damage = ((new cljs.core.Keyword(null,"p-attack","p-attack",2810834359).cljs$core$IFn$_invoke$arity$1(spell) + new cljs.core.Keyword(null,"p-attack","p-attack",2810834359).cljs$core$IFn$_invoke$arity$1(this$__$1)) - new cljs.core.Keyword(null,"p-defence","p-defence",3104437093).cljs$core$IFn$_invoke$arity$1(target));var m_damage = ((new cljs.core.Keyword(null,"m-attack","m-attack",1877370650).cljs$core$IFn$_invoke$arity$1(spell) + new cljs.core.Keyword(null,"m-attack","m-attack",1877370650).cljs$core$IFn$_invoke$arity$1(this$__$1)) - new cljs.core.Keyword(null,"m-defence","m-defence",4231833186).cljs$core$IFn$_invoke$arity$1(target));var damage = math.floor(cljs.core.rand.call(null,(function (){var x__3715__auto__ = p_damage;var y__3716__auto__ = m_damage;return ((x__3715__auto__ > y__3716__auto__) ? x__3715__auto__ : y__3716__auto__);
})()));if((damage > 0))
{target.hp = (((damage > new cljs.core.Keyword(null,"hp","hp",1013907578).cljs$core$IFn$_invoke$arity$1(target)))?0:(target.hp - damage));
return target;
} else
{return target;
}
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"words","words",1127222811),self__.words],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hp","hp",1013907578),self__.hp],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),self__.p_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),self__.m_attack],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),self__.p_defence],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m-defence","m-defence",4231833186),self__.m_defence],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"job","job",1014009647),self__.job],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cards","cards",1108335317),self__.cards],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"equipment","equipment",2090260736),self__.equipment],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1116770038),self__.level],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exp","exp",1014005135),self__.exp],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"img","img",1014008629),self__.img],null))], null),self__.__extmap));
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (12 + cljs.core.count.call(null,self__.__extmap));
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__5834){var self__ = this;
var this__3987__auto____$1 = this;return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,G__5834,self__.__extmap,self__.__hash));
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
touhou_barrage_fighters.data.Character.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"img","img",1014008629),null,new cljs.core.Keyword(null,"words","words",1127222811),null,new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),null,new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),null,new cljs.core.Keyword(null,"equipment","equipment",2090260736),null,new cljs.core.Keyword(null,"cards","cards",1108335317),null,new cljs.core.Keyword(null,"hp","hp",1013907578),null,new cljs.core.Keyword(null,"job","job",1014009647),null,new cljs.core.Keyword(null,"exp","exp",1014005135),null,new cljs.core.Keyword(null,"level","level",1116770038),null,new cljs.core.Keyword(null,"m-defence","m-defence",4231833186),null,new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),null], null), null),k__3998__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new touhou_barrage_fighters.data.Character(self__.words,self__.hp,self__.p_attack,self__.m_attack,self__.p_defence,self__.m_defence,self__.job,self__.cards,self__.equipment,self__.level,self__.exp,self__.img,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3998__auto__)),null));
}
});
touhou_barrage_fighters.data.Character.cljs$lang$type = true;
touhou_barrage_fighters.data.Character.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"touhou-barrage-fighters.data/Character");
});
touhou_barrage_fighters.data.Character.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write.call(null,writer__4023__auto__,"touhou-barrage-fighters.data/Character");
});
touhou_barrage_fighters.data.__GT_Character = (function __GT_Character(words,hp,p_attack,m_attack,p_defence,m_defence,job,cards,equipment,level,exp,img){return (new touhou_barrage_fighters.data.Character(words,hp,p_attack,m_attack,p_defence,m_defence,job,cards,equipment,level,exp,img));
});
touhou_barrage_fighters.data.map__GT_Character = (function map__GT_Character(G__5836){return (new touhou_barrage_fighters.data.Character(new cljs.core.Keyword(null,"words","words",1127222811).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"hp","hp",1013907578).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"p-attack","p-attack",2810834359).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"m-attack","m-attack",1877370650).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"p-defence","p-defence",3104437093).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"m-defence","m-defence",4231833186).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"job","job",1014009647).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"equipment","equipment",2090260736).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"level","level",1116770038).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"exp","exp",1014005135).cljs$core$IFn$_invoke$arity$1(G__5836),new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(G__5836),null,cljs.core.dissoc.call(null,G__5836,new cljs.core.Keyword(null,"words","words",1127222811),new cljs.core.Keyword(null,"hp","hp",1013907578),new cljs.core.Keyword(null,"p-attack","p-attack",2810834359),new cljs.core.Keyword(null,"m-attack","m-attack",1877370650),new cljs.core.Keyword(null,"p-defence","p-defence",3104437093),new cljs.core.Keyword(null,"m-defence","m-defence",4231833186),new cljs.core.Keyword(null,"job","job",1014009647),new cljs.core.Keyword(null,"cards","cards",1108335317),new cljs.core.Keyword(null,"equipment","equipment",2090260736),new cljs.core.Keyword(null,"level","level",1116770038),new cljs.core.Keyword(null,"exp","exp",1014005135),new cljs.core.Keyword(null,"img","img",1014008629))));
});
touhou_barrage_fighters.data.characters = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alice","alice",1106807282),touhou_barrage_fighters.data.__GT_Character.call(null,touhou_barrage_fighters.data.__GT_Word.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u68EE\u306E\u4EBA\u5F62\u9063\u3044\u30A2\u30EA\u30B9\u30FB\u30DE\u30FC\u30AC\u30C8\u30ED\u30A4\u30C9\u3088\u3001\u3088\u308D\u3057\u304F\u306D\u3002"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u7D05\u8336\u306F\u597D\u304D\u3060\u3051\u3069\u3001\u30B3\u30FC\u30D2\u30FC\u3082\u307E\u305F\u826F\u3044\u7269\u306D\u3002","\u3053\u308C\u306F\u4F55\u304B\u3057\u3089\u2026\u30AD\u30CE\u30B3\u8336\uFF1F\u9B54\u7406\u6C99\u306E\u304A\u571F\u7523\u306A\u306E\uFF1F\u3061\u3087\u3001\u3061\u3087\u3063\u3068\u3060\u3051\u3044\u305F\u3060\u3053\u3046\u304B\u3057\u3089","\u4EBA\u5F62\u306E\u304A\u624B\u5165\u308C\u3082\u697D\u3058\u3083\u306A\u3044\u308F\u3088\u3001\u3042\u306A\u305F\u3082\u5C11\u3057\u624B\u4F1D\u3063\u3066\u3061\u3087\u3046\u3060\u3044\uFF1F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u7518\u3044\u308F\u306D","\u5F3E\u5E55\u306F\u30D6\u30EC\u30A4\u30F3\u3001\u5E38\u8B58\u3088","\u3054\u3081\u3093\u306A\u3055\u3044\u3001\u5148\u3092\u6025\u3044\u3067\u3044\u308B\u306E"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u697D\u3057\u304F\u306A\u3063\u3066\u6765\u305F\u3058\u3083\u306A\u3044","\u75DB\u3044\u308F\u2026"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u4F55\u304B\u7528\u304B\u3057\u3089\uFF1F","\u4EBA\u306E\u4E8B\u3058\u308D\u3058\u308D\u898B\u3066\u3001\u3069\u3046\u3044\u3046\u3064\u3082\u308A\uFF1F","\u523A\u3059\u308F\u3088"], null)),300,30,60,30,60,new cljs.core.Keyword(null,"witch","witch",1127045945),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reigeki","reigeki",2101791684),10,new cljs.core.Keyword(null,"barrage-mini","barrage-mini",3158335382),10,new cljs.core.Keyword(null,"barrage-mid","barrage-mid",3576931405),5,new cljs.core.Keyword(null,"barrage-big","barrage-big",3576920837),3,new cljs.core.Keyword(null,"shanghai","shanghai",4561485949),1], null),new cljs.core.Keyword(null,"magic-clothe","magic-clothe",788188445),0,0,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"normal","normal",4269125721),"img/chara/alice/normal.png",new cljs.core.Keyword(null,"wink","wink",1017553793),"img/chara/alice/wink.png",new cljs.core.Keyword(null,"akire","akire",1106777956),"img/chara/alice/akire.png",new cljs.core.Keyword(null,"odoroki","odoroki",3711497223),"img/chara/alice/odoroki.png",new cljs.core.Keyword(null,"naki","naki",1017277891),"img/chara/alice/naki.png",new cljs.core.Keyword(null,"ikari","ikari",1114158440),"img/chara/alice/ikari.png",new cljs.core.Keyword(null,"warai","warai",1126805634),"img/chara/alice/warai.png"], null)),new cljs.core.Keyword(null,"reimu","reimu",1122298928),touhou_barrage_fighters.data.__GT_Character.call(null,touhou_barrage_fighters.data.__GT_Word.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u535A\u9E97\u795E\u793E\u306E\u5DEB\u5973\u3001\u535A\u9E97\u970A\u5922\u3088\u3002\u307E\u3041\u3088\u308D\u3057\u304F\u306D\u3002"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u304A\u8336\u3092\u5165\u308C\u3066\u304F\u308C\u308B\u306E\uFF1F\u6C17\u304C\u5229\u304F\u308F\u306D\u3001\u3042\u308A\u304C\u3068\u3046\u3002","\u5DEB\u5973\u306B\u898B\u3048\u306A\u3044\u3063\u3066\uFF1F\u305D\u3093\u306A\u4E8B\u3069\u3046\u3067\u3082\u3044\u3044\u3058\u3083\u306A\u3044\u306E","\u3053\u3093\u306A\u306B\u5929\u6C17\u304C\u826F\u3044\u3063\u3066\u3044\u3046\u306E\u306B\u53C2\u62DD\u5BA2\u306E\u4E00\u4EBA\u3082\u5C45\u306A\u3044\u308F\u306D\u3001\u30A2\u30F3\u30BF\u3001\u6687\u306A\u3089\u3061\u3087\u3063\u3068\u52E7\u8A98\u3057\u3066\u6765\u306A\u3055\u3044\u3088"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u3044\u3044\u52A0\u6E1B\u306B\u3057\u306A\u3055\u3044\uFF01","\u5012\u308C\u306A\u3055\u3044\uFF01","\u3053\u308C\u3067\u7D42\u308F\u308A\u306D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u75DB\u3044\u308F\u306D\uFF01","\u8A31\u3055\u306A\u3044\u308F\u3088\uFF01","\u304A\u7078\u304C\u5FC5\u8981\u306D\uFF01"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u547C\u3093\u3060\u304B\u3057\u3089\uFF1F","\u4F55\uFF1F\u3057\u3064\u3053\u3044\u308F\u306D","\u2026\u9000\u6CBB\u304C\u5FC5\u8981\u306A\u3088\u3046\u306D"], null)),300,45,45,45,45,new cljs.core.Keyword(null,"human","human",1113543839),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reigeki","reigeki",2101791684),10,new cljs.core.Keyword(null,"barrage-mini","barrage-mini",3158335382),10,new cljs.core.Keyword(null,"barrage-mid","barrage-mid",3576931405),5,new cljs.core.Keyword(null,"barrage-big","barrage-big",3576920837),3,new cljs.core.Keyword(null,"shanghai","shanghai",4561485949),1], null),new cljs.core.Keyword(null,"human-clothe","human-clothe",950183325),0,0,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"normal","normal",4269125721),"img/chara/reimu/normal.png",new cljs.core.Keyword(null,"kane","kane",1017188607),"img/chara/reimu/kane.png",new cljs.core.Keyword(null,"akire","akire",1106777956),"img/chara/reimu/akire.png",new cljs.core.Keyword(null,"odoroki","odoroki",3711497223),"img/chara/reimu/odoroki.png",new cljs.core.Keyword(null,"naki","naki",1017277891),"img/chara/reimu/naki.png",new cljs.core.Keyword(null,"ikari","ikari",1114158440),"img/chara/reimu/ikari.png",new cljs.core.Keyword(null,"egao","egao",1017015234),"img/chara/reimu/egao.png"], null))], null);
