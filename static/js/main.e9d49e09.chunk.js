(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,t,n){},308:function(e,t,n){e.exports=n(612)},313:function(e,t,n){},612:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(4),i=n.n(o),l=(n(313),n(41)),c=n(42),s=n(44),u=n(43),h=(n(195),n(314),n(617)),m=n(622),d=n(624),p=n(615),g=n(89),v=n(37),f=n(619),y=n(623),E=n(620),w=n(104),b=n(48),x=Object(b.a)(),O=n(142),S=h.a.Title,j=(h.a.Paragraph,h.a.Text),L=m.a.Step,k=["Ethical Investing","Growth Investing","Index Investing","Quality Investing","Value Investing"],C={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}};var P=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={current:0,showSubmit:!1,enableBack:!1,validateNumberStatus:"success",validateOptionStatus:"success",amount:5e3,selectedItems:[]},e.handleNext=function(){if(1===e.state.current&&e.state.selectedItems.length>2)d.a.error("Select maximum of 2 Investment strategies"),e.setState({validateOptionStatus:"error"});else if(1===e.state.current&&0===e.state.selectedItems.length)d.a.error("Please select at-least 1 Investment strategy"),e.setState({validateOptionStatus:"error"});else if(0===e.state.current&&e.state.amount<5e3)d.a.error("Please select valid amount");else{e.setState({validateOptionStatus:"success"});var t=e.state.current+1;2===t&&e.setState({showSubmit:!0}),e.setState({current:t}),e.setState({enableBack:!0})}},e.handleBack=function(){var t=e.state.current-1;0===t&&e.setState({enableBack:!1}),e.setState({showSubmit:!1}),e.setState({current:t})},e.handleSubmit=function(){e.setState({current:3}),d.a.info("Fetching Results");var t={};t.amount=e.state.amount,t.strategy=e.state.selectedItems;var n=O.stringify(t);x.push("/results?"+n)},e.handleNumberChange=function(t){var n;e.setState({validateNumberStatus:(n=t,n<5e3?"error":"success"),amount:t})},e.handleOptionChange=function(t){e.setState({selectedItems:t})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",e.async=!0,e.innerHTML=JSON.stringify({colorTheme:"dark",showChart:!0,locale:"en",largeChartUrl:"",width:"100%",height:"660",plotLineColorGrowing:"rgba(33, 150, 243, 1)",plotLineColorFalling:"rgba(33, 150, 243, 1)",gridLineColor:"rgba(233, 233, 234, 1)",scaleFontColor:"rgba(131, 136, 141, 1)",belowLineFillColorGrowing:"rgba(5, 122, 205, 0.12)",belowLineFillColorFalling:"rgba(5, 122, 205, 0.12)",symbolActiveColor:"rgba(225, 239, 249, 1)",tabs:[{title:"Indices",symbols:[{s:"OANDA:SPX500USD",d:"S&P 500"},{s:"INDEX:XLY0",d:"Shanghai Composite"},{s:"FOREXCOM:DJI",d:"Dow 30"},{s:"INDEX:NKY",d:"Nikkei 225"},{s:"INDEX:DAX",d:"DAX Index"},{s:"OANDA:UK100GBP",d:"FTSE 100"}],originalTitle:"Indices"},{title:"Commodities",symbols:[{s:"CME_MINI:ES1!",d:"E-Mini S&P"},{s:"CME:E61!",d:"Euro"},{s:"COMEX:GC1!",d:"Gold"},{s:"NYMEX:CL1!",d:"Crude Oil"},{s:"NYMEX:NG1!",d:"Natural Gas"},{s:"CBOT:ZC1!",d:"Corn"}],originalTitle:"Commodities"},{title:"Bonds",symbols:[{s:"CME:GE1!",d:"Eurodollar"},{s:"CBOT:ZB1!",d:"T-Bond"},{s:"CBOT:UD1!",d:"Ultra T-Bond"},{s:"EUREX:GG1!",d:"Euro Bund"},{s:"EUREX:II1!",d:"Euro BTP"},{s:"EUREX:HR1!",d:"Euro BOBL"}],originalTitle:"Bonds"},{title:"Forex",symbols:[{s:"FX:EURUSD"},{s:"FX:GBPUSD"},{s:"FX:USDJPY"},{s:"FX:USDCHF"},{s:"FX:AUDUSD"},{s:"FX:USDCAD"}],originalTitle:"Forex"}]}),document.getElementById("marketgraph").appendChild(e)}},{key:"render",value:function(){var e=this.state.selectedItems,t=e.join(" & "),n=k.filter(function(t){return!e.includes(t)});return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"box effect1"},r.a.createElement(h.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(S,{level:3}," ",r.a.createElement("a",{href:"/"},"Stock Portfolio Suggestion Engine "))),r.a.createElement(p.a,null)),r.a.createElement(g.a,null,r.a.createElement(v.a,{span:8},r.a.createElement("div",{className:"stepsClass"},r.a.createElement(m.a,{direction:"vertical",size:"small",current:this.state.current},r.a.createElement(L,{title:"Investment Amount",description:"Investment Amount (in $)"}),r.a.createElement(L,{title:"Choose Investment Strategy",description:"Choose upto 2 Strategies"}),r.a.createElement(L,{title:"Confirm",description:"Check Input"})))),r.a.createElement(v.a,{span:16},r.a.createElement("div",{className:"contentClass"},r.a.createElement(f.a,C,0===this.state.current&&r.a.createElement("div",null,r.a.createElement(f.a.Item,{validateStatus:this.state.validateNumberStatus,help:"Amount should be greater than $5000",style:{width:"100%"}},r.a.createElement(y.a,{placeholder:"Enter Amount",defaultValue:5e3,value:this.state.amount,formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},style:{width:"100%"},onChange:this.handleNumberChange})))||1===this.state.current&&r.a.createElement("div",null,r.a.createElement(f.a.Item,{help:"Pick one or two Investment strategies",validateStatus:this.state.validateOptionStatus,style:{width:"100%"}},r.a.createElement(E.a,{mode:"multiple",placeholder:"Investment strategies",value:e,onChange:this.handleOptionChange,style:{width:"100%"}},n.map(function(e){return r.a.createElement(E.a.Option,{key:e,value:e},e)}))))||2===this.state.current&&r.a.createElement("div",null,r.a.createElement(j,{strong:!0},"Amount: ")," ",r.a.createElement(j,null,this.state.amount),r.a.createElement("br",null),r.a.createElement(j,{strong:!0},"Investing Strategies: "),r.a.createElement(j,null,t)))))),r.a.createElement(g.a,null,r.a.createElement(v.a,{span:6,offset:10},!this.state.enableBack&&r.a.createElement(w.a,{onClick:this.handleBack,style:{marginRight:20},disabled:!0},"Back"),this.state.enableBack&&r.a.createElement(w.a,{onClick:this.handleBack,style:{marginRight:20}},"Back"),!this.state.showSubmit&&r.a.createElement(w.a,{type:"primary",onClick:this.handleNext},"Next"),this.state.showSubmit&&r.a.createElement(w.a,{type:"primary",onClick:this.handleSubmit},"Submit")))),r.a.createElement("div",{className:"box effect1",style:{textAlign:"center"}},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(S,{level:4}," Market Overview Widget")),"Market Overview Widget provides a quick glance at the latest market activity across various sectors.")),r.a.createElement(g.a,null,r.a.createElement(v.a,{span:16,offset:4},r.a.createElement("div",{id:"marketgraph"},r.a.createElement("div",{className:"tradingview-widget-container"},r.a.createElement("div",{className:"tradingview-widget-container__widget"})))),r.a.createElement(v.a,{span:12}))))}}]),n}(a.Component),N=n(625),T=n(108),R=n(136),A=n(616),I=n(137),F=n.n(I),_=n(621),B=n(618),M=n(13),G=n(29);function D(){D=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function c(e,t,n,a){var r=t&&t.prototype instanceof h?t:h,o=Object.create(r.prototype),i=new O(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return j()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var l=w(i,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=s(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var u={};function h(){}function m(){}function d(){}var p={};l(p,r,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(S([])));v&&v!==t&&n.call(v,r)&&(p=v);var f=d.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(r,o){function i(){return new t(function(a,i){!function a(r,o,i,l){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){a("next",e,i,l)},function(e){a("throw",e,i,l)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return a("throw",e,i,l)})}l(c.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function S(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=d,l(f,"constructor",d),l(d,"constructor",m),m.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},y(E.prototype),l(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(c(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(f),l(f,i,"Generator"),l(f,r,function(){return this}),l(f,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}n(142),h.a.Title,h.a.Paragraph;var V=h.a.Text,X={boxShadow:"0 3px 8px rgba(106, 204, 66, 0.65)"},U={boxShadow:"0 3px 8px rgba(238, 78, 90, 0.65)"},$=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).info=Object(R.a)(D().mark(function t(){var n;return D().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return[{date:"2019-04-15",open:197.8182,high:199.0834,low:197.2504,close:198.4658,volume:17536646,unadjustedVolume:17536646,change:.358619,changePercent:.181,vwap:198.2139,label:"Apr 15",changeOverTime:0},{date:"2019-04-16",open:198.6949,high:200.5975,low:197.7983,close:198.4857,volume:25696385,unadjustedVolume:25696385,change:.019923,changePercent:.01,vwap:199.136,label:"Apr 16",changeOverTime:.000100269164762931},{date:"2019-04-17",open:198.7746,high:202.5998,low:197.8481,close:202.3508,volume:28906780,unadjustedVolume:28906780,change:3.8651,changePercent:1.947,vwap:201.0345,label:"Apr 17",changeOverTime:.019575161060495012},{date:"2019-04-18",open:202.3408,high:203.3669,low:201.7431,close:203.078,volume:24195766,unadjustedVolume:24195766,change:.7272,changePercent:.359,vwap:202.7264,label:"Apr 18",changeOverTime:.023239268428112053},{date:"2019-04-22",open:202.0519,high:204.1539,low:201.5638,close:203.7454,volume:19439545,unadjustedVolume:19439545,change:.66743,changePercent:.329,vwap:203.4256,label:"Apr 22",changeOverTime:.026602064436290724},{date:"2019-04-23",open:203.6458,high:206.9531,low:203.1178,close:206.6841,volume:23322991,unadjustedVolume:23322991,change:2.9387,changePercent:1.442,vwap:205.6954,label:"Apr 23",changeOverTime:.041409149586477866},{date:"2019-04-24",open:206.5646,high:207.6803,low:206.2558,close:206.3653,volume:17540609,unadjustedVolume:17540609,change:-.318773,changePercent:-.154,vwap:206.8578,label:"Apr 24",changeOverTime:.03980282748967323},{date:"2019-04-25",open:206.0366,high:206.963,low:204.3332,close:204.4925,volume:18543206,unadjustedVolume:18543206,change:-1.8728,changePercent:-.908,vwap:205.2752,label:"Apr 25",changeOverTime:.0303664409686707},{date:"2019-04-26",open:204.114,high:204.2136,low:201.3447,close:203.5163,volume:18649102,unadjustedVolume:18649102,change:-.976241,changePercent:-.477,vwap:203.2958,label:"Apr 26",changeOverTime:.025447709378643574},{date:"2019-04-29",open:203.6159,high:205.1799,low:203.078,close:203.8251,volume:22204716,unadjustedVolume:22204716,change:.308811,changePercent:.152,vwap:204.1957,label:"Apr 29",changeOverTime:.027003644960491884},{date:"2019-04-30",open:202.2811,high:202.6198,low:198.3462,close:199.9002,volume:46534923,unadjustedVolume:46534923,change:-3.9249,changePercent:-1.926,vwap:200.0774,label:"Apr 30",changeOverTime:.007227441705321576},{date:"2019-05-01",open:209.0749,high:214.4841,low:208.4274,close:209.7124,volume:64827328,unadjustedVolume:64827328,change:9.8122,changePercent:4.909,vwap:211.9056,label:"May 1",changeOverTime:.056667697910672776},{date:"2019-05-02",open:209.0351,high:211.8343,low:207.3316,close:208.3477,volume:31996324,unadjustedVolume:31996324,change:-1.3647,changePercent:-.651,vwap:209.3998,label:"May 2",changeOverTime:.049791450214596175},{date:"2019-05-03",open:210.081,high:211.0274,low:209.4236,close:210.9377,volume:20892378,unadjustedVolume:20892378,change:2.59,changePercent:1.243,vwap:210.3181,label:"May 3",changeOverTime:.06284155758825956},{date:"2019-05-06",open:203.5063,high:208.0389,low:202.7194,close:207.6803,volume:32443113,unadjustedVolume:32443113,change:-3.2575,changePercent:-1.544,vwap:206.548,label:"May 6",changeOverTime:.04642865420641736},{date:"2019-05-07",open:205.0902,high:206.6218,low:200.0546,close:202.0818,volume:38763698,unadjustedVolume:38763698,change:-5.5984,changePercent:-2.696,vwap:202.7622,label:"May 7",changeOverTime:.018219763808172418},{date:"2019-05-08",open:201.1255,high:204.5523,low:200.9761,close:202.1217,volume:26339504,unadjustedVolume:26339504,change:.039847,changePercent:.02,vwap:202.955,label:"May 8",changeOverTime:.01842080600284786},{date:"2019-05-09",open:199.6313,high:200.9064,low:195.9056,close:199.95,volume:34908607,unadjustedVolume:34908607,change:-2.1716,changePercent:-1.074,vwap:198.5261,label:"May 9",changeOverTime:.007478366549803478},{date:"2019-05-10",open:197.419,high:198.85,low:192.77,close:197.18,volume:41208712,unadjustedVolume:41208712,change:-2.77,changePercent:-1.385,vwap:195.937,label:"May 10",changeOverTime:-.006478698093071928},{date:"2019-05-13",open:187.71,high:189.48,low:182.85,close:185.72,volume:57430623,unadjustedVolume:57430623,change:-11.46,changePercent:-5.812,vwap:186.6812,label:"May 13",changeOverTime:-.06422164423291067},{date:"2019-05-14",open:186.41,high:189.7,low:185.41,close:188.66,volume:36529677,unadjustedVolume:36529677,change:2.94,changePercent:1.583,vwap:187.9622,label:"May 14",changeOverTime:-.04940800883577929},{date:"2019-05-15",open:186.27,high:191.75,low:186.02,close:190.92,volume:26544718,unadjustedVolume:26544718,change:2.26,changePercent:1.198,vwap:189.7151,label:"May 15",changeOverTime:-.03802065645567153},{date:"2019-05-16",open:189.91,high:192.4689,low:188.84,close:190.08,volume:33031364,unadjustedVolume:33031364,change:-.84,changePercent:-.44,vwap:190.3896,label:"May 16",changeOverTime:-.042253123711994654},{date:"2019-05-17",open:186.93,high:190.9,low:186.76,close:189,volume:32879090,unadjustedVolume:32879090,change:-1.08,changePercent:-.568,vwap:188.8989,label:"May 17",changeOverTime:-.04769486732726748}],t.next=3,F.a.get("https://cloud.iexapis.com/v1/stock/".concat(e.props.data.symbol,"/chart/5d?token=pk_31638584dd6c4c04a550a33b66e50c33"));case 3:n=t.sent,console.log(n.data),_.a.success({title:"Stock Details for ".concat(e.props.data.companyName," (").concat(e.props.data.symbol,")"),width:700,content:r.a.createElement("div",{className:"tradingview-widget-container",id:"stockChart"},r.a.createElement(G.e,{width:600,height:200,data:n.data,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(G.a,{strokeDasharray:"3 3"}),r.a.createElement(G.i,{dataKey:"label"},r.a.createElement(G.c,{value:"Date",offset:0,position:"insideBottom"})),r.a.createElement(G.j,{label:{value:"Price($)",angle:-90,position:"insideLeft"}}),r.a.createElement(G.h,null),r.a.createElement(G.d,{connectNulls:!0,type:"monotone",dataKey:"close",stroke:"#82ca9d",fill:"#82ca9d"}),r.a.createElement(G.d,{connectNulls:!0,type:"monotone",dataKey:"open",stroke:"#8884d8",fill:"#8884d8"}))),onOk:function(){}});case 6:case"end":return t.stop()}},t)})),e}return Object(c.a)(n,[{key:"render",value:function(){var e={},t=this.props.data,n="arrow-up";e=X;var a="#52c41a";return t&&t.change<0&&(n="arrow-down",a="#ee4e5a",e=U),r.a.createElement("div",null,t&&r.a.createElement(v.a,{span:8},r.a.createElement(B.a,{title:t.companyName,bordered:!1,className:"stockCard",extra:r.a.createElement("p",null,t.symbol),onClick:this.info,hoverable:!0,style:e},r.a.createElement(V,{strong:!0},"Price: "),t.latestPrice," $",r.a.createElement("br",null),r.a.createElement(V,{strong:!0},"Invest Amount: "),Math.round(this.props.amount)," $",r.a.createElement("br",null),r.a.createElement(M.a,{type:n,style:{color:a,fontSize:20}})," ",t.change," $",r.a.createElement(V,{style:{fontSize:10}},"( ",(100*t.changePercent).toFixed(2)," % )"),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(V,{style:{fontSize:10}},t.latestTime," ")))))}}]),n}(a.Component),Y=["#0088FE","#00C49F","#FFBB28","#FF8042","#21618C","#F4D03F"],z=Math.PI/180,J=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).renderCustomizedLabel=function(t){var n=t.cx,a=t.cy,o=t.midAngle,i=t.innerRadius,l=t.outerRadius,c=t.percent,s=t.index,u=i+.5*(l-i),h=n+u*Math.cos(-o*z),m=a+u*Math.sin(-o*z);return r.a.createElement("text",{x:h,y:m,fill:"white",textAnchor:h>n?"start":"end",dominantBaseline:"central"},e.props.data[s].title+":","".concat((100*c).toFixed(0),"%"))},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(G.g,{onMouseEnter:this.onPieEnter,width:800,height:700},r.a.createElement(G.f,{data:this.props.data,cx:450,cy:350,labelLine:!1,label:this.renderCustomizedLabel,outerRadius:300,fill:"#8884d8"},this.props.data.map(function(e,t){return r.a.createElement(G.b,{key:"cell-".concat(t),fill:Y[t%Y.length]})})),r.a.createElement(G.h,null))}}]),n}(r.a.Component);function K(){K=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function c(e,t,n,a){var r=t&&t.prototype instanceof h?t:h,o=Object.create(r.prototype),i=new O(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return j()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var l=w(i,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=s(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var u={};function h(){}function m(){}function d(){}var p={};l(p,r,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(S([])));v&&v!==t&&n.call(v,r)&&(p=v);var f=d.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(r,o){function i(){return new t(function(a,i){!function a(r,o,i,l){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){a("next",e,i,l)},function(e){a("throw",e,i,l)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return a("throw",e,i,l)})}l(c.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function S(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=d,l(f,"constructor",d),l(d,"constructor",m),m.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},y(E.prototype),l(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(c(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(f),l(f,i,"Generator"),l(f,r,function(){return this}),l(f,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var W=n(142),H=h.a.Title,Z=(h.a.Paragraph,h.a.Text),q=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={amount:0,strategyList:[],loading:!0,strategyResponse:[],amountResponse:[],piechartResponse:[]},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(R.a)(K().mark(function e(){var t,n,a;return K().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=W.parse(this.props.location.search),this.setState({amount:parseInt(t.amount),strategyList:t.strategy}),(n={}).Amount=parseInt(t.amount),n.Strategies=[],2===t.strategy.length?n.Strategies=Object(T.a)(t.strategy):n.Strategies.push(t.strategy),console.log(n),e.next=9,F.a.post("http://18.191.67.212:5001/getData",n);case 9:a=e.sent,console.log(a),console.log(JSON.stringify(a)),this.setState({loading:!1}),a.data.strategiesResponse[1]?this.setState({strategyResponse:[].concat(Object(T.a)(a.data.strategiesResponse[0]),Object(T.a)(a.data.strategiesResponse[1]))}):this.setState({strategyResponse:Object(T.a)(a.data.strategiesResponse[0])}),this.setState({amountResponse:a.data.amountResponse}),this.setState({piechartResponse:a.data.piechartResponse}),console.log("this.state.strategyResponse"),console.log(this.state.strategyResponse),console.log("this.state.piechartResponse"),console.log(this.state.piechartResponse);case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state.strategyList,n=!1;return 2===t.length?(e=t.join(" & "),n=!0):e=t,r.a.createElement("div",{className:"ResultApp"},r.a.createElement("div",{className:"box effect1"},r.a.createElement(h.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(H,{level:3}," ",r.a.createElement("a",{href:"/"},"Stock Portfolio Suggestion Engine "))),r.a.createElement(p.a,null)),r.a.createElement(A.a,{tip:"Loading...",spinning:this.state.loading},r.a.createElement("div",null,r.a.createElement(Z,{strong:!0},"Amount: ")," ",r.a.createElement(Z,null,"$ ",this.state.amount),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(Z,{strong:!0},"Investing Strategies: "),r.a.createElement(Z,null,e))),r.a.createElement(p.a,null),!n&&r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(H,{level:4},t," ")),r.a.createElement("br",null),r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement(g.a,{gutter:16},r.a.createElement($,{data:this.state.strategyResponse[0],amount:this.state.amountResponse[0]}),r.a.createElement($,{data:this.state.strategyResponse[1],amount:this.state.amountResponse[1]}),r.a.createElement($,{data:this.state.strategyResponse[2],amount:this.state.amountResponse[2]})))),n&&r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(H,{level:4},t[0]," ")),r.a.createElement("br",null),r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement(g.a,{gutter:16},r.a.createElement($,{data:this.state.strategyResponse[0],amount:this.state.amountResponse[0]}),r.a.createElement($,{data:this.state.strategyResponse[1],amount:this.state.amountResponse[1]}),r.a.createElement($,{data:this.state.strategyResponse[2],amount:this.state.amountResponse[2]}))),r.a.createElement(p.a,null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(H,{level:4},t[1]," ")),r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement(g.a,{gutter:16},r.a.createElement($,{data:this.state.strategyResponse[3],amount:this.state.amountResponse[0]}),r.a.createElement($,{data:this.state.strategyResponse[4],amount:this.state.amountResponse[1]}),r.a.createElement($,{data:this.state.strategyResponse[5],amount:this.state.amountResponse[2]})))))),r.a.createElement("div",{className:"box effect1"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(H,{level:4},"Graphical Representation")),r.a.createElement(J,{data:this.state.piechartResponse})))}}]),n}(a.Component),Q=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"RouteApp"},r.a.createElement(N.b,{history:x},r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:P}),r.a.createElement(N.a,{path:"/results",component:q}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[308,1,2]]]);
//# sourceMappingURL=main.e9d49e09.chunk.js.map