(this["webpackJsonpreact-metronome"]=this["webpackJsonpreact-metronome"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/click1.7a7930a2.wav"},function(e,t,a){e.exports=a.p+"static/media/click2.fe0ded65.wav"},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),o=(a(14),a(3)),l=a(4),s=a(8),u=a(7),m=(a(15),a(5)),p=a.n(m),v=a(6),d=a.n(v),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).playClick=function(){var e=n.state;e.count%e.beatsPerMeasure===0?n.click2.play():n.click1.play(),n.setState((function(e){return{count:(e.count+1)%e.beatsPerMeasure}}))},n.startStop=function(){n.state.playing?(clearInterval(n.timer),n.setState({playing:!1})):(n.timer=setInterval(n.playClick,60/n.state.bpm*1e3),n.setState({count:0,playing:!0},n.playClick))},n.handleBpmChange=function(e){var t=e.target.value;n.state.playing?(clearInterval(n.timer),n.timer=setInterval(n.playClick,60/t*1e3),n.setState({count:0,bpm:t})):n.setState({bpm:t})},n.state={playing:!1,count:0,bpm:100,beatsPerMeasure:4},n.click1=new Audio(p.a),n.click2=new Audio(d.a),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.playing,a=e.bpm;return r.a.createElement("div",{className:"metronome"},r.a.createElement("div",{className:"bpm-slider"},r.a.createElement("div",null,a," BPM"),r.a.createElement("input",{type:"range",min:"60",max:"240",value:a,onChange:this.handleBpmChange})),r.a.createElement("button",{onClick:this.startStop},t?"Stop":"Start"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1627c833.chunk.js.map