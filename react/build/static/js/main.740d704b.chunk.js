(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t){},126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),i=n.n(r),s=(n(71),n(4)),c=n(5),l=n(7),u=n(6),p=n(16),d=n(17),m=n(3),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={roomNumber:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.goToRoom=a.goToRoom.bind(Object(m.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({roomNumber:e.target.value.replace(/\D/,"")})}},{key:"goToRoom",value:function(){if(4!==this.state.roomNumber.length)return alert("Please enter a 4 digit room number."),void this.setState({roomNumber:""});var e="/rooms/"+this.state.roomNumber;this.props.history.push(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.submit,ref:function(t){return e.setWrapperRef=t}},o.a.createElement("input",{className:"pop-up",type:"text",value:this.state.roomNumber,placeholder:"Room Number",onChange:this.handleChange,required:!0,maxLength:"4",pattern:"[0-9]*"}),o.a.createElement("button",{style:{backgroundColor:"rgb(95, 204, 95)"},onClick:this.goToRoom},"JOIN"))}}]),n}(o.a.Component),f=Object(d.f)(h),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={formShowing:!1},a}return Object(c.a)(n,[{key:"redirectHome",value:function(){window.location.assign("/")}},{key:"componentDidMount",value:function(){var e=this.props.socket;e.emit("check joined room",(function(t){t&&e.emit("leave room")}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main-page"},o.a.createElement("img",{src:"logo.png",className:"logo",alt:"Findalicious Icon",onClick:function(){return e.setState({formShowing:!1})}}),o.a.createElement("div",null,this.state.formShowing?o.a.createElement(f,null):o.a.createElement("div",null,o.a.createElement("button",{className:"pop-up",onClick:function(t){e.props.history.push("/create")}},"CREATE ROOM"),o.a.createElement("button",{onClick:function(){return e.setState({formShowing:!0})}},"JOIN ROOM"))))}}]),n}(o.a.Component),g=n(13),v=n(14);function y(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("h2",null,"Page Not Found"),o.a.createElement(p.b,{to:"/"},o.a.createElement(g.a,{icon:v.a,size:"2x"})))}function E(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("h2",null,"Room Not Found"),o.a.createElement("p",null,"Please make sure you've entered a valid room ID in the URL   "),o.a.createElement(p.b,{to:"/"},o.a.createElement(g.a,{icon:v.a,size:"2x"})))}function w(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("h2",null,"User Disconnected"),o.a.createElement("p",null,"A user in your room has disconnected."),o.a.createElement("p",null,"Tip: Make sure your friends don't refresh their browsers while swiping. "),o.a.createElement(p.b,{to:"/"},o.a.createElement(g.a,{icon:v.a,size:"2x"})))}function k(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("h2",null,"Room Already Swiping"),o.a.createElement("p",null,'Make sure you are in the room before your friends press "EVERYONE IS IN".'),o.a.createElement(p.b,{to:"/"},o.a.createElement(g.a,{icon:v.a,size:"2x"})))}var j=n(38),S=n.n(j),O=n(61),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={active:1},a}return Object(c.a)(n,[{key:"_handleClick",value:function(e){this.setState({active:e}),(0,this.props.updateRadius)(e)}},{key:"render",value:function(){var e={width:"27%",display:"inline-block",fontSize:"small",backgroundColor:"#b6b6b6"},t={width:"27%",display:"inline-block",fontSize:"small",fontWeight:"bolder",backgroundColor:"#858585",boxShadow:"0 0px rgba(153, 153, 153, 0.24)",transform:"translateY(1px)"};return o.a.createElement("div",{style:{paddingBottom:"20px",paddingTop:"20px"}},o.a.createElement("button",{onClick:this._handleClick.bind(this,1),style:1===this.state.active?t:e},"1KM"),o.a.createElement("button",{onClick:this._handleClick.bind(this,2),style:2===this.state.active?t:e},"2KM"),o.a.createElement("button",{onClick:this._handleClick.bind(this,5),style:5===this.state.active?t:e},"5KM"))}}]),n}(o.a.Component),R=n(62),N=n.n(R),x=n(63),T=n.n(x),D="https://findalicious.herokuapp.com",I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentCity:"Retrieving Location...",longitude:0,latitude:0,locationRetrieved:!1,radius:1,loading:!1},a.createJoinRoom=a.createJoinRoom.bind(Object(m.a)(a)),a.goToRoom=a.goToRoom.bind(Object(m.a)(a)),a.updateRadius=a.updateRadius.bind(Object(m.a)(a)),a}return Object(c.a)(n,[{key:"updateRadius",value:function(e){this.setState({radius:e})}},{key:"redirectHome",value:function(){window.location.assign("/")}},{key:"componentDidMount",value:function(){var e=this,t=this.props.socket;t.emit("check joined room",(function(e){e&&t.emit("leave room")}));function n(){return(n=Object(O.a)(S.a.mark((function t(n){var a,o,r,i,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.coords,o=a.latitude,r=a.longitude,i={latitude:o,longitude:r,currentCity:"Coordinates Retrieved..."},e.setState(i),t.prev=5,t.next=8,fetch(D+"/api/location?longitude="+r+"&latitude="+o,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 8:if(200!==(s=t.sent).status){t.next=13;break}s.text().then((function(t){var n={currentCity:t,locationRetrieved:!0};e.setState(n)})),t.next=15;break;case 13:throw e.setState({currentCity:"Cannot get location"}),new Error("Google geocoding API cannot get a location");case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),e.setState({currentCity:"Cannot get location"}),console.error(t.t0);case 21:case"end":return t.stop()}}),t,null,[[5,17]])})))).apply(this,arguments)}navigator.geolocation||(alert("Browser geolocation must be enabled."),console.warn("Geolocation not enabled on this browser.")),navigator.geolocation.getCurrentPosition((function(e){return n.apply(this,arguments)}),(function(e){alert(e.message),console.warn("ERROR(".concat(e.code,"): ").concat(e.message))}),{enableHighAccuracy:!0})}},{key:"createJoinRoom",value:function(){var e=this,t=this.state.longitude,n=this.state.latitude,a=this.state.radius,o=this.state.currentCity;this.setState({loading:!0}),fetch(D+"/api/create-room",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({longitude:t,latitude:n,radius:a,city:o})}).then((function(t){200===t.status?t.json().then((function(t){var n="/rooms/"+t.roomNumber;e.goToRoom(n)})):404===t.status?alert("No restaurants found in your area. Try a larger radius."):(alert("Unknown error. Server may be down."),e.props.history.push("/"))})).catch((function(e){console.log(e)}))}},{key:"goToRoom",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return o.a.createElement(N.a,{active:this.state.loading,spinner:o.a.createElement(T.a,null),text:"Creating Room..."},o.a.createElement("div",{className:"main-page"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),o.a.createElement("h2",null," Restaurants Near "),o.a.createElement("div",null,o.a.createElement(g.a,{icon:v.b,size:"xs"}),o.a.createElement("h4",{style:{display:"inline-block",margin:"6px"}},this.state.currentCity)),o.a.createElement(C,{updateRadius:this.updateRadius.bind(this)}),o.a.createElement("button",{disabled:!this.state.locationRetrieved,onClick:this.createJoinRoom},"CREATE")))}}]),n}(o.a.Component),P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n);var o=(a=t.call(this,e)).props.match.params.roomNumber;return a.state={city:"Retrieving...",roomNumber:o,participants:[]},a.joinRoom=a.joinRoom.bind(Object(m.a)(a)),a.updateStateInfo=a.updateStateInfo.bind(Object(m.a)(a)),a.startSwiping=a.startSwiping.bind(Object(m.a)(a)),a}return Object(c.a)(n,[{key:"redirectHome",value:function(){window.location.assign("/")}},{key:"componentDidMount",value:function(){var e=this,t=this.props.socket,n=this;t.emit("check joined room",(function(e){e?n.redirectHome():n.joinRoom(n.state.roomNumber)})),t.on("room info",(function(t){e.updateStateInfo(t)})),t.on("invalid room error",(function(t){console.error(t),e.props.history.push("/rooms")})),t.on("general error",(function(t){alert("Server error"),console.error(t),e.redirectHome()})),t.on("user disconnect",(function(t){e.updateStateInfo(t)})),t.on("room already swiping",(function(){window.location.assign("/already-swiping")})),t.on("room started swiping",(function(){e.props.history.push("/swiping",{roomNumber:e.state.roomNumber})}))}},{key:"updateStateInfo",value:function(e){for(var t=JSON.parse(e),n=t.participants,a=[],o=0;o<n.length;o++)a.push(n[o].socketID);this.setState({participants:a}),this.setState({city:t.city}),this.setState({radius:t.radius})}},{key:"joinRoom",value:function(e){this.props.socket.emit("room",e)}},{key:"startSwiping",value:function(){this.props.socket.emit("initiate swiping")}},{key:"render",value:function(){return o.a.createElement("div",{className:"main-page"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),o.a.createElement("h2",null," Room ",this.state.roomNumber," "),o.a.createElement("div",{style:{paddingTop:"5px",paddingBottom:"5px"}},o.a.createElement("h4",null," Looking for restaurants near"),o.a.createElement(g.a,{icon:v.b,size:"xs"}),o.a.createElement("h4",{style:{display:"inline-block",margin:"2px"}},this.state.city),o.a.createElement("h4",{style:{padding:"0px"}},this.state.radius?"("+this.state.radius+"KM radius)":"")),o.a.createElement("h4",null,this.state.participants.length," user",1===this.state.participants.length?"":"s"," in this room"),o.a.createElement("button",{onClick:this.startSwiping},"EVERYONE IS IN"))}}]),n}(o.a.Component),L=(n(93),n(64)),M=n.n(L),_=(n(126),n(65));var A=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,n));return a.state={classList:["card_container"]},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){},t.prototype.onPan=function(e){if(!1!==this.props.isSwipeEnabled&&(!1!==this.props.isLeftSwipeEnabled&&e.deltaX<=0||!1!==this.props.isRightSwipeEnabled&&e.deltaX>=0)){if(this.state.classList.push("moving"),0===e.deltaX)return;if(0===e.center.x&&0===e.center.y)return;var t=1*(.08*e.deltaX);e.target.style.transform="translate("+e.deltaX+"px, 10px) rotate("+t+"deg)"}},t.prototype.onPanEnd=function(e){if(!1!==this.props.isSwipeEnabled&&(!1!==this.props.isLeftSwipeEnabled&&e.deltaX<=0||!1!==this.props.isRightSwipeEnabled&&e.deltaX>=0)){var t=this.state.classList.filter((function(e){return"moving"!==e}));this.setState({classList:t});var n=document.body.clientWidth,a=Math.abs(e.deltaX)<80;if(e.target.classList.toggle("removed",!a),a)e.target.style.transform="";else{var o=Math.max(Math.abs(e.velocityX)*n,n),r=e.deltaX>0?o:-o,i=Math.abs(e.velocityY)*n,s=(e.deltaY,1*(.08*e.deltaX));e.target.style.transform="translate("+r+"px, 100px) rotate("+s+"deg)",this.props.superOnSwipe(),this.props.onSwipe&&this.props.onSwipe(this.props.data),r<0&&this.props.onSwipeLeft?this.props.onSwipeLeft(this.props.data):this.props.onSwipeRight&&this.props.onSwipeRight(this.props.data)}}},t.prototype.onDoubleTap=function(){this.props.onDoubleTap&&this.props.onDoubleTap(this.props.data)},t.prototype.render=function(){return o.a.createElement(_.a,{onPan:this.onPan.bind(this),onPanEnd:this.onPanEnd.bind(this),onDoubleTap:this.onDoubleTap.bind(this)},o.a.createElement("div",{className:this.state.classList.join(" "),style:this.props.style},this.props.children))},t}(a.Component);n(128);var H=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,n));return a.state={},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setupCards()},t.prototype.componentDidUpdate=function(){this.setupCards()},t.prototype.setupCards=function(){var e=document.querySelector(".container"),t=document.querySelectorAll(".card_container");document.querySelectorAll(".card_container:not(.removed)").forEach((function(e,n){e.style.zIndex=t.length-n,e.style.transform="scale("+(20-n)/20+") translateY(-"+30*n+"px)",e.style.opacity=(10-n)/10})),e.classList.add("loaded")},t.prototype.renderCards=function(){var e=this;return o.a.Children.map(this.props.children,(function(t){return o.a.cloneElement(t,{superOnSwipe:e.superOnSwipe.bind(e)})}))},t.prototype.renderEndCard=function(){if(this.props.addEndCard)return o.a.createElement("div",{className:"card_container end_card"},this.props.addEndCard())},t.prototype.superOnSwipe=function(){this.setupCards()},t.prototype.render=function(){return o.a.createElement("div",{className:"container",style:this.props.style},o.a.createElement("div",{className:"cards_container"},this.renderCards(),this.renderEndCard()))},t}(a.Component),J=[{name:"Richard Hendricks",url:"./img/richard.jpg"},{name:"Erlich Bachman",url:"./img/erlich.jpg"},{name:"Monica Hall",url:"./img/monica.jpg"},{name:"Jared Dunn",url:"./img/jared.jpg"},{name:"Dinesh Chugtai",url:"./img/dinesh.jpg"}];var X=function(){var e=J;return o.a.createElement("div",null,o.a.createElement(H,{style:{width:"100vw",height:"100vh",position:"absolute",left:"0%",top:"0%"}},e.map((function(e){return o.a.createElement(A,{style:{backgroundImage:"url("+e.url+")"}},o.a.createElement("div",{className:"restaurantName"},o.a.createElement("h3",null,e.name)),o.a.createElement("div",{className:"restaurantRatingPrice"},o.a.createElement("h5",null," 4.6 | $$ ")),o.a.createElement("div",{className:"restaurantDistance"},o.a.createElement("h5",null," 1.2KM ")))}))))},z=(n(129),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={restaurants:[]},a.onSwipeRight=a.onSwipeRight.bind(Object(m.a)(a)),a.onSwipeLeft=a.onSwipeLeft.bind(Object(m.a)(a)),a.onDoubleTap=a.onDoubleTap.bind(Object(m.a)(a)),a}return Object(c.a)(n,[{key:"onSwipeRight",value:function(e){this.props.socket.emit("swipe",e.placeID),console.log("removing: "+e.placeID+" after swiping right")}},{key:"onSwipeLeft",value:function(e){this.props.socket.emit("swipe"),console.log("removing: "+e.placeID+" after swiping left")}},{key:"onDoubleTap",value:function(e){var t=this,n=this.state.restaurants,a=n.indexOf(e),o="https://findalicious.herokuapp.com/api/additionalPhotos/?id="+e.placeID;if(n[a].additionalPhotos){2===n[a].curPhotoIndex?n[a].curPhotoIndex=0:n[a].curPhotoIndex+=1;var r=n[a].curPhotoIndex,i=n[a].additionalPhotos;n[a].photoURL=i[r],this.setState({restaurants:n})}else fetch(o,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){200===e.status?e.json().then((function(e){var o=e.photos;n[a].additionalPhotos=o,n[a].photoURL=o[1],n[a].curPhotoIndex=1,t.setState({restaurants:n})})):console.error("Yelp API server did not find business details.")})).catch((function(e){console.log(e)}));console.log("Finding next photo")}},{key:"redirectHome",value:function(){window.location.assign("/")}},{key:"componentDidMount",value:function(){var e=this,t=this.props.socket;this.props.location.state.roomNumber||this.props.history.push("/");var n=this.props.location.state.roomNumber;fetch("https://findalicious.herokuapp.com/api/rooms/?roomNumber="+n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){200===t.status?t.json().then((function(t){e.setState(t)})):404===t.status?window.location.assign("/rooms"):(alert("Something went wrong."),window.setTimeout(e.redirectHome,100))})).catch((function(e){console.log(e)})),t.on("general error",(function(t){alert(t),window.setTimeout(e.redirectHome,100)})),t.on("match found",(function(t){for(var n,a=0;a<e.state.restaurants.length;a++)if(e.state.restaurants[a].placeID===t){n=e.state.restaurants[a].name;break}alert("You all liked "+n+"!")})),t.on("user disconnect",(function(){window.location.assign("/disconnect")})),t.on("not in room swipe",(function(){alert("You've disconnected or refreshed the page."),window.setTimeout(e.redirectHome,100)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(H,{style:{width:"100vw",height:"100vh",position:"absolute",left:"0%",top:"0%"}},this.state.restaurants.map((function(t){return o.a.createElement(A,{key:t.placeID,data:t,style:{backgroundImage:"url("+t.photoURL+")"},onSwipeRight:e.onSwipeRight.bind(e),onSwipeLeft:e.onSwipeLeft.bind(e),onDoubleTap:e.onDoubleTap.bind(e)},o.a.createElement("div",{className:"restaurantName"},o.a.createElement("h3",null,t.name)),o.a.createElement("div",{className:"restaurantRatingPrice"},o.a.createElement("h5",null," ",t.rating," | ",t.price," ")),o.a.createElement("div",{className:"restaurantDistance"},o.a.createElement("h5",null," ",Math.floor(t.distance),"M ")))}))))}}]),n}(o.a.Component)),Y=M.a.connect("https://findalicious.herokuapp.com",{reconnection:!0}),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/rooms/:roomNumber",render:function(e){return o.a.createElement(P,Object.assign({},e,{socket:Y}))}}),o.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(b,Object.assign({},e,{socket:Y}))}}),o.a.createElement(d.a,{exact:!0,path:"/create",render:function(e){return o.a.createElement(I,Object.assign({},e,{socket:Y}))}}),o.a.createElement(d.a,{exact:!0,path:"/swiping",render:function(e){return o.a.createElement(z,Object.assign({},e,{socket:Y}))}}),o.a.createElement(d.a,{exact:!0,path:"/rooms",component:E}),o.a.createElement(d.a,{exact:!0,path:"/test",component:X}),o.a.createElement(d.a,{exact:!0,path:"/disconnect",component:w}),o.a.createElement(d.a,{exact:!0,path:"/already-swiping",component:k}),o.a.createElement(d.a,{component:y}))))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,n){e.exports=n(130)},71:function(e,t,n){},93:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.740d704b.chunk.js.map