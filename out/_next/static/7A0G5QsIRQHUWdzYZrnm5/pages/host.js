(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{XaCz:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/host",function(){return t("xAJF")}])},xAJF:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return y}));var o=t("0iUn"),a=t("sLSF"),c=t("MI3g"),i=t("a7VT"),r=t("AT/M"),u=t("Tit0"),s=t("vYYK"),m=t("q1tI"),d=t.n(m),l=t("VdAu"),p=(t("YFqc"),t("vDqi")),f=t.n(p),v=t("gFX4"),h=t.n(v),w=t("NYw1"),g=d.a.createElement,y=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,u=new Array(a),m=0;m<a;m++)u[m]=arguments[m];return t=Object(c.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(u))),Object(s.a)(Object(r.a)(t),"state",{connect:g(l.f,{fontSize:"3",m:"10px",color:"red"},"Disconnected \ud83d\udc80"),id:""}),t}return Object(u.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this;return g(l.c,{flexDirection:"column",textAlign:"center"},this.state.connect,g(l.d,{fontSize:[5,6]},"Create A Node!"),g(l.c,{action:"javascript:void(0);",flexDirection:"column",width:["80vw","75vw"],m:"auto",as:"form",id:"form"},g(w.b,{for:"name"},"Name"),g(w.a,{id:"name",name:"name",css:{borderRadius:"3px"},placeholder:"My Node 123"}),g(w.b,{for:"ram"},"Memory"),g(w.c,{id:"ram",name:"ram"},g("option",{value:"2"},"2 GB"),g("option",{value:"3"},"3 GB"),g("option",{value:"4"},"4 GB"),g("option",{value:"5"},"5 GB"),g("option",{value:"6"},"6 GB"),g("option",{value:"7"},"7 GB"),g("option",{value:"8"},"8 GB"),g("option",{value:"9"},"9 GB")),g(l.b,{onClick:function(){f.a.post("https://ghym-server.glitch.me/new_node",{is_running:!1,name:document.getElementById("name").value,id:e.state.id,ram:document.getElementById("ram").value}),document.getElementById("form").reset(),e.setState({connect:g(l.f,{fontSize:"53",m:"10px",color:"secondary"},"\u2728Node is Running!\u2728")})},m:"10px",sx:{":hover":{cursor:"pointer"}}},"Send Away!")))}},{key:"componentDidMount",value:function(){var e=this,n=h()("https://ghym-server.glitch.me/");n.on("connect",(function(){e.setState({connect:g(l.f,{m:"10px",fontSize:"3",color:"green"},"Connected \ud83d\udd0c"),id:n.id})})),n.on("job",(function(e){f.a.post("http://localhost:7838/python",e).then((function(t){console.log(e),n.emit("done",{name:e.name,socket:e.socket,out:t.data.out})}))}))}},{key:"componentWillUnmount",value:function(){socket.disconnect()}}]),n}(d.a.Component)}},[["XaCz",1,2,0,3,4,5,6]]]);