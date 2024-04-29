import{_ as G,m as t,s as h,o as x,f as S,b as e,a as s,w as _,c as Z,i as F,B as H,v as U,g as J,D as K,E as W}from"./app-DlxmmHnV.js";import{D as m,_ as X,C as ee,a as B,b as oe,c as te}from"./QRCodeGenerator-Czlftoml.js";const l=r=>(K("data-v-9937deff"),r=r(),W(),r),le={class:"flex flex-row"},se={name:"MainContainer",class:"flex flex-col size-full pr-2"},ae={name:"FirstButton"},ne={class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 overflow-y-auto max-h-[35rem]"},ce=l(()=>e("p",{class:"pb-2"},[e("b",null,"Youtube URL")],-1)),ue=l(()=>e("div",{name:"Separator",class:"py-2"},null,-1)),re={name:"SecondButton"},de=l(()=>e("p",{class:"pb-2"},[e("b",null,"¿Cuántos colores?")],-1)),ie={class:"flex flex-row place-content-start overflow-auto"},pe={class:"flex flex-col pr-14"},ve=l(()=>e("br",null,null,-1)),_e=l(()=>e("br",null,null,-1)),fe=l(()=>e("p",{class:"pb-2"},[e("b",null,"Color del fondo")],-1)),ye={class:"flex flex-row place-content-center place-items-center justify-center"},he=l(()=>e("label",{for:"transparent",class:"mr-2"},"Fondo transparente",-1)),xe=l(()=>e("br",null,null,-1)),me={class:"flex flex-col place-items-center"},Te={class:"flex place-items-center"},ge=l(()=>e("label",{for:"eyesIsCheck"},"Color de ojo personalizado",-1)),Ce=l(()=>e("br",null,null,-1)),be={key:0,class:"flex flex-row place-items-center"},Se=l(()=>e("div",{class:"flex flex-col"},[e("p",{class:"px-2 pb-4 text-slate-500"},"Exterior"),e("p",{class:"px-2 pt-2 text-slate-500"},"Interior")],-1)),Fe=l(()=>e("div",{name:"Separator",class:"py-2"},null,-1)),Be={name:"ThirdButton"},we=l(()=>e("div",{name:"Separator",class:"py-2"},null,-1)),Ie={name:"FourthButton"},Le=l(()=>e("br",null,null,-1)),Ue={class:"flex pl-2 w-full h-full"},Ve={class:"fixed pr-20"},ke={class:"flex flex-col min-w-24 min-h-56 h-fit w-fit py-4 px-6 items-center justify-start place-content-center rounded-lg bg-orange-500 shadow-slate-800 shadow-md"},De={key:1,class:"flex place-content-center place-items-center justify-center border-2 rounded-lg border-zinc-100 border-dotted min-size-24 size-40"},Ee=l(()=>e("p",{class:"text-center text-zinc-100"},"Aquí va tu QR",-1)),Oe=[Ee],Re="INTRODUCE CONTENIDO",Ne="ESCOGE COLORES",Ae="AÑADIR LOGO",qe="PERSONALIZAR DISEÑO",ze={__name:"YoutubeView",props:["logos","dotsTypes","eyesTypes","eyeFrameTypes"],setup(r){const f=r,V=t(!0),k=t(!1),D=t(!1),E=t(!1),y=t(!1),d=t(!0),u=t(""),T=t(!1),i=t(1),O=t("#000000"),g=t("#000000"),C=t("#000000"),p=t([O.value]),v=t([g.value,C.value]),c=t(["#FFFFFF00"]),b=t(null),w=t("square"),I=t("square"),L=t("square"),R=t("Descargar QR"),N=t("Descargar QR"),A=o=>{try{return new URL(o),!0}catch{return!1}};h(u,o=>{u.value&&u.value.length>0&&(A(o)?T.value=!0:T.value=!1)}),h(y,o=>{o||(g.value="#000000",C.value="#000000",v.value=[g.value,C.value])}),h(d,o=>{const a=o?"00":"FF",n=c.value[0].length===9;o&&!n?c.value[0]+=a:!o&&n&&(c.value[0]=c.value[0].slice(0,-2))}),h(i,o=>{i.value=o,o<2&&(p.value[1]="#000000")});const q=o=>{i.value=o},z=o=>{p.value=o},j=o=>{d.value?d.value=!1:c.value=o},M=o=>{v.value=o},P=o=>{b.value=o},Q=o=>{w.value=o.value},Y=o=>{I.value=o.value},$=o=>{L.value=o.value};return(o,a)=>(x(),S("form",le,[e("div",se,[e("div",ae,[s(m,{buttonText:Re,defaultState:V.value},{default:_(()=>[e("div",ne,[e("div",null,[ce,F(e("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>u.value=n),type:"text",class:"custom-input",placeholder:"https://youtube.com"},null,512),[[H,u.value]])])])]),_:1},8,["defaultState"])]),ue,e("div",re,[s(m,{buttonText:Ne,defaultState:k.value},{default:_(()=>[de,e("div",ie,[e("div",pe,[s(ee,{colorCount:i.value,texto1:"Un color",texto2:"Dos colores","onUpdate:colorCount":q},{default:_(()=>[ve,s(B,{colors:p.value,colorCount:i.value,"onUpdate:colors":z},null,8,["colors","colorCount"])]),_:1},8,["colorCount"]),_e,fe,s(B,{colors:[c.value],"onUpdate:colors":j},null,8,["colors"]),e("div",ye,[he,xe,F(e("input",{type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=n=>d.value=n),id:"transparent",name:"transparent",class:"text-orange-500",checked:""},null,512),[[U,d.value]])])]),e("div",me,[e("div",Te,[F(e("input",{id:"eyesIsCheck",class:"mr-2 text-orange-500",type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=n=>y.value=n)},null,512),[[U,y.value]]),ge]),Ce,y.value?(x(),S("div",be,[s(B,{class:"flex flex-col",colors:v.value,"onUpdate:colors":M},null,8,["colors"]),Se])):J("",!0)])])]),_:1},8,["defaultState"])]),Fe,e("div",Be,[s(m,{buttonText:Ae,defaultState:D.value},{default:_(()=>[s(oe,{selectedLogo:b.value,logosList:f.logos,onLogoSelected:P,class:"pt-2"},null,8,["selectedLogo","logosList"])]),_:1},8,["defaultState"])]),we,e("div",Ie,[s(m,{buttonText:qe,defaultState:E.value},{default:_(()=>[s(te,{dotsTypesList:f.dotsTypes,eyesTypesList:f.eyesTypes,eyeFrameTypes:f.eyeFrameTypes,onDotTypeSelected:Q,onEyeTypeSelected:Y,onEyeFrameTypeSelected:$},null,8,["dotsTypesList","eyesTypesList","eyeFrameTypes"])]),_:1},8,["defaultState"]),Le])]),e("div",Ue,[e("div",Ve,[e("div",ke,[T.value?(x(),Z(X,{key:0,userUrl:u.value,ButtonName:R.value,downloadButton:N.value,colorsValue1:p.value[0],colorsValue2:p.value[1]||"#000000",cornersSquareColor:v.value[0]||"#000000",selectedLogo:b.value,cornersDotColor:v.value[1]||"#000000",backgroundColor:c.value[0]||"#FFFFFF",dotsType:w.value||"dot",eyeType:I.value||"dot",eyeFrameType:L.value||"dot"},null,8,["userUrl","ButtonName","downloadButton","colorsValue1","colorsValue2","cornersSquareColor","selectedLogo","cornersDotColor","backgroundColor","dotsType","eyeType","eyeFrameType"])):(x(),S("div",De,Oe))])])])]))}},Pe=G(ze,[["__scopeId","data-v-9937deff"]]);export{Pe as default};
