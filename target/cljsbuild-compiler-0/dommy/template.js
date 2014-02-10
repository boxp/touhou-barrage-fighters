// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template.PElement = (function (){var obj6853 = {};return obj6853;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (dommy.template._elem[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (dommy.template._elem["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = document.createElement(tag);if((base_idx >= 0))
{var str_6856 = node_str.substring(base_idx);while(true){
var next_idx_6857 = dommy.template.next_css_index.call(null,str_6856,1);var frag_6858 = (((next_idx_6857 >= 0))?str_6856.substring(0,next_idx_6857):str_6856);var G__6855_6859 = frag_6858.charAt(0);if(cljs.core._EQ_.call(null,"#",G__6855_6859))
{node.setAttribute("id",frag_6858.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__6855_6859))
{dommy.attrs.add_class_BANG_.call(null,node,frag_6858.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_6858.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_6857 >= 0))
{{
var G__6860 = str_6856.substring(next_idx_6857);
str_6856 = G__6860;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__6866 = data;if(G__6866)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__6866.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6866.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6866);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6866);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6867_6871 = cljs.core.seq.call(null,data);var chunk__6868_6872 = null;var count__6869_6873 = 0;var i__6870_6874 = 0;while(true){
if((i__6870_6874 < count__6869_6873))
{var child_6875 = cljs.core._nth.call(null,chunk__6868_6872,i__6870_6874);__GT_document_fragment.call(null,result_frag,child_6875);
{
var G__6876 = seq__6867_6871;
var G__6877 = chunk__6868_6872;
var G__6878 = count__6869_6873;
var G__6879 = (i__6870_6874 + 1);
seq__6867_6871 = G__6876;
chunk__6868_6872 = G__6877;
count__6869_6873 = G__6878;
i__6870_6874 = G__6879;
continue;
}
} else
{var temp__4092__auto___6880 = cljs.core.seq.call(null,seq__6867_6871);if(temp__4092__auto___6880)
{var seq__6867_6881__$1 = temp__4092__auto___6880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6867_6881__$1))
{var c__4150__auto___6882 = cljs.core.chunk_first.call(null,seq__6867_6881__$1);{
var G__6883 = cljs.core.chunk_rest.call(null,seq__6867_6881__$1);
var G__6884 = c__4150__auto___6882;
var G__6885 = cljs.core.count.call(null,c__4150__auto___6882);
var G__6886 = 0;
seq__6867_6871 = G__6883;
chunk__6868_6872 = G__6884;
count__6869_6873 = G__6885;
i__6870_6874 = G__6886;
continue;
}
} else
{var child_6887 = cljs.core.first.call(null,seq__6867_6881__$1);__GT_document_fragment.call(null,result_frag,child_6887);
{
var G__6888 = cljs.core.next.call(null,seq__6867_6881__$1);
var G__6889 = null;
var G__6890 = 0;
var G__6891 = 0;
seq__6867_6871 = G__6888;
chunk__6868_6872 = G__6889;
count__6869_6873 = G__6890;
i__6870_6874 = G__6891;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__6893 = data;if(G__6893)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__6893.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6893.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6893);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6893);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__6894){var vec__6914 = p__6894;var tag_name = cljs.core.nth.call(null,vec__6914,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__6914,1,null);var children = cljs.core.nthnext.call(null,vec__6914,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__6916 = maybe_attrs;if(G__6916)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__6916.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6916.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6916);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6916);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__6917_6933 = cljs.core.seq.call(null,attrs);var chunk__6918_6934 = null;var count__6919_6935 = 0;var i__6920_6936 = 0;while(true){
if((i__6920_6936 < count__6919_6935))
{var vec__6921_6937 = cljs.core._nth.call(null,chunk__6918_6934,i__6920_6936);var k_6938 = cljs.core.nth.call(null,vec__6921_6937,0,null);var v_6939 = cljs.core.nth.call(null,vec__6921_6937,1,null);var G__6922_6940 = k_6938;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6922_6940))
{var seq__6923_6941 = cljs.core.seq.call(null,v_6939);var chunk__6924_6942 = null;var count__6925_6943 = 0;var i__6926_6944 = 0;while(true){
if((i__6926_6944 < count__6925_6943))
{var c_6945 = cljs.core._nth.call(null,chunk__6924_6942,i__6926_6944);dommy.attrs.add_class_BANG_.call(null,n,c_6945);
{
var G__6946 = seq__6923_6941;
var G__6947 = chunk__6924_6942;
var G__6948 = count__6925_6943;
var G__6949 = (i__6926_6944 + 1);
seq__6923_6941 = G__6946;
chunk__6924_6942 = G__6947;
count__6925_6943 = G__6948;
i__6926_6944 = G__6949;
continue;
}
} else
{var temp__4092__auto___6950 = cljs.core.seq.call(null,seq__6923_6941);if(temp__4092__auto___6950)
{var seq__6923_6951__$1 = temp__4092__auto___6950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6923_6951__$1))
{var c__4150__auto___6952 = cljs.core.chunk_first.call(null,seq__6923_6951__$1);{
var G__6953 = cljs.core.chunk_rest.call(null,seq__6923_6951__$1);
var G__6954 = c__4150__auto___6952;
var G__6955 = cljs.core.count.call(null,c__4150__auto___6952);
var G__6956 = 0;
seq__6923_6941 = G__6953;
chunk__6924_6942 = G__6954;
count__6925_6943 = G__6955;
i__6926_6944 = G__6956;
continue;
}
} else
{var c_6957 = cljs.core.first.call(null,seq__6923_6951__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6957);
{
var G__6958 = cljs.core.next.call(null,seq__6923_6951__$1);
var G__6959 = null;
var G__6960 = 0;
var G__6961 = 0;
seq__6923_6941 = G__6958;
chunk__6924_6942 = G__6959;
count__6925_6943 = G__6960;
i__6926_6944 = G__6961;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6922_6940))
{dommy.attrs.add_class_BANG_.call(null,n,v_6939);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6938,v_6939);
} else
{}
}
}
{
var G__6962 = seq__6917_6933;
var G__6963 = chunk__6918_6934;
var G__6964 = count__6919_6935;
var G__6965 = (i__6920_6936 + 1);
seq__6917_6933 = G__6962;
chunk__6918_6934 = G__6963;
count__6919_6935 = G__6964;
i__6920_6936 = G__6965;
continue;
}
} else
{var temp__4092__auto___6966 = cljs.core.seq.call(null,seq__6917_6933);if(temp__4092__auto___6966)
{var seq__6917_6967__$1 = temp__4092__auto___6966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6917_6967__$1))
{var c__4150__auto___6968 = cljs.core.chunk_first.call(null,seq__6917_6967__$1);{
var G__6969 = cljs.core.chunk_rest.call(null,seq__6917_6967__$1);
var G__6970 = c__4150__auto___6968;
var G__6971 = cljs.core.count.call(null,c__4150__auto___6968);
var G__6972 = 0;
seq__6917_6933 = G__6969;
chunk__6918_6934 = G__6970;
count__6919_6935 = G__6971;
i__6920_6936 = G__6972;
continue;
}
} else
{var vec__6927_6973 = cljs.core.first.call(null,seq__6917_6967__$1);var k_6974 = cljs.core.nth.call(null,vec__6927_6973,0,null);var v_6975 = cljs.core.nth.call(null,vec__6927_6973,1,null);var G__6928_6976 = k_6974;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6928_6976))
{var seq__6929_6977 = cljs.core.seq.call(null,v_6975);var chunk__6930_6978 = null;var count__6931_6979 = 0;var i__6932_6980 = 0;while(true){
if((i__6932_6980 < count__6931_6979))
{var c_6981 = cljs.core._nth.call(null,chunk__6930_6978,i__6932_6980);dommy.attrs.add_class_BANG_.call(null,n,c_6981);
{
var G__6982 = seq__6929_6977;
var G__6983 = chunk__6930_6978;
var G__6984 = count__6931_6979;
var G__6985 = (i__6932_6980 + 1);
seq__6929_6977 = G__6982;
chunk__6930_6978 = G__6983;
count__6931_6979 = G__6984;
i__6932_6980 = G__6985;
continue;
}
} else
{var temp__4092__auto___6986__$1 = cljs.core.seq.call(null,seq__6929_6977);if(temp__4092__auto___6986__$1)
{var seq__6929_6987__$1 = temp__4092__auto___6986__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6929_6987__$1))
{var c__4150__auto___6988 = cljs.core.chunk_first.call(null,seq__6929_6987__$1);{
var G__6989 = cljs.core.chunk_rest.call(null,seq__6929_6987__$1);
var G__6990 = c__4150__auto___6988;
var G__6991 = cljs.core.count.call(null,c__4150__auto___6988);
var G__6992 = 0;
seq__6929_6977 = G__6989;
chunk__6930_6978 = G__6990;
count__6931_6979 = G__6991;
i__6932_6980 = G__6992;
continue;
}
} else
{var c_6993 = cljs.core.first.call(null,seq__6929_6987__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6993);
{
var G__6994 = cljs.core.next.call(null,seq__6929_6987__$1);
var G__6995 = null;
var G__6996 = 0;
var G__6997 = 0;
seq__6929_6977 = G__6994;
chunk__6930_6978 = G__6995;
count__6931_6979 = G__6996;
i__6932_6980 = G__6997;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6928_6976))
{dommy.attrs.add_class_BANG_.call(null,n,v_6975);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6974,v_6975);
} else
{}
}
}
{
var G__6998 = cljs.core.next.call(null,seq__6917_6967__$1);
var G__6999 = null;
var G__7000 = 0;
var G__7001 = 0;
seq__6917_6933 = G__6998;
chunk__6918_6934 = G__6999;
count__6919_6935 = G__7000;
i__6920_6936 = G__7001;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e7002){if((e7002 instanceof ReferenceError))
{var __7003 = e7002;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7002;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__7005 = data;if(G__7005)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7005.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7005.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7005);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7005);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
