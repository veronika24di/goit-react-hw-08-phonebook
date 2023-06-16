"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[670],{2625:function(e,n,i){i.d(n,{AV:function(){return t},XQ:function(){return a},Yq:function(){return l}});var r=i(6992),t=Object.freeze(["base","sm","md","lg","xl","2xl"]);function a(e,n){return Array.isArray(e)?e.map((function(e){return null===e?null:n(e)})):(0,r.Kn)(e)?Object.keys(e).reduce((function(i,r){return i[r]=n(e[r]),i}),{}):null!=e?n(e):null}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i={};return e.forEach((function(e,r){var t=n[r];null!=e&&(i[t]=e)})),i}},4224:function(e,n,i){i.d(n,{z:function(){return N}});var r=i(4925),t=i(1413),a=i(9439),l=i(2791);var s=(0,i(9886).k)({strict:!1,name:"ButtonGroupContext"}),o=(0,a.Z)(s,2),c=(o[0],o[1]),d=i(2503),u=i(6992),f=i(3329),m=["children","className"];function v(e){var n=e.children,i=e.className,a=(0,r.Z)(e,m),s=(0,l.isValidElement)(n)?(0,l.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,u.cx)("chakra-button__icon",i);return(0,f.jsx)(d.m.span,(0,t.Z)((0,t.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:o,children:s}))}v.displayName="ButtonIcon";var h=i(4942),p=i(3204),g=["label","placement","spacing","children","className","__css"];function x(e){var n=e.label,i=e.placement,a=e.spacing,s=void 0===a?"0.5rem":a,o=e.children,c=void 0===o?(0,f.jsx)(p.$,{color:"currentColor",width:"1em",height:"1em"}):o,m=e.className,v=e.__css,x=(0,r.Z)(e,g),b=(0,u.cx)("chakra-button__spinner",m),y="start"===i?"marginEnd":"marginStart",Z=(0,l.useMemo)((function(){var e;return(0,t.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,h.Z)(e,y,n?s:0),(0,h.Z)(e,"fontSize","1em"),(0,h.Z)(e,"lineHeight","normal"),e),v)}),[v,n,y,s]);return(0,f.jsx)(d.m.div,(0,t.Z)((0,t.Z)({className:b},x),{},{__css:Z,children:c}))}x.displayName="ButtonSpinner";var b=i(4591),y=i(7872),Z=i(581),_=i(2996),k=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],N=(0,y.G)((function(e,n){var i=c(),s=(0,Z.mq)("Button",(0,t.Z)((0,t.Z)({},i),e)),o=(0,_.Lr)(e),m=o.isDisabled,v=void 0===m?null==i?void 0:i.isDisabled:m,h=o.isLoading,p=o.isActive,g=o.children,y=o.leftIcon,N=o.rightIcon,j=o.loadingText,C=o.iconSpacing,q=void 0===C?"0.5rem":C,S=o.type,w=o.spinner,B=o.spinnerPlacement,F=void 0===B?"start":B,R=o.className,P=o.as,T=(0,r.Z)(o,k),O=(0,l.useMemo)((function(){var e=(0,t.Z)((0,t.Z)({},null==s?void 0:s._focus),{},{zIndex:1});return(0,t.Z)((0,t.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},s),!!i&&{_focus:e})}),[s,i]),W=function(e){var n=(0,l.useState)(!e),i=(0,a.Z)(n,2),r=i[0],t=i[1];return{ref:(0,l.useCallback)((function(e){e&&t("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(P),D=W.ref,H=W.type,L={rightIcon:N,leftIcon:y,iconSpacing:q,children:g};return(0,f.jsxs)(d.m.button,(0,t.Z)((0,t.Z)({ref:(0,b.qq)(n,D),as:P,type:null!=S?S:H,"data-active":(0,u.PB)(p),"data-loading":(0,u.PB)(h),__css:O,className:(0,u.cx)("chakra-button",R)},T),{},{disabled:v||h,children:[h&&"start"===F&&(0,f.jsx)(x,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:q,children:w}),h?j||(0,f.jsx)(d.m.span,{opacity:0,children:(0,f.jsx)(I,(0,t.Z)({},L))}):(0,f.jsx)(I,(0,t.Z)({},L)),h&&"end"===F&&(0,f.jsx)(x,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:q,children:w})]}))}));function I(e){var n=e.leftIcon,i=e.rightIcon,r=e.children,t=e.iconSpacing;return(0,f.jsxs)(f.Fragment,{children:[n&&(0,f.jsx)(v,{marginEnd:t,children:n}),r,i&&(0,f.jsx)(v,{marginStart:t,children:i})]})}N.displayName="Button"},2392:function(e,n,i){i.d(n,{NI:function(){return I},NJ:function(){return N},e:function(){return y}});var r=i(1413),t=i(4925),a=i(9439),l=i(9886),s=i(4591),o=i(7872),c=i(581),d=i(2996),u=i(2503),f=i(6992),m=i(2791),v=i(3329),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],g=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(g,2),b=x[0],y=x[1],Z=(0,l.k)({strict:!1,name:"FormControlContext"}),_=(0,a.Z)(Z,2),k=_[0],N=_[1];var I=(0,o.G)((function(e,n){var i=(0,c.jC)("Form",e),l=function(e){var n=e.id,i=e.isRequired,l=e.isInvalid,o=e.isDisabled,c=e.isReadOnly,d=(0,t.Z)(e,h),u=(0,m.useId)(),v=n||"field-".concat(u),p="".concat(v,"-label"),g="".concat(v,"-feedback"),x="".concat(v,"-helptext"),b=(0,m.useState)(!1),y=(0,a.Z)(b,2),Z=y[0],_=y[1],k=(0,m.useState)(!1),N=(0,a.Z)(k,2),I=N[0],j=N[1],C=(0,m.useState)(!1),q=(0,a.Z)(C,2),S=q[0],w=q[1],B=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)}))})}),[x]),F=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,f.PB)(S),"data-disabled":(0,f.PB)(o),"data-invalid":(0,f.PB)(l),"data-readonly":(0,f.PB)(c),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,o,S,l,c,p]),R=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:g},e),{},{ref:(0,s.lq)(n,(function(e){e&&_(!0)})),"aria-live":"polite"})}),[g]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),d),{},{ref:n,role:"group"})}),[d]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!l,isReadOnly:!!c,isDisabled:!!o,isFocused:!!S,onFocus:function(){return w(!0)},onBlur:function(){return w(!1)},hasFeedbackText:Z,setHasFeedbackText:_,hasHelpText:I,setHasHelpText:j,id:v,labelId:p,feedbackId:g,helpTextId:x,htmlProps:d,getHelpTextProps:B,getErrorMessageProps:R,getRootProps:P,getLabelProps:F,getRequiredIndicatorProps:T}}((0,d.Lr)(e)),o=l.getRootProps,g=(l.htmlProps,(0,t.Z)(l,p)),x=(0,f.cx)("chakra-form-control",e.className);return(0,v.jsx)(k,{value:g,children:(0,v.jsx)(b,{value:i,children:(0,v.jsx)(u.m.div,(0,r.Z)((0,r.Z)({},o({},n)),{},{className:x,__css:i.container}))})})}));I.displayName="FormControl",(0,o.G)((function(e,n){var i=N(),t=y(),a=(0,f.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(u.m.div,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:t.helperText,className:a}))})).displayName="FormHelperText"},5442:function(e,n,i){i.d(n,{I:function(){return p}});var r=i(1413),t=i(4925),a=i(2392),l=i(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function c(e){var n=function(e){var n,i,s,c=(0,a.NJ)(),d=e.id,u=e.disabled,f=e.readOnly,m=e.required,v=e.isRequired,h=e.isInvalid,p=e.isReadOnly,g=e.isDisabled,x=e.onFocus,b=e.onBlur,y=(0,t.Z)(e,o),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==c?void 0:c.hasFeedbackText)&&(null==c?void 0:c.isInvalid)&&Z.push(c.feedbackId);(null==c?void 0:c.hasHelpText)&&Z.push(c.helpTextId);return(0,r.Z)((0,r.Z)({},y),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=d?d:null==c?void 0:c.id,isDisabled:null!=(n=null!=u?u:g)?n:null==c?void 0:c.isDisabled,isReadOnly:null!=(i=null!=f?f:p)?i:null==c?void 0:c.isReadOnly,isRequired:null!=(s=null!=m?m:v)?s:null==c?void 0:c.isRequired,isInvalid:null!=h?h:null==c?void 0:c.isInvalid,onFocus:(0,l.v0)(null==c?void 0:c.onFocus,x),onBlur:(0,l.v0)(null==c?void 0:c.onBlur,b)})}(e),i=n.isDisabled,c=n.isInvalid,d=n.isReadOnly,u=n.isRequired,f=(0,t.Z)(n,s);return(0,r.Z)((0,r.Z)({},f),{},{disabled:i,readOnly:d,required:u,"aria-invalid":(0,l.Qm)(c),"aria-required":(0,l.Qm)(u),"aria-readonly":(0,l.Qm)(d)})}var d=i(7872),u=i(581),f=i(2996),m=i(2503),v=i(3329),h=["htmlSize"],p=(0,d.G)((function(e,n){var i=e.htmlSize,a=(0,t.Z)(e,h),s=(0,u.jC)("Input",a),o=c((0,f.Lr)(a)),d=(0,l.cx)("chakra-input",e.className);return(0,v.jsx)(m.m.input,(0,r.Z)((0,r.Z)({size:i},o),{},{__css:s.field,ref:n,className:d}))}));p.displayName="Input",p.id="Input"},5946:function(e,n,i){i.d(n,{X:function(){return f}});var r=i(1413),t=i(4925),a=i(7872),l=i(581),s=i(2996),o=i(2503),c=i(6992),d=i(3329),u=["className"],f=(0,a.G)((function(e,n){var i=(0,l.mq)("Heading",e),a=(0,s.Lr)(e),f=(a.className,(0,t.Z)(a,u));return(0,d.jsx)(o.m.h2,(0,r.Z)((0,r.Z)({ref:n,className:(0,c.cx)("chakra-heading",e.className)},f),{},{__css:i}))}));f.displayName="Heading"},176:function(e,n,i){i.d(n,{k:function(){return c}});var r=i(1413),t=i(4925),a=i(7872),l=i(2503),s=i(3329),o=["direction","align","justify","wrap","basis","grow","shrink"],c=(0,a.G)((function(e,n){var i=e.direction,a=e.align,c=e.justify,d=e.wrap,u=e.basis,f=e.grow,m=e.shrink,v=(0,t.Z)(e,o),h={display:"flex",flexDirection:i,alignItems:a,justifyContent:c,flexWrap:d,flexBasis:u,flexGrow:f,flexShrink:m};return(0,s.jsx)(l.m.div,(0,r.Z)({ref:n,__css:h},v))}));c.displayName="Flex"},5241:function(e,n,i){i.d(n,{K:function(){return v}});var r=i(1413),t=i(4925),a=i(2503),l=i(3329),s=function(e){return(0,l.jsx)(a.m.div,(0,r.Z)((0,r.Z)({className:"chakra-stack__item"},e),{},{__css:(0,r.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};s.displayName="StackItem";var o=i(2625);var c=i(7200),d=i(6992),u=i(7872),f=i(2791),m=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],v=(0,u.G)((function(e,n){var i=e.isInline,u=e.direction,v=e.align,h=e.justify,p=e.spacing,g=void 0===p?"0.5rem":p,x=e.wrap,b=e.children,y=e.divider,Z=e.className,_=e.shouldWrapChildren,k=(0,t.Z)(e,m),N=i?"row":null!=u?u:"column",I=(0,f.useMemo)((function(){return function(e){var n=e.spacing,i=e.direction,r={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,o.XQ)(i,(function(e){return r[e]}))}}({spacing:g,direction:N})}),[g,N]),j=!!y,C=!_&&!j,q=(0,f.useMemo)((function(){var e=(0,c.W)(b);return C?e:e.map((function(n,i){var r="undefined"!==typeof n.key?n.key:i,t=i+1===e.length,a=_?(0,l.jsx)(s,{children:n},r):n;if(!j)return a;var o=(0,f.cloneElement)(y,{__css:I}),c=t?null:o;return(0,l.jsxs)(f.Fragment,{children:[a,c]},r)}))}),[y,I,j,C,_,b]),S=(0,d.cx)("chakra-stack",Z);return(0,l.jsx)(a.m.div,(0,r.Z)((0,r.Z)({ref:n,display:"flex",alignItems:v,justifyContent:h,flexDirection:N,flexWrap:x,gap:j?void 0:g,className:S},k),{},{children:q}))}));v.displayName="Stack"},7200:function(e,n,i){i.d(n,{W:function(){return t}});var r=i(2791);function t(e){return r.Children.toArray(e).filter((function(e){return(0,r.isValidElement)(e)}))}},4591:function(e,n,i){i.d(n,{lq:function(){return a},qq:function(){return l}});var r=i(2791);function t(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(i){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function a(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(e){n.forEach((function(n){t(n,e)}))}}function l(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(0,r.useMemo)((function(){return a.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=670.a7a632ab.chunk.js.map