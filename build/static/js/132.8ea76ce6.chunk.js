(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[132],{1985:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t(43),r=t(13),s=t(14),l=t(16),i=t(15),o=t(0),c=t.n(o),m=t(1240),u=t(1238),d=t(1239),f=t(187),p=t(1243),h=t(815),b=t(807),g=t(803),E=t(42),v=t.n(E),y=t(58),N=t(801),O=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),v.a.post("http://3.108.185.7:4000/api/user/customersignup",s.state).then((function(e){console.log(e),alert("Customer Added Successful"),s.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},s.state={first_name:"",last_name:"",customer_email:"",mobile_no:"",selectedFile:null,status:""},s}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(N.a,{breadCrumbTitle:"Customer",breadCrumbParent:"Home",breadCrumbActive:"Add Customer "}),c.a.createElement(m.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(d.a,null,c.a.createElement("h1",{sm:"6",className:"float-left"},"Add User")),c.a.createElement(d.a,null,c.a.createElement(y.b,{render:function(e){var a=e.history;return c.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/userride/userRideList")}},"                 Back")}}))),c.a.createElement(p.a,null,c.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"first Name"),c.a.createElement(g.a,{required:!0,type:"text",name:"first_name",placeholder:"Enter First Name",value:this.state.first_name,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Last Name"),c.a.createElement(g.a,{required:!0,type:"text",name:"last_name",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null," Email"),c.a.createElement(g.a,{required:!0,type:"email",name:"customer_email",placeholder:"Email",value:this.state.customer_email,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Mobile No."),c.a.createElement(g.a,{required:!0,type:"number",name:"mobile_no",placeholder:"Mobile No.",value:this.state.mobile_no,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"DOB"),c.a.createElement(g.a,{required:!0,type:"date",name:"sortorder",placeholder:"Enter Confirm  Password",value:this.state.sortorder,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Date Of Register"),c.a.createElement(g.a,{required:!0,type:"date",name:"sortorder",placeholder:"Enter Confirm  Password",value:this.state.sortorder,onChange:this.changeHandler}))),c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Password "),c.a.createElement(g.a,{required:!0,type:"text",name:"sortorder",placeholder:"Enter Password",value:this.state.sortorder,onChange:this.changeHandler})),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,null,"Confirm Password "),c.a.createElement(g.a,{required:!0,type:"text",name:"sortorder",placeholder:"Enter Confirm  Password",value:this.state.sortorder,onChange:this.changeHandler}))),c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a,{className:"mb-1"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add User")))))))}}]),t}(o.Component)},803:function(e,a,t){"use strict";var n=t(5),r=t(7),s=t(11),l=t(12),i=t(0),o=t.n(i),c=t(1),m=t.n(c),u=t(4),d=t.n(u),f=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,i=e.valid,c=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(r.a)(e,p),E=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),N="form-control";h?(N+="-plaintext",y=m||"input"):"file"===s?N+="-file":"range"===s?N+="-range":E&&(N=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var O=Object(f.mapToCssModules)(d()(a,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,N),t);return("input"===y||m&&"function"===typeof m)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(f.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":c}))},a}(o.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},807:function(e,a,t){"use strict";var n=t(5),r=t(7),s=t(0),l=t.n(s),i=t(1),o=t.n(i),c=t(4),m=t.n(c),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,c=e.check,f=e.size,p=e.for,h=Object(r.a)(e,d),b=[];i.forEach((function(a,n){var r=e[a];if(delete h[a],r||""===r){var s,l=!n;if(Object(u.isObject)(r)){var i,o=l?"-":"-"+a+"-";s=g(l,a,r.size),b.push(Object(u.mapToCssModules)(m()(((i={})[s]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),t)}else s=g(l,a,r),b.push(s)}}));var E=Object(u.mapToCssModules)(m()(a,!!s&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:p},h,{className:E}))};E.propTypes=h,E.defaultProps=b,a.a=E},815:function(e,a,t){"use strict";var n=t(5),r=t(7),s=t(11),l=t(12),i=t(0),o=t.n(i),c=t(1),m=t.n(c),u=t(4),d=t.n(u),f=t(3),p=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,i=e.innerRef,c=Object(r.a)(e,p),m=Object(f.mapToCssModules)(d()(a,!!s&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},c,{ref:i,className:m}))},a}(i.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=132.8ea76ce6.chunk.js.map