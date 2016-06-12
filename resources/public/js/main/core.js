// Compiled by ClojureScript 0.0-2280
goog.provide('main.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
main.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
main.core.set_value_BANG_ = (function set_value_BANG_(id,value){cljs.core.swap_BANG_.call(null,main.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);
return cljs.core.swap_BANG_.call(null,main.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
main.core.get_value = (function get_value(id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,main.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
/**
* @param {...*} var_args
*/
main.core.row = (function() { 
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__5201){
var label = cljs.core.first(arglist__5201);
var body = cljs.core.rest(arglist__5201);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
main.core.text_input = (function text_input(id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),main.core.get_value.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__5202_SHARP_){return main.core.set_value_BANG_.call(null,id,p1__5202_SHARP_.target.value);
})], null)], null)], null);
});
main.core.list_item = (function list_item(id,k,v,selections){var handle_click_BANG_ = (function handle_click_BANG_(){cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.not);
return main.core.set_value_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("list-group-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(k.call(null,cljs.core.deref.call(null,selections)))?" active":null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_click_BANG_], null),v], null);
});
/**
* @param {...*} var_args
*/
main.core.selection_list = (function() { 
var selection_list__delegate = function (id,label,items){var selections = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5213){var vec__5214 = p__5213;var k = cljs.core.nth.call(null,vec__5214,(0),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),items)));return ((function (selections){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__4269__auto__ = ((function (selections){
return (function iter__5215(s__5216){return (new cljs.core.LazySeq(null,((function (selections){
return (function (){var s__5216__$1 = s__5216;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5216__$1);if(temp__4126__auto__)
{var s__5216__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5216__$2))
{var c__4267__auto__ = cljs.core.chunk_first.call(null,s__5216__$2);var size__4268__auto__ = cljs.core.count.call(null,c__4267__auto__);var b__5218 = cljs.core.chunk_buffer.call(null,size__4268__auto__);if((function (){var i__5217 = (0);while(true){
if((i__5217 < size__4268__auto__))
{var vec__5221 = cljs.core._nth.call(null,c__4267__auto__,i__5217);var k = cljs.core.nth.call(null,vec__5221,(0),null);var v = cljs.core.nth.call(null,vec__5221,(1),null);cljs.core.chunk_append.call(null,b__5218,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.list_item,id,k,v,selections], null));
{
var G__5223 = (i__5217 + (1));
i__5217 = G__5223;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5218),iter__5215.call(null,cljs.core.chunk_rest.call(null,s__5216__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5218),null);
}
} else
{var vec__5222 = cljs.core.first.call(null,s__5216__$2);var k = cljs.core.nth.call(null,vec__5222,(0),null);var v = cljs.core.nth.call(null,vec__5222,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.list_item,id,k,v,selections], null),iter__5215.call(null,cljs.core.rest.call(null,s__5216__$2)));
}
} else
{return null;
}
break;
}
});})(selections))
,null,null));
});})(selections))
;return iter__4269__auto__.call(null,items);
})()], null)], null)], null);
});
;})(selections))
};
var selection_list = function (id,label,var_args){
var items = null;if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return selection_list__delegate.call(this,id,label,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__5224){
var id = cljs.core.first(arglist__5224);
arglist__5224 = cljs.core.next(arglist__5224);
var label = cljs.core.first(arglist__5224);
var items = cljs.core.rest(arglist__5224);
return selection_list__delegate(id,label,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
main.core.save_doc = (function save_doc(){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/save"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main.core.state)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){return cljs.core.swap_BANG_.call(null,main.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
main.core.home = (function home(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,main.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),main.core.save_doc], null),"Submit"], null))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map