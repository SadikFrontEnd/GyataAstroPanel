/*! For license information please see 138.cdfe1b07.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[138],{1139:function(t,e,n){"use strict";n.r(e);var a=n(68),r=n(13),o=n(14),i=n(16),c=n(15),s=n(0),l=n.n(s),u=n(36),h=n.n(u),f=n(803),d=n(187),p=n(367),m=n(366),v=n(203),g=n(414),y=n(60),b=n.n(y),E=n(25),w=n(866),N=n(78),x=n.n(N),S=n(97);function O(){O=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new _(r||[]);return a(i,"_invoke",{value:w(t,n,c)}),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var h={};function f(){}function d(){}function p(){}var m={};s(m,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==e&&n.call(g,o)&&(m=g);var y=p.prototype=f.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var r;a(this,"_invoke",{value:function(a,o){function i(){return new e((function(r,i){!function a(r,o,i,c){var s=u(t[r],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return a("throw",t,i,c)}))}c(s.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(t,e,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=N(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=u(t,e,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}function N(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=u(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,a(y,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:d,configurable:!0}),d.displayName=s(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var i=new E(l(e,n,a,r),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),s(y,c,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return i.type="throw",i.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var _=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={astro:[],chatsContacts:[],msg:"",type:"",activeUser:null,activeChat:null},t.handleSendMessage=function(e,n,a){a.length>0&&(t.props.sendMessage(e,n,a),t.setState({msg:""}))},t.handleTime=function(t,e){var n=new Date(Date.parse(t)),a=new Date(Date.parse(e));return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()&&n.getDate()===a.getDate()},t.scrollToBottom=function(){var e=h.a.findDOMNode(t.chatArea);e.scrollTop=e.scrollHeight},t.submitHandler=function(){var e=Object(a.a)(O().mark((function e(n,a,r){var o,i;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o=JSON.parse(localStorage.getItem("astroId")),i={userid:t.state.userId,msg:t.state.msg},e.next=5,S.a.post("/user/add_chatroom/".concat(o),i).then((function(e){console.log("hdfkjh",e.data.status),!0===e.data.status&&(t.setState({msg:""}),S.a.get("/user/allchatwithAstro/".concat(t.state.roomId)).then((function(e){var n;console.log(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data),!0===e.data.status&&t.setState({roomChatData:null===e||void 0===e?void 0:e.data.data})})).catch((function(t){console.log(t)})))})).catch((function(t){console.log(t)}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),t.handleChange=function(e){t.setState({msg:e.target.value})},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=localStorage.getItem("astroId");S.a.get("/user/allchatwithAstro/".concat(e)).then((function(e){console.log("chatsContacts",e.data.data),t.setState({chatsContacts:e.data.data})})).catch((function(t){console.log(t)}))}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var t=this;console.log(this.state.activeUser);var e=this.state,n=(e.chatsContacts,e.activeUser),a=n&&n._id?n._id:null,r=n&&n._id?this.props.chat.chats[a]:null,o=r&&void 0!==r&&r.msg?r.msg.map((function(e,a){return l.a.createElement(l.a.Fragment,{key:a},function(){if(a>0&&!t.handleTime(e.time,r.msg[a-1].time))return l.a.createElement("div",{className:"divider"},l.a.createElement("div",{className:"divider-text"},(new Date).getDate()+" "+(new Date).toLocaleString("default",{month:"short"})))}(),l.a.createElement("div",{className:"chat ".concat(!0!==e.isSent?"chat-left":"chat-right")},function(){var t,o;return a>0?!0===e.isSent&&!0!==r.msg[a-1].isSent?l.a.createElement("div",{className:"chat-avatar"},l.a.createElement("div",{className:"avatar m-0"},l.a.createElement("img",{src:null===(t=e.astroid)||void 0===t?void 0:t.userimg[0],alt:"chat avatar",height:"40",width:"40"}))):!0!==e.isSent?l.a.createElement("div",{className:"chat-avatar"},l.a.createElement("div",{className:"avatar m-0"},l.a.createElement("img",{src:null===(o=e.userid)||void 0===o?void 0:o.userimg[0],alt:"chat avatar",height:"40",width:"40"}))):"":l.a.createElement("div",{className:"chat-avatar"},l.a.createElement("div",{className:"avatar m-0"},l.a.createElement("img",{src:e.isSent?x.a:n.photoURL,alt:"chat avatar",height:"40",width:"40"})))}(),l.a.createElement("div",{className:"chat-body"},l.a.createElement("div",{className:"chat-content"},e.textContent))))})):null;return l.a.createElement("div",{className:"content-right"},l.a.createElement("div",{className:"chat-app-window"},l.a.createElement("div",{className:"start-chat-area ".concat(null!==n?"d-none":"d-flex")},l.a.createElement("span",{className:"mb-1 start-chat-icon"},l.a.createElement(p.a,{size:50})),l.a.createElement("h4",{className:"py-50 px-1 sidebar-toggle start-chat-text",onClick:function(){if(!1!==t.props.mql.matches)return null;t.props.mainSidebar(!0)}},"Start Conversation")),l.a.createElement("div",{className:"active-chat ".concat(null===n?"d-none":"d-block")},l.a.createElement("div",{className:"chat_navbar"},l.a.createElement("header",{className:"chat_header d-flex justify-content-between align-items-center p-1"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("div",{className:"sidebar-toggle d-block d-lg-none mr-1",onClick:function(){return t.props.mainSidebar(!0)}},l.a.createElement(m.a,{size:24})),l.a.createElement("div",{className:"avatar user-profile-toggle m-0 m-0 mr-1",onClick:function(){return t.props.handleReceiverSidebar("open")}},l.a.createElement("img",{src:null!==n?n.photoURL:"",alt:null!==n?n.displayName:"",height:"40",width:"40"}),l.a.createElement("span",{className:"\n                    ".concat(null!==n&&"do not disturb"===n.status?"avatar-status-busy":null!==n&&"away"===n.status?"avatar-status-away":null!==n&&"offline"===n.status?"avatar-status-offline":"avatar-status-online","\n                    ")})),l.a.createElement("h6",{className:"mb-0"},null!==n?n.displayName:"")),l.a.createElement("span",{className:"favorite",onClick:function(){r&&t.props.togglePinned(n._id,!r.isPinned)}},l.a.createElement(v.a,{size:22,stroke:r&&!0===r.isPinned?"#FF9F43":"#626262"})))),l.a.createElement(b.a,{className:"user-chats",options:{wheelPropagation:!1},ref:function(e){t.chatArea=e}},l.a.createElement("div",{className:"chats"},o)),l.a.createElement("div",{className:"chat-app-form"},l.a.createElement("form",{className:"chat-app-input d-flex align-items-center",onSubmit:function(e){var a;e.preventDefault(),t.handleSendMessage(n._id,!1,null===(a=t.state.data)||void 0===a?void 0:a.msg,n)}},l.a.createElement(f.a,{type:"text",className:"message mr-1 ml-50",placeholder:"Type your message",value:this.state.msg,onChange:function(e){e.preventDefault(),t.setState({msg:e.target.value})}}),l.a.createElement(d.a,{color:"primary"},l.a.createElement(g.a,{className:"d-lg-none",size:15}),l.a.createElement("span",{className:"d-lg-block d-none"},"Send")))))))}}]),n}(l.a.Component);e.default=Object(E.b)((function(t){return{chat:t.chatApp.chats}}),{togglePinned:w.g,sendMessage:w.f})(_)},803:function(t,e,n){"use strict";var a=n(5),r=n(7),o=n(11),i=n(12),c=n(0),s=n.n(c),l=n(1),u=n.n(l),h=n(4),f=n.n(h),d=n(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(t){function e(e){var n;return(n=t.call(this,e)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(e,t);var n=e.prototype;return n.getRef=function(t){this.props.innerRef&&this.props.innerRef(t),this.ref=t},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var t=this.props,e=t.className,n=t.cssModule,o=t.type,i=t.bsSize,c=t.valid,l=t.invalid,u=t.tag,h=t.addon,m=t.plaintext,v=t.innerRef,g=Object(r.a)(t,p),y=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),w="form-control";m?(w+="-plaintext",E=u||"input"):"file"===o?w+="-file":"range"===o?w+="-range":y&&(w=h?null:"form-check-input"),g.size&&b.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var N=Object(d.mapToCssModules)(f()(e,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,w),n);return("input"===E||u&&"function"===typeof u)&&(g.type=o),g.children&&!m&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),s.a.createElement(E,Object(a.a)({},g,{ref:v,className:N,"aria-invalid":l}))},e}(s.a.Component);v.propTypes=m,v.defaultProps={type:"text"},e.a=v},866:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return h}));var a=n(42),r=n.n(a),o=function(){return function(t){r.a.get("api/app/chat/chats").then((function(e){t({type:"GET_CONTACTS",contacts:e.data.contacts,chats:e.data.chats})})).catch((function(t){return console.log(t)}))}},i=function(){return function(t){r.a.get("api/app/chat/chat-contacts").then((function(e){t({type:"GET_CHAT_CONTACTS",chats:e.data})})).catch((function(t){return console.log(t)}))}},c=function(t,e){return function(n){r.a.post("/api/apps/chat/set-pinned/",{contactId:t,value:e}).then((function(a){n({type:"SET_PINNED",id:t,value:e})})).catch((function(t){return console.log(t)}))}},s=function(t,e,n){return n.length>0?function(a){var i={textContent:n,isSent:!0,isSeen:!1,time:(new Date).toString()};r.a.post("/api/app/chat/send-message",{contactId:t,message:i,isPinned:e}).then((function(r){a({type:"SEND_MESSAGE",msg:i,id:t,isPinned:e,text:n}),a(o())})).catch((function(t){return console.log(t)}))}:void 0},l=function(t){return function(e){e({type:"CHANGE_STATUS",status:t})}},u=function(t){return function(e){e({type:"SEARCH_CONTACTS",query:t})}},h=function(t){return function(e){r.a.post("/api/apps/chat/mark-all-seen/",{contactId:t}).then((function(n){e({type:"MARK_AS_SEEN",id:t})})).catch((function(t){return console.log(t)}))}}}}]);
//# sourceMappingURL=138.cdfe1b07.chunk.js.map