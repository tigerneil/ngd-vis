!function(t){function s(s){for(var a,n,l=s[0],h=s[1],o=s[2],p=0,d=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(a in h)Object.prototype.hasOwnProperty.call(h,a)&&(t[a]=h[a]);for(c&&c(s);d.length;)d.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,l=1;l<e.length;l++){var h=e[l];0!==r[h]&&(a=!1)}a&&(i.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},r={0:0},i=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="";var l=window.webpackJsonp=window.webpackJsonp||[],h=l.push.bind(l);l.push=s,l=l.slice();for(var o=0;o<l.length;o++)s(l[o]);var c=h;i.push([70,1]),e()}({68:function(t,s,e){t.exports=e.p+"index.html"},69:function(t,s,e){},70:function(t,s,e){"use strict";e.r(s);var a=e(0),r=e(82),i=e(71),n=e(72);class l{constructor(t){this.element=t,this.eventListeners=[]}bind(t,s){for(const e of t.split(" ")){this.eventListeners.push({eventName:e,eventFunction:s});const t=t=>s(t.detail,t);this.element.addEventListener(e,t,!1)}}getListeners(){return this.eventListeners}trigger(t,s){this.element.dispatchEvent(new CustomEvent(t,{detail:s}))}}class h{constructor(t,s,e=0){this.parent=t,this.eventHandler=s||new l(this.parent.node()),this.ID=e}newInstance(t){}get events(){return{noEvent:(t=>`${this.baseName}_${t}`)("NoEvent")}}get baseName(){return`${this.cssname}_ID${this.ID}`}updateOptions(t){Object.keys(t).forEach(s=>this.options[s]=t[s])}destroy(){this.base.remove()}}class o{static translate(t,s){return`translate(${t},${s})`}static rotate(t,s){return null==s?`rotate(${t})`:`rotate(${t},${s.x},${s.y})`}static skew(t,s=0){return`skew(${t}, ${s})`}static skewX(t){return`skewX(${t})`}static skewY(t){return`skewY(${t})`}static scale(t,s){return`scale(${t}, ${null!=s?s:t})`}static group(t,s,e={x:0,y:0}){return t.append("g").attr("class",s).attr("transform",o.translate(e.x,e.y))}static addSVG(t,s,e,a){return t.append("svg").attr("width","100%").attr("height","100%").attr("viewBox","0 0 "+(s+a.left+a.right)+" "+(e+a.top+a.bottom)).attr("preserveAspectRatio","xMidYMid meet").append("g").attr("transform",o.translate(a.left,a.top))}static addArrows(t){t.append("defs").append("marker").attr("id","arrow").attr("markerUnits","strokeWidth").attr("markerWidth",9).attr("markerHeight",9).attr("viewBox","0 0 12 12").attr("refX",6).attr("refY",6).attr("orient","auto").append("path").attr("d","M2,2 L10,6 L2,10 L6,6 L2,2").style("fill: #f00")}static insertArrow(t,s,e,a,r,i,n){return t.append("line").attr("x1",s).attr("y1",e).attr("x2",a).attr("y2",r).attr("stroke",i).attr("stroke-width",n).attr("marker-end","url(#arrow)")}static meshgrid(t,s,e,a){const i=(t,s)=>t.map(t=>t*(s[1]-s[0])+s[0]);return((t,s)=>{const e=[];return t.forEach(t=>{s.forEach(s=>{e.push({x:t,y:s})})}),e})(i(r.a(0,t).map(s=>(s+.5)/t),e),i(r.a(0,s).map(t=>(t+.5)/s),a))}}class c extends h{constructor(t,s,e={}){super(t,s),this.options={margin:{top:0,right:0,bottom:0,left:0},maxWidth:450,maxHeight:450}}initSVG(t={},s=[]){this.updateOptions(t);const e=this.options;e.width=e.maxWidth-(e.margin.left+e.margin.right),e.height=e.maxHeight-(e.margin.top+e.margin.bottom),this.svg=o.addSVG(this.parent,e.width,e.height,e.margin),this.base=o.group(this.svg,""),this.layers={},s&&s.forEach(t=>{this.layers[t]=o.group(this.base,t)}),this.init()}}const p=t=>t.x*t.y-1,d=a.n().domain([0,.8]).range([.001,.25]);class u{constructor(t=0,s=.1,e=p,a=d){this.err=e,this.q=t,this.eta=s,this.step2lr=a}get lrScale(){return this.step2lr(this.eta)}absErr(t){return Math.abs(this.err(t))}loss(t){return Math.pow(this.err(t),2)}gradient(t){const s=this.err(t);return{x:t.y*s,y:t.x*s}}eigenvalues(t){const s=(t,s)=>Math.pow(t,2)+Math.pow(s,2);return{x:s(t.x,t.y),y:s(t.x,t.y)}}dv(t){const s=this.gradient(t),e=this.eigenvalues(t);return{x:-s.x/Math.abs(Math.pow(e.x,this.q)),y:-s.y/Math.abs(Math.pow(e.y,this.q))}}lr(t){const s=this.dv(t),e=this.absErr(t),a=this.step2lr(this.eta);return{x:a*s.x/e,y:a*s.y/e}}next(t){const s=this.dv(t);return{x:t.x+s.x*this.eta,y:t.y+s.y*this.eta}}nextLr(t){const s=this.lr(t);return{x:t.x+s.x,y:t.y+s.y}}}class x extends u{eigenvalues(t){return{x:2*Math.pow(t.y,2),y:2*Math.pow(t.x,2)}}}var g=e(78),m=e(76),y=e(73),f=e(79);class v extends c{constructor(t,s,e={}){super(t,s,e),this.cssname="simple-graph",this.options={maxWidth:450,maxHeight:500,margin:{top:50,right:75,bottom:125,left:50},pad:30,xrange:[0,2.5],yrange:[0,2.5],n:500,m:500},this.scales={},this.sels={},this._curr={x:.1,y:.2},this.ideal=1,super.initSVG(this.options),this.base.classed(this.cssname,!0),this.updater=new u,this.initPlot()}setUpdater(t){this.q(),this.eta();"block"==t?this.updater=new x(this.q(),this.eta()):"full"==t?this.updater=new u(this.q(),this.eta()):console.log("Please enter a valid input as updater"),this.updateQuivers()}plotMinimum(){const t=this.options,s=this.scales,e=(s=>r.a(0,s).map(a.n().domain([0,s]).range([1e-5,t.xrange[1]])))(100),n=e.map(t=>1/t),l=i.a(e.map(s.x),n.map(s.y)),h=a.i(),o=h(l),c=this.base.append("g").attr("id","minimum-group");console.log("Path data: ",o),c.append("path").attr("d",h(l)).classed("minimum",!0).style("stroke-width",2.5).style("stroke","blue").style("fill",null)}plotContours(){const t=this.options,s=this.scales,e=function(t,s,e,a,r){let i=new Array(t*s);for(var n=.5,l=0;n<s;++n)for(var h=.5;h<t;++h,++l){const o=h/t*(e[1]-e[0])+e[0],c=(1-n/s)*(a[1]-a[0])+a[0];i[l]=r(o,c)}return i}(t.n,t.m,t.xrange,t.yrange,(t,s)=>this.updater.absErr({x:t,y:s}));let r=a.m(a.k(e),a.j(e),.25);const i=(.91*r[0]+(1-.91)*r[1])/2;r=n.a(1,i,r),s.color=a.o().interpolate(()=>a.h),s.contours.thresholds(r);const l=s.contours(e);this.base.append("g").attr("id","contour-group").selectAll("path.contour").data(l).join("path").attr("class","contour").attr("d",a.g(a.f().scale(t.width/t.n))).attr("fill",t=>s.color(t.value)).classed("main-fit",t=>t.value==i).classed("not-fit",t=>t.value!=i)}addCircle(t,s=null){const e=this.scales,a=this.sels;return null!=s&&this.base.append("line").attr("x1",e.x(s.x)).attr("y1",e.y(s.y)).attr("x2",e.x(t.x)).attr("y2",e.y(t.y)).classed("descending-line",!0),a.circle=this.base.append("circle").attr("cx",e.x(t.x)).attr("cy",e.y(t.y)).attr("r",2).classed("descending-point",!0),t}clearCircles(){a.q(".descending-point").remove(),a.q(".descending-line").remove()}clearQuivers(){a.q(".quiver").remove(),this.sels.arrows=[]}plotDescent(){const t=this;let s=null;const e={next:t=>{this.addCircle(t,s),s=t},err:t=>console.log(t),complete:()=>console.log("COMPLETE")};this.ticker=Object(g.a)(20).pipe(Object(m.a)((()=>{this.addCircle(this.curr()),s=this.curr()})()),Object(y.a)(s=>t.updater.next(s),t.curr()),Object(f.a)(1e3)).subscribe(e)}intoVis(t){return{x:this.scales.x(t.x),y:this.scales.y(t.y)}}intoMath(t){return{x:this.scales.x.invert(t.x),y:this.scales.y.invert(t.y)}}updateQuivers(){const t=this,s=this.sels,e=this.scales;s.arrows.forEach(s=>{const a=this.intoMath({x:+s.attr("x1"),y:+s.attr("y1")}),r=t.updater.nextLr(a);s.attr("x2",e.x(r.x)).attr("y2",e.y(r.y))})}createQuivers(){const t=this,s=this.options,e=this.scales,a=this.sels,r=o.meshgrid(8,8,s.xrange,s.yrange),i=this.base.append("g").attr("id","quiver-group");this.clearQuivers(),a.arrows=r.map(s=>{const a=t.updater.nextLr(s),r=o.insertArrow(i,e.x(s.x),e.y(s.y),e.x(a.x),e.y(a.y),"red",2);return r.classed("quiver",!0),r})}initPlot(){this.plotContours(),this.createQuivers()}init(){const t=this,s=this.options,e=this.scales,r=this.sels;o.addArrows(this.svg),e.contours=a.c().size([s.n,s.m]),e.curve=a.d.alpha(.5),e.x=a.n().domain(s.xrange).range([0,s.width]),e.y=a.n().domain(s.yrange).range([s.height,0]),r.xaxis=this.base.append("g").attr("class","axis axis--x").attr("transform",o.translate(0,s.height)).call(a.a(e.x).ticks(3,"s")),r.yaxis=this.base.append("g").attr("class","axis axis--y").attr("transform",o.translate(0,0)).call(a.b(e.y).ticks(3,"s")),r.xlabel=this.base.append("text").text("w0").attr("class","titles").attr("transform",o.translate(s.width/2,s.height+s.pad)),r.ylabel=this.base.append("text").text("w1").attr("class","titles").attr("transform",o.translate(-s.pad,s.height/2)+o.rotate(-90)),this.base.on("click",function(){null!=t.ticker&&t.ticker.unsubscribe();const s=a.l(this);t.curr({x:e.x.invert(s[0]),y:e.y.invert(s[1])}),t.addCircle(t.curr()),t.clearCircles(),t.plotDescent()})}curr(t){return null==t?this._curr:(this._curr=t,this)}data(t){return null==t?this._data:(this._data=t,this)}q(t){return null==t?this.updater.q:(this.updater.q=t,this.updateQuivers(),this)}eta(t){return null==t?this.updater.eta:(this.updater.eta=t,this.updateQuivers(),this)}}const b=(t,s,e)=>{const r=(s-t)/(e-1);return a.m(t,s+r,r).slice(0,e)};a.r.prototype.clear=function(){return this.selectAll("*").remove(),this},a.r.prototype.toggleClass=function(t){return this.classed(t,!this.classed(t)),this},a.r.prototype.show=function(){return this.style("display","initial"),this},a.r.prototype.hide=function(){return this.style("display","none"),this},a.r.prototype.toggle=function(){var t="none"==this.style("display");return this.style("display",t?"inherit":"none")},a.r.prototype.after=function(t){var s=[];return this.each(function(){var e=document.createElement(t);this.parentNode.insertBefore(e,this.nextSibling),s.push(e)}),a.q(s)},a.r.prototype.before=function(t){var s=[];return this.each(function(){var e=document.createElement(t);this.parentNode.insertBefore(e,this),s.push(e)}),a.q(s)};var w=e(81);const M=t=>.5*Math.pow(t,2),q=t=>s=>t.loss(t.f(s)),k={hole:{f:t=>Math.tanh(t/2),df:t=>Math.pow(Math.cosh(t/2),-2)/2,xrange:[-12,12],yrange:[0,.6],loss:M},steps:{f:t=>Math.tanh(t-11)/4+Math.tanh(t-6)/4+Math.tanh(t)+Math.tanh(t+6)/4+Math.tanh(t+11)/4,df:t=>Math.pow(Math.cosh(t-11),-2)/4+Math.pow(Math.cosh(t-6),-2)/4+Math.pow(Math.cosh(t),-2)+Math.pow(Math.cosh(t+6),-2)/4+Math.pow(Math.cosh(t+11),-2)/4,xrange:[-13.6,13.6],yrange:[0,2.5],loss:M},seagull:{f:t=>Math.sign(t)*(1-1/(1+Math.abs(t))),df:t=>1/Math.pow(1+Math.abs(t),2),xrange:[-12,12],yrange:[0,.6],loss:M},bowl:{f:t=>Math.sinh(t/5),df:t=>Math.cosh(t/5)/5,xrange:[-15,15],yrange:[0,100],loss:M},deep_net:{f:t=>Math.pow(Math.abs(t/10+1),3)-1,df:t=>.3*Math.pow(Math.abs(t/10+1),2),xrange:[-9.9,9.9],yrange:[0,3],loss:M}};class S{constructor(t,s,e=0,a=.1){this.f=t,this.df=s,this.q=e,this.eta=a}loss(t){return M(this.f(t))}gradient(t){return this.f(t)*this.df(t)}psdhess(t){return Math.pow(this.df(t),2)}step(t){return(t=>-this.eta*t)(this.f(t)*Math.pow(this.df(t),1-2*this.q))}next(t){return t+this.step(t)}}var P=e(80);class _{constructor(t,s,e=0){this.updater=t,this._x=e,this.classname=s,this.stream=new P.a}get x(){return this._x}set x(t){this._x=t}nextX(){return this.updater.next(this._x)}next(){this.nextX();return new _(this.updater,this.classname,this.nextX())}step_(t=null){return this.x=null!=t?t:this.nextX(),this.stream.next({classname:this.classname,x:this.x,loss:this.updater.loss(this.x)}),this}toVec(t){return{x:this._x,y:t(this._x)}}q(t){return null==t?this.updater.q:(this.updater.q=t,this)}eta(t){return null==t?this.updater.eta:(this.updater.eta=t,this)}}class L extends c{constructor(t,s,e={}){super(t,s,e),this.cssname="golf-hole-chart",this.options={maxWidth:400,maxHeight:200,margin:{top:10,right:10,bottom:40,left:50},pad:30,maxIter:600,landscape:k.hole},this.scales={},this.sels={},super.initSVG(e,["bg"]),this.base.classed(this.cssname,!0),this.init();const a=this.options.landscape,r=[new _(new S(a.f,a.df,0,.9),"golf-ball-sgd",4),new _(new S(a.f,a.df,.5,.1),"golf-ball-sngd",3),new _(new S(a.f,a.df,1,.003),"golf-ball-ngd",5)];this.data(r),this.initBalls()}landscape(t){if(null==t)return this.options.landscape;const s=this.options;s.landscape=t,this.updateScales(s),this.updateAxes(this.scales,s),this.data().forEach(s=>{s.updater.f=t.f,s.updater.df=t.df});const e=b(s.landscape.xrange[0],s.landscape.xrange[1],1e3);return this.clearCurve(),this.plotCurve(e),this}get dataHead(){try{return this.data()[0]}catch(t){console.log("Looks like there is no data in this golf hole"),console.log(t)}}intoVis(t){return{x:this.scales.x(t.x),y:this.scales.y(t.y)}}intoMath(t){return{x:this.scales.x.invert(t.x),y:this.scales.y.invert(t.y)}}num2vec(t){return{x:t,y:this.options.landscape.loss(t)}}ball2vis(t){return this.intoVis(t.toVec(q(this.options.landscape)))}plotBall(t){const s=(t=>"."+t)(t.classname),e=this.ball2vis(t);this.sels.ball=this.base.selectAll(s).data([e]).join("circle").classed("golf-ball",!0).classed(t.classname,!0).attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r","5px")}clearCurve(){this.layers.bg.selectAll(".line").remove()}plotCurve(t){const s=this.scales;this.sels;s.paths.forEach(s=>{this.layers.bg.append("path").datum(t).attr("class","line").attr("d",t=>s(t))})}updateScales(t){const s=this.scales;s.x=a.n().domain(t.landscape.xrange).range([0,t.width]),s.y=a.n().domain(t.landscape.yrange).range([t.height,0])}updateAxes(t,s){this.sels.xaxis.call(a.a(t.x).tickValues([0]).tickFormat(t=>"0"))}init(){const t=this.options,s=this.scales,e=this.sels;this.updateScales(t),e.xaxis=this.base.append("g").attr("class","axis axis--x").attr("transform",o.translate(0,t.height)),e.xlabel=this.base.append("text").text("θ - θ*").attr("class","titles").attr("transform",o.translate(t.width/2,t.height+t.pad)),this.updateAxes(s,t);const r=a.i().x((t,e)=>s.x(t)).y((e,a)=>s.y(q(t.landscape)(e))).curve(a.e);s.paths=[r];const i=b(t.landscape.xrange[0],t.landscape.xrange[1],1e3);this.plotCurve(i)}initBalls(){const t=this,s=this.options;this.sels.backdrop=this.base.append("g").attr("id","backdrop").classed("grass",!0).append("rect").attr("height",s.height).attr("width",s.width);const e=t=>t<s.landscape.xrange[0],r=t=>t>s.landscape.xrange[1],i=t=>{let a;return a=isNaN(t)?s.landscape.xrange[0]:e(t)?s.landscape.xrange[0]:r(t)?s.landscape.xrange[1]:t};const n={next:s=>{s.forEach(s=>t.plotBall(s))},error:t=>console.log("ERROR: ",t),complete:()=>console.log("COMPLETE")};console.log(s.maxIter);const l=()=>Object(g.a)(10).pipe(Object(y.a)(s=>(w.a(t=>a.p(`.${t.classname}`).classed("dead-ball"),t.data())&&h.unsubscribe(),t.data().forEach(s=>(function(s){const e=s.nextX(),a=t.base.select(`.${s.classname}`),r=i(e);return a.classed("dead-ball")?s:s.step_(r)})(s)),t.data()),t.data()),Object(f.a)(s.maxIter)).subscribe(n);let h={unsubscribe:()=>console.log("Empty Ticker!")};this.sels.backdrop.on("click",function(){h.unsubscribe();const s=function([t,s]){return{x:t,y:s}}(a.l(this));a.q(".golf-ball").classed("dead-ball",!1),t.data().forEach((e,a)=>e.x=t.intoMath(s).x),t.data().forEach(s=>t.plotBall(s)),t.eventHandler.trigger("loss-click",{}),h=l()})}data(t){return null==t?this._data:(this._data=t,this)}}var E=e(83),O=e(77),$=e(74);class j extends c{intoVis(t){return{x:this.scales.x(t.x),y:this.scales.y(t.y)}}intoMath(t){return{x:this.scales.x.invert(t.x),y:this.scales.y.invert(t.y)}}}const I=1;class A extends j{constructor(t,s,e={}){super(t,s,e),this.cssname="line-plot",this.options={maxWidth:350,maxHeight:250,margin:{top:10,right:10,bottom:30,left:30},pad:{top:5,right:1,bottom:10,left:15},xrange:[0,600],yrange:[2,.01]},this.scales={},this.sels={},super.initSVG(this.options,["bg"]),this.base.classed(this.cssname,!0),this.data({})}addDataKey_(t){const s=this;E.a(t,this.data())||(console.log(`Adding key: ${t}`),this.data()[t]={sel:s.initBaseLine(t),vals:[]})}updateScales(t){const s=this.options;this.scales.x=a.n().domain(t).range([0,s.width]).clamp(!0)}clearPaths(){this.data(O.a(t=>$.a("vals",[],t),this.data()))}plotPath(t){const s=this;this.addDataKey_(t.classname);const e=this.data()[t.classname];e.vals.push(t.loss);const a=[Math.max(0,e.vals.length-this.options.xrange[1]),Math.max(e.vals.length,this.options.xrange[1])];this.updateScales(a),this.createPath(),e.sel.data([e]).join("path").classed(t.classname,!0).attr("d",t=>s.path(t.vals))}initBaseLine(t){return this.layers.bg.append("path").classed(t,!0).classed("line",!0)}init(){this.options,this.scales,this.sels;this.createScales(),this.createPath(),this.createAxes()}createScales(){const t=this.scales,s=this.options;t.x=a.n().domain(s.xrange).range([0,s.width]).clamp(!0),t.y=a.o().domain(s.yrange).range([0,s.height]).clamp(!0)}createAxes(){const t=this.sels,s=this.scales,e=this.options;t.yaxis=this.base.append("g").attr("class","axis axis--y").attr("transform",o.translate(0,-I)).call(a.b(s.y).tickFormat("").ticks(4)),t.xaxis=this.base.append("g").attr("class","axis axis--x").attr("transform",o.translate(0,e.height-I)).call(a.a(s.x).tickFormat("").ticks(4)),this.base.append("text").attr("transform",o.translate(e.width/2,e.margin.top+e.height+10)).style("text-anchor","middle").text("Time"),this.base.append("text").style("text-anchor","middle").text("Loss").attr("y",e.pad.left-e.margin.left).attr("x",e.pad.top-e.height/2).attr("transform",o.rotate(-90))}createPath(){this.path=a.i().x((t,s)=>this.scales.x(s)).y((t,s)=>this.scales.y(t)).curve(a.e)}data(t){return null==t?this._data:(this._data=t,this)}}const D=1;class X extends j{constructor(t,s,e={}){super(t,s,e),this.cssname="line-plot",this.options={maxWidth:350,maxHeight:250,margin:{top:10,right:10,bottom:30,left:30},pad:{top:5,right:1,bottom:10,left:15},xrange:[0,600],yrange:[15,0]},this.scales={},this.sels={},super.initSVG(this.options,["bg"]),this.base.classed(this.cssname,!0),this.data({})}addDataKey_(t){const s=this;E.a(t,this.data())||(console.log(`Adding key: ${t}`),this.data()[t]={sel:s.initBaseLine(t),vals:[]})}clearPaths(){this.data(O.a(t=>$.a("vals",[],t),this.data()))}plotPath(t){const s=this;this.addDataKey_(t.classname);const e=this.data()[t.classname];e.vals.push(Math.abs(t.x));const a=[Math.max(0,e.vals.length-this.options.xrange[1]),Math.max(e.vals.length,this.options.xrange[1])];this.updateScales(a),this.createPath(),e.sel.data([e]).join("path").classed(t.classname,!0).attr("d",t=>s.path(t.vals))}updateScales(t){const s=this.options;this.scales.x=a.n().domain(t).range([0,s.width]).clamp(!0)}initBaseLine(t){return this.layers.bg.append("path").classed(t,!0).classed("line",!0)}createScales(){const t=this.options;this.scales.x=a.n().domain(t.xrange).range([0,t.width]).clamp(!0),this.scales.y=a.n().domain(t.yrange).range([0,t.height]).clamp(!0)}init(){this.options,this.scales,this.sels;this.createScales(),this.createPath(),this.createAxes()}createAxes(){const t=this.sels,s=this.scales,e=this.options;t.xaxis=this.base.append("g").attr("class","axis axis--x").attr("transform",o.translate(0,e.height-D)).call(a.a(s.x).ticks(4).tickFormat("")),t.yaxis=this.base.append("g").attr("class","axis axis--y").attr("transform",o.translate(0,-D)).call(a.b(s.y).ticks(4).tickFormat("")),this.base.append("text").attr("transform",o.translate(e.width/2,e.margin.top+e.height+10)).style("text-anchor","middle").text("Time"),this.base.append("text").style("text-anchor","middle").text("θ - θ*").attr("y",e.pad.left-e.margin.left).attr("x",e.pad.top-e.height/2).attr("transform",o.rotate(-90))}createPath(){this.path=a.i().x((t,s)=>this.scales.x(s)).y((t,s)=>this.scales.y(t)).curve(a.e)}data(t){return null==t?this._data:(this._data=t,this)}}const C=e(75).a((t,s)=>s.toFixed(t)),V=C(1),B=C(4);e(68),e(69);console.log("RUNNING"),function(){const t=a.p("#vis1"),s={quiverPlot:t.select("#chart"),qId:t.select("#q-val"),etaId:t.select("#eta-val"),qSlider:t.select("#q-slider"),etaSlider:t.select("#eta-slider"),hessType:t.select("#hess-type")},e={graph:new v(s.quiverPlot)},r=0,i=.1,n={q:a.n().range([0,10]).domain([0,1]),eta:a.n().range([1,1e3]).domain([Math.pow(10,-5),.6])};e.graph.q(r),e.graph.eta(i),s.qSlider.property("value",n.q(r)),s.etaSlider.property("value",n.eta(i)),s.qId.text(V(r)),s.etaId.text(B(i)),s.qSlider.on("input",function(){const t=a.p(this),r=n.q.invert(+t.property("value"));e.graph.q(r),s.qId.text(`${V(r)}`)}),s.etaSlider.on("input",function(){const t=a.p(this),r=n.eta.invert(t.property("value"));e.graph.eta(r),s.etaId.text(`${B(r)}`)}),s.hessType.on("input",function(){const t=a.p(this).property("value");e.graph.setUpdater(t)})}(),function(){const t=a.p("#vis2"),s={chart:t.select("#chart"),chartXDist:t.select("#chart-xdist"),chartLosses:t.select("#chart-losses"),landscapeSelector:t.select(".landscape-select")},e="seagull",r=new l(t.node()),i={graph:new L(s.chart,r),chartXDist:new X(s.chartXDist,r),chartLosses:new A(s.chartLosses,r)};r.bind("loss-click",t=>{i.chartXDist.clearPaths(),i.chartLosses.clearPaths()}),s.landscapeSelector.property("value",e),i.graph.landscape(k[e]);const n=i.graph.data().map(t=>t.stream),h={next:t=>{i.chartXDist.plotPath(t),i.chartLosses.plotPath(t)}};n.forEach(t=>t.subscribe(h)),s.landscapeSelector.on("input",function(){const t=a.p(this).property("value");i.graph.landscape(k[t])})}(),function(){const t=a.p("#vis3"),s={chart:t.select("#chart"),chartLosses:t.select("#chart-losses"),chartXDist:t.select("#chart-xdist"),qId:t.select("#q-val"),etaId:t.select("#eta-val"),qSlider:t.select("#q-slider"),etaSlider:t.select("#eta-slider"),landscapeSelector:t.select(".landscape-select")},e=new l(t.node()),r={graph:new L(s.chart,e,{maxIter:1e4}),chartLosses:new A(s.chartLosses,e),chartXDist:new X(s.chartXDist,e)},i=.5,n=.1,h="seagull";e.bind("loss-click",t=>{r.chartXDist.clearPaths(),r.chartLosses.clearPaths()}),r.graph.data([new _(new S(k.hole.f,k.hole.df,i,n),"golf-ball")]),r.graph.landscape(k.steps);const o=[-3,2].map(t=>Math.pow(10,t)),c={q:a.n().range([0,10]).domain([0,1]),eta:a.o().range([1,1e3]).domain(o).base(10)};r.graph.landscape(k[h]),s.landscapeSelector.property("value",h),s.qSlider.property("value",c.q(i)),s.etaSlider.property("value",c.eta(n)),s.qId.text(V(i)),s.etaId.text(B(n)),s.qSlider.on("input",function(){const t=a.p(this),e=c.q.invert(t.property("value"));r.graph.dataHead.q(e),console.log(e),s.qId.text(`${V(e)}`)}),s.etaSlider.on("input",function(){const t=a.p(this),e=c.eta.invert(t.property("value"));r.graph.dataHead.eta(e),s.etaId.text(`${B(e)}`)}),s.landscapeSelector.on("input",function(){const t=a.p(this).property("value");r.graph.landscape(k[t])});const p=r.graph.data().map(t=>t.stream),d={next:t=>{console.log(t),r.chartXDist.plotPath(t),r.chartLosses.plotPath(t)}};p.forEach(t=>t.subscribe(d))}()}});