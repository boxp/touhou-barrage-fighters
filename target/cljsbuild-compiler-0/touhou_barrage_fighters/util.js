// Compiled by ClojureScript 0.0-2138
goog.provide('touhou_barrage_fighters.util');
goog.require('cljs.core');
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
* 
* Borrowed and updated from mmcgrana.
*/
touhou_barrage_fighters.util.clj__GT_js = (function clj__GT_js(x){if(typeof x === 'string')
{return x;
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__5794){var vec__5795 = p__5794;var k = cljs.core.nth.call(null,vec__5795,0,null);var v = cljs.core.nth.call(null,vec__5795,1,null);return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k),clj__GT_js.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
}
}
});
