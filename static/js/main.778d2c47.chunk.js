(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n.p+"static/media/magnifier.a14461b8.svg"},46:function(e,t,n){e.exports=n.p+"static/media/plus.e43ce6c8.svg"},49:function(e,t,n){e.exports=n.p+"static/media/bulb.af737b55.svg"},50:function(e,t,n){e.exports=n.p+"static/media/pen.84b70f8a.svg"},51:function(e,t,n){e.exports=n.p+"static/media/twitter.051af8ba.svg"},52:function(e,t,n){e.exports=n.p+"static/media/logout.0969c92b.svg"},53:function(e,t,n){e.exports=n.p+"static/media/logo.93d4f3ba.svg"},54:function(e,t,n){e.exports=n.p+"static/media/link.6fc1d8fe.svg"},56:function(e,t,n){e.exports=n(70)},70:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(16),o=n.n(i),c=n(9),u=n(12),l=n(7),s=n(23),d=n(17),m=n(40),p=n(18),f={notes:[{id:1,title:"Wake me up when Vue ends",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"1 day"},{id:2,title:"Como es An Gular?",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"1 day"},{id:3,title:"Du bist Reactish",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"5 days"},{id:4,title:"Reactuj si\u0119 kto moze!",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"10 days"}],twitters:[{id:1,title:"Hello Roman",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"1 day",twitterName:"hello_roman"},{id:2,title:"Redux guy",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"1 day",twitterName:"dan_abramov"},{id:3,title:"React router stuff",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"5 days",twitterName:"mjackson"},{id:4,title:"Super animacje!",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"10 days",twitterName:"sarah_edo"}],articles:[{id:1,title:"React on my mind",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",articleUrl:"https://youtube.com/helloroman",created:"1 day"},{id:2,title:"Wish you React",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",articleUrl:"https://youtube.com/helloroman",created:"1 day"},{id:3,title:"You gave React a bad name",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",articleUrl:"https://youtube.com/helloroman",created:"5 days"},{id:4,title:"Is it React you looking for?",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",articleUrl:"https://youtube.com/helloroman",created:"10 days"}]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE_ITEM":return Object(p.a)({},e,Object(d.a)({},t.payload.itemType,Object(m.a)(e[t.payload.itemType].filter(function(e){return e.id!==t.payload.id}))));case"ADD_ITEM":return Object(p.a)({},e,Object(d.a)({},t.payload.itemType,[].concat(Object(m.a)(e[t.payload.itemType]),[t.payload.item])));default:return e}},g=Object(s.b)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=n(30),v=n(24),x=n(25),E=n(32),O=n(26),y=n(31),j=n(1),w=n(2);function k(){var e=Object(w.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&subset=latin-ext');\n\n  *, *::before, *::after{\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 0;\n    padding: 0;    \n  }\n\n  html{\n    font-size: 62.5%;\n\n  }\n\n  body{\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.6rem;\n    padding-left: 153px;\n  }\n"]);return k=function(){return e},e}var C=Object(j.b)(k()),z=a.a.createContext("notes"),D={notes:"hsl(49, 100%, 58%)",twitters:"hsl(196, 83%, 75%)",articles:"hsl(106, 47%, 64%)",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 70%)",black:"hsl(0, 0%, 0%)",regular:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"}},S=function(e){function t(){var e,n;Object(v.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(a)))).state={pageType:"notes"},n.setCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=n.props.location.pathname,r=["notes","twitters","articles"].filter(function(e){return t.includes(e)}),a=Object(h.a)(r,1)[0];e.pageType!==a&&n.setState({pageType:a})},n}return Object(y.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(e,t){this.setCurrentPage(t)}},{key:"render",value:function(){var e=this.props.children,t=this.state.pageType;return a.a.createElement("div",null,a.a.createElement(z.Provider,{value:t},a.a.createElement(C,null),a.a.createElement(j.a,{theme:D},e)))}}]),t}(r.Component),_=Object(u.f)(S),N=n(45),T=n.n(N);function U(){var e=Object(w.a)(["\n      font-size: ",";\n      padding: 10px 20px 10px 40px;\n      background-image: url(",");\n      background-repeat: no-repeat;\n      background-position: 15px 50%;\n      background-size: 15px;\n    "]);return U=function(){return e},e}function L(){var e=Object(w.a)(["\n  background-color: ",";\n  color: black;\n  font-size: ",";\n  font-weight: ",";\n  font-family: 'Montserrat', sans-serif;\n  padding: 15px 30px;\n  border-radius: 50px;\n  border: none;\n\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: ",";\n  }\n\n  ","\n"]);return L=function(){return e},e}var R=j.d.input(L(),function(e){return e.theme.grey100},function(e){return e.theme.fontSize.s},function(e){return e.theme.regular},function(e){return e.theme.grey300},function(e){return e.search&&Object(j.c)(U(),function(e){return e.theme.fontSize.xs},T.a)});function V(){var e=Object(w.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return V=function(){return e},e}var q=j.d.h1(V(),function(e){var t=e.theme;return e.big?t.fontSize.xl:t.fontSize.l},function(e){return e.theme.bold});function M(){var e=Object(w.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return M=function(){return e},e}var I=j.d.p(M(),function(e){return e.theme.fontSize.s},function(e){return e.theme.regular}),P=function(e){return function(t){return a.a.createElement(z.Consumer,null,function(n){return a.a.createElement(e,Object.assign({},t,{pageContext:n}))})}};function A(){var e=Object(w.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 40%;\n  border: none;\n  background-color: transparent;\n  /* background-color: ","; */\n\n  &.active{\n    background-color: white;\n  }\n"]);return A=function(){return e},e}var B=j.d.button(A(),function(e){return e.icon},function(e){return e.active?"white":"transparent"}),X=n(46),F=n.n(X);function W(){var e=Object(w.a)(["\n      background-color: ",";\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return W=function(){return e},e}function J(){var e=Object(w.a)(["\n  width: 220px;\n  height: 47px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  text-decoration: none;\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n\n  ","\n"]);return J=function(){return e},e}var Y=j.d.button(J(),function(e){var t=e.activecolor;return e.theme[t]},function(e){return e.secondary&&Object(j.c)(W(),function(e){return e.theme.grey200})}),G=n(34);function H(){var e=Object(w.a)(["\n  margin-top: 30px;\n"]);return H=function(){return e},e}function K(){var e=Object(w.a)(["\n  /* font-size: ",";\n  font-size: 16px; */\n  margin: 30px 0 100px;\n  border-radius: 20px;\n  height: 30vh;\n"]);return K=function(){return e},e}function Q(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Q=function(){return e},e}function Z(){var e=Object(w.a)(["\n  border-left: 10px solid ",";\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  padding: 100px 90px;\n  flex-direction: column;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 680px;\n  background-color: white;\n  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);\n  transform: translateX(",");\n  transition: transform 0.25s ease-in-out;\n"]);return Z=function(){return e},e}var $=j.d.div(Z(),function(e){return e.theme[e.activecolor]},function(e){return e.isVisible?"0":"100%"}),ee=Object(j.d)(G.b)(Q()),te=Object(j.d)(R)(K(),function(e){return e.theme.fontSize.s}),ne=Object(j.d)(R)(H()),re=function(e){var t=e.pageContext,n=e.isVisible,r=e.toggleVisibility,i=e.addItem;return a.a.createElement($,{isVisible:n,activecolor:t},a.a.createElement(q,{big:!0},"Create new ",t),a.a.createElement(G.c,{initialValues:{title:"",content:"",articleUrl:"",twitterName:"",created:""},onSubmit:function(e,a){var o=a.setSubmitting;i(t,e),o(!1),r(!n)}},function(e){var n=e.values,r=e.handleChange,i=e.handleBlur,o=e.isSubmitting;return a.a.createElement(ee,null,a.a.createElement(ne,{type:"text",name:"title",onChange:r,onBlur:i,value:n.title,placeholder:"title"}),"twitters"===t&&a.a.createElement(ne,{type:"text",name:"twitterName",onChange:r,onBlur:i,value:n.twitterName,placeholder:"account name eg. hello_romen"}),"articles"===t&&a.a.createElement(ne,{as:G.a,type:"text",name:"articleUrl",placeholder:"link"}),a.a.createElement(te,{as:"textarea",name:"content",onChange:r,onBlur:i,value:n.content,placeholder:"description"}),a.a.createElement(Y,{type:"submit",disabled:o,activecolor:t},"Add note"))}))};re.defaultProps={pageContext:"notes"};var ae=Object(l.b)(null,function(e){return{addItem:function(t,n){return e(function(e,t){return{type:"ADD_ITEM",payload:{itemType:e,item:Object(p.a)({id:"".concat(Math.random().toString(36).substr(2,9))},t)}}}(t,n))}}})(P(re)),ie=n(49),oe=n.n(ie),ce=n(50),ue=n.n(ce),le=n(51),se=n.n(le),de=n(52),me=n.n(de),pe=n(53),fe=n.n(pe);function be(){var e=Object(w.a)(["\n  margin-top: auto;\n"]);return be=function(){return e},e}function ge(){var e=Object(w.a)(["\n  list-style: none;\n"]);return ge=function(){return e},e}function he(){var e=Object(w.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 80%;\n  border: none;\n  margin-bottom: 10vh;\n"]);return he=function(){return e},e}function ve(){var e=Object(w.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 25px 0;\n  height: 100vh;\n  width: 153px;\n  padding-top: 40px;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]);return ve=function(){return e},e}var xe=j.d.div(ve(),function(e){var t=e.activeColor,n=e.theme;return t?n[t]:n.note}),Ee=Object(j.d)(c.c)(he(),fe.a),Oe=j.d.ul(ge()),ye=Object(j.d)(B)(be()),je=function(e){var t=e.pageContext;return a.a.createElement(xe,{activeColor:t},a.a.createElement(Ee,{to:"/"}),a.a.createElement(Oe,null,a.a.createElement("li",null,a.a.createElement(B,{as:c.c,to:"/notes",icon:ue.a,activeclass:"active"})),a.a.createElement("li",null,a.a.createElement(B,{as:c.c,to:"/twitters",icon:se.a,activeclass:"active"})),a.a.createElement("li",null,a.a.createElement(B,{as:c.c,to:"/articles",icon:oe.a,activeclass:"active"}))),a.a.createElement(ye,{as:c.c,to:"/login",icon:me.a,activeclass:"active"}))};je.defaultProps={pageContext:"notes"};var we=P(je),ke=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(we,null),t)};function Ce(){var e=Object(w.a)(["\n  position: fixed;\n  z-index: 99999;\n  bottom: 40px;\n  right: 40px;\n  background-color: ",";\n  background-size: 35%;\n  border-radius: 50%;\n  cursor: pointer;\n"]);return Ce=function(){return e},e}function ze(){var e=Object(w.a)(["\n  font-weight: ",";\n"]);return ze=function(){return e},e}function De(){var e=Object(w.a)(["\n  margin-top: 25px;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return De=function(){return e},e}function Se(){var e=Object(w.a)(["\n  margin: 25px 0 50px 0;\n"]);return Se=function(){return e},e}function _e(){var e=Object(w.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 85px;\n"]);return _e=function(){return e},e}function Ne(){var e=Object(w.a)(["\n  position: relative;\n  padding: 25px 150px 25px 70px;\n"]);return Ne=function(){return e},e}var Te=j.d.div(Ne()),Ue=j.d.div(_e()),Le=j.d.div(Se()),Re=Object(j.d)(q)(De()),Ve=Object(j.d)(I)(ze(),function(e){return e.theme.bold}),qe=Object(j.d)(B)(Ce(),function(e){var t=e.activeColor;return e.theme[t]}),Me=function(e){var t=e.children,n=e.pageContext,i=Object(r.useState)(!1),o=Object(h.a)(i,2),c=o[0],u=o[1];return a.a.createElement(ke,null,a.a.createElement(Te,null,a.a.createElement(Le,null,a.a.createElement(R,{search:!0,placeholder:"Search"}),a.a.createElement(Re,{big:!0,as:"h1"},n),a.a.createElement(Ve,null,"6 ",n)),a.a.createElement(Ue,null,t),a.a.createElement(qe,{onClick:function(){return u(!c)},icon:F.a,activeColor:n}),a.a.createElement(ae,{isVisible:c,toggleVisibility:u})))};Me.defaultProps={pageContext:"notes"};var Ie=P(Me),Pe=n(54),Ae=n.n(Pe);function Be(){var e=Object(w.a)(["\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 47px;\n  width: 47px;\n  border-radius: 50%;\n  background: white url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 55%;\n"]);return Be=function(){return e},e}function Xe(){var e=Object(w.a)(["\n  width: 86px;\n  height: 86px;\n  border: 6px solid ",";\n  border-radius: 50px;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n"]);return Xe=function(){return e},e}function Fe(){var e=Object(w.a)(["\n  margin-top: 5px;\n"]);return Fe=function(){return e},e}function We(){var e=Object(w.a)(["\n  font-weight: ",";\n  font-size: ",";\n  margin-bottom: 5px;\n"]);return We=function(){return e},e}function Je(){var e=Object(w.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    "]);return Je=function(){return e},e}function Ye(){var e=Object(w.a)(["\n  position: relative;\n  background-color: ",";\n  padding: 17px 30px;\n\n  :first-of-type {\n    z-index: 9999;\n  }\n\n  ","\n"]);return Ye=function(){return e},e}function Ge(){var e=Object(w.a)(["\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  min-height: 280px;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n  cursor: pointer;\n"]);return Ge=function(){return e},e}var He=j.d.div(Ge()),Ke=j.d.div(Ye(),function(e){var t=e.theme,n=e.activeColor;return n?t[n]:"white"},function(e){return e.flex&&Object(j.c)(Je())}),Qe=Object(j.d)(I)(We(),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),Ze=Object(j.d)(q)(Fe()),$e=j.d.img(Xe(),function(e){return e.theme.twitters}),et=j.d.a(Be(),Ae.a),tt=function(e){function t(){var e,n;Object(v.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(E.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(a)))).state={redirect:!1},n.handleCardClick=function(){return n.setState({redirect:!0})},n}return Object(y.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pageContext,n=e.id,r=e.title,i=e.created,o=e.twitterName,c=e.articleUrl,l=e.content,s=e.removeItem;return this.state.redirect?a.a.createElement(u.a,{to:"".concat(t,"/").concat(n)}):a.a.createElement(He,{onClick:this.handleCardClick},a.a.createElement(Ke,{activeColor:t},a.a.createElement(Ze,null,r),a.a.createElement(Qe,null,i),"twitters"===t&&a.a.createElement($e,{src:"https://avatars.io/twitter/".concat(o)}),"articles"===t&&a.a.createElement(et,{href:c,target:"_blank",rel:"noopener noreferrer"})),a.a.createElement(Ke,{flex:!0},a.a.createElement(I,null,l),a.a.createElement(Y,{onClick:function(){return s(t,n)},secondary:!0},"REMOVE")))}}]),t}(r.Component);tt.defaultProps={pageContext:"notes",twitterName:null,articleUrl:null,id:null};var nt=Object(l.b)(null,function(e){return{removeItem:function(t,n){return e(function(e,t){return{type:"REMOVE_ITEM",payload:{itemType:e,id:t}}}(t,n))}}})(P(tt)),rt=function(e){var t=e.notes;return a.a.createElement(Ie,null,a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(nt,{id:e.id,key:e.id,title:e.title,content:e.content,created:e.created})})))};rt.defaultProps={notes:[]};var at=Object(l.b)(function(e){return{notes:e.notes}})(rt),it=function(e){var t=e.articles;return a.a.createElement(Ie,null,a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(nt,{id:e.id,key:e.id,title:e.title,content:e.content,created:e.created,articleUrl:e.articleUrl})})))};it.defaultProps={articles:[]};var ot=Object(l.b)(function(e){return{articles:e.articles}})(it),ct=function(e){var t=e.twitters;return a.a.createElement(Ie,null,a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(nt,{id:e.id,key:e.id,title:e.title,content:e.content,created:e.created,twitterName:e.twitterName})})))};ct.defaultProps={twitters:[]};var ut=Object(l.b)(function(e){return{twitters:e.twitters}})(ct),lt="/",st="/notes",dt="/notes/:id",mt="/twitters",pt="/twitters/:id",ft="/articles",bt="/articles/:id";function gt(){var e=Object(w.a)(["\n  margin-top: 25px;\n"]);return gt=function(){return e},e}function ht(){var e=Object(w.a)(["\n  position: absolute;\n  right: -80px;\n  top: 50px;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n"]);return ht=function(){return e},e}function vt(){var e=Object(w.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 0;\n"]);return vt=function(){return e},e}function xt(){var e=Object(w.a)(["\n  font-weight: ",";\n"]);return xt=function(){return e},e}function Et(){var e=Object(w.a)(["\n  margin: 25px 0 0 0;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return Et=function(){return e},e}function Ot(){var e=Object(w.a)(["\n  margin: 25px 0 50px 0;\n"]);return Ot=function(){return e},e}function yt(){var e=Object(w.a)(["\n  padding: 25px 150px 25px 70px;\n  max-width: 50vw;\n  position: relative;\n\n  @media (max-width: 1200px) {\n    max-width: 80vw;\n  }\n"]);return yt=function(){return e},e}var jt=j.d.div(yt()),wt=j.d.div(Ot()),kt=Object(j.d)(q)(Et()),Ct=Object(j.d)(I)(xt(),function(e){return e.theme.bold}),zt=j.d.a(vt(),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),Dt=j.d.img(ht()),St=Object(j.d)(Y)(gt()),_t=function(e){var t=e.pageContext,n=e.title,r=e.created,i=e.content,o=e.articleUrl,u=e.twitterName;return a.a.createElement(ke,null,a.a.createElement(jt,null,a.a.createElement(wt,null,a.a.createElement(kt,{big:!0,as:"h1"},n),a.a.createElement(Ct,null,"created ",r," ago")),a.a.createElement(I,null,i),"articles"===t&&a.a.createElement(zt,{href:o},"Open article"),"twitters"===t&&a.a.createElement(Dt,{alt:n,src:"https://avatars.io/twitter/".concat(u)}),a.a.createElement(St,{as:c.b,to:"/".concat(t),activecolor:t},"close / save")))};_t.defaultProps={title:"",created:"",content:"",articleUrl:"",twitterName:""};var Nt=P(_t),Tt="Wake me up when Vue ends",Ut="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",Lt="hello_roman",Rt="https://youtube.com/helloroman",Vt="1 day",qt=function(){return a.a.createElement(Nt,{title:Tt,created:Vt,content:Ut,articleUrl:Rt,twitterName:Lt})},Mt=function(){return a.a.createElement(l.a,{store:g},a.a.createElement(c.a,{basename:"/fav-note"},a.a.createElement(_,null,a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:lt,render:function(){return a.a.createElement(u.a,{to:"/notes"})}}),a.a.createElement(u.b,{exact:!0,path:st,component:at}),a.a.createElement(u.b,{path:dt,component:qt}),a.a.createElement(u.b,{exact:!0,path:ft,component:ot}),a.a.createElement(u.b,{path:bt,component:qt}),a.a.createElement(u.b,{exact:!0,path:mt,component:ut}),a.a.createElement(u.b,{path:pt,component:qt})))))};o.a.render(a.a.createElement(Mt,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.778d2c47.chunk.js.map