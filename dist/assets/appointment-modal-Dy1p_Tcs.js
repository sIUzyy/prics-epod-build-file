import{r as t,j as e,t as m,P as ae}from"./index-B_BwmF1n.js";/* empty css                         */import{d as p,u as ye,t as ve}from"./timezone-DcS6W5tV.js";import{a as $}from"./index-DW_MHI2K.js";import{L as be}from"./loading-spinner-B8jMO9FB.js";import{L as Ne,A as je,D as we,T as Se,h as De}from"./checkAppointment-fXncA_4R.js";import{C as Ce}from"./calendar-plus--IVa_Ixs.js";import{C as re}from"./chevron-down-B8IRFV7t.js";import{y as ke,D as Ae,j as Ee,Y as Pe}from"./dialog-CJT0ZLl1.js";const n=[];for(let a=0;a<256;++a)n.push((a+256).toString(16).slice(1));function Ie(a,s=0){return(n[a[s+0]]+n[a[s+1]]+n[a[s+2]]+n[a[s+3]]+"-"+n[a[s+4]]+n[a[s+5]]+"-"+n[a[s+6]]+n[a[s+7]]+"-"+n[a[s+8]]+n[a[s+9]]+"-"+n[a[s+10]]+n[a[s+11]]+n[a[s+12]]+n[a[s+13]]+n[a[s+14]]+n[a[s+15]]).toLowerCase()}let O;const $e=new Uint8Array(16);function We(){if(!O){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");O=crypto.getRandomValues.bind(crypto)}return O($e)}const ze=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),se={randomUUID:ze};function Te(a,s,z){var c;if(se.randomUUID&&!a)return se.randomUUID();a=a||{};const i=a.random??((c=a.rng)==null?void 0:c.call(a))??We();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Ie(i)}p.extend(ye);p.extend(ve);const ne=p().tz("Asia/Manila"),W="https://prics-epod-backend.onrender.com";function Ue({open:a,setOpen:s}){const[z,i]=t.useState(""),[c,oe]=t.useState(ne),[q,le]=t.useState(ne),[h,F]=t.useState(""),[g,ie]=t.useState(""),[y,ce]=t.useState(""),[v,B]=t.useState(""),[b,G]=t.useState(""),[N,J]=t.useState(""),[j,K]=t.useState(""),[d,Q]=t.useState(""),[f,X]=t.useState(""),[de]=t.useState("Pending"),[ue,me]=t.useState([]),[pe,fe]=t.useState([]),[xe,he]=t.useState([]),[,Z]=t.useState(!1),[x,l]=t.useState(!1),[,ee]=t.useState(!1),[,te]=t.useState(!1),[w,T]=t.useState(""),[S,U]=t.useState(""),[D,_]=t.useState(""),[C,L]=t.useState(""),[k,M]=t.useState(""),[A,R]=t.useState(""),[E,H]=t.useState(""),[P,Y]=t.useState(""),[I,V]=t.useState("");t.useEffect(()=>{(async()=>{te(!0);try{const u=(await $.get(`${W}/api/truck`)).data.truck;me(u)}catch{m.error("We could not retrieve your plate number data. Please try again later.",{style:{backgroundColor:"#ff4d4d",color:"#fff"}})}finally{te(!1)}})()},[]),t.useEffect(()=>{(async()=>{ee(!0);try{const u=(await $.get(`${W}/api/activity`)).data.activity;fe(u)}catch{m.error("We could not retrieve your activity data. Please try again later.",{style:{backgroundColor:"#ff4d4d",color:"#fff"}})}finally{ee(!1)}})()},[]),t.useEffect(()=>{(async()=>{Z(!0);try{const u=(await $.get(`${W}/api/appointment`)).data.appointments;he(u)}catch(o){console.error("Failed to fetch appointment",o),m.error("We could not retrieve your appointment data. Please try again later.",{style:{backgroundColor:"#ff4d4d",color:"#fff"}})}finally{Z(!1)}})()},[]);const ge=async r=>{if(r.preventDefault(),l(!0),!h&&!g&&!y&&!v&&!b&&!N&&!j&&!d&&!f){T("Carrier name cannot be empty."),U("Warehouse name cannot be empty."),_("Warehouse address cannot be empty."),L("Driver name cannot be empty."),M("Helper name cannot be empty."),R("Parking slot cannot be empty."),H("Dock cannot be empty."),Y("Please select a plate no."),V("Please select an activity"),l(!1);return}if(!h){T("Carrier name cannot be empty."),l(!1);return}if(!g){U("Warehouse name cannot be empty."),l(!1);return}if(!y){_("Warehouse address cannot be empty."),l(!1);return}if(!v){L("Driver name cannot be empty."),l(!1);return}if(!b){M("Helper name cannot be empty."),l(!1);return}if(!N){R("Parking slot cannot be empty."),l(!1);return}if(!j){H("Dock cannot be empty."),l(!1);return}if(!d){Y("Please select a plate no."),l(!1);return}if(!f){V("Please select an activity"),l(!1);return}if(De(xe,d,c)){const o=p(c).tz("Asia/Manila").format("MMMM D, YYYY");m.warning(`Plate No. ${d} already has an appointment on the ${o}.`,{style:{backgroundColor:"#ffa500",color:"#fff"}}),l(!1);return}try{const o={appointment_id:z,appointment_date:c.toISOString(),appointment_time:q.toISOString(),carrier_name:h,warehouse_name:g,warehouse_address:y,driver_name:v,helper_name:b,parking_slot:N,dock:j,plate_no:d,activity:f,status:de};(await $.post(`${W}/api/appointment/create-appointment`,o)).status===201&&(m.success("Successfully created an appointment",{style:{backgroundColor:"#28a745",color:"#fff"}}),F(""),B(""),G(""),J(""),K(""),Q(""),X(""),s(!1),setTimeout(()=>{window.location.reload()},1e3))}catch(o){console.log(o),m.error("Failed to create an appointment. Please try again later.",{style:{backgroundColor:"#ff4d4d",color:"#fff"}})}finally{l(!1)}};return t.useEffect(()=>{a&&i(Te().split("-")[0])},[a]),e.jsxs(ke,{open:a,onClose:s,className:"relative z-10 ",children:[e.jsx(Ae,{transition:!0,className:"fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen  overflow-y-auto",children:e.jsx("div",{className:"flex w-full min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsxs(Ee,{transition:!0,className:"w-[1200px] max-w-full sm:w-[800px] md:w-[1000px] lg:w-[1000px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all",children:[e.jsxs("div",{className:"bg-white   px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[e.jsxs(Pe,{as:"h1",className:"font-inter flex items-center gap-x-2 font-medium text-base tracking-wider",children:[e.jsx(Ce,{size:20})," Create an Appointment"]}),e.jsxs("div",{className:"mt-5 flex gap-x-5",children:[e.jsx("div",{className:"flex flex-col items-center ",children:e.jsxs(Ne,{dateAdapter:je,children:[e.jsx(we,{value:c,onChange:r=>oe(p(r).tz("Asia/Manila")),disablePast:!0}),e.jsx(Se,{value:q,onChange:r=>le(p(r).tz("Asia/Manila"))})]})}),e.jsxs("div",{className:"forms",children:[e.jsxs("div",{className:"flex gap-x-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"text-sm font-inter text-[#979090]",children:"Appointment ID"}),e.jsx("input",{type:"text",value:z,readOnly:!0,placeholder:"Appointment ID",disabled:!0,className:" p-4 w-full mt-1 rounded-md  cursor-not-allowed bg-gray-100 "})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Carrier Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",placeholder:w||"Enter carrier name",value:h,onChange:r=>{F(r.target.value),w&&T("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                        ${w?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`})]})]}),e.jsxs("div",{className:"flex gap-x-5 mt-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Warehouse Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",placeholder:S||"Enter warehouse name",value:g,onChange:r=>{ie(r.target.value),S&&U("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${S?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Warehouse Address"," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",placeholder:D||"Enter warehouse address",value:y,onChange:r=>{ce(r.target.value),D&&_("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${D?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`})]})]}),e.jsxs("div",{className:"flex gap-x-5 mt-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Driver Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",placeholder:C||"Enter driver name",value:v,onChange:r=>{B(r.target.value),C&&L("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${C?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Helper Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",placeholder:k||"Enter helper name",value:b,onChange:r=>{G(r.target.value),k&&M("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${k?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`})]})]}),e.jsxs("div",{className:"flex gap-x-5 mt-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Parking Slot ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",placeholder:A||"Enter parking slot",value:N,onChange:r=>{J(r.target.value),A&&R("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${A?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Dock ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",placeholder:E||"Enter dock",value:j,onChange:r=>{K(r.target.value),E&&H("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${E?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`})]})]}),e.jsxs("div",{className:"flex gap-x-5 mt-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Plate No. ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"relative mt-0",children:[e.jsxs("select",{className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${P?"border-red-500 focus:ring-red-500 text-red-500":d?"border-gray-300 focus:ring-blue-500 placeholder-gray-400":"text-gray-400"} 
                          outline-0 appearance-none pr-10`,value:d,onChange:r=>{Q(r.target.value),P&&Y("")},children:[e.jsx("option",{value:"",children:P||"Select plate no."}),ue.map((r,o)=>e.jsx("option",{value:r.truckPlateNo,children:r.truckPlateNo},o))]}),e.jsx("div",{className:"absolute inset-y-0 right-3 flex items-center pointer-events-none",children:e.jsx(re,{className:"text-gray-400",size:20})})]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Activity ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"relative mt-0",children:[e.jsxs("select",{className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${I?"border-red-500 focus:ring-red-500 text-red-500":f?"border-gray-300 focus:ring-blue-500 placeholder-gray-400":"text-gray-400"} 
                          outline-0 appearance-none pr-10`,value:f,onChange:r=>{X(r.target.value),I&&V("")},children:[e.jsx("option",{value:"",children:I||"Select activity"}),pe.map((r,o)=>e.jsx("option",{value:r.activityName,children:r.activityName},o))]}),e.jsx("div",{className:"absolute inset-y-0 right-3 flex items-center pointer-events-none",children:e.jsx(re,{className:"text-gray-400",size:20})})]})]})]})]})]})]}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{type:"button",onClick:ge,className:x?"inline-flex w-full justify-center rounded-sm bg-green-600 px-10 py-2 text-center text-sm font-medium text-white shadow-xs opacity-50 sm:ml-3 sm:w-auto cursor-progress   ":"inline-flex w-full justify-center rounded-sm bg-green-600 px-10 py-2 text-center text-sm font-medium text-white shadow-xs hover:opacity-80 sm:ml-3 sm:w-auto cursor-pointer  ",disabled:x,children:x?e.jsxs("div",{className:"flex items-center gap-x-2",children:["Creating an appointment ",e.jsx(be,{})]}):"Create an appointment"}),e.jsx("button",{type:"button","data-autofocus":!0,onClick:()=>s(!1),className:x?"mt-3 inline-flex w-full justify-center rounded-sm bg-white px-10 py-2 text-sm font-medium text-gray-900   cursor-not-allowed   hover:bg-gray-50 sm:mt-0 sm:w-auto border-1":"mt-3 inline-flex w-full justify-center rounded-sm bg-white px-10 py-2 text-sm font-medium text-gray-900   cursor-pointer   hover:bg-gray-50 sm:mt-0 sm:w-auto border-1",disabled:x,children:"Cancel"})]})]})})})]})}Ue.propTypes={open:ae.bool.isRequired,setOpen:ae.func.isRequired};export{Ue as A};
