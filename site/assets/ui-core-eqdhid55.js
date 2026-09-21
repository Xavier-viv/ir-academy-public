import{r as s,j as f,a as Mt,R as we,b as Pt}from"./react-core-B3Hv0cOb.js";import{u as Rt,o as At,s as Tt,f as Ot,a as St,b as Dt,h as Nt,l as Lt,d as _t,e as It,R as jt}from"./vendor-DNPSY8f6.js";function M(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}function he(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function be(...e){return t=>{let n=!1;const o=e.map(r=>{const a=he(r,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let r=0;r<o.length;r++){const a=o[r];typeof a=="function"?a():he(e[r],null)}}}}function R(...e){return s.useCallback(be(...e),e)}function Ft(e,t){const n=s.createContext(t),o=a=>{const{children:c,...i}=a,l=s.useMemo(()=>i,Object.values(i));return f.jsx(n.Provider,{value:l,children:c})};o.displayName=e+"Provider";function r(a){const c=s.useContext(n);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[o,r]}function ne(e,t=[]){let n=[];function o(a,c){const i=s.createContext(c),l=n.length;n=[...n,c];const u=h=>{const{scope:v,children:m,...g}=h,y=v?.[e]?.[l]||i,k=s.useMemo(()=>g,Object.values(g));return f.jsx(y.Provider,{value:k,children:m})};u.displayName=a+"Provider";function d(h,v){const m=v?.[e]?.[l]||i,g=s.useContext(m);if(g)return g;if(c!==void 0)return c;throw new Error(`\`${h}\` must be used within \`${a}\``)}return[u,d]}const r=()=>{const a=n.map(c=>s.createContext(c));return function(i){const l=i?.[e]||a;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return r.scopeName=e,[o,Ht(r,...t)]}function Ht(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const c=o.reduce((i,{useScope:l,scopeName:u})=>{const h=l(a)[`__scope${u}`];return{...i,...h}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function Me(e){const t=zt(e),n=s.forwardRef((o,r)=>{const{children:a,...c}=o,i=s.Children.toArray(a),l=i.find(Wt);if(l){const u=l.props.children,d=i.map(h=>h===l?s.Children.count(u)>1?s.Children.only(null):s.isValidElement(u)?u.props.children:null:h);return f.jsx(t,{...c,ref:r,children:s.isValidElement(u)?s.cloneElement(u,void 0,d):null})}return f.jsx(t,{...c,ref:r,children:a})});return n.displayName=`${e}.Slot`,n}function zt(e){const t=s.forwardRef((n,o)=>{const{children:r,...a}=n;if(s.isValidElement(r)){const c=Ut(r),i=qt(a,r.props);return r.type!==s.Fragment&&(i.ref=o?be(o,c):c),s.cloneElement(r,i)}return s.Children.count(r)>1?s.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Pe=Symbol("radix.slottable");function $t(e){const t=({children:n})=>f.jsx(f.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Pe,t}function Wt(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Pe}function qt(e,t){const n={...t};for(const o in t){const r=e[o],a=t[o];/^on[A-Z]/.test(o)?r&&a?n[o]=(...i)=>{const l=a(...i);return r(...i),l}:r&&(n[o]=r):o==="style"?n[o]={...r,...a}:o==="className"&&(n[o]=[r,a].filter(Boolean).join(" "))}return{...e,...n}}function Ut(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Bt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],P=Bt.reduce((e,t)=>{const n=Me(`Primitive.${t}`),o=s.forwardRef((r,a)=>{const{asChild:c,...i}=r,l=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),f.jsx(l,{...i,ref:a})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function Vt(e,t){e&&Mt.flushSync(()=>e.dispatchEvent(t))}function _(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...n)=>t.current?.(...n),[])}function Gt(e,t=globalThis?.document){const n=_(e);s.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[n,t])}var Kt="DismissableLayer",ee="dismissableLayer.update",Yt="dismissableLayer.pointerDownOutside",Zt="dismissableLayer.focusOutside",ye,Re=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),oe=s.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:a,onInteractOutside:c,onDismiss:i,...l}=e,u=s.useContext(Re),[d,h]=s.useState(null),v=d?.ownerDocument??globalThis?.document,[,m]=s.useState({}),g=R(t,C=>h(C)),y=Array.from(u.layers),[k]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),x=y.indexOf(k),b=d?y.indexOf(d):-1,w=u.layersWithOutsidePointerEventsDisabled.size>0,E=b>=x,T=Jt(C=>{const D=C.target,$=[...u.branches].some(F=>F.contains(D));!E||$||(r?.(C),c?.(C),C.defaultPrevented||i?.())},v),j=en(C=>{const D=C.target;[...u.branches].some(F=>F.contains(D))||(a?.(C),c?.(C),C.defaultPrevented||i?.())},v);return Gt(C=>{b===u.layers.size-1&&(o?.(C),!C.defaultPrevented&&i&&(C.preventDefault(),i()))},v),s.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(ye=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),ve(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=ye)}},[d,v,n,u]),s.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),ve())},[d,u]),s.useEffect(()=>{const C=()=>m({});return document.addEventListener(ee,C),()=>document.removeEventListener(ee,C)},[]),f.jsx(P.div,{...l,ref:g,style:{pointerEvents:w?E?"auto":"none":void 0,...e.style},onFocusCapture:M(e.onFocusCapture,j.onFocusCapture),onBlurCapture:M(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:M(e.onPointerDownCapture,T.onPointerDownCapture)})});oe.displayName=Kt;var Xt="DismissableLayerBranch",Qt=s.forwardRef((e,t)=>{const n=s.useContext(Re),o=s.useRef(null),r=R(t,o);return s.useEffect(()=>{const a=o.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),f.jsx(P.div,{...e,ref:r})});Qt.displayName=Xt;function Jt(e,t=globalThis?.document){const n=_(e),o=s.useRef(!1),r=s.useRef(()=>{});return s.useEffect(()=>{const a=i=>{if(i.target&&!o.current){let l=function(){Ae(Yt,n,u,{discrete:!0})};const u={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=l,t.addEventListener("click",r.current,{once:!0})):l()}else t.removeEventListener("click",r.current);o.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",a),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function en(e,t=globalThis?.document){const n=_(e),o=s.useRef(!1);return s.useEffect(()=>{const r=a=>{a.target&&!o.current&&Ae(Zt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function ve(){const e=new CustomEvent(ee);document.dispatchEvent(e)}function Ae(e,t,n,{discrete:o}){const r=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?Vt(r,a):r.dispatchEvent(a)}var S=globalThis?.document?s.useLayoutEffect:()=>{},tn=we[" useId ".trim().toString()]||(()=>{}),nn=0;function Z(e){const[t,n]=s.useState(tn());return S(()=>{n(o=>o??String(nn++))},[e]),e||(t?`radix-${t}`:"")}var on="Arrow",Te=s.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...a}=e;return f.jsx(P.svg,{...a,ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:f.jsx("polygon",{points:"0,0 30,0 15,10"})})});Te.displayName=on;var rn=Te;function an(e){const[t,n]=s.useState(void 0);return S(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const a=r[0];let c,i;if("borderBoxSize"in a){const l=a.borderBoxSize,u=Array.isArray(l)?l[0]:l;c=u.inlineSize,i=u.blockSize}else c=e.offsetWidth,i=e.offsetHeight;n({width:c,height:i})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}var Oe="Popper",[Se,De]=ne(Oe),[fo,Ne]=Se(Oe),Le="PopperAnchor",_e=s.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,a=Ne(Le,n),c=s.useRef(null),i=R(t,c),l=s.useRef(null);return s.useEffect(()=>{const u=l.current;l.current=o?.current||c.current,u!==l.current&&a.onAnchorChange(l.current)}),o?null:f.jsx(P.div,{...r,ref:i})});_e.displayName=Le;var re="PopperContent",[sn,cn]=Se(re),Ie=s.forwardRef((e,t)=>{const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:a="center",alignOffset:c=0,arrowPadding:i=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:h="partial",hideWhenDetached:v=!1,updatePositionStrategy:m="optimized",onPlaced:g,...y}=e,k=Ne(re,n),[x,b]=s.useState(null),w=R(t,H=>b(H)),[E,T]=s.useState(null),j=an(E),C=j?.width??0,D=j?.height??0,$=o+(a!=="center"?"-"+a:""),F=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},le=Array.isArray(u)?u:[u],pt=le.length>0,W={padding:F,boundary:le.filter(un),altBoundary:pt},{refs:ft,floatingStyles:ue,placement:ht,isPositioned:q,middlewareData:L}=Rt({strategy:"fixed",placement:$,whileElementsMounted:(...H)=>_t(...H,{animationFrame:m==="always"}),elements:{reference:k.anchor},middleware:[At({mainAxis:r+D,alignmentAxis:c}),l&&Tt({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?Lt():void 0,...W}),l&&Ot({...W}),St({...W,apply:({elements:H,rects:fe,availableWidth:Ct,availableHeight:Et})=>{const{width:wt,height:bt}=fe.reference,U=H.floating.style;U.setProperty("--radix-popper-available-width",`${Ct}px`),U.setProperty("--radix-popper-available-height",`${Et}px`),U.setProperty("--radix-popper-anchor-width",`${wt}px`),U.setProperty("--radix-popper-anchor-height",`${bt}px`)}}),E&&Dt({element:E,padding:i}),dn({arrowWidth:C,arrowHeight:D}),v&&Nt({strategy:"referenceHidden",...W})]}),[de,yt]=He(ht),pe=_(g);S(()=>{q&&pe?.()},[q,pe]);const vt=L.arrow?.x,mt=L.arrow?.y,gt=L.arrow?.centerOffset!==0,[xt,kt]=s.useState();return S(()=>{x&&kt(window.getComputedStyle(x).zIndex)},[x]),f.jsx("div",{ref:ft.setFloating,"data-radix-popper-content-wrapper":"",style:{...ue,transform:q?ue.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:xt,"--radix-popper-transform-origin":[L.transformOrigin?.x,L.transformOrigin?.y].join(" "),...L.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:f.jsx(sn,{scope:n,placedSide:de,onArrowChange:T,arrowX:vt,arrowY:mt,shouldHideArrow:gt,children:f.jsx(P.div,{"data-side":de,"data-align":yt,...y,ref:w,style:{...y.style,animation:q?void 0:"none"}})})})});Ie.displayName=re;var je="PopperArrow",ln={top:"bottom",right:"left",bottom:"top",left:"right"},Fe=s.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,a=cn(je,o),c=ln[a.placedSide];return f.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[c]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:f.jsx(rn,{...r,ref:n,style:{...r.style,display:"block"}})})});Fe.displayName=je;function un(e){return e!==null}var dn=e=>({name:"transformOrigin",options:e,fn(t){const{placement:n,rects:o,middlewareData:r}=t,c=r.arrow?.centerOffset!==0,i=c?0:e.arrowWidth,l=c?0:e.arrowHeight,[u,d]=He(n),h={start:"0%",center:"50%",end:"100%"}[d],v=(r.arrow?.x??0)+i/2,m=(r.arrow?.y??0)+l/2;let g="",y="";return u==="bottom"?(g=c?h:`${v}px`,y=`${-l}px`):u==="top"?(g=c?h:`${v}px`,y=`${o.floating.height+l}px`):u==="right"?(g=`${-l}px`,y=c?h:`${m}px`):u==="left"&&(g=`${o.floating.width+l}px`,y=c?h:`${m}px`),{data:{x:g,y}}}});function He(e){const[t,n="center"]=e.split("-");return[t,n]}var pn=_e,fn=Ie,hn=Fe,yn="Portal",ze=s.forwardRef((e,t)=>{const{container:n,...o}=e,[r,a]=s.useState(!1);S(()=>a(!0),[]);const c=n||r&&globalThis?.document?.body;return c?Pt.createPortal(f.jsx(P.div,{...o,ref:t}),c):null});ze.displayName=yn;function vn(e,t){return s.useReducer((n,o)=>t[n][o]??n,e)}var z=e=>{const{present:t,children:n}=e,o=mn(t),r=typeof n=="function"?n({present:o.isPresent}):s.Children.only(n),a=R(o.ref,gn(r));return typeof n=="function"||o.isPresent?s.cloneElement(r,{ref:a}):null};z.displayName="Presence";function mn(e){const[t,n]=s.useState(),o=s.useRef(null),r=s.useRef(e),a=s.useRef("none"),c=e?"mounted":"unmounted",[i,l]=vn(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const u=B(o.current);a.current=i==="mounted"?u:"none"},[i]),S(()=>{const u=o.current,d=r.current;if(d!==e){const v=a.current,m=B(u);e?l("MOUNT"):m==="none"||u?.display==="none"?l("UNMOUNT"):l(d&&v!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),S(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,h=m=>{const y=B(o.current).includes(CSS.escape(m.animationName));if(m.target===t&&y&&(l("ANIMATION_END"),!r.current)){const k=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=k)})}},v=m=>{m.target===t&&(a.current=B(o.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(u=>{o.current=u?getComputedStyle(u):null,n(u)},[])}}function B(e){return e?.animationName||"none"}function gn(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var xn=we[" useInsertionEffect ".trim().toString()]||S;function kn({prop:e,defaultProp:t,onChange:n=()=>{},caller:o}){const[r,a,c]=Cn({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r;{const d=s.useRef(e!==void 0);s.useEffect(()=>{const h=d.current;h!==i&&console.warn(`${o} is changing from ${h?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=i},[i,o])}const u=s.useCallback(d=>{if(i){const h=En(d)?d(e):d;h!==e&&c.current?.(h)}else a(d)},[i,e,a,c]);return[l,u]}function Cn({defaultProp:e,onChange:t}){const[n,o]=s.useState(e),r=s.useRef(n),a=s.useRef(t);return xn(()=>{a.current=t},[t]),s.useEffect(()=>{r.current!==n&&(a.current?.(n),r.current=n)},[n,r]),[n,o,a]}function En(e){return typeof e=="function"}var wn=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),bn="VisuallyHidden",$e=s.forwardRef((e,t)=>f.jsx(P.span,{...e,ref:t,style:{...wn,...e.style}}));$e.displayName=bn;var Mn=$e,[G]=ne("Tooltip",[De]),ae=De(),We="TooltipProvider",Pn=700,me="tooltip.open",[Rn,qe]=G(We),Ue=e=>{const{__scopeTooltip:t,delayDuration:n=Pn,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:a}=e,c=s.useRef(!0),i=s.useRef(!1),l=s.useRef(0);return s.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),f.jsx(Rn,{scope:t,isOpenDelayedRef:c,delayDuration:n,onOpen:s.useCallback(()=>{window.clearTimeout(l.current),c.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>c.current=!0,o)},[o]),isPointerInTransitRef:i,onPointerInTransitChange:s.useCallback(u=>{i.current=u},[]),disableHoverableContent:r,children:a})};Ue.displayName=We;var Be="Tooltip",[ho,K]=G(Be),te="TooltipTrigger",An=s.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=K(te,n),a=qe(te,n),c=ae(n),i=s.useRef(null),l=R(t,i,r.onTriggerChange),u=s.useRef(!1),d=s.useRef(!1),h=s.useCallback(()=>u.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),f.jsx(pn,{asChild:!0,...c,children:f.jsx(P.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...o,ref:l,onPointerMove:M(e.onPointerMove,v=>{v.pointerType!=="touch"&&!d.current&&!a.isPointerInTransitRef.current&&(r.onTriggerEnter(),d.current=!0)}),onPointerLeave:M(e.onPointerLeave,()=>{r.onTriggerLeave(),d.current=!1}),onPointerDown:M(e.onPointerDown,()=>{r.open&&r.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:M(e.onFocus,()=>{u.current||r.onOpen()}),onBlur:M(e.onBlur,r.onClose),onClick:M(e.onClick,r.onClose)})})});An.displayName=te;var Tn="TooltipPortal",[yo,On]=G(Tn,{forceMount:void 0}),I="TooltipContent",Sn=s.forwardRef((e,t)=>{const n=On(I,e.__scopeTooltip),{forceMount:o=n.forceMount,side:r="top",...a}=e,c=K(I,e.__scopeTooltip);return f.jsx(z,{present:o||c.open,children:c.disableHoverableContent?f.jsx(Ve,{side:r,...a,ref:t}):f.jsx(Dn,{side:r,...a,ref:t})})}),Dn=s.forwardRef((e,t)=>{const n=K(I,e.__scopeTooltip),o=qe(I,e.__scopeTooltip),r=s.useRef(null),a=R(t,r),[c,i]=s.useState(null),{trigger:l,onClose:u}=n,d=r.current,{onPointerInTransitChange:h}=o,v=s.useCallback(()=>{i(null),h(!1)},[h]),m=s.useCallback((g,y)=>{const k=g.currentTarget,x={x:g.clientX,y:g.clientY},b=jn(x,k.getBoundingClientRect()),w=Fn(x,b),E=Hn(y.getBoundingClientRect()),T=$n([...w,...E]);i(T),h(!0)},[h]);return s.useEffect(()=>()=>v(),[v]),s.useEffect(()=>{if(l&&d){const g=k=>m(k,d),y=k=>m(k,l);return l.addEventListener("pointerleave",g),d.addEventListener("pointerleave",y),()=>{l.removeEventListener("pointerleave",g),d.removeEventListener("pointerleave",y)}}},[l,d,m,v]),s.useEffect(()=>{if(c){const g=y=>{const k=y.target,x={x:y.clientX,y:y.clientY},b=l?.contains(k)||d?.contains(k),w=!zn(x,c);b?v():w&&(v(),u())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[l,d,c,u,v]),f.jsx(Ve,{...e,ref:a})}),[Nn,Ln]=G(Be,{isInside:!1}),_n=$t("TooltipContent"),Ve=s.forwardRef((e,t)=>{const{__scopeTooltip:n,children:o,"aria-label":r,onEscapeKeyDown:a,onPointerDownOutside:c,...i}=e,l=K(I,n),u=ae(n),{onClose:d}=l;return s.useEffect(()=>(document.addEventListener(me,d),()=>document.removeEventListener(me,d)),[d]),s.useEffect(()=>{if(l.trigger){const h=v=>{v.target?.contains(l.trigger)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[l.trigger,d]),f.jsx(oe,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:h=>h.preventDefault(),onDismiss:d,children:f.jsxs(fn,{"data-state":l.stateAttribute,...u,...i,ref:t,style:{...i.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[f.jsx(_n,{children:o}),f.jsx(Nn,{scope:n,isInside:!0,children:f.jsx(Mn,{id:l.contentId,role:"tooltip",children:r||o})})]})})});Sn.displayName=I;var Ge="TooltipArrow",In=s.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=ae(n);return Ln(Ge,n).isInside?null:f.jsx(hn,{...r,...o,ref:t})});In.displayName=Ge;function jn(e,t){const n=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,o,r,a)){case a:return"left";case r:return"right";case n:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Fn(e,t,n=5){const o=[];switch(t){case"top":o.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":o.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":o.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":o.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return o}function Hn(e){const{top:t,right:n,bottom:o,left:r}=e;return[{x:r,y:t},{x:n,y:t},{x:n,y:o},{x:r,y:o}]}function zn(e,t){const{x:n,y:o}=e;let r=!1;for(let a=0,c=t.length-1;a<t.length;c=a++){const i=t[a],l=t[c],u=i.x,d=i.y,h=l.x,v=l.y;d>o!=v>o&&n<(h-u)*(o-d)/(v-d)+u&&(r=!r)}return r}function $n(e){const t=e.slice();return t.sort((n,o)=>n.x<o.x?-1:n.x>o.x?1:n.y<o.y?-1:n.y>o.y?1:0),Wn(t)}function Wn(e){if(e.length<=1)return e.slice();const t=[];for(let o=0;o<e.length;o++){const r=e[o];for(;t.length>=2;){const a=t[t.length-1],c=t[t.length-2];if((a.x-c.x)*(r.y-c.y)>=(a.y-c.y)*(r.x-c.x))t.pop();else break}t.push(r)}t.pop();const n=[];for(let o=e.length-1;o>=0;o--){const r=e[o];for(;n.length>=2;){const a=n[n.length-1],c=n[n.length-2];if((a.x-c.x)*(r.y-c.y)>=(a.y-c.y)*(r.x-c.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var vo=Ue;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ke=(...e)=>e.filter((t,n,o)=>!!t&&o.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Un={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:r="",children:a,iconNode:c,...i},l)=>s.createElement("svg",{ref:l,...Un,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:Ke("lucide",r),...i},[...c.map(([u,d])=>s.createElement(u,d)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const n=s.forwardRef(({className:o,...r},a)=>s.createElement(Bn,{ref:a,iconNode:t,className:Ke(`lucide-${qn(e)}`,o),...r}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=p("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=p("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=p("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=p("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=p("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=p("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=p("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=p("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=p("Captions",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=p("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=p("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=p("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=p("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=p("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=p("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=p("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=p("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=p("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=p("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=p("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=p("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=p("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=p("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=p("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=p("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=p("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=p("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=p("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=p("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=p("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=p("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=p("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=p("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=p("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=p("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=p("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=p("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=p("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=p("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=p("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=p("PanelBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=p("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=p("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=p("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=p("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=p("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=p("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=p("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=p("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=p("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=p("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=p("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=p("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=p("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=p("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=p("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=p("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=p("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=p("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=p("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=p("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=p("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=p("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var X="focusScope.autoFocusOnMount",Q="focusScope.autoFocusOnUnmount",ge={bubbles:!1,cancelable:!0},Vn="FocusScope",Ye=s.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:r,onUnmountAutoFocus:a,...c}=e,[i,l]=s.useState(null),u=_(r),d=_(a),h=s.useRef(null),v=R(t,y=>l(y)),m=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(o){let y=function(w){if(m.paused||!i)return;const E=w.target;i.contains(E)?h.current=E:O(h.current,{select:!0})},k=function(w){if(m.paused||!i)return;const E=w.relatedTarget;E!==null&&(i.contains(E)||O(h.current,{select:!0}))},x=function(w){if(document.activeElement===document.body)for(const T of w)T.removedNodes.length>0&&O(i)};document.addEventListener("focusin",y),document.addEventListener("focusout",k);const b=new MutationObserver(x);return i&&b.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",y),document.removeEventListener("focusout",k),b.disconnect()}}},[o,i,m.paused]),s.useEffect(()=>{if(i){ke.add(m);const y=document.activeElement;if(!i.contains(y)){const x=new CustomEvent(X,ge);i.addEventListener(X,u),i.dispatchEvent(x),x.defaultPrevented||(Gn(Qn(Ze(i)),{select:!0}),document.activeElement===y&&O(i))}return()=>{i.removeEventListener(X,u),setTimeout(()=>{const x=new CustomEvent(Q,ge);i.addEventListener(Q,d),i.dispatchEvent(x),x.defaultPrevented||O(y??document.body,{select:!0}),i.removeEventListener(Q,d),ke.remove(m)},0)}}},[i,u,d,m]);const g=s.useCallback(y=>{if(!n&&!o||m.paused)return;const k=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,x=document.activeElement;if(k&&x){const b=y.currentTarget,[w,E]=Kn(b);w&&E?!y.shiftKey&&x===E?(y.preventDefault(),n&&O(w,{select:!0})):y.shiftKey&&x===w&&(y.preventDefault(),n&&O(E,{select:!0})):x===b&&y.preventDefault()}},[n,o,m.paused]);return f.jsx(P.div,{tabIndex:-1,...c,ref:v,onKeyDown:g})});Ye.displayName=Vn;function Gn(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(O(o,{select:t}),document.activeElement!==n)return}function Kn(e){const t=Ze(e),n=xe(t,e),o=xe(t.reverse(),e);return[n,o]}function Ze(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function xe(e,t){for(const n of e)if(!Yn(n,{upTo:t}))return n}function Yn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Zn(e){return e instanceof HTMLInputElement&&"select"in e}function O(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Zn(e)&&t&&e.select()}}var ke=Xn();function Xn(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=Ce(e,t),e.unshift(t)},remove(t){e=Ce(e,t),e[0]?.resume()}}}function Ce(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function Qn(e){return e.filter(t=>t.tagName!=="A")}var J=0;function Jn(){s.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ee()),document.body.insertAdjacentElement("beforeend",e[1]??Ee()),J++,()=>{J===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),J--}},[])}function Ee(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Y="Dialog",[Xe]=ne(Y),[eo,A]=Xe(Y),Qe=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:r,onOpenChange:a,modal:c=!0}=e,i=s.useRef(null),l=s.useRef(null),[u,d]=kn({prop:o,defaultProp:r??!1,onChange:a,caller:Y});return f.jsx(eo,{scope:t,triggerRef:i,contentRef:l,contentId:Z(),titleId:Z(),descriptionId:Z(),open:u,onOpenChange:d,onOpenToggle:s.useCallback(()=>d(h=>!h),[d]),modal:c,children:n})};Qe.displayName=Y;var Je="DialogTrigger",to=s.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=A(Je,n),a=R(t,r.triggerRef);return f.jsx(P.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":ce(r.open),...o,ref:a,onClick:M(e.onClick,r.onOpenToggle)})});to.displayName=Je;var se="DialogPortal",[no,et]=Xe(se,{forceMount:void 0}),tt=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:r}=e,a=A(se,t);return f.jsx(no,{scope:t,forceMount:n,children:s.Children.map(o,c=>f.jsx(z,{present:n||a.open,children:f.jsx(ze,{asChild:!0,container:r,children:c})}))})};tt.displayName=se;var V="DialogOverlay",nt=s.forwardRef((e,t)=>{const n=et(V,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,a=A(V,e.__scopeDialog);return a.modal?f.jsx(z,{present:o||a.open,children:f.jsx(ro,{...r,ref:t})}):null});nt.displayName=V;var oo=Me("DialogOverlay.RemoveScroll"),ro=s.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=A(V,n);return f.jsx(jt,{as:oo,allowPinchZoom:!0,shards:[r.contentRef],children:f.jsx(P.div,{"data-state":ce(r.open),...o,ref:t,style:{pointerEvents:"auto",...o.style}})})}),N="DialogContent",ot=s.forwardRef((e,t)=>{const n=et(N,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,a=A(N,e.__scopeDialog);return f.jsx(z,{present:o||a.open,children:a.modal?f.jsx(ao,{...r,ref:t}):f.jsx(so,{...r,ref:t})})});ot.displayName=N;var ao=s.forwardRef((e,t)=>{const n=A(N,e.__scopeDialog),o=s.useRef(null),r=R(t,n.contentRef,o);return s.useEffect(()=>{const a=o.current;if(a)return It(a)},[]),f.jsx(rt,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:M(e.onCloseAutoFocus,a=>{a.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:M(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,i=c.button===0&&c.ctrlKey===!0;(c.button===2||i)&&a.preventDefault()}),onFocusOutside:M(e.onFocusOutside,a=>a.preventDefault())})}),so=s.forwardRef((e,t)=>{const n=A(N,e.__scopeDialog),o=s.useRef(!1),r=s.useRef(!1);return f.jsx(rt,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{e.onCloseAutoFocus?.(a),a.defaultPrevented||(o.current||n.triggerRef.current?.focus(),a.preventDefault()),o.current=!1,r.current=!1},onInteractOutside:a=>{e.onInteractOutside?.(a),a.defaultPrevented||(o.current=!0,a.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const c=a.target;n.triggerRef.current?.contains(c)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&r.current&&a.preventDefault()}})}),rt=s.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:a,...c}=e,i=A(N,n),l=s.useRef(null),u=R(t,l);return Jn(),f.jsxs(f.Fragment,{children:[f.jsx(Ye,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:a,children:f.jsx(oe,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":ce(i.open),...c,ref:u,onDismiss:()=>i.onOpenChange(!1)})}),f.jsxs(f.Fragment,{children:[f.jsx(io,{titleId:i.titleId}),f.jsx(lo,{contentRef:l,descriptionId:i.descriptionId})]})]})}),ie="DialogTitle",at=s.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=A(ie,n);return f.jsx(P.h2,{id:r.titleId,...o,ref:t})});at.displayName=ie;var st="DialogDescription",it=s.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=A(st,n);return f.jsx(P.p,{id:r.descriptionId,...o,ref:t})});it.displayName=st;var ct="DialogClose",lt=s.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=A(ct,n);return f.jsx(P.button,{type:"button",...o,ref:t,onClick:M(e.onClick,()=>r.onOpenChange(!1))})});lt.displayName=ct;function ce(e){return e?"open":"closed"}var ut="DialogTitleWarning",[Pr,dt]=Ft(ut,{contentName:N,titleName:ie,docsSlug:"dialog"}),io=({titleId:e})=>{const t=dt(ut),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},co="DialogDescriptionWarning",lo=({contentRef:e,descriptionId:t})=>{const o=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dt(co).contentName}}.`;return s.useEffect(()=>{const r=e.current?.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(o))},[o,e,t]),null},Rr=Qe,Ar=tt,Tr=nt,Or=ot,Sr=at,Dr=it,Nr=lt;export{Rr as $,mo as A,Co as B,Eo as C,bo as D,Fo as E,$o as F,So as G,qo as H,Jo as I,Ao as J,_o as K,Vo as L,er as M,Mo as N,sr as O,vo as P,ir as Q,pr as R,fr as S,wr as T,br as U,vr as V,rr as W,Mr as X,mr as Y,jo as Z,Qo as _,zo as a,Or as a0,Nr as a1,Sr as a2,Dr as a3,Ar as a4,Tr as a5,Ho as a6,Zo as a7,yr as a8,ur as a9,Xo as aa,or as ab,ar as ac,Wo as ad,dr as ae,Cr as af,Po as ag,Go as b,cr as c,To as d,Er as e,xo as f,kr as g,Do as h,Lo as i,Io as j,No as k,Ro as l,go as m,hr as n,gr as o,wo as p,Uo as q,tr as r,ko as s,lr as t,Oo as u,Ko as v,Bo as w,Yo as x,xr as y,nr as z};
