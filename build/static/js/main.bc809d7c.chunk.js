(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(42)},31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),c=n.n(r),l=n(15),i=n(5),s=n(6),u=n(8),d=n(7),p=n(9),m=n(12),h=n(10);n(31);var b={background:"#333",color:"#fff",textAlign:"center",padding:"10px",borderRadius:"5px"},f=function(){return o.a.createElement("header",{style:b},o.a.createElement("h1",null,"TodoList"),o.a.createElement(m.b,{className:"link",to:"/"},"Home")," | ",o.a.createElement(m.b,{className:"link",to:"/about"},"About"))},g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4",paddingLeft:"10px",borderBottom:"1px #ccc solid",borderRadius:"5px",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",{style:{paddingTop:"15px"}},o.a.createElement("input",{type:"checkbox",className:"custom-checkbox",style:{marginRight:"10px"},onChange:this.props.markComplete.bind(this,t)}),n,o.a.createElement("button",{type:"button",className:"btnDel",onClick:this.props.delete.bind(this,t)},"x")))}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(g,{key:t.id,todo:t,markComplete:e.props.markComplete,delete:e.props.delete})})}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},n.onChange=function(e){return n.setState({title:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo",className:"input-group",style:{paddingLeft:"10px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn  btn-outline-dark btn-lg",style:{flex:"1"}}))}}]),t}(a.Component);var E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{style:{textAlign:"center",marginTop:"20px"}},"About"),o.a.createElement("p",{style:{textAlign:"center"}},"This is the Todo List app v1.0.0. It is part of a React crash course."))},k=n(25),j=n.n(k),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},n.markComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.delete=function(e){n.setState({todos:Object(l.a)(n.state.todos.filter(function(t){return t.id!==e}))})},n.addTodo=function(e){var t={id:j.a.v4(),title:e,completed:!1};n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t])})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container container-fluid"},o.a.createElement(f,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{addTodo:e.addTodo}),o.a.createElement(v,{todos:e.state.todos,markComplete:e.markComplete,delete:e.delete}))}}),o.a.createElement(h.a,{path:"/about",component:E}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.bc809d7c.chunk.js.map