import{a as d,r as c,c as u,j as e}from"./index-B_BwmF1n.js";import{L as m}from"./loading-spinner-B8jMO9FB.js";import{H as x}from"./page-heading-Dndd7_7V.js";function h(){const{user:n,signOut:a}=d(),o=n.username,i=n.name,[t,s]=c.useState(!1),r=u(),l=()=>{s(!0),a(),setTimeout(()=>{r("/signin"),s(!1)},1e3)};return e.jsx("div",{className:"m-5 ",children:e.jsxs("div",{children:[e.jsx(x,{title:"account settings",description:"View your account details"}),e.jsxs("div",{className:"min-w-[320px]",children:[e.jsxs("div",{className:"flex flex-col my-5  ",children:[e.jsx("label",{className:"font-inter text-sm",children:"Username"}),e.jsx("input",{value:o,type:"text",placeholder:"username",className:"border-none bg-gray-200 outline-none p-3 rounded-lg mt-2 cursor-not-allowed text-gray-500 ",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col my-5  ",children:[e.jsx("label",{className:"font-inter text-sm",children:"Name"}),e.jsx("input",{value:i,type:"text",placeholder:"name",className:"border-none bg-gray-200 outline-none p-3 rounded-lg mt-2 cursor-not-allowed text-gray-500 ",disabled:!0})]}),e.jsx("button",{onClick:l,className:t?"w-full p-3 rounded-md bg-[#1877F2] text-white font-inter font-bold hover:opacity-75 transition-opacity duration-300 2xl:p-4 cursor-not-allowed opacity-50":"w-full p-3 rounded-md bg-[#1877F2] text-white font-inter font-bold hover:opacity-75 transition-opacity duration-300 2xl:p-4 cursor-pointer",disabled:t,children:t?e.jsx(m,{}):"Sign out"})]})]})})}export{h as default};
