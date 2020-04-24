(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,n){e.exports=n(41)},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),i=(n(29),n(20)),l=n(5),u=n(23),s=(n(30),n(19)),m=n.n(s),h=[{name:"Richard Hendricks",url:"./img/richard.jpg"},{name:"Erlich Bachman",url:"./img/erlich.jpg"},{name:"Monica Hall",url:"./img/monica.jpg"},{name:"Jared Dunn",url:"./img/jared.jpg"},{name:"Dinesh Chugtai",url:"./img/dinesh.jpg"}];var p=function(){var e=h,t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],c=n[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"React Tinder Card"),o.a.createElement("div",{className:"cardContainer"},e.map((function(e){return o.a.createElement(m.a,{className:"swipe",key:e.name,onSwipe:function(t){return n=t,a=e.name,console.log("removing: "+a),void c(n);var n,a},onCardLeftScreen:function(){return t=e.name,void console.log(t+" left the screen!");var t},preventSwipe:["up","down"]},o.a.createElement("div",{style:{backgroundImage:"url("+e.url+")"},className:"card"},o.a.createElement("h3",null,e.name)))}))),r?o.a.createElement("h2",{className:"infoText"},"You swiped ",r):o.a.createElement("h2",{className:"infoText"},"No direction swiped"))},d=n(7),g=n(8),f=n(10),v=n(9),E=n(12),b=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={roomNumber:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.submit=a.submit.bind(Object(E.a)(a)),a}return Object(g.a)(n,[{key:"handleChange",value:function(e){this.setState({roomNumber:e.target.value})}},{key:"submit",value:function(e){alert("You submitted this room number:"+this.state.roomNumber),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submit},o.a.createElement("input",{type:"text",value:this.state.roomNumber,placeholder:"Room Number",onChange:this.handleChange,required:!0,maxLength:"4",pattern:"[0-9]*"}),o.a.createElement("button",{onTouchStart:""},"JOIN ROOM"))}}]),n}(o.a.Component),C=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"goCreateRoom",value:function(){this.props.history.push("/create")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-page"},o.a.createElement("img",{src:"logo.png",className:"logo",alt:"Chicken Tinder Icon"}),o.a.createElement(b,null),o.a.createElement("button",{onTouchStart:"",onClick:function(t){e.goCreateRoom()}},"NEW ROOM"))}}]),n}(o.a.Component);function j(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Page Not Found"),o.a.createElement("a",{href:"/"},"Go back"))}function y(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Room Not Found"),o.a.createElement("p",null,"Please make sure you've entered a valid room ID in the URL   "),o.a.createElement("a",{href:"/"},"Go back"))}var k=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={currentCity:"Retrieving Location...",longitude:0,latitude:0},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDj9SUs2BLoGDf-ctUrDX1Mj11XBpdAzks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){200===t.status?t.json().then((function(t){var n=t.location.lng,a=t.location.lat,o={longitude:n,latitude:a,currentCity:"Coordinates Retrieved..."};e.setState(o),fetch("http://app-chicken-tinder.apps.us-east-2.starter.openshift-online.com/api/location?longitude="+n+"&latitude="+a,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){200===t.status?t.json().then((function(t){var n={currentCity:t.long_name};e.setState(n)})):e.setState({currentCity:"Cannot get location"})})).catch((function(t){e.setState({currentCity:"Cannot get location"}),console.log(t)}))})):e.setState({currentCity:"Cannot get coordinates..."})})).catch((function(t){e.setState({currentCity:"Cannot get location"}),console.log(t)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),o.a.createElement("h2",null," Create Room "),o.a.createElement("p",null,this.state.currentCity),o.a.createElement("button",{onTouchStart:""},"READY"))}}]),n}(o.a.Component);n(35);var O=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/rooms/:id",component:p}),o.a.createElement(l.a,{exact:!0,path:"/",component:C}),o.a.createElement(l.a,{exact:!0,path:"/create",component:k}),o.a.createElement(l.a,{exact:!0,path:"/rooms",component:y}),o.a.createElement(l.a,{component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.61ce99a0.chunk.js.map