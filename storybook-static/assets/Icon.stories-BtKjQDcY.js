import{c as F,_ as i,m as ce,n as ie,o as pe,j as r,f as de,p as me,q as V,r as N,v as ye,w as ge,x as he,i as Y,y as ue,z as ve,A,g as xe,a as fe,b as Z,d as E,h as M,s as z,I as l,T as je,t as Te}from"./Icon-KHkQdW0A.js";import{r as g}from"./iframe-BXMQ3xNw.js";import"./preload-helper-DNKLzzGY.js";const Se=["sx"],Ie=o=>{var e,t;const n={systemProps:{},otherProps:{}},a=(e=o==null||(t=o.theme)==null?void 0:t.unstable_sxConfig)!=null?e:ie;return Object.keys(o).forEach(s=>{a[s]?n.systemProps[s]=o[s]:n.otherProps[s]=o[s]}),n};function w(o){const{sx:e}=o,t=F(o,Se),{systemProps:n,otherProps:a}=Ie(t);let s;return Array.isArray(e)?s=[n,...e]:typeof e=="function"?s=(...d)=>{const h=e(...d);return ce(h)?i({},n,h):n}:s=i({},n,e),i({},a,{sx:s})}const ke=pe();function be(o,e){var t,n;return g.isValidElement(o)&&e.indexOf((t=o.type.muiName)!=null?t:(n=o.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}const Pe=["component","direction","spacing","divider","children","className","useFlexGap"],Fe=ve(),ze=ke("div",{name:"MuiStack",slot:"Root",overridesResolver:(o,e)=>e.root});function De(o){return me({props:o,name:"MuiStack",defaultTheme:Fe})}function Ce(o,e){const t=g.Children.toArray(o).filter(Boolean);return t.reduce((n,a,s)=>(n.push(a),s<t.length-1&&n.push(g.cloneElement(e,{key:`separator-${s}`})),n),[])}const $e=o=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[o],_e=({ownerState:o,theme:e})=>{let t=i({display:"flex",flexDirection:"column"},V({theme:e},N({values:o.direction,breakpoints:e.breakpoints.values}),n=>({flexDirection:n})));if(o.spacing){const n=ye(e),a=Object.keys(e.breakpoints.values).reduce((c,p)=>((typeof o.spacing=="object"&&o.spacing[p]!=null||typeof o.direction=="object"&&o.direction[p]!=null)&&(c[p]=!0),c),{}),s=N({values:o.direction,base:a}),d=N({values:o.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((c,p,u)=>{if(!s[c]){const f=p>0?s[u[p-1]]:"column";s[c]=f}}),t=ge(t,V({theme:e},d,(c,p)=>o.useFlexGap?{gap:A(n,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${$e(p?s[p]:o.direction)}`]:A(n,c)}}))}return t=he(e.breakpoints,t),t};function Re(o={}){const{createStyledComponent:e=ze,useThemeProps:t=De,componentName:n="MuiStack"}=o,a=()=>Y({root:["root"]},c=>ue(n,c),{}),s=e(_e);return g.forwardRef(function(c,p){const u=t(c),x=w(u),{component:f="div",direction:D="column",spacing:C=0,divider:j,children:v,className:T,useFlexGap:S=!1}=x,I=F(x,Pe),$={direction:D,spacing:C,useFlexGap:S},_=a();return r.jsx(s,i({as:f,ownerState:$,ref:p,className:de(_.root,T)},I,{children:j?Ce(v,j):v}))})}function We(o){return xe("MuiTypography",o)}fe("MuiTypography",["root","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);const Be=["color","textColor"],Ne=["component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant","slots","slotProps"],G=g.createContext(!1),Ee=g.createContext(!1),Ue=o=>{const{gutterBottom:e,noWrap:t,level:n,color:a,variant:s}=o,d={root:["root",n,e&&"gutterBottom",t&&"noWrap",a&&`color${M(a)}`,s&&`variant${M(s)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return Y(d,We,{})},Oe=z("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:(o,e)=>e.startDecorator})({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),Ve=z("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:(o,e)=>e.endDecorator})({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),Ae=z("span",{name:"JoyTypography",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o,ownerState:e})=>{var t,n,a,s,d;const h=e.level!=="inherit"?(t=o.typography[e.level])==null?void 0:t.lineHeight:"1";return i({"--Icon-fontSize":`calc(1em * ${h})`},e.color&&{"--Icon-color":"currentColor"},{margin:"var(--Typography-margin, 0px)"},e.nesting?{display:"inline"}:i({display:"block"},e.unstable_hasSkeleton&&{position:"relative"}),(e.startDecorator||e.endDecorator)&&i({display:"flex",alignItems:"center"},e.nesting&&i({display:"inline-flex"},e.startDecorator&&{verticalAlign:"bottom"})),e.level&&e.level!=="inherit"&&o.typography[e.level],{fontSize:`var(--Typography-fontSize, ${e.level&&e.level!=="inherit"&&(n=(a=o.typography[e.level])==null?void 0:a.fontSize)!=null?n:"inherit"})`},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.color&&{color:`var(--variant-plainColor, rgba(${(s=o.vars.palette[e.color])==null?void 0:s.mainChannel} / 1))`},e.variant&&i({borderRadius:o.vars.radius.xs,paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!e.nesting&&{marginInline:"-0.25em"},(d=o.variants[e.variant])==null?void 0:d[e.color]))}),H={h1:"h1",h2:"h2",h3:"h3",h4:"h4","title-lg":"p","title-md":"p","title-sm":"p","body-lg":"p","body-md":"p","body-sm":"p","body-xs":"span",inherit:"p"},y=g.forwardRef(function(e,t){var n;const a=Z({props:e,name:"JoyTypography"}),{color:s,textColor:d}=a,h=F(a,Be),c=g.useContext(G),p=g.useContext(Ee),u=w(i({},h,{color:d})),{component:x,gutterBottom:f=!1,noWrap:D=!1,level:C="body-md",levelMapping:j=H,children:v,endDecorator:T,startDecorator:S,variant:I,slots:$={},slotProps:_={}}=u,ee=F(u,Ne),oe=(n=e.color)!=null?n:I?s??"neutral":s,R=c||p?e.level||"inherit":C,U=be(v,["Skeleton"]),O=x||(c?"span":j[R]||H[R]||"span"),k=i({},u,{level:R,component:O,color:oe,gutterBottom:f,noWrap:D,nesting:c,variant:I,unstable_hasSkeleton:U}),W=Ue(k),B=i({},ee,{component:O,slots:$,slotProps:_}),[re,ne]=E("root",{ref:t,className:W.root,elementType:Ae,externalForwardedProps:B,ownerState:k}),[se,te]=E("startDecorator",{className:W.startDecorator,elementType:Oe,externalForwardedProps:B,ownerState:k}),[ae,le]=E("endDecorator",{className:W.endDecorator,elementType:Ve,externalForwardedProps:B,ownerState:k});return r.jsx(G.Provider,{value:!0,children:r.jsxs(re,i({},ne,{children:[S&&r.jsx(se,i({},te,{children:S})),U?g.cloneElement(v,{variant:v.props.variant||"inline"}):v,T&&r.jsx(ae,i({},le,{children:T}))]}))})});y.muiName="Typography";const m=Re({createStyledComponent:z("div",{name:"JoyStack",slot:"Root",overridesResolver:(o,e)=>e.root}),useThemeProps:o=>Z({props:o,name:"JoyStack"})}),Je={title:"OutAndFound/Icon",component:l,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","neutral","danger","success"]},size:{control:"select",options:[16,20,24,32]}}},b={args:{name:"Add",size:24,color:"primary"}},P={render:()=>r.jsx(je,{theme:Te,children:r.jsxs(m,{spacing:4,children:[r.jsxs(m,{direction:"row",spacing:2,alignItems:"center",children:[r.jsx(y,{level:"h3",children:"Sizes"}),r.jsx(l,{name:"Search",size:16}),r.jsx(l,{name:"Search",size:20}),r.jsx(l,{name:"Search",size:24}),r.jsx(l,{name:"Search",size:32})]}),r.jsxs(m,{direction:"row",spacing:2,alignItems:"center",children:[r.jsx(y,{level:"h3",children:"Colors"}),r.jsx(l,{name:"FavoriteFilled",color:"primary"}),r.jsx(l,{name:"FavoriteFilled",color:"secondary"}),r.jsx(l,{name:"FavoriteFilled",color:"danger"}),r.jsx(l,{name:"FavoriteFilled",color:"success"}),r.jsx(l,{name:"FavoriteFilled",color:"neutral"})]}),r.jsxs(m,{direction:"row",spacing:4,flexWrap:"wrap",children:[r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"User",size:32}),r.jsx(y,{level:"body-xs",children:"User"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"Settings",size:32}),r.jsx(y,{level:"body-xs",children:"Settings"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"Home",size:32}),r.jsx(y,{level:"body-xs",children:"Home"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"WarningFilled",size:32,color:"danger"}),r.jsx(y,{level:"body-xs",children:"Warning"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"CheckmarkFilled",size:32,color:"success"}),r.jsx(y,{level:"body-xs",children:"Success"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"InformationFilled",size:32,color:"primary"}),r.jsx(y,{level:"body-xs",children:"Info"})]}),r.jsxs(m,{alignItems:"center",spacing:1,children:[r.jsx(l,{name:"Logout",size:32}),r.jsx(y,{level:"body-xs",children:"Logout"})]})]})]})})};var J,L,q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Le=["Primary","Gallery"];export{P as Gallery,b as Primary,Le as __namedExportsOrder,Je as default};
