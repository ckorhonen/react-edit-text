/*! For license information please see main.f2694fbd.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-edit-text-example"]=this["webpackJsonpreact-edit-text-example"]||[]).push([[0],{295:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(44),n(45),n(1)),s=n.n(r),l=n(36),i=n.n(l),c=n(18),o=n(5),d=n.n(o);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var m="_3sXmF",b="_ygkSb",x="_1EEDX",j="_3qwMT",h="_3F-ST",f="_38077";function v(e,t){return e(t={exports:{}},t.exports),t.exports}var y="function"===typeof Symbol&&Symbol.for,O=y?Symbol.for("react.element"):60103,g=y?Symbol.for("react.portal"):60106,S=y?Symbol.for("react.fragment"):60107,T=y?Symbol.for("react.strict_mode"):60108,N=y?Symbol.for("react.profiler"):60114,C=y?Symbol.for("react.provider"):60109,w=y?Symbol.for("react.context"):60110,E=y?Symbol.for("react.async_mode"):60111,k=y?Symbol.for("react.concurrent_mode"):60111,V=y?Symbol.for("react.forward_ref"):60112,R=y?Symbol.for("react.suspense"):60113,F=y?Symbol.for("react.suspense_list"):60120,M=y?Symbol.for("react.memo"):60115,P=y?Symbol.for("react.lazy"):60116,_=y?Symbol.for("react.block"):60121,$=y?Symbol.for("react.fundamental"):60117,B=y?Symbol.for("react.responder"):60118,z=y?Symbol.for("react.scope"):60119;function L(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case O:switch(e=e.type){case E:case k:case S:case N:case T:case R:return e;default:switch(e=e&&e.$$typeof){case w:case V:case P:case M:case C:return e;default:return t}}case g:return t}}}function q(e){return L(e)===k}var D={AsyncMode:E,ConcurrentMode:k,ContextConsumer:w,ContextProvider:C,Element:O,ForwardRef:V,Fragment:S,Lazy:P,Memo:M,Portal:g,Profiler:N,StrictMode:T,Suspense:R,isAsyncMode:function(e){return q(e)||L(e)===E},isConcurrentMode:q,isContextConsumer:function(e){return L(e)===w},isContextProvider:function(e){return L(e)===C},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===O},isForwardRef:function(e){return L(e)===V},isFragment:function(e){return L(e)===S},isLazy:function(e){return L(e)===P},isMemo:function(e){return L(e)===M},isPortal:function(e){return L(e)===g},isProfiler:function(e){return L(e)===N},isStrictMode:function(e){return L(e)===T},isSuspense:function(e){return L(e)===R},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===S||e===k||e===N||e===T||e===R||e===F||"object"===typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===M||e.$$typeof===C||e.$$typeof===w||e.$$typeof===V||e.$$typeof===$||e.$$typeof===B||e.$$typeof===z||e.$$typeof===_)},typeOf:L},I=(v((function(e,t){0})),v((function(e){e.exports=D})),Object.getOwnPropertySymbols),A=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;function U(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}})()&&Object.assign;var W="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function J(e,t,n,a,r){}J.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function H(){}function X(){}X.resetWarningCache=H;var Y=v((function(e){e.exports=function(){function e(e,t,n,a,r,s){if(s!==W){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:X,resetWarningCache:H};return n.PropTypes=n,n}()})),G=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(){n.props.readonly||n.setState({editMode:!0})},n.handleBlur=function(e){if(void 0===e&&(e=!0),n.inputRef.current){var t=n.inputRef.current,a=t.name,r=t.value;e&&n.state.previousValue!==r?(n.props.onSave({name:a,value:r,previousValue:n.state.previousValue}),n.setState({savedText:r,previousValue:r})):e||n.props.onChange&&n.props.onChange(n.state.previousValue),n.setState({editMode:!1})}},n.handleKeydown=function(e){13===e.keyCode||13===e.charCode?n.handleBlur():27!==e.keyCode&&27!==e.charCode||n.handleBlur(!1)},n.state={previousValue:t.defaultValue||"",savedText:t.defaultValue||"",editMode:!1},n.inputRef=s.a.createRef(),n}return p(t,e),t.getDerivedStateFromProps=function(e,t){return e.value!==t.savedText&&null!==e.value?t.editMode?{savedText:e.value}:{previousValue:e.value,savedText:e.value}:null},t.prototype.render=function(){var e,t,n,a=this.props,r=a.id,l=a.className,i=a.name,c=a.type,o=a.placeholder,u=a.inline,p=a.style,b=a.readonly,v=a.value,y=a.onChange,O=this.state,g=O.editMode,S=O.savedText;return!b&&g?null!==v?s.a.createElement("input",{id:r,className:d()(x,(e={},e[h]=u,e),l),style:p,ref:this.inputRef,type:c,name:i,onBlur:this.handleBlur,onKeyDown:this.handleKeydown,value:v,onChange:function(e){y(e.target.value)},autoFocus:!0,onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)}}):s.a.createElement("input",{id:r,className:d()(x,(t={},t[h]=u,t),l),style:p,ref:this.inputRef,type:c,name:i,onBlur:this.handleBlur,onKeyDown:this.handleKeydown,defaultValue:S,autoFocus:!0,onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)}}):s.a.createElement("div",{id:r,className:d()(x,m,(n={},n[j]=o&&!S,n[h]=u,n[f]=b,n),l),onClick:this.handleClick,style:p},S||o)},t}(s.a.Component);G.defaultProps={id:null,name:null,className:null,type:"text",value:null,defaultValue:null,placeholder:"",onSave:function(){},onChange:function(){},inline:!1,style:{},readonly:!1},G.propTypes={id:Y.string,name:Y.string,className:Y.string,type:Y.string,value:Y.string,defaultValue:Y.string,placeholder:Y.string,onSave:Y.func,onChange:Y.func,inline:Y.bool,style:Y.oneOfType([Y.object,Y.array]),readonly:Y.bool};var Q=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(){n.props.readonly||n.setState({editMode:!0})},n.handleBlur=function(e){if(void 0===e&&(e=!0),n.inputRef.current){var t=n.inputRef.current,a=t.name,r=t.value;if(e&&n.state.previousValue!==r){var s=""===r?[]:r.split(/\r?\n/);n.props.onSave({name:a,value:r,previousValue:n.state.previousValue}),n.setState({previousValue:r,savedText:r,savedTextLines:s})}else e||n.props.onChange&&n.props.onChange(n.state.previousValue);n.setState({editMode:!1})}},n.handleKeydown=function(e){27!==e.keyCode&&27!==e.charCode||n.handleBlur(!1)},n.state={previousValue:t.defaultValue||"",savedText:t.defaultValue||"",savedTextLines:t.defaultValue?t.defaultValue.split(/\r?\n/):[],editMode:!1},n.inputRef=s.a.createRef(),n}return p(t,e),t.getDerivedStateFromProps=function(e,t){return e.value!==t.savedText&&null!==e.value?t.editMode?{savedText:e.value,savedTextLines:e.value?e.value.split(/\r?\n/):[]}:{previousValue:e.value,savedText:e.value,savedTextLines:e.value?e.value.split(/\r?\n/):[]}:null},t.prototype.render=function(){var e,t=this.props,n=t.id,a=t.className,r=t.name,l=t.rows,i=t.placeholder,c=t.style,o=t.readonly,p=t.onChange,m=t.value,h=this.state,v=h.editMode,y=h.savedText,O=h.savedTextLines,g=u({},c,{height:24*l+16+"px"});return!o&&v?null!==m?s.a.createElement("textarea",{id:n,className:d()(x,a),style:c,ref:this.inputRef,rows:l,name:r,onBlur:this.handleBlur,onKeyDown:this.handleKeydown,value:m,onChange:function(e){p(e.target.value)},autoFocus:!0,onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)}}):s.a.createElement("textarea",{id:n,className:d()(x,a),style:c,ref:this.inputRef,rows:l,name:r,onBlur:this.handleBlur,onKeyDown:this.handleKeydown,defaultValue:y,autoFocus:!0,onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)}}):s.a.createElement("div",{id:n,className:d()(x,b,(e={},e[j]=i&&!y,e[f]=o,e),a),onClick:this.handleClick,style:g},O&&O.length>0?O.map((function(e,t){return s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("span",null,e),s.a.createElement("br",null))})):s.a.createElement("span",null,i))},t}(s.a.Component);Q.defaultProps={id:null,name:null,className:null,rows:3,value:null,defaultValue:null,placeholder:"",onSave:function(){},onChange:function(){},style:{},readonly:!1},Q.propTypes={id:Y.string,name:Y.string,className:Y.string,rows:Y.number,value:Y.string,defaultValue:Y.string,placeholder:Y.string,onSave:Y.func,onChange:Y.func,style:Y.oneOfType([Y.object,Y.array]),readonly:Y.bool};n(50);var Z=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"https://bymi15.github.io/react-edit-text",children:"React Edit Text"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item active",children:Object(a.jsxs)("a",{className:"nav-link",href:"https://brianmin.tech/react-edit-text/",children:["Home ",Object(a.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"#props",children:"Props"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"#callbacks",children:"Callbacks"})})]})})]})},ee=function(){return Object(a.jsx)("div",{className:"jumbotron mt-5",children:Object(a.jsxs)("div",{className:"container mt-4",children:[Object(a.jsx)("h1",{className:"display-3",children:"React Edit Text"}),Object(a.jsxs)("p",{className:"right-spacing",children:[Object(a.jsx)("a",{href:"https://david-dm.org/bymi15/react-edit-text",title:"dependencies status",children:Object(a.jsx)("img",{src:"https://david-dm.org/bymi15/react-edit-text/status.svg?style=flat-square",alt:"david dm"})}),Object(a.jsx)("a",{href:"https://travis-ci.com/github/bymi15/react-edit-text",children:Object(a.jsx)("img",{src:"https://api.travis-ci.com/bymi15/react-edit-text.svg?branch=main",alt:"travis"})}),Object(a.jsx)("a",{href:"https://www.npmjs.com/package/react-edit-text",children:Object(a.jsx)("img",{src:"https://img.shields.io/npm/v/react-edit-text?color=brightgreen&style=flat-squaret",alt:"npm"})})]}),Object(a.jsx)("hr",{className:"my-4"}),Object(a.jsx)("p",{className:"lead",children:"This is an editable text component for React. Simply click on the text to edit!"}),Object(a.jsxs)("p",{children:["Made with"," ",Object(a.jsx)("span",{role:"img","aria-label":"love",children:"\u2764\ufe0f"})," ","by ",Object(a.jsx)("a",{href:"https://github.com/bymi15",children:"Brian Min"})]})]})})},te=n(299),ne=n(298),ae=["import React from 'react'\nimport { EditText, EditTextarea } from 'react-edit-text';\nimport 'react-edit-text/dist/index.css';\nconst App = () => {\n    return (\n        <React.Fragment>\n            <EditText\n            name=\"textbox1\"\n            defaultValue=\"Click me to edit my text\"\n            />\n            <EditText\n            name=\"textbox2\"\n            placeholder=\"I am a placeholder text\"\n            />\n            <br />\n            <EditTextarea\n              placeholder='I am an editable textarea'\n            />\n        </React.Fragment>\n    );\n}","import React from 'react'\nimport { EditText, EditTextarea } from 'react-edit-text';\nimport 'react-edit-text/dist/index.css';\nconst App = () => {\n    return (\n        <React.Fragment>\n            <EditText\n            name=\"textbox1\"\n            style={{border: '1px solid #999'}}\n            defaultValue=\"Click me to edit my text\"\n            />\n            <br/>\n            <EditText\n            name=\"textbox2\"\n            style={{padding: '10px', fontSize: '36px'}}\n            defaultValue=\"Click me to edit my text\"\n            />\n            <br/>\n            <EditText\n            name=\"textbox3\"\n            style={{padding: '15px', fontSize: '24px', backgroundColor: \"#EEE\"}}\n            defaultValue=\"Click me to edit my text\"\n            />\n            <br/>\n            <EditText\n            name=\"textbox4\"\n            style={{padding: '15px', fontSize: '24px', color: \"#FFF\", backgroundColor: \"#000\"}}\n            defaultValue=\"Click me to edit my text\"\n            />\n            <br />\n            <EditTextarea\n              name='textarea1'\n              rows={7}\n              value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non porta massa, a interdum turpis. In imperdiet tincidunt justo nec maximus. Aliquam tempus interdum orci eget rhoncus. Cras consectetur elit quam. Aliquam ante massa, pulvinar quis tortor non, rhoncus facilisis nisi. Nam at sapien porta, congue sapien porta, suscipit dolor. Maecenas vitae efficitur neque. Donec auctor tortor in ornare convallis. Etiam venenatis ex nisi, eu commodo risus dignissim ac. Suspendisse potenti. Integer hendrerit erat dapibus orci luctus, non malesuada est ullamcorper. Vivamus mattis magna ipsum, id lobortis justo aliquet at. '\n              style={{ fontSize: '16px' }}\n            />\n        </React.Fragment>\n    );\n}","import React from 'react'\nimport { EditText, EditTextarea } from 'react-edit-text';\nimport 'react-edit-text/dist/index.css';\nconst App = () => {\n    return (\n        <React.Fragment>\n          <div style={{whiteSpace: 'nowrap'}}>\n            <strong><label className=\"mr-2\">Full Name <small>(read-only)</small>: </label></strong>\n            <EditText id=\"fullName\" name=\"fullName\" defaultValue=\"James Smith\" inline readonly/>\n          </div>\n          <div style={{whiteSpace: 'nowrap'}}>\n            <strong><label className=\"mr-2\">Email Address: </label></strong>\n            <EditText name=\"age\" type=\"email\" style={{width: '200px'}} defaultValue=\"james.smith@domain.com\" inline/>\n          </div>\n          <div style={{whiteSpace: 'nowrap'}}>\n            <strong><label className=\"mr-2\">Score: </label></strong>\n            <EditText name=\"age\" type=\"number\" style={{width: '200px'}} defaultValue=\"25000\" inline/>\n          </div>\n          <div style={{ display: 'flex' }}>\n            <strong>\n              <label className='mr-2' style={{ paddingTop: '2px' }}>Description: </label>\n            </strong>\n            <EditTextarea\n              name='description'\n              rows={4}\n              style={{ paddingTop: 0 }}\n              placeholder='Enter a description'\n            />\n          </div>\n        </React.Fragment>\n    );\n}","import React from 'react'\nimport { EditText, EditTextarea } from 'react-edit-text';\nimport 'react-edit-text/dist/index.css';\nconst App = () => {\n    const [text, setText] = React.useState(\n      'This is a controlled component'\n    );\n    const [textarea, setTextarea] = React.useState(\n      'This is a controlled text area component'\n    );\n    const handleSave = ({ name, value, previousValue }) => {\n      alert(name + ' saved as: ' + value + ' (prev: ' + previousValue + ')');\n    };\n    return (\n        <React.Fragment>\n          <EditText\n            name='textbox'\n            style={{ fontSize: '16px', border: '1px solid #ccc' }}\n            value={text}\n            onChange={setText}\n            onSave={handleSave}\n          />\n          <p style={{ paddingLeft: '5px', marginBottom: '5px' }}>\n            <b>Value:</b> {text}\n          </p>\n          <button onClick={() => setText('')}>Clear Input</button>\n          <br />\n          <br />\n          <EditTextarea\n            name='textarea'\n            style={{ fontSize: '16px', border: '1px solid #ccc' }}\n            value={textarea}\n            onChange={setTextarea}\n            onSave={handleSave}\n          />\n          <p style={{ paddingLeft: '5px', marginBottom: '5px' }}>\n            <b>Value:</b> {textarea}\n          </p>\n          <button onClick={() => setTextarea('')}>Clear Input</button>\n          <br />\n          <br />\n          <EditText\n            name='textbox1'\n            style={{ fontSize: '16px', border: '1px solid #ccc' }}\n            onSave={handleSave}\n            placeholder='This is a uncontrolled component'\n          />\n          <br />\n          <EditTextarea\n            name='textarea1'\n            style={{ fontSize: '16px', border: '1px solid #ccc' }}\n            onSave={handleSave}\n            placeholder='This is a uncontrolled text area component'\n          />\n        </React.Fragment>\n    );\n}"],re=function(){var e=s.a.useState("This is a controlled component"),t=Object(c.a)(e,2),n=t[0],r=t[1],l=s.a.useState("This is a controlled text area component"),i=Object(c.a)(l,2),o=i[0],d=i[1],u=function(e){var t=e.name,n=e.value,a=e.previousValue;alert(t+" saved as: "+n+" (prev: "+a+")")};return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(Z,{}),Object(a.jsx)(ee,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h3",{children:"Basic Usage"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{className:"lead",children:["Use the ",Object(a.jsx)("b",{children:"EditText"})," or ",Object(a.jsx)("b",{children:"EditTextarea"})," components for a UX friendly input"]}),Object(a.jsxs)("li",{className:"lead",children:["Click on the component to switch into ",Object(a.jsx)("b",{children:"edit mode"})]}),Object(a.jsxs)("li",{className:"lead",children:["Clicking outside the component or blurring focus triggers the"," ",Object(a.jsx)("b",{children:"onSave"})," callback"]}),Object(a.jsxs)("li",{className:"lead",children:["Hitting the ",Object(a.jsx)("b",{children:"ESC"})," key will exit edit mode without triggering the ",Object(a.jsx)("b",{children:"onSave"})," callback function"]}),Object(a.jsxs)("li",{className:"lead",children:["Create a ",Object(a.jsx)("b",{children:"controlled"})," component by setting the ",Object(a.jsx)("b",{children:"value"})," ","prop and ",Object(a.jsx)("b",{children:"onChange"})," callback function"]})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h4",{children:"Example"}),Object(a.jsx)(te.a,{language:"javascript",showLineNumbers:!0,style:ne.a,children:ae[0]})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h4",{children:"Output"}),Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)(G,{name:"textbox1",defaultValue:"Click me to edit my text"}),Object(a.jsx)(G,{name:"textbox2",placeholder:"I am a placeholder text"}),Object(a.jsx)(Q,{placeholder:"I am an editable textarea"})]})})]})]}),Object(a.jsx)("span",{id:"props"}),Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Props"}),Object(a.jsx)("p",{className:"lead",children:"Shared props"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"id"})," sets the id of the DOM element"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"name"})," sets the name of the input element"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"readonly"})," (default: false) displays only the view component and hides the input element"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"style"})," sets the style of the DOM element"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"placeholder"})," sets the placeholder of the component"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"defaultValue"})," sets the default value of the component"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"value"})," sets the value of the component"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"onSave"})," callback function returns a ","{","name, value, previousValue","}"," object when the input is loses focus (",Object(a.jsx)("em",{children:"except when the escape key is pressed"}),")"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"onChange"})," callback function returns the new value of the input when it changes"]})]}),Object(a.jsx)("p",{className:"lead",children:"EditText props"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"type"})," (default: 'text') can be set to a DOM input text type (e.g. 'email', 'tel', etc.)"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"inline"})," (default: false) displays the input box as an inline component"]})]}),Object(a.jsx)("p",{className:"lead",children:"EditTextarea props"}),Object(a.jsx)("ul",{children:Object(a.jsxs)("li",{children:[Object(a.jsx)("b",{children:"rows"})," (default: 3) sets the number of visible rows"]})}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"row mt-3",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h4",{children:"Example"}),Object(a.jsx)(te.a,{language:"javascript",showLineNumbers:!0,style:ne.a,children:ae[2]})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h4",{children:"Output"}),Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{style:{whiteSpace:"nowrap"},children:[Object(a.jsx)("strong",{children:Object(a.jsxs)("label",{className:"mr-2",children:["Full Name"," ",Object(a.jsx)("small",{className:"text-muted",children:"(read-only)"}),":"," "]})}),Object(a.jsx)(G,{id:"fullName",name:"fullName",defaultValue:"James Smith",inline:!0,readonly:!0})]}),Object(a.jsxs)("div",{style:{whiteSpace:"nowrap"},children:[Object(a.jsx)("strong",{children:Object(a.jsx)("label",{className:"mr-2",children:"Email Address: "})}),Object(a.jsx)(G,{name:"age",type:"email",style:{width:"200px"},defaultValue:"james.smith@domain.com",inline:!0})]}),Object(a.jsxs)("div",{style:{whiteSpace:"nowrap"},children:[Object(a.jsx)("strong",{children:Object(a.jsx)("label",{className:"mr-2",children:"Score: "})}),Object(a.jsx)(G,{name:"age",type:"number",style:{width:"200px"},defaultValue:"25000",inline:!0})]}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)("strong",{children:Object(a.jsxs)("label",{className:"mr-2",style:{paddingTop:"2px"},children:["Description:"," "]})}),Object(a.jsx)(Q,{name:"description",rows:4,style:{paddingTop:0},placeholder:"Enter a description"})]})]})})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Custom Styling"}),Object(a.jsxs)("div",{className:"row mt-3",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h4",{children:"Example"}),Object(a.jsx)(te.a,{language:"javascript",showLineNumbers:!0,style:ne.a,children:ae[1]})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h4",{children:"Output"}),Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)(G,{name:"textbox1",style:{border:"1px solid #999"},defaultValue:"Click me to edit my text"}),Object(a.jsx)("br",{}),Object(a.jsx)(G,{name:"textbox2",style:{padding:"10px",fontSize:"36px"},defaultValue:"Click me to edit my text"}),Object(a.jsx)("br",{}),Object(a.jsx)(G,{name:"textbox3",style:{padding:"15px",fontSize:"24px",backgroundColor:"#EEE"},defaultValue:"Click me to edit my text"}),Object(a.jsx)("br",{}),Object(a.jsx)(G,{name:"textbox4",style:{padding:"15px",fontSize:"24px",color:"#FFF",backgroundColor:"#000"},defaultValue:"Click me to edit my text"}),Object(a.jsx)("br",{}),Object(a.jsx)(Q,{name:"textarea1",rows:7,defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non porta massa, a interdum turpis. In imperdiet tincidunt justo nec maximus. Aliquam tempus interdum orci eget rhoncus. Cras consectetur elit quam. Aliquam ante massa, pulvinar quis tortor non, rhoncus facilisis nisi. Nam at sapien porta, congue sapien porta, suscipit dolor. Maecenas vitae efficitur neque. Donec auctor tortor in ornare convallis. Etiam venenatis ex nisi, eu commodo risus dignissim ac. Suspendisse potenti. Integer hendrerit erat dapibus orci luctus, non malesuada est ullamcorper. Vivamus mattis magna ipsum, id lobortis justo aliquet at. ",style:{fontSize:"16px"}})]})})]})]}),Object(a.jsx)("span",{id:"callbacks"}),Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Callback Usage"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"onSave"})," callback function triggers when the input field is blurred or loses focus (",Object(a.jsx)("em",{children:"except when the escape key is pressed"}),")"]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"onChange"})," callback function triggers when the text input value is changed"]}),Object(a.jsxs)("div",{className:"row mt-3",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h4",{children:"Example"}),Object(a.jsx)(te.a,{language:"javascript",showLineNumbers:!0,style:ne.a,children:ae[3]})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h4",{children:"Output"}),Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)(G,{name:"textbox",style:{fontSize:"16px",border:"1px solid #ccc"},value:n,onChange:r,onSave:u}),Object(a.jsxs)("p",{style:{paddingLeft:"5px",marginBottom:"5px"},children:[Object(a.jsx)("b",{children:"Value:"})," ",n]}),Object(a.jsx)("button",{onClick:function(){return r("")},children:"Clear Input"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(Q,{name:"textarea",style:{fontSize:"16px",border:"1px solid #ccc"},value:o,onChange:d,onSave:u}),Object(a.jsxs)("p",{style:{paddingLeft:"5px",marginBottom:"5px"},children:[Object(a.jsx)("b",{children:"Value:"})," ",o]}),Object(a.jsx)("button",{onClick:function(){return d("")},children:"Clear Input"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(G,{name:"textbox1",style:{fontSize:"16px",border:"1px solid #ccc"},onSave:u,placeholder:"This is a uncontrolled component"}),Object(a.jsx)("br",{}),Object(a.jsx)(Q,{name:"textarea1",style:{fontSize:"16px",border:"1px solid #ccc"},onSave:u,placeholder:"This is a uncontrolled text area component"})]})})]})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"20px",paddingTop:"15px"},children:Object(a.jsxs)("h6",{style:{fontWeight:300},children:["Please contact ",Object(a.jsx)("a",{href:"https://brianmin.tech#contact",children:"Brian Min"})," ","for more information"]})})]})};i.a.render(Object(a.jsx)(re,{}),document.getElementById("root"))},44:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){}},[[295,1,2]]]);
//# sourceMappingURL=main.f2694fbd.chunk.js.map