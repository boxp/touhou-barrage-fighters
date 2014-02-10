// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var or__3408__auto__ = elem__$1.textContent;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return elem__$1.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6453 = dommy.template.__GT_node_like.call(null,parent);G__6453.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__6453;
});
var append_BANG___3 = (function() { 
var G__6458__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6454_6459 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6455_6460 = null;var count__6456_6461 = 0;var i__6457_6462 = 0;while(true){
if((i__6457_6462 < count__6456_6461))
{var c_6463 = cljs.core._nth.call(null,chunk__6455_6460,i__6457_6462);append_BANG_.call(null,parent__$1,c_6463);
{
var G__6464 = seq__6454_6459;
var G__6465 = chunk__6455_6460;
var G__6466 = count__6456_6461;
var G__6467 = (i__6457_6462 + 1);
seq__6454_6459 = G__6464;
chunk__6455_6460 = G__6465;
count__6456_6461 = G__6466;
i__6457_6462 = G__6467;
continue;
}
} else
{var temp__4092__auto___6468 = cljs.core.seq.call(null,seq__6454_6459);if(temp__4092__auto___6468)
{var seq__6454_6469__$1 = temp__4092__auto___6468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6454_6469__$1))
{var c__4150__auto___6470 = cljs.core.chunk_first.call(null,seq__6454_6469__$1);{
var G__6471 = cljs.core.chunk_rest.call(null,seq__6454_6469__$1);
var G__6472 = c__4150__auto___6470;
var G__6473 = cljs.core.count.call(null,c__4150__auto___6470);
var G__6474 = 0;
seq__6454_6459 = G__6471;
chunk__6455_6460 = G__6472;
count__6456_6461 = G__6473;
i__6457_6462 = G__6474;
continue;
}
} else
{var c_6475 = cljs.core.first.call(null,seq__6454_6469__$1);append_BANG_.call(null,parent__$1,c_6475);
{
var G__6476 = cljs.core.next.call(null,seq__6454_6469__$1);
var G__6477 = null;
var G__6478 = 0;
var G__6479 = 0;
seq__6454_6459 = G__6476;
chunk__6455_6460 = G__6477;
count__6456_6461 = G__6478;
i__6457_6462 = G__6479;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6458 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6458__delegate.call(this,parent,child,more_children);};
G__6458.cljs$lang$maxFixedArity = 2;
G__6458.cljs$lang$applyTo = (function (arglist__6480){
var parent = cljs.core.first(arglist__6480);
arglist__6480 = cljs.core.next(arglist__6480);
var child = cljs.core.first(arglist__6480);
var more_children = cljs.core.rest(arglist__6480);
return G__6458__delegate(parent,child,more_children);
});
G__6458.cljs$core$IFn$_invoke$arity$variadic = G__6458__delegate;
return G__6458;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__6486 = dommy.template.__GT_node_like.call(null,parent);G__6486.insertBefore(dommy.template.__GT_node_like.call(null,child),parent.firstChild);
return G__6486;
});
var prepend_BANG___3 = (function() { 
var G__6491__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6487_6492 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6488_6493 = null;var count__6489_6494 = 0;var i__6490_6495 = 0;while(true){
if((i__6490_6495 < count__6489_6494))
{var c_6496 = cljs.core._nth.call(null,chunk__6488_6493,i__6490_6495);prepend_BANG_.call(null,parent__$1,c_6496);
{
var G__6497 = seq__6487_6492;
var G__6498 = chunk__6488_6493;
var G__6499 = count__6489_6494;
var G__6500 = (i__6490_6495 + 1);
seq__6487_6492 = G__6497;
chunk__6488_6493 = G__6498;
count__6489_6494 = G__6499;
i__6490_6495 = G__6500;
continue;
}
} else
{var temp__4092__auto___6501 = cljs.core.seq.call(null,seq__6487_6492);if(temp__4092__auto___6501)
{var seq__6487_6502__$1 = temp__4092__auto___6501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6487_6502__$1))
{var c__4150__auto___6503 = cljs.core.chunk_first.call(null,seq__6487_6502__$1);{
var G__6504 = cljs.core.chunk_rest.call(null,seq__6487_6502__$1);
var G__6505 = c__4150__auto___6503;
var G__6506 = cljs.core.count.call(null,c__4150__auto___6503);
var G__6507 = 0;
seq__6487_6492 = G__6504;
chunk__6488_6493 = G__6505;
count__6489_6494 = G__6506;
i__6490_6495 = G__6507;
continue;
}
} else
{var c_6508 = cljs.core.first.call(null,seq__6487_6502__$1);prepend_BANG_.call(null,parent__$1,c_6508);
{
var G__6509 = cljs.core.next.call(null,seq__6487_6502__$1);
var G__6510 = null;
var G__6511 = 0;
var G__6512 = 0;
seq__6487_6492 = G__6509;
chunk__6488_6493 = G__6510;
count__6489_6494 = G__6511;
i__6490_6495 = G__6512;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6491 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6491__delegate.call(this,parent,child,more_children);};
G__6491.cljs$lang$maxFixedArity = 2;
G__6491.cljs$lang$applyTo = (function (arglist__6513){
var parent = cljs.core.first(arglist__6513);
arglist__6513 = cljs.core.next(arglist__6513);
var child = cljs.core.first(arglist__6513);
var more_children = cljs.core.rest(arglist__6513);
return G__6491__delegate(parent,child,more_children);
});
G__6491.cljs$core$IFn$_invoke$arity$variadic = G__6491__delegate;
return G__6491;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___6514 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___6514))
{var next_6515 = temp__4090__auto___6514;parent.insertBefore(actual_node,next_6515);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__6517 = dommy.template.__GT_node_like.call(null,parent);G__6517.innerHTML = "";
dommy.core.append_BANG_.call(null,G__6517,node_like);
return G__6517;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__6519 = elem__$1.parentNode;G__6519.removeChild(elem__$1);
return G__6519;
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__6520_SHARP_){return p1__6520_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__6521_SHARP_){return !((p1__6521_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6522){var vec__6523 = p__6522;var special_mouse_event = cljs.core.nth.call(null,vec__6523,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__6523,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3408__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3396__auto__ = related_target;if(cljs.core.truth_(and__3396__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3396__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var temp__4092__auto__ = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_(temp__4092__auto__))
{var selected_target = temp__4092__auto__;event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3408__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6524){
var elem = cljs.core.first(arglist__6524);
arglist__6524 = cljs.core.next(arglist__6524);
var f = cljs.core.first(arglist__6524);
var args = cljs.core.rest(arglist__6524);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__6525_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__6525_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6549_6572 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6573 = cljs.core.nth.call(null,vec__6549_6572,0,null);var selector_6574 = cljs.core.nth.call(null,vec__6549_6572,1,null);var seq__6550_6575 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6557_6576 = null;var count__6558_6577 = 0;var i__6559_6578 = 0;while(true){
if((i__6559_6578 < count__6558_6577))
{var vec__6566_6579 = cljs.core._nth.call(null,chunk__6557_6576,i__6559_6578);var orig_type_6580 = cljs.core.nth.call(null,vec__6566_6579,0,null);var f_6581 = cljs.core.nth.call(null,vec__6566_6579,1,null);var seq__6560_6582 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6580,new cljs.core.PersistentArrayMap.fromArray([orig_type_6580,cljs.core.identity], true, false)));var chunk__6562_6583 = null;var count__6563_6584 = 0;var i__6564_6585 = 0;while(true){
if((i__6564_6585 < count__6563_6584))
{var vec__6567_6586 = cljs.core._nth.call(null,chunk__6562_6583,i__6564_6585);var actual_type_6587 = cljs.core.nth.call(null,vec__6567_6586,0,null);var factory_6588 = cljs.core.nth.call(null,vec__6567_6586,1,null);var canonical_f_6589 = (cljs.core.truth_(selector_6574)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6573,selector_6574):cljs.core.identity).call(null,factory_6588.call(null,f_6581));dommy.core.update_event_listeners_BANG_.call(null,elem_6573,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6574,actual_type_6587,f_6581], null),canonical_f_6589);
if(cljs.core.truth_(elem_6573.addEventListener))
{elem_6573.addEventListener(cljs.core.name.call(null,actual_type_6587),canonical_f_6589);
} else
{elem_6573.attachEvent(cljs.core.name.call(null,actual_type_6587),canonical_f_6589);
}
{
var G__6590 = seq__6560_6582;
var G__6591 = chunk__6562_6583;
var G__6592 = count__6563_6584;
var G__6593 = (i__6564_6585 + 1);
seq__6560_6582 = G__6590;
chunk__6562_6583 = G__6591;
count__6563_6584 = G__6592;
i__6564_6585 = G__6593;
continue;
}
} else
{var temp__4092__auto___6594 = cljs.core.seq.call(null,seq__6560_6582);if(temp__4092__auto___6594)
{var seq__6560_6595__$1 = temp__4092__auto___6594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6560_6595__$1))
{var c__4150__auto___6596 = cljs.core.chunk_first.call(null,seq__6560_6595__$1);{
var G__6597 = cljs.core.chunk_rest.call(null,seq__6560_6595__$1);
var G__6598 = c__4150__auto___6596;
var G__6599 = cljs.core.count.call(null,c__4150__auto___6596);
var G__6600 = 0;
seq__6560_6582 = G__6597;
chunk__6562_6583 = G__6598;
count__6563_6584 = G__6599;
i__6564_6585 = G__6600;
continue;
}
} else
{var vec__6568_6601 = cljs.core.first.call(null,seq__6560_6595__$1);var actual_type_6602 = cljs.core.nth.call(null,vec__6568_6601,0,null);var factory_6603 = cljs.core.nth.call(null,vec__6568_6601,1,null);var canonical_f_6604 = (cljs.core.truth_(selector_6574)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6573,selector_6574):cljs.core.identity).call(null,factory_6603.call(null,f_6581));dommy.core.update_event_listeners_BANG_.call(null,elem_6573,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6574,actual_type_6602,f_6581], null),canonical_f_6604);
if(cljs.core.truth_(elem_6573.addEventListener))
{elem_6573.addEventListener(cljs.core.name.call(null,actual_type_6602),canonical_f_6604);
} else
{elem_6573.attachEvent(cljs.core.name.call(null,actual_type_6602),canonical_f_6604);
}
{
var G__6605 = cljs.core.next.call(null,seq__6560_6595__$1);
var G__6606 = null;
var G__6607 = 0;
var G__6608 = 0;
seq__6560_6582 = G__6605;
chunk__6562_6583 = G__6606;
count__6563_6584 = G__6607;
i__6564_6585 = G__6608;
continue;
}
}
} else
{}
}
break;
}
{
var G__6609 = seq__6550_6575;
var G__6610 = chunk__6557_6576;
var G__6611 = count__6558_6577;
var G__6612 = (i__6559_6578 + 1);
seq__6550_6575 = G__6609;
chunk__6557_6576 = G__6610;
count__6558_6577 = G__6611;
i__6559_6578 = G__6612;
continue;
}
} else
{var temp__4092__auto___6613 = cljs.core.seq.call(null,seq__6550_6575);if(temp__4092__auto___6613)
{var seq__6550_6614__$1 = temp__4092__auto___6613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6550_6614__$1))
{var c__4150__auto___6615 = cljs.core.chunk_first.call(null,seq__6550_6614__$1);{
var G__6616 = cljs.core.chunk_rest.call(null,seq__6550_6614__$1);
var G__6617 = c__4150__auto___6615;
var G__6618 = cljs.core.count.call(null,c__4150__auto___6615);
var G__6619 = 0;
seq__6550_6575 = G__6616;
chunk__6557_6576 = G__6617;
count__6558_6577 = G__6618;
i__6559_6578 = G__6619;
continue;
}
} else
{var vec__6569_6620 = cljs.core.first.call(null,seq__6550_6614__$1);var orig_type_6621 = cljs.core.nth.call(null,vec__6569_6620,0,null);var f_6622 = cljs.core.nth.call(null,vec__6569_6620,1,null);var seq__6551_6623 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6621,new cljs.core.PersistentArrayMap.fromArray([orig_type_6621,cljs.core.identity], true, false)));var chunk__6553_6624 = null;var count__6554_6625 = 0;var i__6555_6626 = 0;while(true){
if((i__6555_6626 < count__6554_6625))
{var vec__6570_6627 = cljs.core._nth.call(null,chunk__6553_6624,i__6555_6626);var actual_type_6628 = cljs.core.nth.call(null,vec__6570_6627,0,null);var factory_6629 = cljs.core.nth.call(null,vec__6570_6627,1,null);var canonical_f_6630 = (cljs.core.truth_(selector_6574)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6573,selector_6574):cljs.core.identity).call(null,factory_6629.call(null,f_6622));dommy.core.update_event_listeners_BANG_.call(null,elem_6573,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6574,actual_type_6628,f_6622], null),canonical_f_6630);
if(cljs.core.truth_(elem_6573.addEventListener))
{elem_6573.addEventListener(cljs.core.name.call(null,actual_type_6628),canonical_f_6630);
} else
{elem_6573.attachEvent(cljs.core.name.call(null,actual_type_6628),canonical_f_6630);
}
{
var G__6631 = seq__6551_6623;
var G__6632 = chunk__6553_6624;
var G__6633 = count__6554_6625;
var G__6634 = (i__6555_6626 + 1);
seq__6551_6623 = G__6631;
chunk__6553_6624 = G__6632;
count__6554_6625 = G__6633;
i__6555_6626 = G__6634;
continue;
}
} else
{var temp__4092__auto___6635__$1 = cljs.core.seq.call(null,seq__6551_6623);if(temp__4092__auto___6635__$1)
{var seq__6551_6636__$1 = temp__4092__auto___6635__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6551_6636__$1))
{var c__4150__auto___6637 = cljs.core.chunk_first.call(null,seq__6551_6636__$1);{
var G__6638 = cljs.core.chunk_rest.call(null,seq__6551_6636__$1);
var G__6639 = c__4150__auto___6637;
var G__6640 = cljs.core.count.call(null,c__4150__auto___6637);
var G__6641 = 0;
seq__6551_6623 = G__6638;
chunk__6553_6624 = G__6639;
count__6554_6625 = G__6640;
i__6555_6626 = G__6641;
continue;
}
} else
{var vec__6571_6642 = cljs.core.first.call(null,seq__6551_6636__$1);var actual_type_6643 = cljs.core.nth.call(null,vec__6571_6642,0,null);var factory_6644 = cljs.core.nth.call(null,vec__6571_6642,1,null);var canonical_f_6645 = (cljs.core.truth_(selector_6574)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6573,selector_6574):cljs.core.identity).call(null,factory_6644.call(null,f_6622));dommy.core.update_event_listeners_BANG_.call(null,elem_6573,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6574,actual_type_6643,f_6622], null),canonical_f_6645);
if(cljs.core.truth_(elem_6573.addEventListener))
{elem_6573.addEventListener(cljs.core.name.call(null,actual_type_6643),canonical_f_6645);
} else
{elem_6573.attachEvent(cljs.core.name.call(null,actual_type_6643),canonical_f_6645);
}
{
var G__6646 = cljs.core.next.call(null,seq__6551_6636__$1);
var G__6647 = null;
var G__6648 = 0;
var G__6649 = 0;
seq__6551_6623 = G__6646;
chunk__6553_6624 = G__6647;
count__6554_6625 = G__6648;
i__6555_6626 = G__6649;
continue;
}
}
} else
{}
}
break;
}
{
var G__6650 = cljs.core.next.call(null,seq__6550_6614__$1);
var G__6651 = null;
var G__6652 = 0;
var G__6653 = 0;
seq__6550_6575 = G__6650;
chunk__6557_6576 = G__6651;
count__6558_6577 = G__6652;
i__6559_6578 = G__6653;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__6654){
var elem_sel = cljs.core.first(arglist__6654);
var type_fs = cljs.core.rest(arglist__6654);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6678_6701 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6702 = cljs.core.nth.call(null,vec__6678_6701,0,null);var selector_6703 = cljs.core.nth.call(null,vec__6678_6701,1,null);var seq__6679_6704 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6686_6705 = null;var count__6687_6706 = 0;var i__6688_6707 = 0;while(true){
if((i__6688_6707 < count__6687_6706))
{var vec__6695_6708 = cljs.core._nth.call(null,chunk__6686_6705,i__6688_6707);var orig_type_6709 = cljs.core.nth.call(null,vec__6695_6708,0,null);var f_6710 = cljs.core.nth.call(null,vec__6695_6708,1,null);var seq__6689_6711 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6709,new cljs.core.PersistentArrayMap.fromArray([orig_type_6709,cljs.core.identity], true, false)));var chunk__6691_6712 = null;var count__6692_6713 = 0;var i__6693_6714 = 0;while(true){
if((i__6693_6714 < count__6692_6713))
{var vec__6696_6715 = cljs.core._nth.call(null,chunk__6691_6712,i__6693_6714);var actual_type_6716 = cljs.core.nth.call(null,vec__6696_6715,0,null);var __6717 = cljs.core.nth.call(null,vec__6696_6715,1,null);var keys_6718 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6703,actual_type_6716,f_6710], null);var canonical_f_6719 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6702),keys_6718);dommy.core.update_event_listeners_BANG_.call(null,elem_6702,dommy.utils.dissoc_in,keys_6718);
if(cljs.core.truth_(elem_6702.removeEventListener))
{elem_6702.removeEventListener(cljs.core.name.call(null,actual_type_6716),canonical_f_6719);
} else
{elem_6702.detachEvent(cljs.core.name.call(null,actual_type_6716),canonical_f_6719);
}
{
var G__6720 = seq__6689_6711;
var G__6721 = chunk__6691_6712;
var G__6722 = count__6692_6713;
var G__6723 = (i__6693_6714 + 1);
seq__6689_6711 = G__6720;
chunk__6691_6712 = G__6721;
count__6692_6713 = G__6722;
i__6693_6714 = G__6723;
continue;
}
} else
{var temp__4092__auto___6724 = cljs.core.seq.call(null,seq__6689_6711);if(temp__4092__auto___6724)
{var seq__6689_6725__$1 = temp__4092__auto___6724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6689_6725__$1))
{var c__4150__auto___6726 = cljs.core.chunk_first.call(null,seq__6689_6725__$1);{
var G__6727 = cljs.core.chunk_rest.call(null,seq__6689_6725__$1);
var G__6728 = c__4150__auto___6726;
var G__6729 = cljs.core.count.call(null,c__4150__auto___6726);
var G__6730 = 0;
seq__6689_6711 = G__6727;
chunk__6691_6712 = G__6728;
count__6692_6713 = G__6729;
i__6693_6714 = G__6730;
continue;
}
} else
{var vec__6697_6731 = cljs.core.first.call(null,seq__6689_6725__$1);var actual_type_6732 = cljs.core.nth.call(null,vec__6697_6731,0,null);var __6733 = cljs.core.nth.call(null,vec__6697_6731,1,null);var keys_6734 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6703,actual_type_6732,f_6710], null);var canonical_f_6735 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6702),keys_6734);dommy.core.update_event_listeners_BANG_.call(null,elem_6702,dommy.utils.dissoc_in,keys_6734);
if(cljs.core.truth_(elem_6702.removeEventListener))
{elem_6702.removeEventListener(cljs.core.name.call(null,actual_type_6732),canonical_f_6735);
} else
{elem_6702.detachEvent(cljs.core.name.call(null,actual_type_6732),canonical_f_6735);
}
{
var G__6736 = cljs.core.next.call(null,seq__6689_6725__$1);
var G__6737 = null;
var G__6738 = 0;
var G__6739 = 0;
seq__6689_6711 = G__6736;
chunk__6691_6712 = G__6737;
count__6692_6713 = G__6738;
i__6693_6714 = G__6739;
continue;
}
}
} else
{}
}
break;
}
{
var G__6740 = seq__6679_6704;
var G__6741 = chunk__6686_6705;
var G__6742 = count__6687_6706;
var G__6743 = (i__6688_6707 + 1);
seq__6679_6704 = G__6740;
chunk__6686_6705 = G__6741;
count__6687_6706 = G__6742;
i__6688_6707 = G__6743;
continue;
}
} else
{var temp__4092__auto___6744 = cljs.core.seq.call(null,seq__6679_6704);if(temp__4092__auto___6744)
{var seq__6679_6745__$1 = temp__4092__auto___6744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6679_6745__$1))
{var c__4150__auto___6746 = cljs.core.chunk_first.call(null,seq__6679_6745__$1);{
var G__6747 = cljs.core.chunk_rest.call(null,seq__6679_6745__$1);
var G__6748 = c__4150__auto___6746;
var G__6749 = cljs.core.count.call(null,c__4150__auto___6746);
var G__6750 = 0;
seq__6679_6704 = G__6747;
chunk__6686_6705 = G__6748;
count__6687_6706 = G__6749;
i__6688_6707 = G__6750;
continue;
}
} else
{var vec__6698_6751 = cljs.core.first.call(null,seq__6679_6745__$1);var orig_type_6752 = cljs.core.nth.call(null,vec__6698_6751,0,null);var f_6753 = cljs.core.nth.call(null,vec__6698_6751,1,null);var seq__6680_6754 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6752,new cljs.core.PersistentArrayMap.fromArray([orig_type_6752,cljs.core.identity], true, false)));var chunk__6682_6755 = null;var count__6683_6756 = 0;var i__6684_6757 = 0;while(true){
if((i__6684_6757 < count__6683_6756))
{var vec__6699_6758 = cljs.core._nth.call(null,chunk__6682_6755,i__6684_6757);var actual_type_6759 = cljs.core.nth.call(null,vec__6699_6758,0,null);var __6760 = cljs.core.nth.call(null,vec__6699_6758,1,null);var keys_6761 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6703,actual_type_6759,f_6753], null);var canonical_f_6762 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6702),keys_6761);dommy.core.update_event_listeners_BANG_.call(null,elem_6702,dommy.utils.dissoc_in,keys_6761);
if(cljs.core.truth_(elem_6702.removeEventListener))
{elem_6702.removeEventListener(cljs.core.name.call(null,actual_type_6759),canonical_f_6762);
} else
{elem_6702.detachEvent(cljs.core.name.call(null,actual_type_6759),canonical_f_6762);
}
{
var G__6763 = seq__6680_6754;
var G__6764 = chunk__6682_6755;
var G__6765 = count__6683_6756;
var G__6766 = (i__6684_6757 + 1);
seq__6680_6754 = G__6763;
chunk__6682_6755 = G__6764;
count__6683_6756 = G__6765;
i__6684_6757 = G__6766;
continue;
}
} else
{var temp__4092__auto___6767__$1 = cljs.core.seq.call(null,seq__6680_6754);if(temp__4092__auto___6767__$1)
{var seq__6680_6768__$1 = temp__4092__auto___6767__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6680_6768__$1))
{var c__4150__auto___6769 = cljs.core.chunk_first.call(null,seq__6680_6768__$1);{
var G__6770 = cljs.core.chunk_rest.call(null,seq__6680_6768__$1);
var G__6771 = c__4150__auto___6769;
var G__6772 = cljs.core.count.call(null,c__4150__auto___6769);
var G__6773 = 0;
seq__6680_6754 = G__6770;
chunk__6682_6755 = G__6771;
count__6683_6756 = G__6772;
i__6684_6757 = G__6773;
continue;
}
} else
{var vec__6700_6774 = cljs.core.first.call(null,seq__6680_6768__$1);var actual_type_6775 = cljs.core.nth.call(null,vec__6700_6774,0,null);var __6776 = cljs.core.nth.call(null,vec__6700_6774,1,null);var keys_6777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6703,actual_type_6775,f_6753], null);var canonical_f_6778 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6702),keys_6777);dommy.core.update_event_listeners_BANG_.call(null,elem_6702,dommy.utils.dissoc_in,keys_6777);
if(cljs.core.truth_(elem_6702.removeEventListener))
{elem_6702.removeEventListener(cljs.core.name.call(null,actual_type_6775),canonical_f_6778);
} else
{elem_6702.detachEvent(cljs.core.name.call(null,actual_type_6775),canonical_f_6778);
}
{
var G__6779 = cljs.core.next.call(null,seq__6680_6768__$1);
var G__6780 = null;
var G__6781 = 0;
var G__6782 = 0;
seq__6680_6754 = G__6779;
chunk__6682_6755 = G__6780;
count__6683_6756 = G__6781;
i__6684_6757 = G__6782;
continue;
}
}
} else
{}
}
break;
}
{
var G__6783 = cljs.core.next.call(null,seq__6679_6745__$1);
var G__6784 = null;
var G__6785 = 0;
var G__6786 = 0;
seq__6679_6704 = G__6783;
chunk__6686_6705 = G__6784;
count__6687_6706 = G__6785;
i__6688_6707 = G__6786;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6787){
var elem_sel = cljs.core.first(arglist__6787);
var type_fs = cljs.core.rest(arglist__6787);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6795_6802 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6803 = cljs.core.nth.call(null,vec__6795_6802,0,null);var selector_6804 = cljs.core.nth.call(null,vec__6795_6802,1,null);var seq__6796_6805 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6797_6806 = null;var count__6798_6807 = 0;var i__6799_6808 = 0;while(true){
if((i__6799_6808 < count__6798_6807))
{var vec__6800_6809 = cljs.core._nth.call(null,chunk__6797_6806,i__6799_6808);var type_6810 = cljs.core.nth.call(null,vec__6800_6809,0,null);var f_6811 = cljs.core.nth.call(null,vec__6800_6809,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6810,((function (seq__6796_6805,chunk__6797_6806,count__6798_6807,i__6799_6808,vec__6800_6809,type_6810,f_6811){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6810,this_fn);
return f_6811.call(null,e);
});})(seq__6796_6805,chunk__6797_6806,count__6798_6807,i__6799_6808,vec__6800_6809,type_6810,f_6811))
);
{
var G__6812 = seq__6796_6805;
var G__6813 = chunk__6797_6806;
var G__6814 = count__6798_6807;
var G__6815 = (i__6799_6808 + 1);
seq__6796_6805 = G__6812;
chunk__6797_6806 = G__6813;
count__6798_6807 = G__6814;
i__6799_6808 = G__6815;
continue;
}
} else
{var temp__4092__auto___6816 = cljs.core.seq.call(null,seq__6796_6805);if(temp__4092__auto___6816)
{var seq__6796_6817__$1 = temp__4092__auto___6816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6796_6817__$1))
{var c__4150__auto___6818 = cljs.core.chunk_first.call(null,seq__6796_6817__$1);{
var G__6819 = cljs.core.chunk_rest.call(null,seq__6796_6817__$1);
var G__6820 = c__4150__auto___6818;
var G__6821 = cljs.core.count.call(null,c__4150__auto___6818);
var G__6822 = 0;
seq__6796_6805 = G__6819;
chunk__6797_6806 = G__6820;
count__6798_6807 = G__6821;
i__6799_6808 = G__6822;
continue;
}
} else
{var vec__6801_6823 = cljs.core.first.call(null,seq__6796_6817__$1);var type_6824 = cljs.core.nth.call(null,vec__6801_6823,0,null);var f_6825 = cljs.core.nth.call(null,vec__6801_6823,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6824,((function (seq__6796_6805,chunk__6797_6806,count__6798_6807,i__6799_6808,vec__6801_6823,type_6824,f_6825,seq__6796_6817__$1,temp__4092__auto___6816){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6824,this_fn);
return f_6825.call(null,e);
});})(seq__6796_6805,chunk__6797_6806,count__6798_6807,i__6799_6808,vec__6801_6823,type_6824,f_6825,seq__6796_6817__$1,temp__4092__auto___6816))
);
{
var G__6826 = cljs.core.next.call(null,seq__6796_6817__$1);
var G__6827 = null;
var G__6828 = 0;
var G__6829 = 0;
seq__6796_6805 = G__6826;
chunk__6797_6806 = G__6827;
count__6798_6807 = G__6828;
i__6799_6808 = G__6829;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6830){
var elem_sel = cljs.core.first(arglist__6830);
var type_fs = cljs.core.rest(arglist__6830);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__6831){var vec__6833 = p__6831;var update_event_BANG_ = cljs.core.nth.call(null,vec__6833,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3408__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__6831 = null;if (arguments.length > 2) {
  p__6831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__6831);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__6834){
var node = cljs.core.first(arglist__6834);
arglist__6834 = cljs.core.next(arglist__6834);
var event_type = cljs.core.first(arglist__6834);
var p__6831 = cljs.core.rest(arglist__6834);
return fire_BANG___delegate(node,event_type,p__6831);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
