/*
 *  __  __      _           _      _   ___ _                        
 * |  \/  |__ _| |_ ___ _ _(_)__ _| | | _ ) |___  __ _ __ _ ___ _ _ 
 * | |\/| / _` |  _/ -_) '_| / _` | | | _ \ / _ \/ _` / _` / -_) '_|
 * |_|  |_\__,_|\__\___|_| |_\__,_|_| |___/_\___/\__, \__, \___|_|  
 *                                               |___/|___/     
 *
 * Script For Material Blogger By Dihak - Bloggerku.com
*/
// JQuery hover event with timeout by Taufik Nurrohman https://plus.google.com/108949996304093815163/about
!function(n){n.fn.hoverTimeout=function(t,u,e,i){return this.each(function(){var o=null,c=n(this);c.hover(function(){clearTimeout(o),o=setTimeout(function(){u.call(c)},t)},function(){clearTimeout(o),o=setTimeout(function(){i.call(c)},e)})})}}(jQuery);

// jQuery OwlCarousel v1.3.2 
 !function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);

//Smoothscroll
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 P(){7(k.H){3 e=k.H,s=k.1L,c=L.1H,t=e.B;7(q=k.28.26("25")>=0?s:e,z=e,18=!0,1R!=1Q)17=!0;1s 7(t>c&&(e.13<=c||s.13<=c)&&(q.G.2l="1I",q.13<=c)){3 o=k.1Y("1X");o.G.2j="1W",e.1U(o)}1h||(e.G.1f="S",s.G.1f="S"),1j&&D("1S",1G)}}4 12(e,s,c,t){7(t||(t=2g),1q(s,c),j.1k({x:s,y:c,Z:0>s?.K:-.K,R:0>c?.K:-.K,1m:+1v 1y}),!J){3 o=4(){1e(3 r=+1v 1y,n=0,a=0,i=0;i<j.T;i++){3 l=j[i],U=r-l.1m,u=U>=V,d=u?1:U/V;1t&&(d=1u(d));3 f=l.x*d-l.Z>>0,m=l.y*d-l.R>>0;n+=f,a+=m,l.Z+=f,l.R+=m,u&&(j.1V(i,1),i--)}7(s){3 h=e.W;e.W+=n,n&&e.W===h&&(s=0)}7(c){3 p=e.C;e.C+=a,a&&e.C===p&&(c=0)}s||c||(j=[]),j.T?1K(o,t/1c+1):J=!1};1K(o,0),J=!0}}4 1d(e){18||P();3 s=e.X,c=Y(s);7(!c||e.1g||N(z,"11")||N(s,"11")&&/\\.2i/i.Q(s.2k))5!0;3 t=e.2m||0,o=e.1O||0;t||o||(o=e.1P||0),E.1l(t)>1.2&&(t*=14/1n),E.1l(o)>1.2&&(o*=14/1n),12(c,-t,-o),e.1o()}4 1G(e){3 s=e.X,c=e.1Z||e.20||e.21;7(/23|24|11/i.Q(s.1p)||s.2h||e.1g||c)5!0;7(N(s,"1N")&&e.1r===8.15)5!0;3 t,o=0,r=0,n=Y(z),a=n.16;2A(n==k.H&&(a=L.1H),e.1r){g 8.1w:r=-A;b;g 8.1x:r=A;b;g 8.15:t=e.1T?1:-1,r=-t*a*.9;b;g 8.1z:r=.9*-a;b;g 8.1A:r=.9*a;b;g 8.1B:r=-n.C;b;g 8.1C:3 i=n.B-n.C-a;r=i>0?i+10:0;b;g 8.1D:o=-A;b;g 8.1E:o=A;b;22:5!0}12(n,o,r),e.1o()}4 1F(e){z=e.X}4 I(e,s){1e(3 c=e.T;c--;)O[w(e[c])]=s;5 s}4 Y(e){3 s=[],c=q.B;27{3 t=O[w(e)];7(t)5 I(s,t);7(s.1k(e),c===e.B){7(!17||q.16+10<c)5 I(s,k.H)}1s 7(e.16+10<e.B&&(M=29(e,"").2a("M"),"S"===M||"1I"===M))5 I(s,e)}2b(e=e.2c)}4 D(e,s,c){L.2d(e,s,c||!1)}4 2e(e,s,c){L.2f(e,s,c||!1)}4 N(e,s){5 e.1p.19()===s.19()}4 1q(e,s){e=e>0?1:-1,s=s>0?1:-1,(v.x!==e||v.y!==s)&&(v.x=e,v.y=s,j=[])}4 1a(e){3 s,c,t;5 e*=1J,1>e?s=e-(1-E.1b(-e)):(c=E.1b(-1),e-=1,t=1-E.1b(-e),s=c+t*(1-c)),s*F}4 1u(e){5 e>=1?1:0>=e?0:(1==F&&(F/=1a(1)),1a(e))}3 1c=1M,V=2n,14=1M,1t=!0,1J=6,F=1,1j=!0,A=2o,17=!1,v={x:0,y:0},18=!1,1h=!0,q=k.1L,z,8={1D:2p,1w:2q,1E:2r,1x:2s,15:2t,1z:2u,1A:2v,1C:2w,1B:2x},j=[],J=!1,O={};2y(4(){O={}},2z);3 w=4(){3 e=0;5 4(s){5 s.w||(s.w=e++)}}(),1i=/2B/.Q(2C.2D.19());1i&&(D("2E",1F),D("2F",1d),D("2G",P));',62,167,'|||var|function|return||if|ssc_key|||break|||||case|||ssc_que|document||||||ssc_root|||||ssc_direction|ssc_uniqueID|||ssc_activeElement|ssc_arrowscroll|scrollHeight|scrollTop|ssc_addEvent|Math|ssc_pulseNormalize|style|body|ssc_setCache|ssc_pending|99|window|overflow|ssc_isNodeName|ssc_cache|ssc_init|test|lastY|scroll|length|_|ssc_animtime|scrollLeft|target|ssc_overflowingAncestor|lastX||embed|ssc_scrollArray|offsetHeight|ssc_stepsize|spacebar|clientHeight|ssc_frame|ssc_initdone|toLowerCase|ssc_pulse_|exp|ssc_framerate|ssc_wheel|for|backgroundAttachment|defaultPrevented|ssc_fixedback|ischrome|ssc_keyboardsupport|push|abs|start|120|preventDefault|nodeName|ssc_directionCheck|keyCode|else|ssc_pulseAlgorithm|ssc_pulse|new|up|down|Date|pageup|pagedown|home|end|left|right|ssc_mousedown|ssc_keydown|innerHeight|auto|ssc_pulseScale|setTimeout|documentElement|150|button|wheelDeltaY|wheelDelta|self|top|keydown|shiftKey|appendChild|splice|both|div|createElement|ctrlKey|altKey|metaKey|default|input|textarea|CSS|indexOf|do|compatMode|getComputedStyle|getPropertyValue|while|parentNode|addEventListener|ssc_removeEvent|removeEventListener|1e3|isContentEditable|pdf|clear|src|height|wheelDeltaX|500|50|37|38|39|40|32|33|34|35|36|setInterval|1e4|switch|chrome|navigator|userAgent|mousedown|mousewheel|load'.split('|'),0,{}))


Force_Tag = [
'[pre]','<pre>',
'[/pre]','</pre>',
'<pre class="brush: plain; title: ; notranslate" title="">','&lt;code&gt;',
'</pre>','</code>'
];

(function(md) {
	function e(e, a) {
	    var s = '<li><ul class="' + e + '">';
	    md('li', a).each(function() {
	        var a = md(this).text(),
	            i = a.substr(0, 1),
	            o = a.substr(1),
	            r = md(this).find('i').length ? '<i class="' + md(this).find('i').attr('class') + '"></i>' : '',
	            n = md(this).find('a').attr('href');
	        s = '_' == i || '-' == i ? s + ('<li><a href="' + n + '">' + r + o + '</a></li>') : s + ('</ul></li><li><a href="' + n + '">' + r + a + '</a><ul class="' + e + '">')
	    }), s += '</ul></li>', md(a).html(s), md('ul', a).each(function() {
	        var e = md(this);
	        0 == e.html().replace(/\s| /g, '').length && e.remove()
	    }), md('li', a).each(function() {
	        var e = md(this);
	        0 == e.html().replace(/\s| /g, '').length && e.remove()
	    })
	}
	md('.menu').each(function() {
	    e('sub-menu', this),md(this).addClass('show')
	}), md('.sub-menu').each(function() {
	    e('sub-sub-menu', this)
	})
	md('body').append('<div class="responsive-menu"><div class="res-menu-area"><div class="resmenu-innner"><div class="res-menu-inner"><ul class="res-menu"></ul></div></div></div></div>'), md('.menu').each(function() {
	    var e = md(this);
	    e.parents('.widget'), e = e.html(), md('.res-menu').append(e)
	})
	md('.sub-menu').parent('li').addClass('submenu'),md('.sub-sub-menu').parent('li').addClass('submenu2');
	md('nav .menu').append('<div class="indicator"></div>')
	md(".indicator").css("left",md("nav li").first().offset().left)
	md("ul.menu > li").mouseenter(function() {
	    var kirind = md(this).offset().left; kiri1 = md("nav li").first().offset().left
		md(".indicator").css("left",kirind)
	}).mouseleave(function() {md(".indicator").css("left",kiri1)})
	md(".menu .submenu,.menu .submenu2").hoverTimeout(500, function() {
	    md(this).children('ul,.mega-menu').slideDown(500)
	}, 300, function() {
	    md(this).children('ul,.mega-menu').slideUp(500)
	})
	md('#seacrh-btn').click( function(){
	  md('body').addClass('mode-search');
	  md('.input-search').focus();
	});

	md('.icon-close').click( function(){
	  md('body').removeClass('mode-search');
	});
	md('.tombol-responsive').on('click', function() {
		  if (md('.tombol-menu').hasClass('icon-to-arrow')) {
	        md('.tombol-menu').removeClass('icon-to-arrow');
	        md('.tombol-menu').addClass('icon-from-arrow');
	      } else {
	        md('.tombol-menu').removeClass('icon-from-arrow');
	        md('.tombol-menu').addClass('icon-to-arrow');
	      }
	      md('.responsive-menu').toggleClass('active')
	      md('body').toggleClass('show-res-menu')
	});
	md('.res-menu .submenu > a, .res-menu .submenu2 > a').attr("href", "javascript:;").click(function(){
		if (!md(this).parent('li').hasClass('submenu2')){
			md('.open').removeClass('open')
			md('.sub-menu,.sub-sub-menu,.mega-menu').slideUp(500)
		}
		b = md(this).next()
		if(b.is(":visible")) {
	        md(this).removeClass("open");
	        b.slideUp(500)
	    } else {
	        md(this).addClass("open");
	        b.slideDown(500)
	    }
	})
	md("body").click(function(e) {
	if (md('.tombol-menu').hasClass('icon-to-arrow')) {
	    0 === md(e.target).closest(".responsive-menu,.tombol-responsive").length && md('.tombol-responsive').click()
	}
	});
	md(function() {
	    function a(a, t, e) {
	        $.ajax({
	            type: "GET",
	            url: a,
	            async: !0,
	            contentType: "application/json",
	            dataType: "jsonp",
	            success: function(a) {
	                var i = a.feed.entry;
	                if (i){
	                  var z = '';
	                  for (var s = 0; s < i.length; s++) {
	                      for (var n = i[s], l = 0; l < n.link.length; l++)
	                          if ("alternate" == n.link[l].rel) {
	                              var r = n.link[l].href;
	                              break
	                          }
	                      try {
	                          var d = n.media$thumbnail.url.replace("s72-c", "w225-h150-c")
	                      } catch (c) {
	                          var d
	                      }
	                      var o = n.title.$t,
	                          v = getmeta(n.published.$t),
	                          h = n.category[0].term;
	                      if (-1 !== d.indexOf("img.youtube.com")) {
	                          d = n.media$thumbnail.url.replace("default.jpg", "maxresdefault.jpg");
	                          var f = "<img class='yimg' src='" + d + "'/>"
	                      } else var f = "<img src='" + d + "'/>";
	                      if (t.parent('ul').hasClass('res-menu')){
	                        z += "<div class='mitem'><div class='minfo'><h3><a href='" + r + "'>" + o + "</a></h3>" + v + "</div></div>"
	                      }else{
	                        z += "<div class='mitem'><div class='mgambar'><a href='" + r + "'>" + f + "</a></div><div class='minfo'><h3><a href='" + r + "'>" + o + "</a></h3>" + v + "</div></div>";
	                      }
	                      
	                  };t.find(e).append(z),t.find('.mega-menu').removeClass('loading');
	                }else t.find(e).removeClass('loading').append('<span class="nop">&#xf143; No Post Found</span>')
	            }
	        })
	    }
	    function getmeta(t) {
	        var e = new Array;
	        e[1] = "Jan",
	        e[2] = "Feb",
	        e[3] = "Mar",
	        e[4] = "Apr",
	        e[5] = "May",
	        e[6] = "Jun",
	        e[7] = "Jul",
	        e[8] = "Aug",
	        e[9] = "Sep",
	        e[10] = "Oct",
	        e[11] = "Nov",
	        e[12] = "Dec";
	        var a = t.substring(0, 4)
	          , s = t.substring(5, 7)
	          , r = t.substring(8, 10)
	          , n = '<span class="mdate"><i class="fa fa-clock-o"></i> ' + e[parseInt(s, 10)] + " " + r + " " + a + "</span> ";
	        return n
	    }
	    md('li.submenu').one('mouseenter touchstart', function() {
	        var e = md(this),
	            b = e.find('li'),
	            i = b.text();
	        if (/label/g.test(i) && !(/,/g.test(i))) {
	          b.parent('ul').remove(),i = i.replace(/label\//g, '')
	            var l = "/feeds/posts/summary/-/" + i + "?max-results=4&alt=json-in-script";
	            e.append('<div class="mega-menu loading"></div>'), a(l, e, ".mega-menu")
	        }
	        if (/label/g.test(i) && /,/g.test(i)) {
	          b.parent('ul').remove(),i = i.replace(/label\//g, ''),e.addClass('label')
	            e.append('<div class="mega-menu loading"></div>');
	            var l = i;
	            for (var isi = "<ul class='tab-outer'>", r = 0, i = l.split(','); r < i.length; r++){
	                var label = i[r],
	                    p = "<li>" + label +"</li>";
	                    isi += p
	            }
	            isi += "</ul>"
	            e.find('.mega-menu').append(isi);
	            li = e.find(".tab-outer li")
	            if (li.length > 0) {
	                for (var i = "<div class='isi-tab-outer'>", s = 1; s <= li.length; s++) {
	                    i += "<div class='isi-tab" + s + "'></div>"
	                }
	                i += "</div>", e.find('.mega-menu').append(i), li.first().addClass('active'), e.find(".isi-tab-outer>div").hide(0), e.find(".isi-tab-outer>div").first().show(0), li.each(function() {
	                    md(this).mouseenter(function() {
	                        var a = (md(this), md(this).index()) + 1;
	                        e.find(".isi-tab-outer>div").each(function() {
	                            md(this).hasClass("isi-tab" + a) ? md(this).stop().fadeIn("fast") : md(this).stop().hide(0);
	                        });
	                        li.removeClass("active"), md(this).addClass("active")
	                    })
	                    var d = md(this).text(),
	                        s = "/feeds/posts/summary/-/" + d + "?max-results=3&alt=json-in-script",
	                        n = md(this).index() + 1;
	                    a(s, e, ".isi-tab" + n)
	                })
	            }
	        }
	    })
	})
    backtotop&&(md("body").append('<div id="back-to-top"><i class="fa fa-arrow-up"</div>'),md("#back-to-top").click(function(){md("html,body").animate({scrollTop:"0"})}));
	md(function(){
	  var shrinkHeader = 100;
	  md(window).scroll(function() {
	    var scroll = getCurrentScroll();
	    if ( scroll >= shrinkHeader ) {
	      md('header').addClass('kecil'),backtotop&&md('#back-to-top').addClass('show');
	    }else {
	      md('header').removeClass('kecil'),backtotop&&md('#back-to-top').removeClass('show');;
	    }
	  });
	  function getCurrentScroll() {
	    return window.pageYOffset;
	  }
	});

	//Widget
	md('#sidebar h2').each(function() {
	    t = md(this).text().replace('[', '<i class="').replace(']', '"></i>');
	    md(this).html(t)
	})
	md('.social li').each(function () {
	    var e = md(this),
	        t = e.find('.hide-count').text(),
	        d = (e.hasClass('facebook')) ? 'Fans' : (e.hasClass('youtube') || e.hasClass('rss')) ? 'Subcribers' : 'Followers',
	        c = (e.hasClass('facebook')) ? 'Like' : (e.hasClass('google')) ? '+1' : (e.hasClass('youtube') || e.hasClass('rss')) ? 'Subcribe' : 'Follow'
	        h = t.slice((t.indexOf("[")+1),t.indexOf("]"));
	    e.find('.item-count').text(h),e.find('.social-name').text(d),e.find('.social-tombol').text(c),e.find('.hide-count').remove();
	})
	md('#tab-sidebar').find('.widget').each(function() {
	    title = md(this).find('h2').text(), md(this).attr('data-tab', title)
	})
	md('#tab-sidebar').each(function(){
	    var i = md(this),
	        a = i.children("[data-tab]");
	    i.prepend('<ul class="tab-wrapper"></ul><div class="tab-isi"></div>'), md('.tab-isi').append(a).each(function(){
	        md(this).children("div").each(function(){
	            md(this).removeClass('widget'),i.find(".tab-wrapper").append("<li><a href='#'>" + md(this).data("tab") + "</a></li>")
	        })
	    });
	    md(".tab-wrapper li:first a,.tab-isi > div:first").addClass("active");
	    md('.tab-isi > div:not(.active)').addClass('t-kanan');
	    md(".tab-wrapper li a").click(function() {
	        md(".tab-wrapper li a,.tab-isi > div").removeClass("active");
	        md(this).addClass("active");
	        var activeTab = md(this).parent().index();
	        md('.tab-isi > div').removeClass('t-kanan').removeClass('t-kiri')
	        md('.tab-isi > div').eq(activeTab).addClass('active')
	        md('.tab-isi > div').eq(activeTab).nextAll().addClass('t-kanan')
	        md('.tab-isi > div').eq(activeTab).prevAll().addClass('t-kiri')
	        md('#tab-sidebar').css("height", (md('.tab-isi > div').eq(activeTab).height() + md('.tab-wrapper').height() + 5) + "px");
	        return false;
	    });
	})
	md(document).ready(function() {md('#tab-sidebar').css("height", md('#tab-sidebar').height() + "px");})
	md(".popular-posts ul li .item-snippet").each(function() {
	    var t = md(this).text().substr(0, 40),
	        s = t.lastIndexOf(" ");
	    s > 21 && md(this).text(t.substr(0, s).replace(/[?,!\.-:;]*$/, "..."))
	});
	function fb(t, e, a) {
	  e.addClass('FBboxDihak'), a.remove(), e.html('<div id="FBbox"><div class="fb-page" data-href="' + t + '" data-width="500"></div></div>')
	}
	function getmeta(t) {
	    var e = new Array;
	    e[1] = "Jan",
	    e[2] = "Feb",
	    e[3] = "Mar",
	    e[4] = "Apr",
	    e[5] = "May",
	    e[6] = "Jun",
	    e[7] = "Jul",
	    e[8] = "Aug",
	    e[9] = "Sep",
	    e[10] = "Oct",
	    e[11] = "Nov",
	    e[12] = "Dec";
	    var a = t.substring(0, 4)
	      , s = t.substring(5, 7)
	      , r = t.substring(8, 10)
	      , n = '<span class="recentdate"><i class="fa fa-clock-o"></i> ' + e[parseInt(s, 10)] + " " + r + " " + a + "</span> ";
	    return n
	}
	function getauthor(t) {
	    for (var e = 0; e < t.length; e++)
	        var a = "<span class='authorname'><i class='fa fa-user'></i> " + t[e].name.$t + "</span>";
	    return a
	}
	function getlabel(e) {
	    if (e.category[0] !== "undefined") {
	        return e.category[0].term
	    }
	}
	function sliderbig(e, t) {
	    var theLabel = e.replace(/sliderbig\//g, ''),
	        n = "/feeds/posts/summary" + (theLabel === '' ? "" : "/-/" + theLabel) + "?max-results="+sliderbignum+"&alt=json-in-script",
	        currentItem = t;
	    $.ajax({
	        type: "GET",
	        url: n,
	        async: true,
	        contentType: "application/json",
	        dataType: "jsonp",
	        success: function(e) {
	            var a = e.feed.entry;
	            if (a) {
	                currentItem.html('<div class="single-outer"><ul id="slider"></ul></div>');
					width = md('.single-outer').width()
	                for (var t = 0; t < a.length; t++) {
	                    for (var r, l = a[t], s = 0; s < l.link.length; s++)
	                        if ("alternate" == l.link[s].rel) {
	                            var i = l.link[s].href;
	                            break
	                        }
	                    r = void 0 !== l.media$thumbnail ? l.media$thumbnail.url.replace("s72-c", "w" + width + "-h400-c") : "http://www.sdpb.org/s/photogallery/img/no-image-available.jpg";
	                    var n = l.title.$t,
	                        d = l.summary.$t.substr(0, 150) + "...",
	                        o = getlabel(l),
	                        c = getauthor(l.author),
	                        u = (getmeta(l.published.$t), '<li class="item-slider"><a href="' + i + '"><img src="' + r + '" title="' + n + '" width="' + width + '" height="400"/></a><div class="content"><div class="meta"><a class="label" href="/search/label/' + o + '">' + '#' + o + "</a>" + c + '</div><h3><a href="' + i + '">' + n + "</a></h3><p>" + d + "</p></div></li>");
	                    currentItem.removeClass("hide").find("#slider").append(u)
	                }
	                currentItem.find("#slider").owlCarousel({
	                    nav: true,
	                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	                    autoplay: true,
	                    loop: true,
	                    autoplayTimeout: 3500,
	                    autoplayHoverPause: true,
	                    items: 1
	                }), currentItem.addClass("loaded").removeClass("unloaded").fadeIn()
	            }
	        }
	    })
	};
	function recentcomment(r) {
	    var s = "/feeds/comments/default?alt=json-in-script&max-results="+num_comment;
	    $.ajax({
	        type: "GET",
	        url: s,
	        async: true,
	        contentType: "application/json",
	        dataType: "jsonp",
	        success: function(t) {
	      r.html('')
	            for (var e = 0; e < t.feed.entry.length; e++) {
	                for (var a = t.feed.entry[e], s = 0; s < a.link.length; s++)
	                    if ("alternate" == a.link[s].rel) {
	                        var n = a.link[s].href;
	                        break
	                    }else{
	                      var n = '/';
	                    }
	                var l = a.author[0].name.$t,
	                    d = /blogblog/g.test(a.author[0].gd$image.src) ? defaultavatar : a.author[0].gd$image.src.replace("s512-c", "s50-c"),
	                    o = a.content.$t.length <= 65 ? a.content.$t : a.content.$t.substr(0, a.content.$t.replace(/<br *\/?>|[\s]+/gi, ' ').replace(/<.*?>|[<>]/g, '').replace(/\[\S[^\]]*\]/g, '').substr(0, 65).lastIndexOf(" ")) + ' ...',
						s = (n.split('-').join(' ').substring(n.lastIndexOf('/') + 1, n.lastIndexOf('.')))
	                    c = getmeta(a.published.$t),
						m = a.link.length > 2 ? ('<div class="cm-info"><a href="' + n +'">' + s.substr(0, s.substr(0, 30).lastIndexOf(" ")) + '... </a>' + c + '</div>') : '';
	                    if(display_emo)for(i=0;i<Emo_List.length;i+=2)if(o.indexOf(Emo_List[i])>0){var p=' <img src="'+Emo_List[i+1]+'" title="'+Emo_List[i]+'" alt="'+Emo_List[i]+'" width="15" height="15" class="comment_emo"/>',b=Emo_List[i];o=o.replace(" "+b,p)}
	                r.append('<div class="cm-item"><div class="cm-photo"><a href="' + n +'"><img src="' + d + '" width="50" height="50"/></a></div><div class="cm-bubble"><div class="cm-nama"><a href="' + n +'">' + l + '</a></div><div class="cm-isi">' + o + '</div>' + m + '</div><div class="clear"/></div>')
	            }
	        }
	    })
	}
	var v = md(window).height();
	md('#slider-home').each(function() {
	  var p = md(this),
	      m = p.find('ul li a').length > 1 ? '' : p.find('ul li a').first().text();
	  p.hasClass('hide') && sliderbig(m, p)
	})
	md('.HTML').each(function() {
	  var p = md(this),
	    m = p.children('.widget-content'),
	    h = m.text();
	  !p.hasClass('widget-loaded') && (/facebook.com/g.test(h) ? fb(h, p, m) : /recentcomment/g.test(h) && recentcomment(m))
	});
	stickysidebar&&md(document).ready(function () {
    var s = md('#stickywidget'),
      w = md(window),
      d = md(document),
      l = 5,
      b1 = s.offset().top,
      t = 0,
      tp = 135;
    s.css('width', s.outerWidth(true))
    md(window).scroll(function(){
      if (md('#post-wrapper').height() > md('#sidebar-wrapper').height()){
      if (w.scrollTop() === false || w.scrollTop() === 0) {
          s.css('width', s.outerWidth(true))
      } else {
        if (w.scrollTop() > t) {
          if (md('.blog-posts.hfeed').offset().top + md('.blog-posts.hfeed').height() - w.height() < w.scrollTop()){
            s.css({position: "absolute", top: (md('.blog-posts.hfeed').offset().top + md('.blog-posts.hfeed').height() - md('#sidebar-wrapper').offset().top - s.height()), bottom: ''})
          }else{
            if (s.offset().top + s.height() - w.height() - l < w.scrollTop()){
              s.css({position: "fixed", top: '', bottom: 0})
            }else{
              s.css({position: "absolute", top: (s.offset().top - md('#sidebar-wrapper').offset().top), bottom: ''})
            }
          }
          t = w.scrollTop()
        } else if (w.scrollTop() < t) {
          if (b1 > w.scrollTop() + tp){
            s.css({position: "", top: '', bottom: ''})
          }else{
            if (s.offset().top + l > w.scrollTop() + tp) {
              s.css({position: "fixed", top: tp, bottom: ''})
              t = w.scrollTop()
            }else{
              s.css({position: "absolute", top: (s.offset().top - md('#sidebar-wrapper').offset().top), bottom: ''})
            }
            t = w.scrollTop()
          }

        }
      }
      }
    })
  });
})(jQuery);
var randomRelatedIndex,showRelatedPost;!function(e,t,a){var l={widgetTitle:"<h4 class='judul-bawah'><span>Related Post</span></h4>",numPosts:realated,summaryLength:370,titleLength:"auto",thumbnailSize:200,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:!1,callBack:function(){}},n=function(e){var l=t.createElement("script");l.type="text/javascript",l.src=e,a.appendChild(l)},r=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},s=function(e){var t,a,l=e.length;if(0===l)return!1;for(;--l;)t=Math.floor(Math.random()*(l+1)),a=e[l],e[l]=e[t],e[t]=a;return e},i="object"==typeof labelArray&&labelArray.length>0?"/-/"+s(labelArray)[0]:"",o=function(e){var t=e.feed.openSearch$totalResults.$t-l.numPosts,a=r(1,t>0?t:1);n("/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+l.numPosts+"&callback=showRelatedPost")},d=function(e){var t,a,n,r,i,o=document.getElementById(l.containerId),d=s(e.feed.entry),m=l.widgetTitle+'<ul class="related-post">',u=l.newTabLink?' target="_blank"':"",c='<span style="display:block;clear:both;"></span>';if(o){for(var h=0;h<l.numPosts&&h!=d.length;h++){a=d[h].title.$t,n="auto"!==l.titleLength&&l.titleLength<a.length?a.substring(0,l.titleLength)+"&hellip;":a,r="media$thumbnail"in d[h]&&l.thumbnailSize!==!1?d[h].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?\//,"/s"+l.thumbnailSize+"-c/"):l.noImage,i="summary"in d[h]&&l.summaryLength>0?d[h].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,l.summaryLength)+"&hellip;":"";for(var A=0,g=d[h].link.length;g>A;A++)t="alternate"==d[h].link[A].rel?d[h].link[A].href:"#";m+='<li class="related-post-item" tabindex="0"><div class="related-post-item-inner"><a class="related-post-item-title" href="'+t+'"'+u+'><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+l.thumbnailSize+'" height="'+l.thumbnailSize+'"></a><a class="related-post-item-title" title="'+a+'" href="'+t+'"'+u+">"+n+"</a>"+c+"</div></li>"}o.innerHTML=m+=c+"</ul>",l.callBack()}};randomRelatedIndex=o,showRelatedPost=d,n("/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);
function trim(e){for(var r=' \n\r\t\f\x5b\x5d\x7c\x7d\x3c\x3e\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000',t=0;t<e.length;t++)if(-1!=r.indexOf(e.charAt(t))){e=e.substring(0,t);break}return e}function Valid_Par_Id(e){return r=e.indexOf("c"),-1!=r&&(e=e.substring(r+1)),e}function Cform_Ins_ParID(e){return e="&parentID="+e+"#%7B",n_cform_url=Cur_Cform_Url.replace(/#%7B/,e),n_cform_url}function Reset_Comment_Form(){html=$(Cur_Cform_Hdr).html(),$(Cur_Cform_Hdr).html(""),Cur_Cform_Hdr=".comment_form",$(Cur_Cform_Hdr).html(html),$("#comment-editor").attr("src",Cur_Cform_Url)}function Display_Reply_Form(e){par_id=$(e).attr("id"),par_id=Valid_Par_Id(par_id),html=$(Cur_Cform_Hdr).html(),".comment_form"==Cur_Cform_Hdr?(reset_html='<a href="#origin_cform" onclick="Reset_Comment_Form()">'+Msgs.addComment+'</a><a name="origin_cform"/>',$(Cur_Cform_Hdr).html(reset_html)):$(Cur_Cform_Hdr).html(""),Cur_Cform_Hdr="#r_f_c"+par_id,$(Cur_Cform_Hdr).html(html),$("#comment-editor").attr("src",Cform_Ins_ParID(par_id)),display_emo&&$(".emo-button").on("click",function(){$(this).toggleClass("active"),$(this).hasClass("active")?$(".arrow-bawah").slideDown(100,function(){$(".comment_emo_list").slideDown(500)}):$(".comment_emo_list").slideUp(500,function(){$(".arrow-bawah").slideUp(100)})})}function blockLinks(e,r){for(var t=document.getElementById(e),i=t.getElementsByTagName(r),o=0;o<i.length;o++)-1!==i[o].innerHTML.indexOf("</a>")&&(i[o].innerHTML="No more <span style='background-color:rgba(255,255,255,0.3);color:#fff;padding:4px 8px;border-radius:3px'><b>live link</b></span> in this comments field",i[o].className="spammer-detected")}var Cur_Cform_Hdr=".comment_form",Cur_Cform_Url=$("#comment-editor").attr("src");$("#comment_block .comment_body p").html(function(e,r){if(Replace_Youtube_Link)for(var t="https://www.youtube.com/watch?v=",i=r.indexOf(t);-1!=i;){ht=r.substring(i),yt_link=trim(ht);var o=(yt_link.indexOf("?"),yt_link.substring(t.length)),m='<iframe class="comment-media video youtube" width="100%" height="360" src="https://www.youtube.com/embed/'+o+'?autohide=1" frameborder="0" allowfullscreen></iframe>';r=r.substring(0,i)+m+r.substring(i+yt_link.length),i=r.indexOf(t),-1==i&&(t="https://www.youtube.com/watch?v=",i=r.indexOf(t))}if(Replace_Image_Link){for(var a="",n=r,s=0;s<Replace_Image_Ext.length;s++)for(var t="."+Replace_Image_Ext[s],c=n.toUpperCase(),i=c.indexOf(t);-1!=i;){img_src=n.substring(0,i+t.length),c=img_src.toUpperCase();for(var l="HTTP://",_=c.indexOf(l),d="";-1!=_;)d=l.toLowerCase(),img_src=img_src.substring(_+l.length),c=img_src.toUpperCase(),_=c.indexOf(l);for(l="HTTPS://",c=img_src.toUpperCase(),_=c.indexOf(l);-1!=_;)d=l.toLowerCase(),img_src=img_src.substring(_+l.length),c=img_src.toUpperCase(),_=c.indexOf(l);if(""==d||img_src.length<6)break;img_src=d+img_src,a+=n.substring(0,i+t.length-img_src.length)+'<img src="'+img_src+'" class="comment_img"/>',n=n.substring(i+t.length),c=n.toUpperCase(),i=c.indexOf(t)}r=a+n}if(Replace_Force_Tag){var f=Force_Tag.length;f%2==1&&f--;for(var s=0;f>s;s+=2)for(;;){var n=r.toLowerCase();if(i=n.indexOf(Force_Tag[s]),-1==i)break;r=r.substring(0,i)+Force_Tag[s+1]+r.substring(i+Force_Tag[s].length)}}return r}),display_emo&&($("#comment_block .comment_body p").each(function(){var e=$(this).html();for(i=0;i<Emo_List.length;i+=2)if($(this).html().indexOf(Emo_List[i])>0)var r=' <img src="'+Emo_List[i+1].replace("s15","s20")+'" title="'+Emo_List[i]+'" alt="'+Emo_List[i]+'" class="comment_emo"/>',t=Emo_List[i],e=e.replace(" "+t,r);$(this).html(e)}),$(".comment_emo_list").html(function(e,r){if(display_emo){var t=Emo_List.length;t%2==1&&t--;for(var i="",o=0;t>o;o+=2){var m='<img src="'+Emo_List[o+1].replace("s15","s20")+'" alt="'+Emo_List[o]+'" class="comment_emo"/>';i+='<div class="item">'+m+"</div>"}return i}}).after('<div class="arrow-bawah"/><div class="emo-dialog"/><span class="emo-button"><i class="fa fa-smile-o"></i>Emoticon</span>'),$(".comment_emo_list,.arrow-bawah").appendTo(".emo-dialog"),$(".comment_emo_list .item img").css("cursor","pointer").on("click",function(e){$(".emoKey").remove(),$(this).after('<input class="emoKey" type="text" size="'+this.alt.length+'" value=" '+this.alt+'" />'),$(".emoKey").trigger("select"),e.stopPropagation()}),$(document).on("click",function(){$(".emoKey").remove()}),$(".emo-button").on("click",function(){$(this).toggleClass("active"),$(this).hasClass("active")?$(".arrow-bawah").slideDown(100,function(){$(".comment_emo_list").slideDown(500)}):$(".comment_emo_list").slideUp(500,function(){$(".arrow-bawah").slideUp(100)})})),$(".comment_wrap .comment_body p").html(function(e,r){return temp=r.toLowerCase(),index=temp.indexOf('@<a href="#c'),-1!=index&&(index_tail=temp.indexOf("</a>",index),-1!=index_tail&&(r=r.substring(0,index)+r.substring(index_tail+4))),r}),disablelivelink&&blockLinks("comment_block","p"),cur_url=window.location.href,search_formid="#comment-form_",search_index=cur_url.indexOf(search_formid),-1!=search_index&&(ret_id=cur_url.substring(search_index+search_formid.length),Display_Reply_Form("#rc"+ret_id));for(var i=0;i<Items.length;i++)if("parentId"in Items[i]){var par_id=Items[i].parentId,par_level=parseInt($("#c"+par_id+":first").attr("data-level"));$("#c"+par_id+" .comment_child:first").html(function(e,r){var t=Items[i].id;par_level>=Config.maxThreadDepth&&$("#c"+t+":first .comment_reply").remove();var o=$("#c"+t+":first").html();return o='<div class="comment_wrap" id="c'+t+'" data-level="'+(par_level+1)+'">'+o+"</div>",$("#c"+t).remove(),r+o})}var avatar=$("#comments");avatar.find(".comment_avatar img").each(function(){var e=$(this).attr("src");$(this).show().attr("src",e.replace(/\/s[0-9]+(\-c)?\//,"/s48-c/")),/blogblog/g.test(e)&&$(this).attr("src",defaultavatar)}),!showauthor&&$(".comment_author_flag").remove();
