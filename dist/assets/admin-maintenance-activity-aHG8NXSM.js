import{r as t,j as e,t as g,P as x}from"./index-B_BwmF1n.js";import{f as Y}from"./table-headers-NmVF5Ah3.js";import{O as B}from"./admin-order-summary-pagination-BrnhM8ar.js";import{a as w}from"./index-DW_MHI2K.js";import{L as S}from"./loading-spinner-B8jMO9FB.js";import{P as U}from"./pencil-DNZ5uVGn.js";import{y as D,D as E,j as k,Y as P}from"./dialog-CJT0ZLl1.js";import{P as V}from"./package-CwAfcOhc.js";import{T as W}from"./triangle-alert-B5z6P1E9.js";import{u as G,S as J}from"./search-bar-CHPuIwPo.js";import{c as K}from"./createLucideIcon-DOLBm2BF.js";import{L as Q}from"./loading-table-DjlKue5T.js";import{H as X}from"./page-heading-Dndd7_7V.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ee=K("Plus",Z),te="https://prics-epod-backend.onrender.com";function _({open:f,setOpen:s,selectedActivity:r}){const{_id:n,activityName:l,description:o}=r||{};console.log(r);const[a,c]=t.useState(l),[p,h]=t.useState(o),[y,d]=t.useState(!1),[u,b]=t.useState(""),N=async v=>{if(v.preventDefault(),d(!0),!a){b("Activity name field cannot be empty"),d(!1);return}try{const j={activity_name:a,description:p};(await w.patch(`${te}/api/activity/${n}/update-activity`,j)).status===200&&(g.success("Successfully update the activity",{style:{backgroundColor:"#28a745",color:"#fff"}}),setTimeout(()=>{window.location.reload()},1e3))}catch(j){console.log(j),g.error("Failed to update the activity. Please try again later.",{style:{backgroundColor:"#ff4d4d",color:"#fff"}})}finally{d(!1)}};return e.jsxs(D,{open:f,onClose:s,className:"relative z-10 ",children:[e.jsx(E,{transition:!0,className:"fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen  overflow-y-auto",children:e.jsx("div",{className:"flex w-full min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsxs(k,{transition:!0,className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95",children:[e.jsxs("div",{className:"bg-white   px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[e.jsxs(P,{as:"h1",className:"font-inter flex items-center gap-x-2 font-medium text-base tracking-wider",children:[e.jsx(U,{size:20})," Edit Activity ",a]}),e.jsx("div",{className:"mt-5 flex gap-x-5",children:e.jsxs("div",{className:"forms w-full",children:[e.jsxs("div",{className:"flex-1  ",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Activity Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",placeholder:u||"Enter activity name",value:a,onChange:v=>{c(v.target.value),u&&b("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                          ${u?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`})]}),e.jsxs("div",{className:"flex-1 mt-5",children:[e.jsx("label",{className:"text-sm font-inter text-[#979090]",children:"Description"}),e.jsx("input",{type:"text",placeholder:"Enter Helper Name",value:p,onChange:v=>h(v.target.value),className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                           `})]})]})})]}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{type:"button",onClick:N,className:y?"inline-flex w-full justify-center rounded-sm px-10 py-2 text-center text-sm font-medium text-white shadow-xs sm:ml-3 sm:w-auto bg-green-600 cursor-progress opacity-50":"inline-flex w-full justify-center rounded-sm px-10 py-2 text-center text-sm font-medium text-white shadow-xs sm:ml-3 sm:w-auto bg-green-600 cursor-pointer",disabled:y,children:y?e.jsxs("div",{className:"flex items-center gap-x-2",children:["Editing an activity ",e.jsx(S,{})]}):"Edit an activity"}),e.jsx("button",{type:"button","data-autofocus":!0,onClick:()=>s(!1),className:y?"mt-3 inline-flex w-full justify-center rounded-sm bg-white px-10 py-2 text-sm font-medium text-gray-900   cursor-not-allowed   hover:bg-gray-50 sm:mt-0 sm:w-auto border-1":"mt-3 inline-flex w-full justify-center rounded-sm bg-white px-10 py-2 text-sm font-medium text-gray-900   cursor-pointer   hover:bg-gray-50 sm:mt-0 sm:w-auto border-1",disabled:y,children:"Cancel"})]})]})})})]})}_.propTypes={open:x.bool.isRequired,setOpen:x.func.isRequired,selectedActivity:x.object};const se="https://prics-epod-backend.onrender.com";function M({open:f,setOpen:s}){const[r,n]=t.useState(""),[l,o]=t.useState(""),[a,c]=t.useState(!1),[p,h]=t.useState(""),y=async d=>{if(d.preventDefault(),c(!0),!r){h("Activity name field cannot be empty"),c(!1);return}try{const u={activity_name:r,description:l};(await w.post(`${se}/api/activity/create-activity`,u)).status===201&&(g.success("Successfully created an activity!",{style:{backgroundColor:"#28a745",color:"#fff"}}),n(""),o(""),s(!1),setTimeout(()=>{window.location.reload()},1500))}catch(u){console.error("Failed to create activity:",u),g.error("Failed to create an activity. Please try again later.",{style:{backgroundColor:"#ff4d4d",color:"#fff"}})}finally{c(!1)}};return e.jsxs(D,{open:f,onClose:s,className:"relative z-10",children:[e.jsx(E,{transition:!0,className:"fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsxs(k,{transition:!0,className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95",children:[e.jsxs("div",{className:"bg-white   px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[e.jsxs(P,{as:"h1",className:"font-inter flex items-center gap-x-2 font-medium text-base tracking-wider",children:[e.jsx(V,{size:20})," Create an Activity"]}),e.jsxs("div",{className:"forms mt-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"text-sm font-inter text-[#979090]",children:["Activity Name ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{type:"text",placeholder:"Enter activity name",value:r,onChange:d=>{n(d.target.value),p&&h("")},className:`border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 
                        ${p?"border-red-500 focus:ring-red-500 placeholder-red-500":"border-gray-300 focus:ring-blue-500 placeholder-gray-400"}`}),p&&e.jsx("p",{className:"my-1 text-red-500 text-sm",children:p})]}),e.jsxs("div",{className:"flex-1 my-5",children:[e.jsx("label",{className:"text-sm font-inter text-[#979090]",children:"Description"}),e.jsx("input",{type:"text",placeholder:"Enter description",value:l,onChange:d=>o(d.target.value),className:"border p-4 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "})]})]})]}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{type:"button",onClick:y,className:a?"inline-flex w-full justify-center rounded-md bg-green-600 px-10 py-2 text-center text-sm font-medium text-white shadow-xs opacity-50 cursor-progress sm:ml-3 sm:w-auto":"inline-flex w-full justify-center rounded-md bg-green-600 px-10 py-2 text-center text-sm font-medium text-white shadow-xs hover:opacity-80 cursor-pointer sm:ml-3 sm:w-auto",disabled:a,children:a?e.jsxs("div",{className:"flex items-center gap-x-2",children:["Creating an Activity ",e.jsx(S,{})," "]}):"Create an Activity"}),e.jsx("button",{type:"button","data-autofocus":!0,onClick:()=>s(!1),className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-10 py-2 text-sm font-medium text-gray-900 ring-1 shadow-xs ring-gray-300 cursor-pointer  ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto",children:"Cancel"})]})]})})})]})}M.propTypes={open:x.bool.isRequired,setOpen:x.func.isRequired};const ae="https://prics-epod-backend.onrender.com";function O({open:f,setOpen:s,selectedActivitiyId:r,selectedActivityName:n}){const[l,o]=t.useState(!1),a=async()=>{if(o(!0),!!r)try{(await w.delete(`${ae}/api/activity/${r}/delete-activity`)).status===200&&(g.success(`Successfully deleted activity ${n}`,{style:{backgroundColor:"#28a745",color:"#fff"}}),s(!1))}catch(c){console.error("Failed to delete appointment:",c),g.error(`Failed to delete activity ${n}. Please try again later.`,{style:{backgroundColor:"#ff4d4d",color:"#fff"}})}finally{setTimeout(()=>{o(!1),window.location.reload()},1e3)}};return e.jsxs(D,{open:f,onClose:s,className:"relative z-10",children:[e.jsx(E,{transition:!0,className:"fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsxs(k,{transition:!0,className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95",children:[e.jsxs("div",{className:"bg-white   px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[e.jsxs(P,{as:"h1",className:"font-inter flex items-center gap-x-2 font-medium text-base tracking-wider",children:[e.jsx(W,{size:25,className:"text-red-500"})," Confirm deletion of activity",e.jsx("span",{className:"capitalize",children:n}),"?"]}),e.jsx("div",{className:"mt-5 ",children:e.jsx("p",{children:"This action cannot be undone. Once deleted, you will not be able to recover it."})})]}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{type:"button",onClick:a,className:l?"inline-flex min-w-[120px] justify-center rounded-sm bg-red-600 px-10 py-2 text-center text-sm font-medium text-white shadow-xs  sm:ml-3 sm:w-auto cursor-progress opacity-50  ":"inline-flex w-full justify-center rounded-sm bg-red-600 px-10 py-2 text-center text-sm font-medium text-white shadow-xs hover:opacity-80 sm:ml-3 sm:w-auto cursor-pointer  ",disabled:l,children:l?e.jsxs("div",{className:"flex items-center gap-x-2",children:["Deleting",e.jsx(S,{})]}):"Delete"}),e.jsx("button",{type:"button","data-autofocus":!0,onClick:()=>s(!1),disabled:l,className:l?"mt-3 inline-flex w-full justify-center rounded-sm bg-white px-10 py-2 text-sm font-medium text-gray-900   cursor-not-allowed   hover:bg-gray-50 sm:mt-0 sm:w-auto border-1":"mt-3 inline-flex w-full justify-center rounded-sm bg-white px-10 py-2 text-sm font-medium text-gray-900   cursor-pointer   hover:bg-gray-50 sm:mt-0 sm:w-auto border-1",children:"Cancel"})]})]})})})]})}O.propTypes={open:x.bool.isRequired,setOpen:x.func.isRequired,selectedActivitiyId:x.string.isRequired,selectedActivityName:x.string.isRequired};function $({data:f}){const[s,r]=t.useState(!1),[n,l]=t.useState(!1),[o,a]=t.useState(!1),[c,p]=t.useState(""),[h,y]=t.useState(""),[d,u]=t.useState(1),[b,N]=t.useState(null),[v,j]=t.useState(null),[I,z]=t.useState(null);G(()=>y(c),500,[c]);const T=f.filter(i=>{var m;return i.activityName.toLowerCase().includes(h.toLowerCase())||((m=i.description)==null?void 0:m.toLowerCase().includes(h.toLowerCase()))}),A=10,R=Math.ceil(T.length/A),L=(d-1)*A,C=T.slice(L,L+A),F=(i,m)=>{j(i),z(m),r(!0)},q=i=>{const m=C.find(H=>H._id===i);N(m),l(!0)};return e.jsxs(e.Fragment,{children:[o&&e.jsx(M,{open:o,setOpen:a}),n&&e.jsx(_,{open:n,setOpen:l,selectedActivity:b}),s&&e.jsx(O,{open:s,setOpen:r,selectedActivitiyId:v,selectedActivityName:I}),e.jsx("div",{className:"table_section mt-5 font-inter w-full  ",children:e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"-m-1.5 overflow-x-auto",children:e.jsx("div",{className:"p-1.5 min-w-full inline-block align-middle",children:e.jsxs("div",{className:"border rounded-lg divide-y divide-gray-200",children:[e.jsxs("div",{className:"py-5 px-4 flex justify-between items-center",children:[e.jsx(J,{searchTerm:c,setSearchTerm:p}),e.jsx("div",{children:e.jsx("button",{title:"Add Activity",className:"cursor-pointer",onClick:()=>a(!0),children:e.jsx(ee,{size:20})})})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"th-user-table",children:e.jsx("tr",{children:Y.map((i,m)=>e.jsx("th",{className:"px-6 py-3",children:i},m))})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:C.map((i,m)=>e.jsxs("tr",{className:m%2===0?"bg-[#F3F4F6]":"",children:[e.jsx("td",{className:"td-admin-table ",children:m+1}),e.jsx("td",{className:"td-admin-table capitalize",children:i.activityName}),e.jsx("td",{className:"td-admin-table ",children:i.description}),e.jsxs("td",{className:"td-user-table flex gap-x-5    ",children:[e.jsx("button",{onClick:()=>F(i._id,i.activityName),className:"text-red-600 cursor-pointer outline-none",children:"Delete"}),e.jsx("button",{onClick:()=>q(i._id),className:"text-green-600 cursor-pointer outline-none",children:"Edit"})]})]},i._id))})]})}),e.jsx(B,{currentPage:d,setCurrentPage:u,totalPages:R}),C.length===0&&e.jsx("p",{className:"text-gray-500 font-medium ml-5 py-5",children:"No activity list available."})]})})})})})]})}$.propTypes={data:x.array};const ie="https://prics-epod-backend.onrender.com";function ve(){const[f,s]=t.useState([]),[r,n]=t.useState(!1);return t.useEffect(()=>{(async()=>{n(!0);try{const a=(await w.get(`${ie}/api/activity`)).data.activity;s(a)}catch(o){console.error("Failed to retrieve activity:",o),g.error("We could not retrieve your activity list data. Please try again later.",{style:{backgroundColor:"#ff4d4d",color:"#fff"}})}finally{n(!1)}})()},[]),e.jsxs("div",{className:"my-5 mx-4 w-[100vh]",children:[e.jsx(X,{title:"activity",description:"Overview of the activity list for your appointment."}),r?e.jsx(Q,{}):e.jsx($,{data:f})]})}export{ve as default};
