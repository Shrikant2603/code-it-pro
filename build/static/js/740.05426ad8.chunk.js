"use strict";(self.webpackChunkcode_it_pro=self.webpackChunkcode_it_pro||[]).push([[740],{4132:function(e,s,l){l.d(s,{Z:function(){return h}});var t=l(2791),n=l(9406),r=l(9439),a=l(1213),o=l(8827),i=l(184),d=function(){var e=(0,t.useContext)(n.t).closeModal,s=(0,t.useContext)(o.xm).addFolder,l=(0,t.useState)(""),d=(0,r.Z)(l,2),c=d[0],u=d[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,i.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return e()}})}),(0,i.jsxs)("div",{className:" px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,i.jsx)("h2",{children:"Create a New Folder"}),(0,i.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},value:c,placeholder:"Please enter folder title",className:" border-[.5px] text-sm border-gray rounded-lg shadow-sm p-2 w-full"}),(0,i.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray shadow-lg",onClick:function(){s(c),e()},children:"Create Folder"})]})]})},c=l(8494),u=function(){var e=(0,t.useContext)(n.t),s=e.isOpenModal,l=e.closeModal,d=(0,t.useContext)(o.xm).addPlayground,u=[{value:"javascript",label:"javascript"},{value:"python",label:"python"},{value:"java",label:"java"},{value:"cpp",label:"cpp"}],x=s.identifiers.folderId,f=(0,t.useState)(""),m=(0,r.Z)(f,2),p=m[0],h=m[1],j=(0,t.useState)(u[0]),g=(0,r.Z)(j,2),b=g[0],v=g[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,i.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return l()}})}),(0,i.jsxs)("div",{className:"px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,i.jsx)("h2",{children:" Create a New PlayGround"}),(0,i.jsx)("input",{type:"text",value:p,onChange:function(e){return h(e.target.value)},placeholder:"Please enter playground title",className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,i.jsx)(c.ZP,{options:u,value:b,onChange:function(e){v(e)}}),(0,i.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray-50 shadow-lg",onClick:function(){d(x,p,b.value),l()},children:"Create PlayGround"})]})]})},x=function(){var e=(0,t.useContext)(n.t).closeModal,s=(0,t.useContext)(o.xm).addPlaygroundAndFolder,l=[{value:"javascript",label:"javascript"},{value:"python",label:"python"},{value:"java",label:"java"},{value:"cpp",label:"cpp"}],d=(0,t.useState)(""),u=(0,r.Z)(d,2),x=u[0],f=u[1],m=(0,t.useState)(""),p=(0,r.Z)(m,2),h=p[0],j=p[1],g=(0,t.useState)(l[0]),b=(0,r.Z)(g,2),v=b[0],y=b[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex flex-row justify-end p-4 ",children:(0,i.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return e()}})}),(0,i.jsxs)("div",{className:"px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,i.jsx)("h2",{children:" Create a new PlayGround & new Folder"}),(0,i.jsx)("input",{type:"text",value:x,onChange:function(e){return f(e.target.value)},placeholder:"Please enter a folder title",className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,i.jsx)("input",{type:"text",value:h,onChange:function(e){return j(e.target.value)},placeholder:"Please enter a playground title",className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,i.jsx)(c.ZP,{options:l,value:v,onChange:function(e){y(e)}}),(0,i.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray-50 shadow-lg",onClick:function(){s(x,h,v.value),e()},children:"Create Folder & PlayGround"})]})]})},f=function(){var e=(0,t.useContext)(n.t),s=e.closeModal,l=e.isOpenModal,d=(0,t.useContext)(o.xm),c=d.editFolderTitle,u=d.folders,x=l.identifiers.folderId,f=(0,t.useState)(u[x].title),m=(0,r.Z)(f,2),p=m[0],h=m[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,i.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return s()}})}),(0,i.jsxs)("div",{className:" px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,i.jsx)("h2",{children:"Edit Folder"}),(0,i.jsx)("input",{type:"text",value:p,onChange:function(e){return h(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,i.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray-50 shadow-lg",onClick:function(){c(x,p),s()},children:"Proceed"})]})]})},m=function(){var e=(0,t.useContext)(n.t),s=e.closeModal,l=e.isOpenModal,d=(0,t.useContext)(o.xm),c=d.editPlaygroundTitle,u=d.folders,x=l.identifiers,f=x.folderId,m=x.cardID,p=(0,t.useState)(u[f].playgrounds[m].title),h=(0,r.Z)(p,2),j=h[0],g=h[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,i.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return s()}})}),(0,i.jsxs)("div",{className:" px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,i.jsx)("h2",{children:"Edit PlayGround"}),(0,i.jsx)("input",{type:"text",value:j,onChange:function(e){return g(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,i.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray-50 shadow-lg",onClick:function(){c(f,m,j),s()},children:"Proceed"})]})]})},p=function(){return(0,i.jsx)("div",{className:"p-4 border-2 rounded-xl",children:"Loading..."})};var h=function(){var e=(0,t.useContext)(n.t).isOpenModal.modalType;return(0,i.jsx)("div",{className:"flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,i.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",onClick:function(e){e.stopPropagation()},children:(0,i.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-[30rem] bg-white outline-none focus:outline-none",children:[1===e&&(0,i.jsx)(d,{}),2===e&&(0,i.jsx)(u,{}),3===e&&(0,i.jsx)(x,{}),4===e&&(0,i.jsx)(f,{}),5===e&&(0,i.jsx)(m,{}),6===e&&(0,i.jsx)(p,{})]})})})}},740:function(e,s,l){l.r(s),l.d(s,{default:function(){return h}});var t=l(2791),n=l(9406),r=l(184),a=function(){var e=(0,t.useContext)(n.t).openModal;return(0,r.jsx)("div",{className:"border-2 border-black h-screen bg-black flex justify-end ",children:(0,r.jsxs)("div",{className:"mx-auto flex flex-col items-center justify-center gap-3",children:[(0,r.jsx)("img",{src:"./logo.png",alt:"logo"}),(0,r.jsxs)("h3",{className:"font-semibod text-white text-4xl",children:[(0,r.jsx)("span",{className:"font-bold",children:"Code-It"})," Pro"]}),(0,r.jsx)("h3",{className:"font-semibod text-white text-2xl opacity-[.7]",children:"Code. Compile. Debug."}),(0,r.jsxs)("button",{className:"flex items-center justify-between py-1 px-6 w-full  bg-white shadow-white\r rounded-full ease-in-out duration-500 hover:scale-105 \r ",onClick:function(){return e({show:!0,modalType:3,identifiers:{folderId:"",cardID:""}})},children:[(0,r.jsx)("span",{className:"font-bold text-3xl",children:"+"})," ",(0,r.jsx)("span",{className:"text-base",children:"Create new Playground"})]})]})})},o=l(9439),i=l(3728),d=l(7692),c=l(71),u=function(e){var s=e.children;return(0,r.jsx)("div",{className:"hover:scale-105 bg-white h-auto drop-shadow-xl rounded-lg p-6 ease-in-out duration-500",children:s})},x=l(8827),f=l(7689),m=function(){var e=(0,t.useContext)(n.t).openModal,s=(0,t.useContext)(x.xm),l=s.folders,a=s.deleteFolder,m=s.deleteCard,p=(0,f.s0)();return(0,r.jsxs)("div",{className:"h-screen p-8 overflow-y-auto",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("h2",{children:["My ",(0,r.jsx)("span",{className:"font-semibold text-2xl",children:"PlayGround"})]}),(0,r.jsxs)("h4",{className:"cursor-pointer flex items-center",onClick:function(){return e({show:!0,modalType:1,identifiers:{folderId:"",cardID:""}})},children:[(0,r.jsx)("span",{className:"font-semibold text-2xl",children:"+"})," New Folder"]})]}),(0,r.jsx)("hr",{className:"mt-6 border-2 "}),Object.entries(l).map((function(s){var l=(0,o.Z)(s,2),t=l[0],n=l[1];return(0,r.jsxs)("div",{className:"flex flex-col my-8",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex items-center cursor-default",children:[(0,r.jsx)(i.FYx,{size:"2em"}),(0,r.jsx)("h3",{className:"font-semibold",children:n.title})]}),(0,r.jsxs)("div",{className:"flex gap-4 items-center cursor-pointer",children:[(0,r.jsx)(d.vpV,{size:"1.5em",onClick:function(){e({show:!0,modalType:4,identifiers:{folderId:t,cardID:""}})}}),(0,r.jsx)(c.BFV,{size:"1.5em",onClick:function(){return a(t)}}),(0,r.jsxs)("h4",{className:"flex items-center",onClick:function(){e({show:!0,modalType:2,identifiers:{folderId:t,cardID:""}})},children:[(0,r.jsx)("span",{className:"font-bold text-2xl",children:"+"})," New playground"]})]})]}),(0,r.jsx)("hr",{className:"mb-12 mt-4 bg-black"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 cursor-pointer",children:Object.entries(n.playgrounds).map((function(s){var l=(0,o.Z)(s,2),n=l[0],a=l[1];return(0,r.jsx)(u,{children:(0,r.jsxs)("div",{className:"flex items-center justify-between",onClick:function(e){e.stopPropagation(),p("/code/".concat(t,"/").concat(n))},children:[(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)("img",{src:"/logo-small.png",alt:"logo"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:a.title}),(0,r.jsxs)("h4",{children:["language: ",a.language]})]})]}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",onClick:function(e){e.stopPropagation()},children:[(0,r.jsx)(d.vpV,{size:"1.5em",onClick:function(){return e({show:!0,modalType:5,identifiers:{folderId:t,cardID:n}})}}),(0,r.jsx)(c.BFV,{size:"1.5em",onClick:function(){return m(t,n)}})]})]})},n)}))}),(0,r.jsx)("hr",{className:"mt-6 border-2"})]},t)}))]})},p=l(4132),h=function(){var e=(0,t.useContext)(n.t).isOpenModal;return(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[(0,r.jsx)("div",{className:"sm:w-full md:w-full w-5/12",children:(0,r.jsx)(a,{})}),(0,r.jsx)("div",{className:"sm:w-full md:w-full w-7/12",children:(0,r.jsx)(m,{})}),e.show&&(0,r.jsx)(p.Z,{})]})}}}]);
//# sourceMappingURL=740.05426ad8.chunk.js.map