import{_ as F,u as ie,i as pe,c as de,a as me,b as ye,h as V,r as N,d as ge,e as ue,m as he,j as r,f as ve,g as Y,k as xe,l as M,n as fe,o as Se,s as D,p as Z,q as E,t as A,I as l,T as je,v as Te}from"./Icon-d87eb629.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-7ec6486c.js";import{r as y}from"./index-8b3efc3f.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const ke=["sx"],Ie=o=>{var e,t;const n={systemProps:{},otherProps:{}},a=(e=o==null||(t=o.theme)==null?void 0:t.unstable_sxConfig)!=null?e:ie;return Object.keys(o).forEach(s=>{a[s]?n.systemProps[s]=o[s]:n.otherProps[s]=o[s]}),n};function w(o){const{sx:e}=o,t=F(o,ke),{systemProps:n,otherProps:a}=Ie(t);let s;return Array.isArray(e)?s=[n,...e]:typeof e=="function"?s=(...d)=>{const g=e(...d);return pe(g)?i({},n,g):n}:s=i({},n,e),i({},a,{sx:s})}const be=de(),Pe=be;function Fe(o,e){var t,n;return y.isValidElement(o)&&e.indexOf((t=o.type.muiName)!=null?t:(n=o.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}const De=["component","direction","spacing","divider","children","className","useFlexGap"],ze=me(),Ce=Pe("div",{name:"MuiStack",slot:"Root",overridesResolver:(o,e)=>e.root});function $e(o){return ye({props:o,name:"MuiStack",defaultTheme:ze})}function _e(o,e){const t=y.Children.toArray(o).filter(Boolean);return t.reduce((n,a,s)=>(n.push(a),s<t.length-1&&n.push(y.cloneElement(e,{key:`separator-${s}`})),n),[])}const Re=o=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[o],We=({ownerState:o,theme:e})=>{let t=i({display:"flex",flexDirection:"column"},V({theme:e},N({values:o.direction,breakpoints:e.breakpoints.values}),n=>({flexDirection:n})));if(o.spacing){const n=ge(e),a=Object.keys(e.breakpoints.values).reduce((c,p)=>((typeof o.spacing=="object"&&o.spacing[p]!=null||typeof o.direction=="object"&&o.direction[p]!=null)&&(c[p]=!0),c),{}),s=N({values:o.direction,base:a}),d=N({values:o.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((c,p,h)=>{if(!s[c]){const f=p>0?s[h[p-1]]:"column";s[c]=f}}),t=ue(t,V({theme:e},d,(c,p)=>o.useFlexGap?{gap:M(n,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Re(p?s[p]:o.direction)}`]:M(n,c)}}))}return t=he(e.breakpoints,t),t};function Be(o={}){const{createStyledComponent:e=Ce,useThemeProps:t=$e,componentName:n="MuiStack"}=o,a=()=>Y({root:["root"]},c=>xe(n,c),{}),s=e(We);return y.forwardRef(function(c,p){const h=t(c),x=w(h),{component:f="div",direction:z="column",spacing:C=0,divider:S,children:v,className:j,useFlexGap:T=!1}=x,k=F(x,De),$={direction:z,spacing:C,useFlexGap:T},_=a();return r.jsx(s,i({as:f,ownerState:$,ref:p,className:ve(_.root,j)},k,{children:S?_e(v,S):v}))})}function Ne(o){return fe("MuiTypography",o)}Se("MuiTypography",["root","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);const Ee=["color","textColor"],Ue=["component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant","slots","slotProps"],G=y.createContext(!1),Oe=y.createContext(!1),Ve=o=>{const{gutterBottom:e,noWrap:t,level:n,color:a,variant:s}=o,d={root:["root",n,e&&"gutterBottom",t&&"noWrap",a&&`color${A(a)}`,s&&`variant${A(s)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return Y(d,Ne,{})},Me=D("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:(o,e)=>e.startDecorator})({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),Ae=D("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:(o,e)=>e.endDecorator})({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),Ge=D("span",{name:"JoyTypography",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o,ownerState:e})=>{var t,n,a,s,d;const g=e.level!=="inherit"?(t=o.typography[e.level])==null?void 0:t.lineHeight:"1";return i({"--Icon-fontSize":`calc(1em * ${g})`},e.color&&{"--Icon-color":"currentColor"},{margin:"var(--Typography-margin, 0px)"},e.nesting?{display:"inline"}:i({display:"block"},e.unstable_hasSkeleton&&{position:"relative"}),(e.startDecorator||e.endDecorator)&&i({display:"flex",alignItems:"center"},e.nesting&&i({display:"inline-flex"},e.startDecorator&&{verticalAlign:"bottom"})),e.level&&e.level!=="inherit"&&o.typography[e.level],{fontSize:`var(--Typography-fontSize, ${e.level&&e.level!=="inherit"&&(n=(a=o.typography[e.level])==null?void 0:a.fontSize)!=null?n:"inherit"})`},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.color&&{color:`var(--variant-plainColor, rgba(${(s=o.vars.palette[e.color])==null?void 0:s.mainChannel} / 1))`},e.variant&&i({borderRadius:o.vars.radius.xs,paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!e.nesting&&{marginInline:"-0.25em"},(d=o.variants[e.variant])==null?void 0:d[e.color]))}),H={h1:"h1",h2:"h2",h3:"h3",h4:"h4","title-lg":"p","title-md":"p","title-sm":"p","body-lg":"p","body-md":"p","body-sm":"p","body-xs":"span",inherit:"p"},ee=y.forwardRef(function(e,t){var n;const a=Z({props:e,name:"JoyTypography"}),{color:s,textColor:d}=a,g=F(a,Ee),c=y.useContext(G),p=y.useContext(Oe),h=w(i({},g,{color:d})),{component:x,gutterBottom:f=!1,noWrap:z=!1,level:C="body-md",levelMapping:S=H,children:v,endDecorator:j,startDecorator:T,variant:k,slots:$={},slotProps:_={}}=h,oe=F(h,Ue),re=(n=e.color)!=null?n:k?s??"neutral":s,R=c||p?e.level||"inherit":C,U=Fe(v,["Skeleton"]),O=x||(c?"span":S[R]||H[R]||"span"),I=i({},h,{level:R,component:O,color:re,gutterBottom:f,noWrap:z,nesting:c,variant:k,unstable_hasSkeleton:U}),W=Ve(I),B=i({},oe,{component:O,slots:$,slotProps:_}),[ne,se]=E("root",{ref:t,className:W.root,elementType:Ge,externalForwardedProps:B,ownerState:I}),[te,ae]=E("startDecorator",{className:W.startDecorator,elementType:Me,externalForwardedProps:B,ownerState:I}),[le,ce]=E("endDecorator",{className:W.endDecorator,elementType:Ae,externalForwardedProps:B,ownerState:I});return r.jsx(G.Provider,{value:!0,children:r.jsxs(ne,i({},se,{children:[T&&r.jsx(te,i({},ae,{children:T})),U?y.cloneElement(v,{variant:v.props.variant||"inline"}):v,j&&r.jsx(le,i({},ce,{children:j}))]}))})});ee.muiName="Typography";const u=ee,He=Be({createStyledComponent:D("div",{name:"JoyStack",slot:"Root",overridesResolver:(o,e)=>e.root}),useThemeProps:o=>Z({props:o,name:"JoyStack"})}),m=He,Xe={title:"OutAndFound/Icon",component:l,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","neutral","danger","success"]},size:{control:"select",options:[16,20,24,32]}}},b={args:{name:"Add",size:24,color:"primary"}},P={render:()=>r.jsx(je,{theme:Te,children:r.jsxs(m,{spacing:4,children:[r.jsxs(m,{direction:"row",spacing:2,alignItems:"center",children:[r.jsx(u,{level:"h3",children:"Sizes"}),r.jsx(l,{name:"Search",size:16}),r.jsx(l,{name:"Search",size:20}),r.jsx(l,{name:"Search",size:24}),r.jsx(l,{name:"Search",size:32})]}),r.jsxs(m,{direction:"row",spacing:2,alignItems:"center",children:[r.jsx(u,{level:"h3",children:"Colors"}),r.jsx(l,{name:"FavoriteFilled",color:"primary"}),r.jsx(l,{name:"FavoriteFilled",color:"secondary"}),r.jsx(l,{name:"FavoriteFilled",color:"danger"}),r.jsx(l,{name:"FavoriteFilled",color:"success"}),r.jsx(l,{name:"FavoriteFilled",color:"neutral"})]}),r.jsxs(m,{direction:"row",spacing:4,flexWrap:"wrap",children:[r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"User",size:32}),r.jsx(u,{level:"body-xs",children:"User"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"Settings",size:32}),r.jsx(u,{level:"body-xs",children:"Settings"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"Home",size:32}),r.jsx(u,{level:"body-xs",children:"Home"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"WarningFilled",size:32,color:"danger"}),r.jsx(u,{level:"body-xs",children:"Warning"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"CheckmarkFilled",size:32,color:"success"}),r.jsx(u,{level:"body-xs",children:"Success"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"InformationFilled",size:32,color:"primary"}),r.jsx(u,{level:"body-xs",children:"Info"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"Logout",size:32}),r.jsx(u,{level:"body-xs",children:"Logout"})]})]})]})})};var J,L,q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    name: 'Add',
    size: 24,
    color: 'primary'
  }
}`,...(q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var K,Q,X;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ThemeProvider theme={theme}>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography level="h3">Sizes</Typography>
          <Icon name="Search" size={16} />
          <Icon name="Search" size={20} />
          <Icon name="Search" size={24} />
          <Icon name="Search" size={32} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography level="h3">Colors</Typography>
          <Icon name="FavoriteFilled" color="primary" />
          <Icon name="FavoriteFilled" color="secondary" />
          <Icon name="FavoriteFilled" color="danger" />
          <Icon name="FavoriteFilled" color="success" />
          <Icon name="FavoriteFilled" color="neutral" />
        </Stack>
        <Stack direction="row" spacing={4} flexWrap="wrap">
          <Stack alignItems="center" spacing={1}>
            <Icon name="User" size={32} />
            <Typography level="body-xs">User</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="Settings" size={32} />
            <Typography level="body-xs">Settings</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="Home" size={32} />
            <Typography level="body-xs">Home</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="WarningFilled" size={32} color="danger" />
            <Typography level="body-xs">Warning</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="CheckmarkFilled" size={32} color="success" />
            <Typography level="body-xs">Success</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="InformationFilled" size={32} color="primary" />
            <Typography level="body-xs">Info</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <Icon name="Logout" size={32} />
            <Typography level="body-xs">Logout</Typography>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
}`,...(X=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ye=["Primary","Gallery"];export{P as Gallery,b as Primary,Ye as __namedExportsOrder,Xe as default};
