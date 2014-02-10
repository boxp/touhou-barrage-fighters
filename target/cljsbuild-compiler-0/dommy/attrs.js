// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3396__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3396__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3396__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__7006 = (i + class$.length);
start_from = G__7006;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___7031 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7031))
{var class_list_7032 = temp__4090__auto___7031;var seq__7019_7033 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7020_7034 = null;var count__7021_7035 = 0;var i__7022_7036 = 0;while(true){
if((i__7022_7036 < count__7021_7035))
{var class_7037 = cljs.core._nth.call(null,chunk__7020_7034,i__7022_7036);class_list_7032.add(class_7037);
{
var G__7038 = seq__7019_7033;
var G__7039 = chunk__7020_7034;
var G__7040 = count__7021_7035;
var G__7041 = (i__7022_7036 + 1);
seq__7019_7033 = G__7038;
chunk__7020_7034 = G__7039;
count__7021_7035 = G__7040;
i__7022_7036 = G__7041;
continue;
}
} else
{var temp__4092__auto___7042 = cljs.core.seq.call(null,seq__7019_7033);if(temp__4092__auto___7042)
{var seq__7019_7043__$1 = temp__4092__auto___7042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7019_7043__$1))
{var c__4150__auto___7044 = cljs.core.chunk_first.call(null,seq__7019_7043__$1);{
var G__7045 = cljs.core.chunk_rest.call(null,seq__7019_7043__$1);
var G__7046 = c__4150__auto___7044;
var G__7047 = cljs.core.count.call(null,c__4150__auto___7044);
var G__7048 = 0;
seq__7019_7033 = G__7045;
chunk__7020_7034 = G__7046;
count__7021_7035 = G__7047;
i__7022_7036 = G__7048;
continue;
}
} else
{var class_7049 = cljs.core.first.call(null,seq__7019_7043__$1);class_list_7032.add(class_7049);
{
var G__7050 = cljs.core.next.call(null,seq__7019_7043__$1);
var G__7051 = null;
var G__7052 = 0;
var G__7053 = 0;
seq__7019_7033 = G__7050;
chunk__7020_7034 = G__7051;
count__7021_7035 = G__7052;
i__7022_7036 = G__7053;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_7054 = elem__$1.className;var seq__7023_7055 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7024_7056 = null;var count__7025_7057 = 0;var i__7026_7058 = 0;while(true){
if((i__7026_7058 < count__7025_7057))
{var class_7059 = cljs.core._nth.call(null,chunk__7024_7056,i__7026_7058);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7054,class_7059)))
{} else
{elem__$1.className = (((class_name_7054 === ""))?class_7059:[cljs.core.str(class_name_7054),cljs.core.str(" "),cljs.core.str(class_7059)].join(''));
}
{
var G__7060 = seq__7023_7055;
var G__7061 = chunk__7024_7056;
var G__7062 = count__7025_7057;
var G__7063 = (i__7026_7058 + 1);
seq__7023_7055 = G__7060;
chunk__7024_7056 = G__7061;
count__7025_7057 = G__7062;
i__7026_7058 = G__7063;
continue;
}
} else
{var temp__4092__auto___7064 = cljs.core.seq.call(null,seq__7023_7055);if(temp__4092__auto___7064)
{var seq__7023_7065__$1 = temp__4092__auto___7064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7023_7065__$1))
{var c__4150__auto___7066 = cljs.core.chunk_first.call(null,seq__7023_7065__$1);{
var G__7067 = cljs.core.chunk_rest.call(null,seq__7023_7065__$1);
var G__7068 = c__4150__auto___7066;
var G__7069 = cljs.core.count.call(null,c__4150__auto___7066);
var G__7070 = 0;
seq__7023_7055 = G__7067;
chunk__7024_7056 = G__7068;
count__7025_7057 = G__7069;
i__7026_7058 = G__7070;
continue;
}
} else
{var class_7071 = cljs.core.first.call(null,seq__7023_7065__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7054,class_7071)))
{} else
{elem__$1.className = (((class_name_7054 === ""))?class_7071:[cljs.core.str(class_name_7054),cljs.core.str(" "),cljs.core.str(class_7071)].join(''));
}
{
var G__7072 = cljs.core.next.call(null,seq__7023_7065__$1);
var G__7073 = null;
var G__7074 = 0;
var G__7075 = 0;
seq__7023_7055 = G__7072;
chunk__7024_7056 = G__7073;
count__7025_7057 = G__7074;
i__7026_7058 = G__7075;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__7076__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7027_7077 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__7028_7078 = null;var count__7029_7079 = 0;var i__7030_7080 = 0;while(true){
if((i__7030_7080 < count__7029_7079))
{var c_7081 = cljs.core._nth.call(null,chunk__7028_7078,i__7030_7080);add_class_BANG_.call(null,elem__$1,c_7081);
{
var G__7082 = seq__7027_7077;
var G__7083 = chunk__7028_7078;
var G__7084 = count__7029_7079;
var G__7085 = (i__7030_7080 + 1);
seq__7027_7077 = G__7082;
chunk__7028_7078 = G__7083;
count__7029_7079 = G__7084;
i__7030_7080 = G__7085;
continue;
}
} else
{var temp__4092__auto___7086 = cljs.core.seq.call(null,seq__7027_7077);if(temp__4092__auto___7086)
{var seq__7027_7087__$1 = temp__4092__auto___7086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7027_7087__$1))
{var c__4150__auto___7088 = cljs.core.chunk_first.call(null,seq__7027_7087__$1);{
var G__7089 = cljs.core.chunk_rest.call(null,seq__7027_7087__$1);
var G__7090 = c__4150__auto___7088;
var G__7091 = cljs.core.count.call(null,c__4150__auto___7088);
var G__7092 = 0;
seq__7027_7077 = G__7089;
chunk__7028_7078 = G__7090;
count__7029_7079 = G__7091;
i__7030_7080 = G__7092;
continue;
}
} else
{var c_7093 = cljs.core.first.call(null,seq__7027_7087__$1);add_class_BANG_.call(null,elem__$1,c_7093);
{
var G__7094 = cljs.core.next.call(null,seq__7027_7087__$1);
var G__7095 = null;
var G__7096 = 0;
var G__7097 = 0;
seq__7027_7077 = G__7094;
chunk__7028_7078 = G__7095;
count__7029_7079 = G__7096;
i__7030_7080 = G__7097;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7076 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7076__delegate.call(this,elem,classes,more_classes);};
G__7076.cljs$lang$maxFixedArity = 2;
G__7076.cljs$lang$applyTo = (function (arglist__7098){
var elem = cljs.core.first(arglist__7098);
arglist__7098 = cljs.core.next(arglist__7098);
var classes = cljs.core.first(arglist__7098);
var more_classes = cljs.core.rest(arglist__7098);
return G__7076__delegate(elem,classes,more_classes);
});
G__7076.cljs$core$IFn$_invoke$arity$variadic = G__7076__delegate;
return G__7076;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__7099 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__7099;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___7108 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7108))
{var class_list_7109 = temp__4090__auto___7108;class_list_7109.remove(class$__$1);
} else
{var class_name_7110 = elem__$1.className;var new_class_name_7111 = dommy.attrs.remove_class_str.call(null,class_name_7110,class$__$1);if((class_name_7110 === new_class_name_7111))
{} else
{elem__$1.className = new_class_name_7111;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7112__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7104 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__7105 = null;var count__7106 = 0;var i__7107 = 0;while(true){
if((i__7107 < count__7106))
{var c = cljs.core._nth.call(null,chunk__7105,i__7107);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7113 = seq__7104;
var G__7114 = chunk__7105;
var G__7115 = count__7106;
var G__7116 = (i__7107 + 1);
seq__7104 = G__7113;
chunk__7105 = G__7114;
count__7106 = G__7115;
i__7107 = G__7116;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7104);if(temp__4092__auto__)
{var seq__7104__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7104__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7104__$1);{
var G__7117 = cljs.core.chunk_rest.call(null,seq__7104__$1);
var G__7118 = c__4150__auto__;
var G__7119 = cljs.core.count.call(null,c__4150__auto__);
var G__7120 = 0;
seq__7104 = G__7117;
chunk__7105 = G__7118;
count__7106 = G__7119;
i__7107 = G__7120;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7104__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7121 = cljs.core.next.call(null,seq__7104__$1);
var G__7122 = null;
var G__7123 = 0;
var G__7124 = 0;
seq__7104 = G__7121;
chunk__7105 = G__7122;
count__7106 = G__7123;
i__7107 = G__7124;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__7112 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7112__delegate.call(this,elem,class$,classes);};
G__7112.cljs$lang$maxFixedArity = 2;
G__7112.cljs$lang$applyTo = (function (arglist__7125){
var elem = cljs.core.first(arglist__7125);
arglist__7125 = cljs.core.next(arglist__7125);
var class$ = cljs.core.first(arglist__7125);
var classes = cljs.core.rest(arglist__7125);
return G__7112__delegate(elem,class$,classes);
});
G__7112.cljs$core$IFn$_invoke$arity$variadic = G__7112__delegate;
return G__7112;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var temp__4090__auto___7126 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___7126))
{var class_list_7127 = temp__4090__auto___7126;class_list_7127.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__$1,class$,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7130){var vec__7131 = p__7130;var k = cljs.core.nth.call(null,vec__7131,0,null);var v = cljs.core.nth.call(null,vec__7131,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7138_7144 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7139_7145 = null;var count__7140_7146 = 0;var i__7141_7147 = 0;while(true){
if((i__7141_7147 < count__7140_7146))
{var vec__7142_7148 = cljs.core._nth.call(null,chunk__7139_7145,i__7141_7147);var k_7149 = cljs.core.nth.call(null,vec__7142_7148,0,null);var v_7150 = cljs.core.nth.call(null,vec__7142_7148,1,null);(style[cljs.core.name.call(null,k_7149)] = v_7150);
{
var G__7151 = seq__7138_7144;
var G__7152 = chunk__7139_7145;
var G__7153 = count__7140_7146;
var G__7154 = (i__7141_7147 + 1);
seq__7138_7144 = G__7151;
chunk__7139_7145 = G__7152;
count__7140_7146 = G__7153;
i__7141_7147 = G__7154;
continue;
}
} else
{var temp__4092__auto___7155 = cljs.core.seq.call(null,seq__7138_7144);if(temp__4092__auto___7155)
{var seq__7138_7156__$1 = temp__4092__auto___7155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7138_7156__$1))
{var c__4150__auto___7157 = cljs.core.chunk_first.call(null,seq__7138_7156__$1);{
var G__7158 = cljs.core.chunk_rest.call(null,seq__7138_7156__$1);
var G__7159 = c__4150__auto___7157;
var G__7160 = cljs.core.count.call(null,c__4150__auto___7157);
var G__7161 = 0;
seq__7138_7144 = G__7158;
chunk__7139_7145 = G__7159;
count__7140_7146 = G__7160;
i__7141_7147 = G__7161;
continue;
}
} else
{var vec__7143_7162 = cljs.core.first.call(null,seq__7138_7156__$1);var k_7163 = cljs.core.nth.call(null,vec__7143_7162,0,null);var v_7164 = cljs.core.nth.call(null,vec__7143_7162,1,null);(style[cljs.core.name.call(null,k_7163)] = v_7164);
{
var G__7165 = cljs.core.next.call(null,seq__7138_7156__$1);
var G__7166 = null;
var G__7167 = 0;
var G__7168 = 0;
seq__7138_7144 = G__7165;
chunk__7139_7145 = G__7166;
count__7140_7146 = G__7167;
i__7141_7147 = G__7168;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7169){
var elem = cljs.core.first(arglist__7169);
var kvs = cljs.core.rest(arglist__7169);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7176_7182 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__7177_7183 = null;var count__7178_7184 = 0;var i__7179_7185 = 0;while(true){
if((i__7179_7185 < count__7178_7184))
{var vec__7180_7186 = cljs.core._nth.call(null,chunk__7177_7183,i__7179_7185);var k_7187 = cljs.core.nth.call(null,vec__7180_7186,0,null);var v_7188 = cljs.core.nth.call(null,vec__7180_7186,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7187,[cljs.core.str(v_7188),cljs.core.str("px")].join(''));
{
var G__7189 = seq__7176_7182;
var G__7190 = chunk__7177_7183;
var G__7191 = count__7178_7184;
var G__7192 = (i__7179_7185 + 1);
seq__7176_7182 = G__7189;
chunk__7177_7183 = G__7190;
count__7178_7184 = G__7191;
i__7179_7185 = G__7192;
continue;
}
} else
{var temp__4092__auto___7193 = cljs.core.seq.call(null,seq__7176_7182);if(temp__4092__auto___7193)
{var seq__7176_7194__$1 = temp__4092__auto___7193;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7176_7194__$1))
{var c__4150__auto___7195 = cljs.core.chunk_first.call(null,seq__7176_7194__$1);{
var G__7196 = cljs.core.chunk_rest.call(null,seq__7176_7194__$1);
var G__7197 = c__4150__auto___7195;
var G__7198 = cljs.core.count.call(null,c__4150__auto___7195);
var G__7199 = 0;
seq__7176_7182 = G__7196;
chunk__7177_7183 = G__7197;
count__7178_7184 = G__7198;
i__7179_7185 = G__7199;
continue;
}
} else
{var vec__7181_7200 = cljs.core.first.call(null,seq__7176_7194__$1);var k_7201 = cljs.core.nth.call(null,vec__7181_7200,0,null);var v_7202 = cljs.core.nth.call(null,vec__7181_7200,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7201,[cljs.core.str(v_7202),cljs.core.str("px")].join(''));
{
var G__7203 = cljs.core.next.call(null,seq__7176_7194__$1);
var G__7204 = null;
var G__7205 = 0;
var G__7206 = 0;
seq__7176_7182 = G__7203;
chunk__7177_7183 = G__7204;
count__7178_7184 = G__7205;
i__7179_7185 = G__7206;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7207){
var elem = cljs.core.first(arglist__7207);
var kvs = cljs.core.rest(arglist__7207);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__7216 = dommy.template.__GT_node_like.call(null,elem);(G__7216[cljs.core.name.call(null,k)] = v);
return G__7216;
} else
{var G__7217 = dommy.template.__GT_node_like.call(null,elem);G__7217.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__7217;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7224__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7218_7225 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__7219_7226 = null;var count__7220_7227 = 0;var i__7221_7228 = 0;while(true){
if((i__7221_7228 < count__7220_7227))
{var vec__7222_7229 = cljs.core._nth.call(null,chunk__7219_7226,i__7221_7228);var k_7230__$1 = cljs.core.nth.call(null,vec__7222_7229,0,null);var v_7231__$1 = cljs.core.nth.call(null,vec__7222_7229,1,null);set_attr_BANG_.call(null,elem__$1,k_7230__$1,v_7231__$1);
{
var G__7232 = seq__7218_7225;
var G__7233 = chunk__7219_7226;
var G__7234 = count__7220_7227;
var G__7235 = (i__7221_7228 + 1);
seq__7218_7225 = G__7232;
chunk__7219_7226 = G__7233;
count__7220_7227 = G__7234;
i__7221_7228 = G__7235;
continue;
}
} else
{var temp__4092__auto___7236 = cljs.core.seq.call(null,seq__7218_7225);if(temp__4092__auto___7236)
{var seq__7218_7237__$1 = temp__4092__auto___7236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7218_7237__$1))
{var c__4150__auto___7238 = cljs.core.chunk_first.call(null,seq__7218_7237__$1);{
var G__7239 = cljs.core.chunk_rest.call(null,seq__7218_7237__$1);
var G__7240 = c__4150__auto___7238;
var G__7241 = cljs.core.count.call(null,c__4150__auto___7238);
var G__7242 = 0;
seq__7218_7225 = G__7239;
chunk__7219_7226 = G__7240;
count__7220_7227 = G__7241;
i__7221_7228 = G__7242;
continue;
}
} else
{var vec__7223_7243 = cljs.core.first.call(null,seq__7218_7237__$1);var k_7244__$1 = cljs.core.nth.call(null,vec__7223_7243,0,null);var v_7245__$1 = cljs.core.nth.call(null,vec__7223_7243,1,null);set_attr_BANG_.call(null,elem__$1,k_7244__$1,v_7245__$1);
{
var G__7246 = cljs.core.next.call(null,seq__7218_7237__$1);
var G__7247 = null;
var G__7248 = 0;
var G__7249 = 0;
seq__7218_7225 = G__7246;
chunk__7219_7226 = G__7247;
count__7220_7227 = G__7248;
i__7221_7228 = G__7249;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7224 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7224__delegate.call(this,elem,k,v,kvs);};
G__7224.cljs$lang$maxFixedArity = 3;
G__7224.cljs$lang$applyTo = (function (arglist__7250){
var elem = cljs.core.first(arglist__7250);
arglist__7250 = cljs.core.next(arglist__7250);
var k = cljs.core.first(arglist__7250);
arglist__7250 = cljs.core.next(arglist__7250);
var v = cljs.core.first(arglist__7250);
var kvs = cljs.core.rest(arglist__7250);
return G__7224__delegate(elem,k,v,kvs);
});
G__7224.cljs$core$IFn$_invoke$arity$variadic = G__7224__delegate;
return G__7224;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__7259__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7255_7260 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7256_7261 = null;var count__7257_7262 = 0;var i__7258_7263 = 0;while(true){
if((i__7258_7263 < count__7257_7262))
{var k_7264__$1 = cljs.core._nth.call(null,chunk__7256_7261,i__7258_7263);remove_attr_BANG_.call(null,elem__$1,k_7264__$1);
{
var G__7265 = seq__7255_7260;
var G__7266 = chunk__7256_7261;
var G__7267 = count__7257_7262;
var G__7268 = (i__7258_7263 + 1);
seq__7255_7260 = G__7265;
chunk__7256_7261 = G__7266;
count__7257_7262 = G__7267;
i__7258_7263 = G__7268;
continue;
}
} else
{var temp__4092__auto___7269 = cljs.core.seq.call(null,seq__7255_7260);if(temp__4092__auto___7269)
{var seq__7255_7270__$1 = temp__4092__auto___7269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7255_7270__$1))
{var c__4150__auto___7271 = cljs.core.chunk_first.call(null,seq__7255_7270__$1);{
var G__7272 = cljs.core.chunk_rest.call(null,seq__7255_7270__$1);
var G__7273 = c__4150__auto___7271;
var G__7274 = cljs.core.count.call(null,c__4150__auto___7271);
var G__7275 = 0;
seq__7255_7260 = G__7272;
chunk__7256_7261 = G__7273;
count__7257_7262 = G__7274;
i__7258_7263 = G__7275;
continue;
}
} else
{var k_7276__$1 = cljs.core.first.call(null,seq__7255_7270__$1);remove_attr_BANG_.call(null,elem__$1,k_7276__$1);
{
var G__7277 = cljs.core.next.call(null,seq__7255_7270__$1);
var G__7278 = null;
var G__7279 = 0;
var G__7280 = 0;
seq__7255_7260 = G__7277;
chunk__7256_7261 = G__7278;
count__7257_7262 = G__7279;
i__7258_7263 = G__7280;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7259 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7259__delegate.call(this,elem,k,ks);};
G__7259.cljs$lang$maxFixedArity = 2;
G__7259.cljs$lang$applyTo = (function (arglist__7281){
var elem = cljs.core.first(arglist__7281);
arglist__7281 = cljs.core.next(arglist__7281);
var k = cljs.core.first(arglist__7281);
var ks = cljs.core.rest(arglist__7281);
return G__7259__delegate(elem,k,ks);
});
G__7259.cljs$core$IFn$_invoke$arity$variadic = G__7259__delegate;
return G__7259;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7283 = dommy.template.__GT_node_like.call(null,elem);G__7283.style.display = ((show_QMARK_)?"":"none");
return G__7283;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7285 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7285,false);
return G__7285;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7287 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7287,true);
return G__7287;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__7289 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__7289["constructor"] = Object);
return G__7289;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
