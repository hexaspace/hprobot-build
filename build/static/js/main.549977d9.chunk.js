(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],{133:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),c=n.n(o),s=n(9),i=(n(133),n(18)),l=n.n(i),d=n(25),u=(n(91),n(15)),b=n.n(u);function j(e,t){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"post",url:"/controller/login",data:{userId:t,userPassword:n}});case 3:if(a=e.sent,r=a.data.password,console.log("[LoginController] postControllerLogin \uacb0\uacfc ->"),console.log(a.data),1!=r){e.next=11;break}return e.abrupt("return",[r,a.data]);case 11:return e.abrupt("return",[r,a.data.message]);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log("[LoginController] postControllerLogin error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var m=n(220),h=n(12),x=n(226),g=n(224),O=n(228),v=n(115),f=n.n(v),y=n(114),C=n.n(y),k=n(225),N=n(223),_=n(85),w=n(41),S=n(2),I=Object(h.a)({root:{"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:"90px"}}}})(m.a);var R=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),m=p[0],h=p[1],v=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(n,i);case 2:if(t=e.sent,a=Object(s.a)(t,2),r=a[0],o=a[1],!r){e.next=16;break}console.log("[LoginPresenter] login success : "),console.log(o.user_name),sessionStorage.setItem("userId",n),sessionStorage.setItem("mapId",o.map_id),sessionStorage.setItem("userName",o.user_name),sessionStorage.setItem("logoSrc",o.logo_src),document.location.href="/",e.next=18;break;case 16:return console.log("[LoginPresenter] login failed, error  : ",o),e.abrupt("return");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"content",id:"login",children:[Object(S.jsxs)("div",{className:"content-title text-color-1",children:[" ",Object(S.jsx)(_.a,{className:"icon"}),"\ub85c\uadf8\uc778"]}),Object(S.jsx)("div",{className:"grid-container",children:Object(S.jsxs)("div",{className:"grid-item center-align",id:"item-login",children:[Object(S.jsx)("img",{className:"login-hprobot-img",src:"/assets/hprobot-logo/hprobot-logo-1line.png",alt:"hprobot-logo"}),Object(S.jsxs)("div",{className:"login-input-div",children:[Object(S.jsx)("div",{className:"left-align",children:Object(S.jsx)(w.f,{className:"icon"})}),Object(S.jsx)(I,{id:"outlined-basic",label:"\uc544\uc774\ub514",variant:"outlined",margin:"small",style:{width:"100% "},size:"small",value:n,onChange:function(e){r(e.target.value)},color:"primary"})]}),Object(S.jsxs)("div",{className:"login-input-div",children:[Object(S.jsx)("div",{className:"left-align",children:Object(S.jsx)(w.c,{className:"icon"})}),Object(S.jsxs)(O.a,{sx:{width:"100% "},variant:"outlined",size:"small",margin:"small",color:"primary",children:[Object(S.jsx)(x.a,{htmlFor:"outlined-adornment-password",children:"\ud328\uc2a4\uc6cc\ub4dc"}),Object(S.jsx)(g.a,{id:"outlined-adornment-password",type:m?"text":"password",value:i,onChange:function(e){u(e.target.value)},endAdornment:Object(S.jsx)(k.a,{position:"end",children:Object(S.jsx)(N.a,{"aria-label":"toggle password visibility",onClick:function(){h(!m)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:m?Object(S.jsx)(C.a,{}):Object(S.jsx)(f.a,{})})}),label:"Password",sx:{borderRadius:25}})]})]}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{className:"round-button text-color-w background-color-1",onClick:v,children:"\ub85c\uadf8\uc778"})})]})})]})},M=n(31),L=n(32),P=n(34),T=n(33),B=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onLogout=function(){window.sessionStorage.removeItem("userId"),window.sessionStorage.removeItem("mapId"),window.sessionStorage.removeItem("userName"),window.sessionStorage.removeItem("logoSrc"),document.location.href="/"},e}return Object(L.a)(n,[{key:"render",value:function(){var e=sessionStorage.getItem("userName"),t="/assets/store_logo/"+sessionStorage.getItem("logoSrc")+".png";return Object(S.jsxs)("div",{className:"content",id:"user",children:[Object(S.jsx)("h1",{children:" \ub0b4 \uc815\ubcf4"}),Object(S.jsxs)("div",{className:"grid-container",children:[Object(S.jsxs)("div",{className:"grid-item",id:"item-profile",children:[Object(S.jsx)("h4",{children:"\ud504\ub85c\ud544"}),Object(S.jsx)("img",{src:t,alt:"user-logo"}),Object(S.jsxs)("div",{children:[" \ub9e4\uc7a5\uba85 : ",e]}),Object(S.jsx)("button",{onClick:this.onLogout.bind(this),children:"\ub85c\uadf8\uc544\uc6c3"})]}),Object(S.jsx)("div",{className:"grid-item",id:"item-2",children:Object(S.jsx)("h4",{children:"\ud638\ucd9c \ud1b5\uacc4"})}),Object(S.jsx)("div",{className:"grid-item",id:"item-3",children:Object(S.jsx)("h4",{children:"\ucd5c\uadfc \uc8fc\ubb38"})}),Object(S.jsx)("div",{className:"grid-item",id:"item-4",children:Object(S.jsx)("h4",{children:"\ubb50\ud560\uae4c"})})]})]})}}]),n}(a.Component),A=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).goLogin=function(){document.location.href="/login"},e}return Object(L.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"content",id:"authorized",children:[Object(S.jsxs)("div",{className:"content-title text-color-1",children:[" ",Object(S.jsx)(_.a,{className:"icon"}),"\ub85c\uadf8\uc778"]}),Object(S.jsx)("div",{className:"grid-container",children:Object(S.jsxs)("div",{className:"grid-item center-align",id:"item-authorized",children:[Object(S.jsx)(w.g,{className:"icon",id:"warning-icon"}),Object(S.jsx)("p",{className:"text-color-2",id:"authorized-text",children:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"}),Object(S.jsx)("button",{className:"round-button text-color-w background-color-1",onClick:this.goLogin.bind(this),children:"\ub85c\uadf8\uc778\ud558\ub7ec \uac00\uae30"})]})})]})}}]),n}(a.Component),D=n(19);function z(e){var t=e.unit,n=e.data.node_id,a=e.data.x*t,r=e.data.y*t,o="/assets/unit/map_unit_"+e.data.type+".jpg";return Object(S.jsxs)("div",{className:"map-tile",onClick:e.onClick,style:{width:t,height:t,left:a,top:r},children:[Object(S.jsx)("div",{className:"map-tile-node-id",children:n}),Object(S.jsx)("img",{src:o,alt:"",className:"map-tile-img",style:{width:t,height:t}})]})}var E=function(e){var t=e.unit,n=e.xytypeList,a="assets/map-background/map-background-"+sessionStorage.getItem("mapId")+".png";return Object(S.jsxs)("div",{children:[n.map((function(n){return Object(S.jsx)(z,{unit:t,data:n,onClick:function(){return e.onClick(n.node_id)}},n.node_id)})),Object(S.jsx)("img",{src:a,alt:"map-background-img",className:"map-background-img"})]})},X=n(66);var U=function(e){var t,n=e.robot,a=e.onClick;return t=100==n.battery?Object(S.jsx)(X.b,{className:"icon"}):n.battery>=75?Object(S.jsx)(X.e,{className:"icon"}):n.battery>=50?Object(S.jsx)(X.d,{className:"icon"}):n.battery>=25?Object(S.jsx)(X.c,{className:"icon"}):Object(S.jsx)(X.a,{className:"icon"}),Object(S.jsxs)("li",{className:"home-button round-button background-color-4 ",onClick:a,children:[Object(S.jsxs)("span",{className:"text-color-w",children:[" ",n.robot_id,"\ubc88 \ub85c\ubd07"]}),t]})};var Y=function(e){var t=e.robot;return t.current_node==t.final_node?null:Object(S.jsxs)("li",{id:"arrive-item",children:[Object(S.jsx)("span",{id:"arrive-robot",className:"background-color-3 text-color-w",children:t.robot_id}),Object(S.jsx)("span",{id:"arrive-robot-string",children:" \ubc88 \ub85c\ubd07"}),Object(S.jsx)("div",{id:"arrow-div",children:Object(S.jsx)("p",{id:"arrow-right"})}),Object(S.jsx)("span",{id:"arrive-node",children:t.final_node})]})};function F(e){var t=["gray","green","red","orange","yellow","blue"][e.state],n=(e.posX- -.3)*e.unit,a=(e.posY- -.3)*e.unit,r=e.robotId,o=.5*e.unit+"px",c="/assets/robot/num_robot_"+r+".png";return Object(S.jsx)("div",{className:"robot",style:{left:n,top:a,backgroundColor:t,height:o,width:o},children:Object(S.jsx)("img",{src:c,alt:"num-robot-img",className:"num-robot-img"})})}function V(e){var t,n,a=(e.currX- -.5)*e.unit,r=(e.currY- -.5)*e.unit,o=(e.finalX- -.5)*e.unit,c=(e.finalY- -.5)*e.unit,s=(a+o)/2,i=(r+c)/2,l=Math.sqrt(Math.pow(a-o,2)+Math.pow(r-c,2)),d=i,u=s-l/2,b="rotate("+(t=a-o,n=r-c,180*Math.atan2(n,t)/Math.PI).toString()+"deg)";return Object(S.jsx)("div",{className:"target",style:{left:u,top:d,width:l,transform:b}})}b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var q=function(e){var t=e.unit,n=e.setRobotStatus,r=Object(a.useState)([]),o=Object(s.a)(r,2),c=o[0],i=o[1],l=[{map_id:7,robot_id:1,state:2,current_node:1,final_node:18,battery:100,curr_x:9,curr_y:2,final_x:4,final_y:2},{map_id:7,robot_id:2,state:2,current_node:2,final_node:2,battery:100,curr_x:10,curr_y:2,final_x:10,final_y:2},{map_id:7,robot_id:3,state:2,current_node:3,final_node:3,battery:100,curr_x:11,curr_y:2,final_x:11,final_y:2}],d=sessionStorage.getItem("mapId");function u(){var e=setInterval((function(){console.log("[RobotPosition] get robot position"),b.a.get("/controller/robot/position/"+d).then((function(e){i(e.data.robot_position),n(e.data.robot_position)})).catch((function(t){return console.log("call robot positions item fail."),i(l),clearInterval(e),e}))}),1e3);return e}return Object(a.useEffect)((function(){var e=u();return function(){return clearInterval(e)}}),[]),c.length>0?Object(S.jsxs)("div",{children:[c.map((function(e){return Object(S.jsx)(F,{unit:t,robotId:e.robot_id,state:e.state,posX:e.curr_x,posY:e.curr_y},e.robot_id)})),c.filter((function(e){return 1==e.state})).map((function(e){return Object(S.jsx)(V,{unit:t,currX:e.curr_x,currY:e.curr_y,finalX:e.final_x,finalY:e.final_y},e.robot_id)}))]}):(console.log(" robotPositionList.length <= 0 \uc874\uc7ac\uc548\ud568"),Object(S.jsx)("div",{children:Object(S.jsx)("button",{className:"data-reload",onClick:u,children:"\ub370\uc774\ud130 \ub85c\ub4dc"})}))};var J=function(e){var t=e.title,n=e.content,a=e.open,r=e.onPermit,c=e.onCancel;return a?Object(o.createPortal)(Object(S.jsxs)("div",{id:"modal",children:[Object(S.jsx)("div",{id:"overlay"}),Object(S.jsxs)("div",{id:"modal-box",className:"background-color-w",children:[Object(S.jsx)("h3",{id:"modal-title",className:"background-color-5 text-color-w",children:t}),Object(S.jsx)("p",{id:"modal-content",children:n}),Object(S.jsxs)("div",{id:"button-div",children:[Object(S.jsx)("button",{id:"ok-button",className:"round-button background-color-5 text-color-w",onClick:r,children:"\ud655\uc778"}),Object(S.jsx)("button",{id:"cancle-button",className:"round-button background-color-5 text-color-w",onClick:c,children:"\ucde8\uc18c"})]})]})]}),document.getElementById("modal")):null};function W(e,t){return G.apply(this,arguments)}function G(){return(G=Object(d.a)(l.a.mark((function e(t,n){var a,r,o,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/controller/button/to-destination/"+t);case 3:if(a=e.sent,r=a.data.error,console.log("[CallController] getDestinationRobot to-destination \uacb0\uacfc ->"),console.log(a),!r){e.next=12;break}return console.log(a.data.message),e.abrupt("return",[r,a.data.message]);case 12:return o=a.data.robot_id,c=a.data.map_name,s=te([n,c,o]),e.abrupt("return",[s,o]);case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.log("[CallController] getDestinationRobot error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}function H(e,t){return K.apply(this,arguments)}function K(){return(K=Object(d.a)(l.a.mark((function e(t,n){var a,r,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/controller/button/to-pickup/"+t+"/"+n);case 3:if(a=e.sent,r=a.data.error,console.log("[CallController] getPickupRobot to-pickup \uacb0\uacfc ->"),console.log(a),!r){e.next=12;break}return console.log(a.data.message),e.abrupt("return",[r,a.data.message]);case 12:return o=a.data.map_name,c=te([1,o,n]),e.abrupt("return",[c,a.status]);case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(0),console.log("[CallController] getPickupRobot error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function Q(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(d.a)(l.a.mark((function e(t){var n,a,r,o,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/controller/button/to-home/"+t);case 3:if(n=e.sent,a=n.data.error,console.log("[CallController] getBackRobot to-home \uacb0\uacfc ->"),console.log(n),!a){e.next=12;break}return console.log(n.data.message),e.abrupt("return",[a,n.data.message]);case 12:return r=n.data.robot_id,o=n.data.robot_home,c=n.data.map_name,s=te([o,c,r]),e.abrupt("return",[s,r]);case 17:e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(0),console.log("[CallController] getBackRobot error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(d.a)(l.a.mark((function e(t){var n,a,r,o,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b.a.get("/controller/button/robot-updated/"+t).then((function(e){if(console.log("[CallController] getCallRobot - robot-updated  \uacb0\uacfc ->"),console.log(e),e.data.result.length){return[!0,"[CallController] getCallRobot - update in 3 second. please wait"]}})).catch((function(e){return console.log("[CallController] getCallRobot - robot-updated  fail get robot updated."),console.log(e),[e,n.data.message]})),b.a.get("/controller/button/is-call/"+t).then((function(e){if(console.log("[CallController] getCallRobot - is call \uacb0\uacfc ->"),console.log(e),201==e.status){return[!0,"[CallController] getCallRobot - some robot is coming"]}})).catch((function(e){return console.log("[CallController] getCallRobot - fail  get is call status."),console.log(e),[e,n.data.message]})),e.next=5,b.a.get("/controller/button/to-user/"+t);case 5:if(n=e.sent,a=n.data.error,console.log("[CallController] getCallRobot - to-user  \uacb0\uacfc ->"),console.log(n),!a){e.next=14;break}return console.log(n.data.message),e.abrupt("return",[a,n.data.message]);case 14:return r=n.data.robot_id,o=n.data.user_node,c=n.data.map_name,s=te([o,c,r]),e.abrupt("return",[s,r]);case 19:e.next=25;break;case 21:return e.prev=21,e.t0=e.catch(0),console.log("[CallController] getCallRobot \ud638\ucd9c \uac00\ub2a5\ud55c \ub85c\ubd07\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\ub2e4\ub824\uc8fc\uc138\uc694.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}function te(e){console.log("[CallController] postButton param ",e);try{var t=b()({method:"post",url:"/mqtt/button",data:{final_node:e[0],map_name:e[1],robot_id:e[2]}});return console.log("[CallController] postButton   \uacb0\uacfc ->"),console.log(t),!1}catch(n){return console.log("[CallController] postButton button \uc815\ubcf4\ub97c \ub85c\ubd07\uc73c\ub85c \ubcf4\ub0b4\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.\n"+n.message),[!0,n.message]}}function ne(){return ae.apply(this,arguments)}function ae(){return(ae=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=sessionStorage.getItem("mapId"),e.prev=1,e.next=4,b.a.get("/map-views/"+t);case 4:if(200!=(n=e.sent).status){e.next=9;break}return e.abrupt("return",[!1,n.data]);case 9:return e.abrupt("return",[n.data.error,n.data.message]);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),console.log("[MapController] getMapView error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var re=n(116),oe=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(M.a)(this,n),(a=t.call(this,e)).mapContainer=r.a.createRef(),a.state={unit:0,isModalOpen:!1,destinationNode:0,clickedRobotId:0,robotStatus:[],modalTitle:"\uc81c\ubaa9",modalContent:"\ub0b4\uc6a9",mapView:[{map_id:"8",node_id:"0",x:"14",y:"7",type:"0"},{map_id:"8",node_id:"1",x:"11",y:"2",type:"6"},{map_id:"8",node_id:"2",x:"12",y:"2",type:"12"},{map_id:"8",node_id:"3",x:"13",y:"2",type:"10"},{map_id:"8",node_id:"4",x:"13",y:"1",type:"9"},{map_id:"8",node_id:"5",x:"12",y:"1",type:"12"},{map_id:"8",node_id:"6",x:"11",y:"1",type:"12"},{map_id:"8",node_id:"7",x:"10",y:"1",type:"13"},{map_id:"8",node_id:"8",x:"9",y:"1",type:"12"},{map_id:"8",node_id:"9",x:"8",y:"1",type:"12"},{map_id:"8",node_id:"10",x:"7",y:"1",type:"12"},{map_id:"8",node_id:"11",x:"6",y:"1",type:"13"},{map_id:"8",node_id:"12",x:"5",y:"1",type:"12"},{map_id:"8",node_id:"13",x:"4",y:"1",type:"12"},{map_id:"8",node_id:"14",x:"3",y:"1",type:"5"},{map_id:"8",node_id:"15",x:"3",y:"2",type:"3"},{map_id:"8",node_id:"16",x:"3",y:"3",type:"3"},{map_id:"8",node_id:"17",x:"3",y:"4",type:"2"},{map_id:"8",node_id:"18",x:"6",y:"2",type:"3"},{map_id:"8",node_id:"19",x:"6",y:"3",type:"2"},{map_id:"8",node_id:"20",x:"10",y:"2",type:"3"},{map_id:"8",node_id:"21",x:"10",y:"3",type:"2"}]},a}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,r,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=11,e.next=3,ne();case 3:if(n=e.sent,a=Object(s.a)(n,2),r=a[0],o=a[1],!r){e.next=12;break}return console.log("[MapController] "+o),e.abrupt("return");case 12:t=Number(o[0].x)+1;case 13:c=this.mapContainer.current.offsetWidth,console.log("[MapController] maxXsize : "+t),this.setState((function(e){return Object(D.a)(Object(D.a)({},e),{},{unit:c/t,mapView:o})}));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRobotStatus",value:function(e){this.setState((function(t){return Object(D.a)(Object(D.a)({},t),{},{robotStatus:e})}))}},{key:"handelRobotClick",value:function(e){this.setState((function(t){return Object(D.a)(Object(D.a)({},t),{},{isModalOpen:"robot",clickedRobotId:e,modalTitle:"\ub85c\ubd07 \ubcf5\uadc0",modalContent:e+"\ubc88 \ub85c\ubd07\uc744 \uc8fc\ucc28\uc7a5\uc73c\ub85c \ubcf5\uadc0\uc2dc\ud0a4\uaca0\uc2b5\ub2c8\uae4c?"})})),console.log("map modal click! "+e)}},{key:"handelMapClick",value:function(e){this.setState((function(t){return Object(D.a)(Object(D.a)({},t),{},{isModalOpen:"map",destinationNode:e,modalTitle:"\ub85c\ubd07 \ubcf4\ub0b4\uae30",modalContent:e+"\ubc88 \uc704\uce58\ub85c \ub85c\ubd07\uc744 \ubcf4\ub0b4\uaca0\uc2b5\ub2c8\uae4c?"})})),console.log("map modal click! "+e)}},{key:"clickRobotModalPermit",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,r,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.clickedRobotId,e.next=3,H(t,n);case 3:a=e.sent,r=Object(s.a)(a,2),o=r[0],c=r[1],o?(console.log("[MapPresenter] getPickupRobot fail  : ",c),this.setState((function(e){return Object(D.a)(Object(D.a)({},e),{},{isModalOpen:!1})}))):(console.log("[MapPresenter] getPickupRobot success : ",c),this.setState((function(e){return Object(D.a)(Object(D.a)({},e),{},{isModalOpen:!1,clickedRobotId:0})})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"clickMapModalPermit",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,r,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.destinationNode,e.next=3,W(t,n);case 3:a=e.sent,r=Object(s.a)(a,2),o=r[0],c=r[1],o?(console.log("[MapPresenter] getDestinationRobot fail  : ",c),this.setState((function(e){return Object(D.a)(Object(D.a)({},e),{},{isModalOpen:!1})}))):(console.log("[MapPresenter] getDestinationRobot success : ",c),this.setState((function(e){return Object(D.a)(Object(D.a)({},e),{},{isModalOpen:!1,destinationNode:0})})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=sessionStorage.getItem("userId"),n=this.state.isModalOpen,a=this.state.robotStatus,r=this.state.unit;return Object(S.jsxs)("div",{className:"content",id:"map",children:[Object(S.jsxs)("div",{className:"content-title text-color-1",children:[" ",Object(S.jsx)(re.a,{className:"icon"}),"\uc2e4\uc2dc\uac04 \ub85c\ubd07\uc704\uce58"]}),Object(S.jsxs)("div",{className:"grid-container",children:[Object(S.jsxs)("div",{className:"grid-item",id:"item-map",children:[Object(S.jsxs)("div",{id:"map-top",children:[Object(S.jsxs)("p",{id:"map-name",className:"round-button background-color-3 text-color-w",children:[sessionStorage.getItem("userName")," \ub9e4\uc7a5"]}),Object(S.jsx)("div",{id:"color-description",children:[["\uc774\ub3d9","green"],["\uc815\uc9c0","red"],["\ucda9\uc804","orange"],["\uc11c\ubc84 X","gray"],["\uadf8\uc678","black"]].map((function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("p",{id:"description-circle",className:"circle",style:{borderColor:e[1]}}),Object(S.jsx)("p",{children:e[0]})]})}))})]}),Object(S.jsxs)("div",{ref:this.mapContainer,id:"map-container",children:[Object(S.jsx)(q,{unit:r,setRobotStatus:function(t){return e.setRobotStatus(t)}}),Object(S.jsx)(E,{xytypeList:this.state.mapView,unit:r,onClick:function(t){return e.handelMapClick(t)}})]})]}),Object(S.jsxs)("div",{className:"grid-item",id:"item-status",children:[Object(S.jsx)("div",{className:"grid-title background-color-3 text-color-w",children:"\ub85c\ubd07 \ubcf5\uadc0\ubc84\ud2bc"}),Object(S.jsx)("div",{children:Object(S.jsx)("ul",{children:a.map((function(t){return Object(S.jsx)(U,{robot:t,onClick:function(){return e.handelRobotClick(t.robot_id)}},t.robot_id)}))})})]}),Object(S.jsxs)("div",{className:"grid-item",id:"item-arrive",children:[Object(S.jsx)("div",{className:"grid-title background-color-3 text-color-w",children:"\ub3c4\ucc29 \uc9c0\uc810 \ubaa9\ub85d"}),Object(S.jsx)("ul",{children:a.map((function(e){return Object(S.jsx)(Y,{robot:e},e.robot_id)}))})]})]}),Object(S.jsx)(J,{title:this.state.modalTitle,content:this.state.modalContent,open:n,onCancel:function(){return e.setState((function(e){return{isModalOpen:!1}}))},onPermit:"map"==n?function(){return e.clickMapModalPermit(t)}:function(){return e.clickRobotModalPermit(t)}})]})}}]),n}(a.Component);function ce(e){var t=e.robot;return Object(S.jsxs)("li",{children:[Object(S.jsxs)("span",{children:[" ",t.robot_id]}),Object(S.jsxs)("span",{children:[" - ","0"==t.used?"\ub300\uae30":t.used]}),Object(S.jsxs)("span",{children:[" [ ",t.battery,"% ]"]})]})}b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var se=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=sessionStorage.getItem("mapId");function c(){b.a.get("/controller/robot/status/"+o).then((function(e){r(e.data.robot_status)})).catch((function(e){console.log("call robot status item fail.")}))}return Object(a.useEffect)((function(){c()}),[n]),n.length>0?Object(S.jsxs)("div",{className:"grid-container call-status",children:[Object(S.jsxs)("div",{className:"grid-item",id:"item-available",children:[Object(S.jsx)("h4",{children:"\ud638\ucd9c\uac00\ub2a5 \ub85c\ubd07 \uc218"}),Object(S.jsx)("div",{children:n.filter((function(e){return"0"===e.used})).length})]}),Object(S.jsxs)("div",{className:"grid-item item-state",children:[Object(S.jsx)("h4",{children:"\ub85c\ubd07 \uc0c1\ud0dc"}),Object(S.jsx)("div",{children:Object(S.jsx)("ul",{children:n.map((function(e){return Object(S.jsx)(ce,{robot:e},e.robot_id)}))})})]})]}):(console.log(" robotStatusList.length <= 0 \uc874\uc7ac\uc548\ud568"),Object(S.jsxs)("div",{className:"grid-container call-status",children:[Object(S.jsxs)("div",{className:"grid-item",id:"item-available",children:[Object(S.jsx)("h4",{children:"\ud638\ucd9c\uac00\ub2a5 \ub85c\ubd07 \uc218"}),Object(S.jsx)("div",{children:"0"})]}),Object(S.jsxs)("div",{className:"grid-item item-state",children:[Object(S.jsx)("h4",{children:"\ub85c\ubd07 \uc0c1\ud0dc"}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{className:"data-reload",onClick:c,children:"\ub370\uc774\ud130 \ub85c\ub4dc"})})]})]}))};b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var ie=function(e){var t=sessionStorage.getItem("userId"),n=0;return Object(a.useEffect)((function(){!function(){var a=1,r=0;e.updateLoading(1);var o=setInterval((function(){b.a.get("/controller/button/is-call/"+t).then((function(t){switch(n=t.status){case 201:console.log("[CallButton] \ud604\uc7ac \ub9e4\uc7a5\uc758 \ub85c\ubd07 \uc774\ub3d9\uc911 : "+n),e.updateCalledRobot(t.data.robot_id),e.updateIsCall(1),a=1;break;case 202:console.log("[CallButton] \ud604\uc7ac \ub9e4\uc7a5\uc758 \ub85c\ubd07 \ub3c4\ucc29 : "+n),e.updateCalledRobot(t.data.robot_id),e.updateIsCall(2),a=2;break;case 200:console.log("[CallButton] \ud604\uc7ac \ub9e4\uc7a5\uc758 \ub85c\ubd07 \ud638\ucd9c\uc548\ud568 : "+n),e.updateIsCall(0),a=0}})).catch((function(e){return console.log("[CallButton] fail  get is-call button. error ->"),console.log(e),clearInterval(o),0})),1!=a&&r>=3&&(console.log("[CallButton] \ub85c\ub4dc \uc885\ub8cc "),e.updateLoading(0),clearInterval(o)),r+=1}),1e3)}()}),[e.isCall]),Object(S.jsx)("div",{children:Object(S.jsx)("button",{id:"call-button",onClick:e.onClick,children:0==e.isCall?"\ud638\ucd9c":2==e.isCall?"\ud53d\uc5c5\ub300":"\uc624\ub294\uc911"})})},le=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(M.a)(this,n),(a=t.call(this,e)).state={isCall:0,calledRobot:0,count:2,loading:1},a}return Object(L.a)(n,[{key:"updateIsCall",value:function(e){this.setState((function(t){return Object(D.a)(Object(D.a)({},t),{},{isCall:e})}))}},{key:"updateLoading",value:function(e){this.setState((function(t){return Object(D.a)(Object(D.a)({},t),{},{loading:e})}))}},{key:"updateCalledRobot",value:function(e){this.setState((function(t){return Object(D.a)(Object(D.a)({},t),{},{calledRobot:e})}))}},{key:"toggle",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,r,o,c,i,d,u,b,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.isCall,a=this.state.count,console.log("[CallPresenter] \ubc84\ud2bc \ud074\ub9ad. \ubc84\ud2bc\uc0c1\ud0dc: "+n),!this.state.loading){e.next=8;break}return console.log("[CallPresenter] loading..."),e.abrupt("return");case 8:this.updateLoading(1);case 9:e.t0=n,e.next=2===e.t0?12:0===e.t0?20:28;break;case 12:return e.next=14,Q(t);case 14:return r=e.sent,o=Object(s.a)(r,2),c=o[0],i=o[1],c?console.log("[CallPresenter] toggle back, error  : ",i):(console.log("[CallPresenter] toggle back, robot_id : ",i),this.setState((function(e){return Object(D.a)(Object(D.a)({},e),{},{isCall:0,count:a+1})}))),e.abrupt("break",29);case 20:return e.next=22,$(t);case 22:return d=e.sent,u=Object(s.a)(d,2),b=u[0],j=u[1],b?console.log("[CallPresenter] toggle call, error  : ",j):(console.log("[CallPresenter] toggle call, robot_id : ",b),this.setState((function(e){return Object(D.a)(Object(D.a)({},e),{},{isCall:1,count:a-1})}))),e.abrupt("break",29);case 28:return e.abrupt("break",29);case 29:this.updateLoading(0);case 30:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=sessionStorage.getItem("userId"),n=this.state.isCall;return Object(S.jsxs)("div",{className:"content",id:"call",children:[Object(S.jsx)("h1",{children:" \ub85c\ubd07 \ud638\ucd9c"}),Object(S.jsxs)("div",{className:"grid-container",children:[Object(S.jsxs)("div",{className:"grid-item",id:"item-button",children:[Object(S.jsx)("h4",{children:"\ub85c\ubd07 \ud638\ucd9c \ubc84\ud2bc"}),Object(S.jsxs)("div",{id:"calling-map-name",children:[t,"\uc758 \ub9e4\uc7a5 \uc785\ub2c8\ub2e4."]}),Object(S.jsx)("div",{id:"called-robot",children:0!=n?Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:this.state.calledRobot})," \ubc88 \ub85c\ubd07 \ubc30\uc815 "]}):Object(S.jsx)("div",{children:" "})}),Object(S.jsx)(ie,{userId:t,isCall:n,onClick:function(){return e.toggle(t)},updateIsCall:function(t){return e.updateIsCall(t)},updateCalledRobot:function(t){return e.updateCalledRobot(t)},updateLoading:function(t){return e.updateLoading(t)}})]}),Object(S.jsx)("div",{className:"item-call-status",children:Object(S.jsx)(se,{})})]})]})}}]),n}(a.Component),de={position:"relative",zIndex:1},ue=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(M.a)(this,n),(a=t.call(this,e)).onLogout=function(){window.sessionStorage.removeItem("userId"),window.sessionStorage.removeItem("mapId"),window.sessionStorage.removeItem("userName"),window.sessionStorage.removeItem("logoSrc"),document.location.href="/"},a.state={isModalOpen:!1},a}return Object(L.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isModalOpen;return console.log("[Setting presenter] username"),console.log(sessionStorage.getItem("userName")),Object(S.jsxs)("div",{className:"content setting",children:[Object(S.jsx)("h1",{children:"\uc124\uc815"}),Object(S.jsx)("div",{className:"grid-container",children:Object(S.jsxs)("div",{className:"grid-item",children:["\uc124\uc815 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4",Object(S.jsx)("button",{onClick:this.onLogout.bind(this),children:"\ub85c\uadf8\uc544\uc6c3"}),Object(S.jsxs)("div",{style:de,onClick:function(){return console.log("clicked")},children:[Object(S.jsx)("button",{onClick:function(){return e.setState((function(e){return{isModalOpen:!0}}))},children:"Open Modal"}),Object(S.jsx)(J,{title:"\uc81c\ubaa9",content:"\ub0b4\uc6a922",open:t,onCancel:function(){return e.setState((function(e){return{isModalOpen:!1}}))},onPermit:function(){return e.setState((function(e){return{isModalOpen:!1}}))}})]})]})})]})}}]),n}(a.Component),be=n(222),je=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"content history",children:[Object(S.jsx)("h1",{children:" \uae30\ub85d"}),Object(S.jsx)("div",{className:"grid-container",children:Object(S.jsxs)("div",{className:"grid-item",children:["\uae30\ub85d \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4",Object(S.jsx)(be.a,{bgcolor:"primary.main",p:2,m:1,children:"primary.main"}),Object(S.jsx)(be.a,{bgcolor:"primary.light",sx:{borderRadius:25},color:"primary.contrastText",p:2,m:1,children:"primary.light"}),Object(S.jsx)(be.a,{bgcolor:"primary.dark",color:"primary.contrastText",p:2,m:1,children:"primary.dark"}),Object(S.jsx)(be.a,{bgcolor:"secondary.main",p:2,m:1,children:"secondary.main"}),Object(S.jsx)(be.a,{bgcolor:"secondary.light",color:"secondary.contrastText",p:2,m:1,children:"secondary.light"}),Object(S.jsx)(be.a,{bgcolor:"secondary.dark",color:"secondary.contrastText",p:2,m:1,children:"secondary.dark"}),Object(S.jsx)(be.a,{bgcolor:"error.main",p:2,m:1,children:"error.main"}),Object(S.jsx)(be.a,{bgcolor:"error.light",color:"error.contrastText",p:2,m:1,children:"error.light"}),Object(S.jsx)(be.a,{bgcolor:"error.dark",color:"error.contrastText",p:2,m:1,children:"error.dark"}),Object(S.jsx)(be.a,{bgcolor:"sidenav.main",p:2,m:1,children:"error.main"}),Object(S.jsx)(be.a,{bgcolor:"sidenav.background",color:"neutral.contrastText",p:2,m:1,children:"error.light"}),Object(S.jsx)(be.a,{bgcolor:"sidenav.text",color:"neutral.contrastText",p:2,m:1,children:"error.dark"}),Object(S.jsx)(be.a,{bgcolor:"text.primary",p:2,m:1,children:"text.primary"}),Object(S.jsx)(be.a,{bgcolor:"text.secondary",p:2,m:1,children:"text.secondary"}),Object(S.jsx)(be.a,{bgcolor:"text.disabled",p:2,m:1,children:"text.disabled"}),Object(S.jsx)(be.a,{bgcolor:"text.hint",p:2,m:1,children:"text.hint"}),Object(S.jsx)(be.a,{bgcolor:"text.myTextColor",p:2,m:1,children:"text.myTextColor"})]})})]})}}]),n}(a.Component);function pe(e){var t=e.pickup,n=""===t.phone;return Object(S.jsxs)("li",{className:"pickup-item",children:[Object(S.jsxs)("div",{className:"pickup-number",children:[" ",t.id]}),Object(S.jsxs)("div",{className:"pickup-store",children:[" ",t.store]}),Object(S.jsx)("div",{className:"pickup-status",children:n?Object(S.jsx)("div",{children:" \ube44\uc5b4\uc788\uc74c"}):Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[" \ubc30\ub2ec \uc8fc\uc18c : ",t.delivery]}),Object(S.jsxs)("div",{children:[" \uc5f0\ub77d\ucc98 : ",t.phone]}),Object(S.jsxs)("div",{children:[" \ub300\uae30\uc2dc\uac04 : ",t.delay]})]})})]})}var me=function(e){var t=e.pickupList;return Object(S.jsx)("div",{children:Object(S.jsx)("ul",{children:t.map((function(e){return Object(S.jsx)(pe,{pickup:e},t.id)}))})})},he=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(M.a)(this,n),(a=t.call(this,e)).state={pickupList:[{id:1,store:"\ub300\uae30",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"",delay:0},{id:2,store:"\ub9e5\ub3c4\ub0a0\ub4dc",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"1234",delay:4},{id:3,store:"\ubc84\uac70\ud0b9",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"1433",delay:15},{id:4,store:"\ub9d8\uc2a4\ud130\uce58",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"1134",delay:3},{id:5,store:"\ub300\uae30",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"",delay:0},{id:6,store:"\ub86f\ub370\ub9ac\uc544",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"1424",delay:2}]},a}return Object(L.a)(n,[{key:"render",value:function(){var e=this.state.pickupList;return Object(S.jsxs)("div",{className:"content",id:"pickup",children:[Object(S.jsx)("h1",{children:" \ud53d\uc5c5\ub300 \ud604\ud669"}),Object(S.jsx)("div",{className:"grid-container",children:Object(S.jsx)("div",{className:"grid-item",id:"item-pickup-list",children:Object(S.jsx)(me,{pickupList:e})})})]})}}]),n}(a.Component),xe=n(44),ge=n(74);var Oe=function(e){var t=e.isAuthorized,n=Object(a.useState)(!0),r=Object(s.a)(n,2),o=r[0],c=r[1],i="/assets/store_logo/"+sessionStorage.getItem("logoSrc")+".png";return Object(S.jsxs)("div",{id:"side-nav",className:"side-nav background-color-2 "+(o?"big-nav":"small-nav center-align"),children:[Object(S.jsxs)("div",{id:"title",children:[Object(S.jsx)("div",{onClick:function(){return c(!o)},className:"toggle-menu-btn right-align",children:o?Object(S.jsx)(w.b,{}):Object(S.jsx)(ge.a,{})}),Object(S.jsx)("div",{className:" center-align",children:o?Object(S.jsx)("img",{id:"side-logo-img",src:"/assets/hprobot-logo/hprobot-logo-white-2line.png",alt:"hprobot-logo-2"}):Object(S.jsx)("img",{id:"side-logo-img-short",src:"/assets/hprobot-logo/hprobot-logo-white-short.png",alt:"hprobot-logo-s"})})]}),Object(S.jsxs)(xe.b,{to:"/map",className:"nav-item",activeClassName:"nav-active",children:[Object(S.jsx)("div",{className:"nav-icon",children:Object(S.jsx)(ge.b,{})}),Object(S.jsx)("p",{children:"\uc2e4\uc2dc\uac04 \ub85c\ubd07\uc704\uce58"})]}),Object(S.jsxs)(xe.b,{to:"/call",className:"nav-item",activeClassName:"nav-active",children:[Object(S.jsx)("div",{className:"nav-icon",children:Object(S.jsx)(w.d,{})}),Object(S.jsx)("p",{children:"\ub85c\ubd07 \ud638\ucd9c"})]}),Object(S.jsxs)(xe.b,{to:"/pickup",className:"nav-item",activeClassName:"nav-active",children:[Object(S.jsx)("div",{className:"nav-icon",children:Object(S.jsx)(ge.c,{})}),Object(S.jsx)("p",{children:"\ud53d\uc5c5\ub300 \uc0c1\ud669"})]}),Object(S.jsxs)(xe.b,{to:"/history",className:"nav-item",activeClassName:"nav-active",children:[Object(S.jsx)("div",{className:"nav-icon",children:Object(S.jsx)(w.a,{})}),Object(S.jsx)("p",{children:"\uae30\ub85d"})]}),Object(S.jsxs)(xe.b,{to:"/setting",className:"nav-item",activeClassName:"nav-active",children:[Object(S.jsx)("div",{className:"nav-icon",children:Object(S.jsx)(w.e,{})}),Object(S.jsx)("p",{children:"\uc124\uc815"})]}),Object(S.jsx)("div",{className:"center-align",id:"bottom",children:t?Object(S.jsx)(xe.b,{to:"/my-page",id:"nav-user",children:Object(S.jsxs)("div",{className:"background-color-3 user-div",children:[Object(S.jsx)("img",{id:"nav-user-logo",src:i,alt:"user-logo"}),Object(S.jsxs)("p",{className:" text-color-w",children:[sessionStorage.getItem("userName")," \ub9e4\uc7a5"]})]})}):Object(S.jsxs)(xe.b,{to:"/login",id:"nav-login",className:"round-button background-color-3",children:[Object(S.jsx)("div",{className:"nav-icon",children:Object(S.jsx)(w.f,{})}),Object(S.jsx)("p",{className:" text-color-w",children:"\ub85c\uadf8\uc778"})]})})]})},ve=n(22),fe=n(118),ye=n(219);var Ce=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){null==sessionStorage.getItem("mapId")||r(!0)}));var o=Object(fe.a)({palette:{primary:{main:"#688ABD",light:"#ff0000",dark:"#0000ff"},secondary:{main:"#446AA3"},error:{main:"#6B9ED9"},sidenav:{main:"#446AA3",background:"#124D84",text:"#C0BEFF"},text:{primary:"#384C68",secondary:"#688ABD",disabled:"#4caf50",hint:"#ffc107",myTextColor:"#384C68"}},overrides:{MuiButton:{label:{color:"#f1f1f1"}}}});return Object(S.jsx)(ye.a,{theme:o,children:Object(S.jsx)("div",{className:"web-container",children:Object(S.jsxs)(xe.a,{children:[Object(S.jsx)("div",{className:"web-side-nav",children:Object(S.jsx)(Oe,{isAuthorized:n})}),Object(S.jsx)("div",{className:"web-content",children:Object(S.jsxs)(ve.d,{children:[Object(S.jsx)(ve.b,{path:"/",exact:!0,children:n?Object(S.jsx)(ue,{}):Object(S.jsx)(R,{})}),Object(S.jsx)(ve.b,{path:"/map",exact:!0,children:n?Object(S.jsx)(oe,{}):Object(S.jsx)(A,{})}),Object(S.jsx)(ve.b,{path:"/call",exact:!0,children:n?Object(S.jsx)(le,{}):Object(S.jsx)(A,{})}),Object(S.jsx)(ve.b,{path:"/pickup",exact:!0,children:n?Object(S.jsx)(he,{}):Object(S.jsx)(A,{})}),Object(S.jsx)(ve.b,{path:"/history",exact:!0,children:n?Object(S.jsx)(je,{}):Object(S.jsx)(A,{})}),Object(S.jsx)(ve.b,{path:"/setting",exact:!0,children:Object(S.jsx)(ue,{})}),Object(S.jsx)(ve.b,{path:"/login",exact:!0,children:Object(S.jsx)(R,{})}),Object(S.jsx)(ve.b,{path:"/my-page",exact:!0,children:Object(S.jsx)(B,{})}),Object(S.jsx)(ve.a,{to:"/"})]})})]})})})};c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(Ce,{})}),document.getElementById("root"))},91:function(e,t,n){}},[[163,1,2]]]);
//# sourceMappingURL=main.549977d9.chunk.js.map