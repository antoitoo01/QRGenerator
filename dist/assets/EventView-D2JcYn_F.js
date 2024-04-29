import{_ as oe,m as o,h as le,s as E,o as L,f as N,b as e,a as n,w as f,i as u,B as y,v as O,g as se,D as ae,E as ne}from"./app-DlxmmHnV.js";import{D as h,_ as ce,C as ue,a as I,b as re,c as de}from"./QRCodeGenerator-Czlftoml.js";const a=r=>(ae("data-v-bedbe7be"),r=r(),ne(),r),pe={class:"flex flex-row"},ie={name:"MainContainer",class:"flex flex-col size-full pr-2"},ve=a(()=>e("p",{class:"pb-2"},[e("b",null,"Título del evento")],-1)),fe=a(()=>e("p",{class:"pb-2"},[e("b",null,"Fecha de inicio")],-1)),ye=a(()=>e("p",{class:"pb-2"},[e("b",null,"Fecha de fin")],-1)),_e=a(()=>e("p",{class:"pb-2"},[e("b",null,"Localización")],-1)),me=a(()=>e("p",{class:"pb-2"},[e("b",null,"Descripción")],-1)),he=a(()=>e("div",{name:"Separator",class:"py-2"},null,-1)),Te=a(()=>e("p",{class:"pb-2"},[e("b",null,"¿Cuántos colores?")],-1)),xe={class:"flex flex-row place-content-start overflow-auto"},Se={class:"flex flex-col pr-14"},be=a(()=>e("br",null,null,-1)),ge=a(()=>e("br",null,null,-1)),Ce=a(()=>e("p",{class:"pb-2"},[e("b",null,"Color del fondo")],-1)),Fe={class:"flex flex-row place-content-center place-items-center justify-center"},De=a(()=>e("label",{for:"transparent",class:"mr-2"},"Fondo transparente",-1)),Ee=a(()=>e("br",null,null,-1)),Ie={class:"flex flex-col place-items-center"},Ve={class:"flex place-items-center"},we=a(()=>e("label",{for:"eyesIsCheck"},"Color de ojo personalizado",-1)),Be=a(()=>e("br",null,null,-1)),Ue={key:0,class:"flex flex-row place-items-center"},Le=a(()=>e("div",{class:"flex flex-col"},[e("p",{class:"px-2 pb-4 text-slate-500"},"Exterior"),e("p",{class:"px-2 pt-2 text-slate-500"},"Interior")],-1)),Ne=a(()=>e("div",{name:"Separator",class:"py-2"},null,-1)),Oe=a(()=>e("div",{name:"Separator",class:"py-2"},null,-1)),ke={class:"flex pl-2 w-full h-full"},Ae={class:"fixed pr-20"},Re={class:"flex flex-col min-w-[30%] min-h-56 h-fit w-fit py-4 px-6 items-center justify-start place-content-center rounded-lg bg-orange-500 shadow-slate-800 shadow-md"},$e="INTRODUCE CONTENIDO",Me="ESCOGE COLORES",qe="AÑADIR LOGO",Pe="PERSONALIZAR DISEÑO",je={__name:"EventView",props:["logos","dotsTypes","eyesTypes","eyeFrameTypes"],setup(r){const _=r,k=o(!0),A=o(!1),R=o(!1),$=o(!1),m=o(!1),d=o(!0),T=o(""),x=o(""),S=o(""),b=o(""),g=o("");function V(t){const l=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),W=String(t.getDate()).padStart(2,"0"),X=String(t.getHours()).padStart(2,"0"),ee=String(t.getMinutes()).padStart(2,"0"),te=String(t.getSeconds()).padStart(2,"0");return`${l}${s}${W}T${X}${ee}${te}Z`}const M=le(()=>{let t=`BEGIN:VEVENT
`;t+="SUMMARY:"+T.value+`
`;const l=V(new Date(b.value)),s=V(new Date(g.value));return t+="DTSTART:"+l+`
`,t+="DTEND:"+s+`
`,t+="LOCATION:"+x.value+`
`,t+="DESCRIPTION:"+S.value+`
`,t+="END:VEVENT",t}),p=o(1),q=o("#000000"),C=o("#000000"),F=o("#000000"),i=o([q.value]),v=o([C.value,F.value]),c=o(["#FFFFFF00"]),D=o(null),w=o("square"),B=o("square"),U=o("square"),P=o("Descargar QR"),j=o("Descargar QR");E(m,t=>{t||(C.value="#000000",F.value="#000000",v.value=[C.value,F.value])}),E(d,t=>{const l=t?"00":"FF",s=c.value[0].length===9;t&&!s?c.value[0]+=l:!t&&s&&(c.value[0]=c.value[0].slice(0,-2))}),E(p,t=>{p.value=t,t<2&&(i.value[1]="#000000")});const z=t=>{p.value=t},G=t=>{i.value=t},Q=t=>{d.value?d.value=!1:c.value=t},Y=t=>{v.value=t},Z=t=>{D.value=t},H=t=>{w.value=t.value},J=t=>{B.value=t.value},K=t=>{U.value=t.value};return(t,l)=>(L(),N("form",pe,[e("div",ie,[n(h,{buttonText:$e,defaultState:k.value},{default:f(()=>[e("div",null,[ve,u(e("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>T.value=s),type:"text",class:"custom-input",placeholder:"Introducir título del evento"},null,512),[[y,T.value]])]),e("div",null,[fe,u(e("input",{"onUpdate:modelValue":l[1]||(l[1]=s=>b.value=s),type:"datetime-local",class:"custom-input",placeholder:"Introducir fecha"},null,512),[[y,b.value]])]),e("div",null,[ye,u(e("input",{"onUpdate:modelValue":l[2]||(l[2]=s=>g.value=s),type:"datetime-local",class:"custom-input",placeholder:"Introducir fecha"},null,512),[[y,g.value]])]),e("div",null,[_e,u(e("input",{"onUpdate:modelValue":l[3]||(l[3]=s=>x.value=s),type:"text",class:"custom-input",placeholder:"Introducir lugar"},null,512),[[y,x.value]])]),e("div",null,[me,u(e("input",{"onUpdate:modelValue":l[4]||(l[4]=s=>S.value=s),type:"text",class:"custom-input",placeholder:"Introducir descripción del evento"},null,512),[[y,S.value]])])]),_:1},8,["defaultState"]),he,n(h,{buttonText:Me,defaultState:A.value},{default:f(()=>[Te,e("div",xe,[e("div",Se,[n(ue,{colorCount:p.value,texto1:"Un color",texto2:"Dos colores","onUpdate:colorCount":z},{default:f(()=>[be,n(I,{colors:i.value,colorCount:p.value,"onUpdate:colors":G},null,8,["colors","colorCount"])]),_:1},8,["colorCount"]),ge,Ce,n(I,{colors:[c.value],"onUpdate:colors":Q},null,8,["colors"]),e("div",Fe,[De,Ee,u(e("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=s=>d.value=s),id:"transparent",name:"transparent",class:"text-orange-500",checked:""},null,512),[[O,d.value]])])]),e("div",Ie,[e("div",Ve,[u(e("input",{id:"eyesIsCheck",class:"mr-2 text-orange-500",type:"checkbox","onUpdate:modelValue":l[6]||(l[6]=s=>m.value=s)},null,512),[[O,m.value]]),we]),Be,m.value?(L(),N("div",Ue,[n(I,{class:"flex flex-col",colors:v.value,"onUpdate:colors":Y},null,8,["colors"]),Le])):se("",!0)])])]),_:1},8,["defaultState"]),Ne,n(h,{buttonText:qe,defaultState:R.value},{default:f(()=>[n(re,{selectedLogo:D.value,logosList:_.logos,onLogoSelected:Z,class:"pt-2"},null,8,["selectedLogo","logosList"])]),_:1},8,["defaultState"]),Oe,n(h,{buttonText:Pe,defaultState:$.value},{default:f(()=>[n(de,{dotsTypesList:_.dotsTypes,eyesTypesList:_.eyesTypes,eyeFrameTypes:_.eyeFrameTypes,onDotTypeSelected:H,onEyeTypeSelected:J,onEyeFrameTypeSelected:K},null,8,["dotsTypesList","eyesTypesList","eyeFrameTypes"])]),_:1},8,["defaultState"])]),e("div",ke,[e("div",Ae,[e("div",Re,[n(ce,{userUrl:M.value,ButtonName:P.value,downloadButton:j.value,colorsValue1:i.value[0],colorsValue2:i.value[1]||"#000000",cornersSquareColor:v.value[0]||"#000000",selectedLogo:D.value,cornersDotColor:v.value[1]||"#000000",backgroundColor:c.value[0]||"#FFFFFF",dotsType:w.value||"dot",eyeType:B.value||"dot",eyeFrameType:U.value||"dot"},null,8,["userUrl","ButtonName","downloadButton","colorsValue1","colorsValue2","cornersSquareColor","selectedLogo","cornersDotColor","backgroundColor","dotsType","eyeType","eyeFrameType"])])])])]))}},Qe=oe(je,[["__scopeId","data-v-bedbe7be"]]);export{Qe as default};
