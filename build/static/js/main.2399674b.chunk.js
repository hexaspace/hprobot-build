(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],{26:function(e,t,n){},42:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(21),o=n.n(s),c=n(7),i=(n(42),n(4)),l=n.n(i),d=n(9),u=(n(26),n(3)),b=n.n(u);function j(e,t){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()({method:"post",url:"/controller/login",data:{userId:t,userPassword:n}});case 3:if(a=e.sent,r=a.data.error,console.log("[LoginController] postControllerLogin \uacb0\uacfc ->"),console.log(a.data),0!=r){e.next=11;break}return e.abrupt("return",[r,a.data.result]);case 11:return e.abrupt("return",[r,a.data.message]);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log("[LoginController] postControllerLogin error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var h=n(1);var m=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),o=Object(c.a)(s,2),i=o[0],u=o[1],b=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(n,i);case 2:if(t=e.sent,a=Object(c.a)(t,2),r=a[0],s=a[1],r){e.next=21;break}if(!(s.length>=1)){e.next=17;break}console.log("[LoginPresenter] login success : "),console.log(s[0].user_name),sessionStorage.setItem("userId",n),sessionStorage.setItem("mapId",s[0].map_id),sessionStorage.setItem("userName",s[0].user_name),sessionStorage.setItem("logoSrc",s[0].logo_src),document.location.href="/",e.next=19;break;case 17:return console.log("[LoginPresenter] login failed."),e.abrupt("return");case 19:e.next=23;break;case 21:return console.log("[LoginPresenter] post login failed, error  : ",s),e.abrupt("return");case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"content",id:"login",children:[Object(h.jsx)("h1",{children:" \ub85c\uadf8\uc778"}),Object(h.jsx)("div",{className:"grid-container",children:Object(h.jsxs)("div",{className:"grid-item",id:"item-form",children:[Object(h.jsx)("label",{htmlFor:"input_id",children:"\uc544\uc774\ub514"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"input_id",value:n,onChange:function(e){r(e.target.value)}}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"input_pw",children:"\ube44\ubc00\ubc88\ud638"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"input_pw",value:i,onChange:function(e){u(e.target.value)}}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:b,children:"\ub85c\uadf8\uc778"})]})})]})},O=n(10),x=n(11),g=n(13),v=n(12),f=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onLogout=function(){window.sessionStorage.removeItem("userId"),window.sessionStorage.removeItem("mapId"),window.sessionStorage.removeItem("userName"),window.sessionStorage.removeItem("logoSrc"),document.location.href="/"},e}return Object(x.a)(n,[{key:"render",value:function(){var e=sessionStorage.getItem("userName"),t="/assets/store_logo/"+sessionStorage.getItem("logoSrc")+".png";return Object(h.jsxs)("div",{className:"content",id:"user",children:[Object(h.jsx)("h1",{children:" \ub0b4 \uc815\ubcf4"}),Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsxs)("div",{className:"grid-item",id:"item-profile",children:[Object(h.jsx)("h4",{children:"\ud504\ub85c\ud544"}),Object(h.jsx)("img",{src:t,alt:"user-logo"}),Object(h.jsxs)("div",{children:[" \ub9e4\uc7a5\uba85 : ",e]}),Object(h.jsx)("button",{onClick:this.onLogout.bind(this),children:"\ub85c\uadf8\uc544\uc6c3"})]}),Object(h.jsx)("div",{className:"grid-item",id:"item-2",children:Object(h.jsx)("h4",{children:"\ud638\ucd9c \ud1b5\uacc4"})}),Object(h.jsx)("div",{className:"grid-item",id:"item-3",children:Object(h.jsx)("h4",{children:"\ucd5c\uadfc \uc8fc\ubb38"})}),Object(h.jsx)("div",{className:"grid-item",id:"item-4",children:Object(h.jsx)("h4",{children:"\ubb50\ud560\uae4c"})})]})]})}}]),n}(a.Component),y=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).goLogin=function(){document.location.href="/login"},e}return Object(x.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"content authorized",children:[Object(h.jsx)("h1",{children:"\uad8c\ud55c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),Object(h.jsx)("div",{className:"grid-container",children:Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("h4",{children:"\ub85c\uadf8\uc544\uc6c3 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc2dc \uc811\uc18d\ud574\uc8fc\uc138\uc694."}),Object(h.jsx)("button",{onClick:this.goLogin.bind(this),children:"\ub85c\uadf8\uc778\ud558\ub7ec \uac00\uae30"})]})})]})}}]),n}(a.Component),C=n(5);function _(e){var t=e.unit,n=e.data.node_id,a=e.data.x*t,r=e.data.y*t,s="/assets/unit/map_unit_"+e.data.type+".png";return Object(h.jsxs)("div",{className:"map-tile",onClick:e.onClick,style:{width:t,height:t,left:a,top:r},children:[Object(h.jsx)("div",{className:"map-tile-node-id",children:n}),Object(h.jsx)("img",{src:s,alt:"",className:"map-tile-img",style:{width:t,height:t}})]})}var k=function(e){var t=e.unit,n=e.xytypeList,a="assets/map-background/map-background-"+sessionStorage.getItem("mapId")+".png";return Object(h.jsxs)("div",{children:[n.map((function(n){return Object(h.jsx)(_,{unit:t,data:n,onClick:function(){return e.onClick(n.node_id)}},n.node_id)})),Object(h.jsx)("img",{src:a,alt:"map-background-img",className:"map-background-img"})]})};var N=function(e){var t=e.robot,n=e.onClick;return Object(h.jsxs)("li",{className:"pickup-button",onClick:n,children:[Object(h.jsxs)("span",{children:[" ",t.robot_id,"\ubc88 \ub85c\ubd07"]}),Object(h.jsxs)("span",{children:[" [ ",t.battery,"% ]"]})]})};var w=function(e){var t=e.robot;return t.current_node==t.final_node?null:Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{children:[" ",t.robot_id,"\ubc88 \ub85c\ubd07"]}),Object(h.jsxs)("span",{children:[" [ ",t.final_node," ]"]})]})};function S(e){var t=["gray","green","red","orange","yellow","blue"][e.state],n=(e.posX- -.3)*e.unit,a=(e.posY- -.3)*e.unit,r=e.robotId,s=.5*e.unit+"px",o="/assets/robot/num_robot_"+r+".png";return Object(h.jsx)("div",{className:"robot",style:{left:n,top:a,backgroundColor:t,height:s,width:s},children:Object(h.jsx)("img",{src:o,alt:"num-robot-img",className:"num-robot-img"})})}function I(e){var t,n,a=(e.currX- -.5)*e.unit,r=(e.currY- -.5)*e.unit,s=(e.finalX- -.5)*e.unit,o=(e.finalY- -.5)*e.unit,c=(a+s)/2,i=(r+o)/2,l=Math.sqrt(Math.pow(a-s,2)+Math.pow(r-o,2)),d=i,u=c-l/2,b="rotate("+(t=a-s,n=r-o,180*Math.atan2(n,t)/Math.PI).toString()+"deg)";return Object(h.jsx)("div",{className:"target",style:{left:u,top:d,width:l,transform:b}})}b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var R=function(e){var t=e.unit,n=e.setRobotStatus,r=Object(a.useState)([]),s=Object(c.a)(r,2),o=s[0],i=s[1],l=[{map_id:7,robot_id:1,state:2,current_node:1,final_node:18,battery:100,curr_x:9,curr_y:2,final_x:4,final_y:2},{map_id:7,robot_id:2,state:2,current_node:2,final_node:2,battery:100,curr_x:10,curr_y:2,final_x:10,final_y:2},{map_id:7,robot_id:3,state:2,current_node:3,final_node:3,battery:100,curr_x:11,curr_y:2,final_x:11,final_y:2}],d=sessionStorage.getItem("mapId");function u(){var e=setInterval((function(){console.log("[RobotPosition] get robot position"),b.a.get("/controller/robot/position/"+d).then((function(e){i(e.data.robot_position),n(e.data.robot_position)})).catch((function(t){return console.log("call robot positions item fail."),i(l),clearInterval(e),e}))}),1e3);return e}return Object(a.useEffect)((function(){var e=u();return function(){return clearInterval(e)}}),[]),o.length>0?Object(h.jsxs)("div",{children:[o.map((function(e){return Object(h.jsx)(S,{unit:t,robotId:e.robot_id,state:e.state,posX:e.curr_x,posY:e.curr_y},e.robot_id)})),o.filter((function(e){return 1==e.state})).map((function(e){return Object(h.jsx)(I,{unit:t,currX:e.curr_x,currY:e.curr_y,finalX:e.final_x,finalY:e.final_y},e.robot_id)}))]}):(console.log(" robotPositionList.length <= 0 \uc874\uc7ac\uc548\ud568"),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"data-reload",onClick:u,children:"\ub370\uc774\ud130 \ub85c\ub4dc"})}))};var M=function(e){var t=e.title,n=e.content,a=e.open,r=e.onPermit,o=e.onCancel;return a?Object(s.createPortal)(Object(h.jsxs)("div",{id:"modal",children:[Object(h.jsx)("div",{className:"overlay"}),Object(h.jsxs)("div",{className:"modal-box",children:[Object(h.jsx)("h3",{className:"modal-title",children:t}),Object(h.jsx)("p",{className:"modal-content",children:n}),Object(h.jsxs)("div",{className:"button-div",children:[Object(h.jsx)("button",{onClick:r,children:"\ud655\uc778"}),Object(h.jsx)("button",{onClick:o,children:"\ucde8\uc18c"})]})]})]}),document.getElementById("modal")):null};function L(e,t){return P.apply(this,arguments)}function P(){return(P=Object(d.a)(l.a.mark((function e(t,n){var a,r,s,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/controller/button/to-destination/"+t);case 3:if(a=e.sent,r=a.data.error,console.log("[CallController] getDestinationRobot to-destination \uacb0\uacfc ->"),console.log(a),!r){e.next=12;break}return console.log(a.data.message),e.abrupt("return",[r,a.data.message]);case 12:return s=a.data.robot_id,o=a.data.map_name,c=z([n,o,s]),e.abrupt("return",[c,s]);case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.log("[CallController] getDestinationRobot error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}function B(e,t){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(l.a.mark((function e(t,n){var a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/controller/button/to-pickup/"+t+"/"+n);case 3:if(a=e.sent,r=a.data.error,console.log("[CallController] getPickupRobot to-pickup \uacb0\uacfc ->"),console.log(a),!r){e.next=12;break}return console.log(a.data.message),e.abrupt("return",[r,a.data.message]);case 12:return s=a.data.map_name,o=z([1,s,n]),e.abrupt("return",[o,a.status]);case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(0),console.log("[CallController] getPickupRobot error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function X(e){return E.apply(this,arguments)}function E(){return(E=Object(d.a)(l.a.mark((function e(t){var n,a,r,s,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/controller/button/to-home/"+t);case 3:if(n=e.sent,a=n.data.error,console.log("[CallController] getBackRobot to-home \uacb0\uacfc ->"),console.log(n),!a){e.next=12;break}return console.log(n.data.message),e.abrupt("return",[a,n.data.message]);case 12:return r=n.data.robot_id,s=n.data.robot_home,o=n.data.map_name,c=z([s,o,r]),e.abrupt("return",[c,r]);case 17:e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(0),console.log("[CallController] getBackRobot error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function U(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(l.a.mark((function e(t){var n,a,r,s,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b.a.get("/controller/button/robot-updated/"+t).then((function(e){if(console.log("[CallController] getCallRobot - robot-updated  \uacb0\uacfc ->"),console.log(e),e.data.result.length){return[!0,"[CallController] getCallRobot - update in 3 second. please wait"]}})).catch((function(e){return console.log("[CallController] getCallRobot - robot-updated  fail get robot updated."),console.log(e),[e,n.data.message]})),b.a.get("/controller/button/is-call/"+t).then((function(e){if(console.log("[CallController] getCallRobot - is call \uacb0\uacfc ->"),console.log(e),201==e.status){return[!0,"[CallController] getCallRobot - some robot is coming"]}})).catch((function(e){return console.log("[CallController] getCallRobot - fail  get is call status."),console.log(e),[e,n.data.message]})),e.next=5,b.a.get("/controller/button/to-user/"+t);case 5:if(n=e.sent,a=n.data.error,console.log("[CallController] getCallRobot - to-user  \uacb0\uacfc ->"),console.log(n),!a){e.next=14;break}return console.log(n.data.message),e.abrupt("return",[a,n.data.message]);case 14:return r=n.data.robot_id,s=n.data.user_node,o=n.data.map_name,c=z([s,o,r]),e.abrupt("return",[c,r]);case 19:e.next=25;break;case 21:return e.prev=21,e.t0=e.catch(0),console.log("[CallController] getCallRobot \ud638\ucd9c \uac00\ub2a5\ud55c \ub85c\ubd07\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\ub2e4\ub824\uc8fc\uc138\uc694.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}function z(e){console.log("[CallController] postButton param ",e);try{var t=b()({method:"post",url:"/mqtt/button",data:{final_node:e[0],map_name:e[1],robot_id:e[2]}});return console.log("[CallController] postButton   \uacb0\uacfc ->"),console.log(t),!1}catch(n){return console.log("[CallController] postButton button \uc815\ubcf4\ub97c \ub85c\ubd07\uc73c\ub85c \ubcf4\ub0b4\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.\n"+n.message),[!0,n.message]}}function D(){return A.apply(this,arguments)}function A(){return(A=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=sessionStorage.getItem("mapId"),e.prev=1,e.next=4,b.a.get("/map-views/"+t);case 4:if(200!=(n=e.sent).status){e.next=9;break}return e.abrupt("return",[!1,n.data]);case 9:return e.abrupt("return",[n.data.error,n.data.message]);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),console.log("[MapController] getMapView error catch.\n"+e.t0.message),e.abrupt("return",[!0,e.t0.message]);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var V=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).mapContainer=r.a.createRef(),a.state={unit:0,isModalOpen:!1,destinationNode:0,clickedRobotId:0,robotStatus:[],modalTitle:"\uc81c\ubaa9",modalContent:"\ub0b4\uc6a9",mapView:[{map_id:"8",node_id:"0",x:"14",y:"7",type:"0"},{map_id:"8",node_id:"1",x:"11",y:"2",type:"6"},{map_id:"8",node_id:"2",x:"12",y:"2",type:"12"},{map_id:"8",node_id:"3",x:"13",y:"2",type:"10"},{map_id:"8",node_id:"4",x:"13",y:"1",type:"9"},{map_id:"8",node_id:"5",x:"12",y:"1",type:"12"},{map_id:"8",node_id:"6",x:"11",y:"1",type:"12"},{map_id:"8",node_id:"7",x:"10",y:"1",type:"13"},{map_id:"8",node_id:"8",x:"9",y:"1",type:"12"},{map_id:"8",node_id:"9",x:"8",y:"1",type:"12"},{map_id:"8",node_id:"10",x:"7",y:"1",type:"12"},{map_id:"8",node_id:"11",x:"6",y:"1",type:"13"},{map_id:"8",node_id:"12",x:"5",y:"1",type:"12"},{map_id:"8",node_id:"13",x:"4",y:"1",type:"12"},{map_id:"8",node_id:"14",x:"3",y:"1",type:"5"},{map_id:"8",node_id:"15",x:"3",y:"2",type:"3"},{map_id:"8",node_id:"16",x:"3",y:"3",type:"3"},{map_id:"8",node_id:"17",x:"3",y:"4",type:"2"},{map_id:"8",node_id:"18",x:"6",y:"2",type:"3"},{map_id:"8",node_id:"19",x:"6",y:"3",type:"2"},{map_id:"8",node_id:"20",x:"10",y:"2",type:"3"},{map_id:"8",node_id:"21",x:"10",y:"3",type:"2"}]},a}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=11,e.next=3,D();case 3:if(n=e.sent,a=Object(c.a)(n,2),r=a[0],s=a[1],!r){e.next=12;break}return console.log("[MapController] "+s),e.abrupt("return");case 12:t=Number(s[0].x)+1;case 13:o=this.mapContainer.current.offsetWidth,console.log("[MapController] maxXsize : "+t),this.setState((function(e){return Object(C.a)(Object(C.a)({},e),{},{unit:o/t,mapView:s})}));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRobotStatus",value:function(e){this.setState((function(t){return Object(C.a)(Object(C.a)({},t),{},{robotStatus:e})}))}},{key:"handelRobotClick",value:function(e){this.setState((function(t){return Object(C.a)(Object(C.a)({},t),{},{isModalOpen:"robot",clickedRobotId:e,modalTitle:"\ub85c\ubd07 \ubcf5\uadc0",modalContent:e+"\ubc88 \ub85c\ubd07\uc744 \uc8fc\ucc28\uc7a5\uc73c\ub85c \ubcf5\uadc0\uc2dc\ud0a4\uaca0\uc2b5\ub2c8\uae4c?"})})),console.log("map modal click! "+e)}},{key:"handelMapClick",value:function(e){this.setState((function(t){return Object(C.a)(Object(C.a)({},t),{},{isModalOpen:"map",destinationNode:e,modalTitle:"\ub85c\ubd07 \ubcf4\ub0b4\uae30",modalContent:e+"\ubc88 \uc704\uce58\ub85c \ub85c\ubd07\uc744 \ubcf4\ub0b4\uaca0\uc2b5\ub2c8\uae4c?"})})),console.log("map modal click! "+e)}},{key:"clickRobotModalPermit",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.clickedRobotId,e.next=3,B(t,n);case 3:a=e.sent,r=Object(c.a)(a,2),s=r[0],o=r[1],s?(console.log("[MapPresenter] getPickupRobot fail  : ",o),this.setState((function(e){return Object(C.a)(Object(C.a)({},e),{},{isModalOpen:!1})}))):(console.log("[MapPresenter] getPickupRobot success : ",o),this.setState((function(e){return Object(C.a)(Object(C.a)({},e),{},{isModalOpen:!1,clickedRobotId:0})})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"clickMapModalPermit",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.destinationNode,e.next=3,L(t,n);case 3:a=e.sent,r=Object(c.a)(a,2),s=r[0],o=r[1],s?(console.log("[MapPresenter] getDestinationRobot fail  : ",o),this.setState((function(e){return Object(C.a)(Object(C.a)({},e),{},{isModalOpen:!1})}))):(console.log("[MapPresenter] getDestinationRobot success : ",o),this.setState((function(e){return Object(C.a)(Object(C.a)({},e),{},{isModalOpen:!1,destinationNode:0})})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=sessionStorage.getItem("userId"),n=this.state.isModalOpen,a=this.state.robotStatus,r=this.state.unit;return Object(h.jsxs)("div",{className:"content",id:"map",children:[Object(h.jsx)("h1",{children:" \uc2e4\uc2dc\uac04 \ub85c\ubd07\uc704\uce58"}),Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsxs)("div",{className:"grid-item",id:"item-map",children:["\uc2e4\uc2dc\uac04 \ub85c\ubd07\uc704\uce58 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4",Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{style:{color:"green"},children:"_ moving _"}),Object(h.jsx)("span",{style:{color:"red"},children:"_ stop _"}),Object(h.jsx)("span",{style:{color:"orange"},children:"_ charging _"}),Object(h.jsx)("span",{style:{color:"gray"},children:"_ not server _"}),Object(h.jsx)("span",{style:{color:"black"},children:"_ etc _"})]}),Object(h.jsx)("div",{children:"_"}),Object(h.jsxs)("div",{ref:this.mapContainer,id:"map-container",children:[Object(h.jsx)(R,{unit:r,setRobotStatus:function(t){return e.setRobotStatus(t)}}),Object(h.jsx)(k,{xytypeList:this.state.mapView,unit:r,onClick:function(t){return e.handelMapClick(t)}})]})]}),Object(h.jsxs)("div",{className:"grid-item",id:"item-status",children:[Object(h.jsx)("h4",{children:"\ub85c\ubd07 \uc0c1\ud0dc"}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:a.map((function(t){return Object(h.jsx)(N,{robot:t,onClick:function(){return e.handelRobotClick(t.robot_id)}},t.robot_id)}))})})]}),Object(h.jsxs)("div",{className:"grid-item",id:"item-live",children:[Object(h.jsx)("h4",{children:" \ub3c4\ucc29 \uc9c0\uc810 \ubaa9\ub85d"}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:a.map((function(e){return Object(h.jsx)(w,{robot:e},e.robot_id)}))})})]})]}),Object(h.jsx)(M,{title:this.state.modalTitle,content:this.state.modalContent,open:n,onCancel:function(){return e.setState((function(e){return{isModalOpen:!1}}))},onPermit:"map"==n?function(){return e.clickMapModalPermit(t)}:function(){return e.clickRobotModalPermit(t)}})]})}}]),n}(a.Component);function q(e){var t=e.robot;return Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{children:[" ",t.robot_id]}),Object(h.jsxs)("span",{children:[" - ","0"==t.used?"\ub300\uae30":t.used]}),Object(h.jsxs)("span",{children:[" [ ",t.battery,"% ]"]})]})}b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var F=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],s=sessionStorage.getItem("mapId");function o(){b.a.get("/controller/robot/status/"+s).then((function(e){r(e.data.robot_status)})).catch((function(e){console.log("call robot status item fail.")}))}return Object(a.useEffect)((function(){o()}),[n]),n.length>0?Object(h.jsxs)("div",{className:"grid-container call-status",children:[Object(h.jsxs)("div",{className:"grid-item",id:"item-available",children:[Object(h.jsx)("h4",{children:"\ud638\ucd9c\uac00\ub2a5 \ub85c\ubd07 \uc218"}),Object(h.jsx)("div",{children:n.filter((function(e){return"0"===e.used})).length})]}),Object(h.jsxs)("div",{className:"grid-item item-state",children:[Object(h.jsx)("h4",{children:"\ub85c\ubd07 \uc0c1\ud0dc"}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsx)(q,{robot:e},e.robot_id)}))})})]})]}):(console.log(" robotStatusList.length <= 0 \uc874\uc7ac\uc548\ud568"),Object(h.jsxs)("div",{className:"grid-container call-status",children:[Object(h.jsxs)("div",{className:"grid-item",id:"item-available",children:[Object(h.jsx)("h4",{children:"\ud638\ucd9c\uac00\ub2a5 \ub85c\ubd07 \uc218"}),Object(h.jsx)("div",{children:"0"})]}),Object(h.jsxs)("div",{className:"grid-item item-state",children:[Object(h.jsx)("h4",{children:"\ub85c\ubd07 \uc0c1\ud0dc"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"data-reload",onClick:o,children:"\ub370\uc774\ud130 \ub85c\ub4dc"})})]})]}))};b.a.defaults.baseURL="http://15.165.182.103:8080/server/src/public",b.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var J=function(e){var t=sessionStorage.getItem("userId"),n=0;return Object(a.useEffect)((function(){!function(){var a=1,r=0;e.updateLoading(1);var s=setInterval((function(){b.a.get("/controller/button/is-call/"+t).then((function(t){switch(n=t.status){case 201:console.log("[CallButton] \ud604\uc7ac \ub9e4\uc7a5\uc758 \ub85c\ubd07 \uc774\ub3d9\uc911 : "+n),e.updateCalledRobot(t.data.robot_id),e.updateIsCall(1),a=1;break;case 202:console.log("[CallButton] \ud604\uc7ac \ub9e4\uc7a5\uc758 \ub85c\ubd07 \ub3c4\ucc29 : "+n),e.updateCalledRobot(t.data.robot_id),e.updateIsCall(2),a=2;break;case 200:console.log("[CallButton] \ud604\uc7ac \ub9e4\uc7a5\uc758 \ub85c\ubd07 \ud638\ucd9c\uc548\ud568 : "+n),e.updateIsCall(0),a=0}})).catch((function(e){return console.log("[CallButton] fail  get is-call button. error ->"),console.log(e),clearInterval(s),0})),1!=a&&r>=3&&(console.log("[CallButton] \ub85c\ub4dc \uc885\ub8cc "),e.updateLoading(0),clearInterval(s)),r+=1}),1e3)}()}),[e.isCall]),Object(h.jsx)("div",{children:Object(h.jsx)("button",{id:"call-button",onClick:e.onClick,children:0==e.isCall?"\ud638\ucd9c":2==e.isCall?"\ud53d\uc5c5\ub300":"\uc624\ub294\uc911"})})},H=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={isCall:0,calledRobot:0,count:2,loading:1},a}return Object(x.a)(n,[{key:"updateIsCall",value:function(e){this.setState((function(t){return Object(C.a)(Object(C.a)({},t),{},{isCall:e})}))}},{key:"updateLoading",value:function(e){this.setState((function(t){return Object(C.a)(Object(C.a)({},t),{},{loading:e})}))}},{key:"updateCalledRobot",value:function(e){this.setState((function(t){return Object(C.a)(Object(C.a)({},t),{},{calledRobot:e})}))}},{key:"toggle",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,r,s,o,i,d,u,b,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.isCall,a=this.state.count,console.log("[CallPresenter] \ubc84\ud2bc \ud074\ub9ad. \ubc84\ud2bc\uc0c1\ud0dc: "+n),!this.state.loading){e.next=8;break}return console.log("[CallPresenter] loading..."),e.abrupt("return");case 8:this.updateLoading(1);case 9:e.t0=n,e.next=2===e.t0?12:0===e.t0?20:28;break;case 12:return e.next=14,X(t);case 14:return r=e.sent,s=Object(c.a)(r,2),o=s[0],i=s[1],o?console.log("[CallPresenter] toggle back, error  : ",i):(console.log("[CallPresenter] toggle back, robot_id : ",i),this.setState((function(e){return Object(C.a)(Object(C.a)({},e),{},{isCall:0,count:a+1})}))),e.abrupt("break",29);case 20:return e.next=22,U(t);case 22:return d=e.sent,u=Object(c.a)(d,2),b=u[0],j=u[1],b?console.log("[CallPresenter] toggle call, error  : ",j):(console.log("[CallPresenter] toggle call, robot_id : ",b),this.setState((function(e){return Object(C.a)(Object(C.a)({},e),{},{isCall:1,count:a-1})}))),e.abrupt("break",29);case 28:return e.abrupt("break",29);case 29:this.updateLoading(0);case 30:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=sessionStorage.getItem("userId"),n=this.state.isCall;return Object(h.jsxs)("div",{className:"content",id:"call",children:[Object(h.jsx)("h1",{children:" \ub85c\ubd07 \ud638\ucd9c"}),Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsxs)("div",{className:"grid-item",id:"item-button",children:[Object(h.jsx)("h4",{children:"\ub85c\ubd07 \ud638\ucd9c \ubc84\ud2bc"}),Object(h.jsxs)("div",{id:"calling-map-name",children:[t,"\uc758 \ub9e4\uc7a5 \uc785\ub2c8\ub2e4."]}),Object(h.jsx)("div",{id:"called-robot",children:0!=n?Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:this.state.calledRobot})," \ubc88 \ub85c\ubd07 \ubc30\uc815 "]}):Object(h.jsx)("div",{children:" "})}),Object(h.jsx)(J,{userId:t,isCall:n,onClick:function(){return e.toggle(t)},updateIsCall:function(t){return e.updateIsCall(t)},updateCalledRobot:function(t){return e.updateCalledRobot(t)},updateLoading:function(t){return e.updateLoading(t)}})]}),Object(h.jsx)("div",{className:"item-call-status",children:Object(h.jsx)(F,{})})]})]})}}]),n}(a.Component),W={position:"relative",zIndex:1},G=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).onLogout=function(){window.sessionStorage.removeItem("userId"),window.sessionStorage.removeItem("mapId"),window.sessionStorage.removeItem("userName"),window.sessionStorage.removeItem("logoSrc"),document.location.href="/"},a.state={isModalOpen:!1},a}return Object(x.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isModalOpen;return console.log("[Setting presenter] username"),console.log(sessionStorage.getItem("userName")),Object(h.jsxs)("div",{className:"content setting",children:[Object(h.jsx)("h1",{children:"\uc124\uc815"}),Object(h.jsx)("div",{className:"grid-container",children:Object(h.jsxs)("div",{className:"grid-item",children:["\uc124\uc815 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4",Object(h.jsx)("button",{onClick:this.onLogout.bind(this),children:"\ub85c\uadf8\uc544\uc6c3"}),Object(h.jsxs)("div",{style:W,onClick:function(){return console.log("clicked")},children:[Object(h.jsx)("button",{onClick:function(){return e.setState((function(e){return{isModalOpen:!0}}))},children:"Open Modal"}),Object(h.jsx)(M,{title:"\uc81c\ubaa9",content:"\ub0b4\uc6a922",open:t,onCancel:function(){return e.setState((function(e){return{isModalOpen:!1}}))},onPermit:function(){return e.setState((function(e){return{isModalOpen:!1}}))}})]})]})})]})}}]),n}(a.Component),K=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"content history",children:[Object(h.jsx)("h1",{children:" \uae30\ub85d"}),Object(h.jsx)("div",{className:"grid-container",children:Object(h.jsx)("div",{className:"grid-item",children:"\uae30\ub85d \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4"})})]})}}]),n}(a.Component);function Q(e){var t=e.pickup,n=""===t.phone;return Object(h.jsxs)("li",{className:"pickup-item",children:[Object(h.jsxs)("div",{className:"pickup-number",children:[" ",t.id]}),Object(h.jsxs)("div",{className:"pickup-store",children:[" ",t.store]}),Object(h.jsx)("div",{className:"pickup-status",children:n?Object(h.jsx)("div",{children:" \ube44\uc5b4\uc788\uc74c"}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[" \ubc30\ub2ec \uc8fc\uc18c : ",t.delivery]}),Object(h.jsxs)("div",{children:[" \uc5f0\ub77d\ucc98 : ",t.phone]}),Object(h.jsxs)("div",{children:[" \ub300\uae30\uc2dc\uac04 : ",t.delay]})]})})]})}var Z=function(e){var t=e.pickupList;return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:t.map((function(e){return Object(h.jsx)(Q,{pickup:e},t.id)}))})})},$=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).state={pickupList:[{id:1,store:"\ub300\uae30",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"",delay:0},{id:2,store:"\ub9e5\ub3c4\ub0a0\ub4dc",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"1234",delay:4},{id:3,store:"\ubc84\uac70\ud0b9",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"1433",delay:15},{id:4,store:"\ub9d8\uc2a4\ud130\uce58",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"1134",delay:3},{id:5,store:"\ub300\uae30",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"",delay:0},{id:6,store:"\ub86f\ub370\ub9ac\uc544",delivery:"\uc655\uc2ed\ub9ac \ud55c\uc591\ub300 \ucf54\ub9e5\uc2a4\ud0c0\uc6b4",phone:"1424",delay:2}]},a}return Object(x.a)(n,[{key:"render",value:function(){var e=this.state.pickupList;return Object(h.jsxs)("div",{className:"content",id:"pickup",children:[Object(h.jsx)("h1",{children:" \ud53d\uc5c5\ub300 \ud604\ud669"}),Object(h.jsx)("div",{className:"grid-container",children:Object(h.jsx)("div",{className:"grid-item",id:"item-pickup-list",children:Object(h.jsx)(Z,{pickupList:e})})})]})}}]),n}(a.Component),ee=n(18),te=n(20),ne=n(23);var ae=function(e){var t=e.isAuthorized,n=Object(a.useState)(!0),r=Object(c.a)(n,2),s=r[0],o=r[1],i="/assets/store_logo/"+sessionStorage.getItem("logoSrc")+".png";return Object(h.jsxs)("div",{id:"side-nav",className:"side-nav "+(s?"big-nav":"small-nav"),children:[Object(h.jsxs)("div",{id:"title",children:[Object(h.jsx)("div",{onClick:function(){return o(!s)},className:"toggle-menu-btn",children:s?Object(h.jsx)(te.a,{}):Object(h.jsx)(ne.a,{})}),Object(h.jsx)("img",{src:"/assets/hprobot-logo.png",alt:"hprobot-logo"}),Object(h.jsx)("div",{children:"Helper Robotics"})]}),Object(h.jsxs)(ee.b,{to:"/map",className:"nav-item",activeClassName:"nav-active",children:[Object(h.jsx)("div",{className:"nav-icon",children:Object(h.jsx)(ne.b,{})}),Object(h.jsx)("p",{children:"\uc2e4\uc2dc\uac04 \ub85c\ubd07\uc704\uce58"})]}),Object(h.jsxs)(ee.b,{to:"/call",className:"nav-item",activeClassName:"nav-active",children:[Object(h.jsx)("div",{className:"nav-icon",children:Object(h.jsx)(te.c,{})}),Object(h.jsx)("p",{children:"\ub85c\ubd07 \ud638\ucd9c"})]}),Object(h.jsxs)(ee.b,{to:"/pickup",className:"nav-item",activeClassName:"nav-active",children:[Object(h.jsx)("div",{className:"nav-icon",children:Object(h.jsx)(ne.c,{})}),Object(h.jsx)("p",{children:"\ud53d\uc5c5\ub300 \uc0c1\ud669"})]}),Object(h.jsxs)(ee.b,{to:"/history",className:"nav-item",activeClassName:"nav-active",children:[Object(h.jsx)("div",{className:"nav-icon",children:Object(h.jsx)(te.b,{})}),Object(h.jsx)("p",{children:"\uae30\ub85d"})]}),Object(h.jsxs)(ee.b,{to:"/setting",className:"nav-item",activeClassName:"nav-active",children:[Object(h.jsx)("div",{className:"nav-icon",children:Object(h.jsx)(te.d,{})}),Object(h.jsx)("p",{children:"\uc124\uc815"})]}),t?Object(h.jsxs)(ee.b,{to:"/my-page",id:"nav-user",children:[Object(h.jsx)("img",{src:i,alt:"user-logo"}),Object(h.jsxs)("p",{children:[sessionStorage.getItem("userName")," \ub9e4\uc7a5"]})]}):Object(h.jsxs)(ee.b,{to:"/login",id:"nav-login",children:[Object(h.jsx)("div",{className:"nav-icon",children:Object(h.jsx)(te.e,{})}),Object(h.jsx)("p",{children:"\ub85c\uadf8\uc778"})]})]})},re=n(6);var se=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){null==sessionStorage.getItem("mapId")||r(!0)})),Object(h.jsx)("div",{className:"web-container",children:Object(h.jsxs)(ee.a,{children:[Object(h.jsx)("div",{className:"web-side-nav",children:Object(h.jsx)(ae,{isAuthorized:n})}),Object(h.jsx)("div",{className:"web-content",children:Object(h.jsxs)(re.d,{children:[Object(h.jsx)(re.b,{path:"/",exact:!0,children:n?Object(h.jsx)(G,{}):Object(h.jsx)(m,{})}),Object(h.jsx)(re.b,{path:"/map",exact:!0,children:n?Object(h.jsx)(V,{}):Object(h.jsx)(y,{})}),Object(h.jsx)(re.b,{path:"/call",exact:!0,children:n?Object(h.jsx)(H,{}):Object(h.jsx)(y,{})}),Object(h.jsx)(re.b,{path:"/pickup",exact:!0,children:n?Object(h.jsx)($,{}):Object(h.jsx)(y,{})}),Object(h.jsx)(re.b,{path:"/history",exact:!0,children:n?Object(h.jsx)(K,{}):Object(h.jsx)(y,{})}),Object(h.jsx)(re.b,{path:"/setting",exact:!0,children:Object(h.jsx)(G,{})}),Object(h.jsx)(re.b,{path:"/login",exact:!0,children:Object(h.jsx)(m,{})}),Object(h.jsx)(re.b,{path:"/my-page",exact:!0,children:Object(h.jsx)(f,{})}),Object(h.jsx)(re.a,{to:"/"})]})})]})})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(se,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.2399674b.chunk.js.map