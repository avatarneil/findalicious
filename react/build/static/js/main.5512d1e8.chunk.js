(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/logo.a0068553.png"},25:function(e,t,n){e.exports=n(42)},30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),l=(n(30),n(21)),i=n(5),u=n(24),m=(n(31),n(19)),s=n.n(m),h=[{name:"Richard Hendricks",url:"./img/richard.jpg"},{name:"Erlich Bachman",url:"./img/erlich.jpg"},{name:"Monica Hall",url:"./img/monica.jpg"},{name:"Jared Dunn",url:"./img/jared.jpg"},{name:"Dinesh Chugtai",url:"./img/dinesh.jpg"}];var d=function(){var e=h,t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],c=n[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"React Tinder Card"),o.a.createElement("div",{className:"cardContainer"},e.map((function(e){return o.a.createElement(s.a,{className:"swipe",key:e.name,onSwipe:function(t){return n=t,a=e.name,console.log("removing: "+a),void c(n);var n,a},onCardLeftScreen:function(){return t=e.name,void console.log(t+" left the screen!");var t},preventSwipe:["up","down"]},o.a.createElement("div",{style:{backgroundImage:"url("+e.url+")"},className:"card"},o.a.createElement("h3",null,e.name)))}))),r?o.a.createElement("h2",{className:"infoText"},"You swiped ",r):o.a.createElement("h2",{className:"infoText"},"No direction swiped"))},p=n(7),g=n(8),f=n(10),v=n(9),E=n(12),b=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={roomNumber:""},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.submit=a.submit.bind(Object(E.a)(a)),a}return Object(g.a)(n,[{key:"handleChange",value:function(e){this.setState({roomNumber:e.target.value})}},{key:"submit",value:function(e){alert("You submitted this room number:"+this.state.roomNumber),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submit},o.a.createElement("input",{type:"text",value:this.state.roomNumber,placeholder:"Room Number",onChange:this.handleChange,required:!0,maxLength:"4",pattern:"[0-9]*"}),o.a.createElement("button",{onTouchStart:""},"JOIN ROOM"))}}]),n}(o.a.Component),C=n(20),j=n.n(C),y=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"goCreateRoom",value:function(){this.props.history.push("/create")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-page"},o.a.createElement("img",{src:j.a,className:"logo",alt:"Chicken Tinder Icon"}),o.a.createElement(b,null),o.a.createElement("button",{onTouchStart:"",onClick:function(t){e.goCreateRoom()}},"NEW ROOM"))}}]),n}(o.a.Component);function O(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Page Not Found"),o.a.createElement("a",{href:"/"},"Go back"))}function k(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Room Not Found"),o.a.createElement("p",null,"Please make sure you've entered a valid room ID in the URL   "),o.a.createElement("a",{href:"/"},"Go back"))}console.log("http://localhost:3000");var N=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={currentCity:"",longitude:0,latitude:0},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.longitude,a=t.coords.latitude;e.setState({longitude:t.coords.longitude}),e.setState({latitude:t.coords.latitude}),fetch("http://localhost:3000/api/location?longitude="+n+"&latitude="+a,{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(t){200===t.status?t.json().then((function(t){var n={currentCity:t.long_name};e.setState(n)})):e.setState({currentCity:"Cannot get location"})})).catch((function(t){e.setState({currentCity:"Cannot get location"}),console.log(t)}))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),o.a.createElement("h2",null," Create Room "),o.a.createElement("p",null,"Location: ",this.state.currentCity),o.a.createElement("button",{onTouchStart:""},"READY"))}}]),n}(o.a.Component);n(36);var w=function(){return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/rooms/:id",component:d}),o.a.createElement(i.a,{exact:!0,path:"/",component:y}),o.a.createElement(i.a,{exact:!0,path:"/create",component:N}),o.a.createElement(i.a,{exact:!0,path:"/rooms",component:k}),o.a.createElement(i.a,{component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.5512d1e8.chunk.js.map