(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{262:function(e,a,t){e.exports=t(438)},438:function(e,a,t){"use strict";t.r(a);var n,r,l=t(0),c=t.n(l),i=t(62),o=t.n(i),s=(t(266),t(29)),u=t.n(s),m=t(44),d=t(26),p=t(39),E=t.n(p),h=t(76),b=t(55),f=t(446),v=t(457),g=t(455),O=t(447),y="http://localhost:3001/api",C=t(63),j=t(19),k=function(e){return{type:"SET_PATIENT_LIST",payload:e}},S=function(e){return{type:"ADD_SENSITIVE_PATIENT",payload:e}},D=function(e){return{type:"ADD_PATIENT",payload:e}},w=function(e){return{type:"SET_DIAGNOSIS_LIST",payload:e}},N={patients:{},sensitivePatients:{},diagnosis:{}},H=Object(l.createContext)([N,function(){return N}]),T=function(e){var a=e.reducer,t=e.children,n=Object(l.useReducer)(a,N),r=Object(d.a)(n,2),i=r[0],o=r[1];return c.a.createElement(H.Provider,{value:[i,o]},t)},Y=function(){return Object(l.useContext)(H)},x=t(451),F=t(449),I=t(458),A=t(456),M=t(15),R=t(448),P=t(453),_=function(e){var a=e.name,t=e.label,n=e.options;return c.a.createElement(R.a.Field,null,c.a.createElement("label",null,t),c.a.createElement(M.b,{as:"select",name:a,className:"ui dropdown"},n.map((function(e){return c.a.createElement("option",{key:e.value,value:e.value},e.label||e.value)}))))},L=function(e){var a=e.field,t=e.label,n=e.placeholder;return c.a.createElement(R.a.Field,null,c.a.createElement("label",null,t),c.a.createElement(M.b,Object.assign({placeholder:n},a)),c.a.createElement("div",{style:{color:"red"}},c.a.createElement(M.a,{name:a.name})))};!function(e){e.Male="male",e.Female="female",e.Other="other"}(n||(n={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(r||(r={}));var q=[{value:n.Male,label:"Male"},{value:n.Female,label:"Female"},{value:n.Other,label:"Other"}],V=function(e){var a=e.onSubmit,t=e.onCancel;return c.a.createElement(M.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:n.Other},onSubmit:a,validate:function(e){var a={};return e.name||(a.name="Field is required"),e.ssn||(a.ssn="Field is required"),e.dateOfBirth||(a.dateOfBirth="Field is required"),e.occupation||(a.occupation="Field is required"),a}},(function(e){var a=e.isValid,n=e.dirty;return c.a.createElement(M.c,{className:"form ui"},c.a.createElement(M.b,{label:"Name",placeholder:"Name",name:"name",component:L}),c.a.createElement(M.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:L}),c.a.createElement(M.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:L}),c.a.createElement(M.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:L}),c.a.createElement(_,{label:"Gender",name:"gender",options:q}),c.a.createElement(A.a,null,c.a.createElement(A.a.Column,{floated:"left",width:5},c.a.createElement(g.a,{type:"button",onClick:t,color:"red"},"Cancel")),c.a.createElement(A.a.Column,{floated:"right",width:5},c.a.createElement(g.a,{type:"submit",floated:"right",color:"green",disabled:!n||!a},"Add"))))}))},B=function(e){var a=e.modalOpen,t=e.onClose,n=e.onSubmit,r=e.error;return c.a.createElement(F.a,{open:a,onClose:t,centered:!1,closeIcon:!0},c.a.createElement(F.a.Header,null,"Add a new patient"),c.a.createElement(F.a.Content,null,r&&c.a.createElement(I.a,{inverted:!0,color:"red"},"Error: ".concat(r)),c.a.createElement(V,{onSubmit:n,onCancel:t})))},G=t(460),z=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],J=function(e){var a=e.rating,t=e.showText;return c.a.createElement("div",{className:"health-bar"},c.a.createElement(G.a,{icon:"heart",disabled:!0,rating:4-a,maxRating:4}),t?c.a.createElement("p",null,z[a]):null)},U=function(){var e=Y(),a=Object(d.a)(e,2),t=a[0].patients,n=a[1],r=c.a.useState(!1),l=Object(d.a)(r,2),i=l[0],o=l[1],s=c.a.useState(),p=Object(d.a)(s,2),b=p[0],v=p[1],O=function(){o(!1),v(void 0)},C=function(){var e=Object(m.a)(u.a.mark((function e(a){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("".concat(y,"/patients"),a);case 3:t=e.sent,r=t.data,n(D(r)),O(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.response.data),v(e.t0.response.data.error);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(f.a,{textAlign:"center"},c.a.createElement("h3",null,"Patient list")),c.a.createElement(x.a,{celled:!0},c.a.createElement(x.a.Header,null,c.a.createElement(x.a.Row,null,c.a.createElement(x.a.HeaderCell,null,"Name"),c.a.createElement(x.a.HeaderCell,null,"Gender"),c.a.createElement(x.a.HeaderCell,null,"Occupation"),c.a.createElement(x.a.HeaderCell,null,"Health Rating"))),c.a.createElement(x.a.Body,null,Object.values(t).map((function(e){return c.a.createElement(x.a.Row,{key:e.id},c.a.createElement(x.a.Cell,null,c.a.createElement(h.b,{to:"/patients/".concat(e.id)},e.name)),c.a.createElement(x.a.Cell,null,e.gender),c.a.createElement(x.a.Cell,null,e.occupation),c.a.createElement(x.a.Cell,null,c.a.createElement(J,{showText:!1,rating:1})))})))),c.a.createElement(B,{modalOpen:i,onSubmit:C,error:b,onClose:O}),c.a.createElement(g.a,{onClick:function(){return o(!0)}},"Add New Patient"))},K=t(54),Q=t(454),W=t(452),X=function(e){var a=e.diagnosisCodes,t=Y(),n=Object(d.a)(t,1)[0].diagnosis;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement(Q.a.Content,null,c.a.createElement(Q.a.Description,null,c.a.createElement(W.a,{items:null===a||void 0===a?void 0:a.map((function(e){var a=Object.values(n).find((function(a){return a.code===e}));return"".concat(e," ").concat(a?a.name:"")}))}))):c.a.createElement(c.a.Fragment,null))},Z=function(e){var a=e.entry,t="green";switch(a.healthCheckRating){case 0:break;case 1:t="yellow";break;case 2:t="red";break;case 3:t="violet"}return c.a.createElement(Q.a,null,c.a.createElement(Q.a.Content,null,c.a.createElement(Q.a.Header,null,a.date,c.a.createElement(K.a,{name:"doctor",size:"large"})),c.a.createElement(Q.a.Meta,null,a.specialist),c.a.createElement(Q.a.Description,{content:a.description}),c.a.createElement(Q.a.Description,null,c.a.createElement(K.a,{name:"heart",size:"small",color:t}))),c.a.createElement(X,{diagnosisCodes:a.diagnosisCodes}))},$=function(e){var a=e.entry;return c.a.createElement(Q.a,null,c.a.createElement(Q.a.Content,null,c.a.createElement(Q.a.Header,null,a.date,c.a.createElement(K.a,{name:"stethoscope",size:"large"})),c.a.createElement(Q.a.Meta,null,a.specialist),c.a.createElement(Q.a.Description,{content:a.description})),c.a.createElement(X,{diagnosisCodes:a.diagnosisCodes}))},ee=function(e){var a=e.entry;return c.a.createElement(Q.a,null,c.a.createElement(Q.a.Content,null,c.a.createElement(Q.a.Header,null,a.date,c.a.createElement(K.a,{name:"hospital",size:"large"})),c.a.createElement(Q.a.Meta,null,a.specialist),c.a.createElement(Q.a.Description,{content:a.description})),c.a.createElement(X,{diagnosisCodes:a.diagnosisCodes}))},ae=function(e){var a=e.entry,t=Y(),n=Object(d.a)(t,2),r=n[0].diagnosis,i=n[1];switch(Object(l.useEffect)((function(){r&&0!==Object.values(r).length||function(){var e=Object(m.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(y,"/diagnosis"));case 3:a=e.sent,t=a.data,i(w(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[i,r]),a.type){case"HealthCheck":return c.a.createElement(Z,{entry:a});case"OccupationalHealthcare":return c.a.createElement($,{entry:a});case"Hospital":return c.a.createElement(ee,{entry:a});default:return function(e){throw new Error("Unhandled discriminated union member: ".concat(JSON.stringify(e)))}(a)}},te=function(e){var a=e.name,t=e.label,n=e.options;return c.a.createElement(R.a.Field,null,c.a.createElement("label",null,t),c.a.createElement(M.b,{as:"select",name:a,className:"ui dropdown"},n.map((function(e){return c.a.createElement("option",{key:e.value,value:e.value},e.label||e.value)}))))},ne=function(e){var a=e.field,t=e.label,n=e.placeholder;return c.a.createElement(R.a.Field,null,c.a.createElement("label",null,t),c.a.createElement(M.b,Object.assign({reqplaceholder:n},a)),c.a.createElement("div",{style:{color:"red"}},c.a.createElement(M.a,{name:a.name})))},re=function(e){var a=e.diagnoses,t=e.setFieldValue,n=e.setFieldTouched,r="diagnosisCodes",l=a.map((function(e){return{key:e.code,text:"".concat(e.name," (").concat(e.code,")"),value:e.code}}));return c.a.createElement(R.a.Field,null,c.a.createElement("label",null,"Diagnoses"),c.a.createElement(P.a,{fluid:!0,multiple:!0,search:!0,selection:!0,options:l,onChange:function(e,a){n(r,!0),t(r,a.value)}}),c.a.createElement(M.a,{name:r}))},le=[{value:"Hospital",label:"Hospital"},{value:"OccupationalHealthcare",label:"OccupationalHealthcare"},{value:"HealthCheck",label:"HealthCheck"}],ce=Object.keys(r).filter((function(e){return!isNaN(parseInt(e))})).map((function(e){return{value:e,label:r[parseInt(e)]}})),ie=function(e){var a=e.onSubmit,t=e.onCancel,n=Y(),r=Object(d.a)(n,1)[0].diagnosis,l=new Date;return c.a.createElement(M.d,{initialValues:{type:"Hospital",description:"",date:"".concat(l.getFullYear(),"-").concat((l.getMonth()+1).toString().padStart(2,"0"),"-").concat(l.getDate().toString().padStart(2,"0")),specialist:"",healthCheckRating:"0",diagnosisCodes:[],employerName:"",sickLeave:{startDate:"",endDate:""},discharge:{date:"",criteria:""}},onSubmit:a,validate:function(e){var a="Field is required",t={};switch(e.type||(t.type=a),e.description||(t.description=a),e.date?function(e){var a=new Date(e);return"".concat(a.getFullYear(),"-").concat((a.getMonth()+1).toString().padStart(2,"0"),"-").concat(a.getDate().toString().padStart(2,"0"))===e}(e.date)||(t.date="Invalid date specified, should be YYYY-MM-DD"):t.date=a,e.specialist||(t.specialist=a),e.type){case"Hospital":e.discharge&&e.discharge.date&&e.discharge.criteria||(t.discharge="Discharge date and criteria is required.");break;case"OccupationalHealthcare":e.employerName||(t.employerName=a);break;case"HealthCheck":e.healthCheckRating||(t.healthCheckRating=a);break;default:e.type}return t}},(function(e){var a=e.isValid,n=e.dirty,l=e.values,i=e.setFieldValue,o=e.setFieldTouched;return c.a.createElement(M.c,{className:"form ui"},c.a.createElement(te,{label:"Type",name:"type",options:le}),c.a.createElement(M.b,{label:"Description",placeholder:"Description",name:"description",component:ne}),c.a.createElement(M.b,{label:"Date",placeholder:"YYYY-MM-DD",name:"date",component:ne}),c.a.createElement(M.b,{label:"Specialist",placeholder:"Specialist",name:"specialist",component:ne}),c.a.createElement(re,{setFieldValue:i,setFieldTouched:o,diagnoses:Object.values(r)}),"HealthCheck"===l.type&&c.a.createElement(te,{label:"Health-check Rating",name:"healthCheckRating",options:ce}),"OccupationalHealthcare"===l.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(M.b,{label:"Employer Name",placeholder:"Employer Name",name:"employerName",component:ne}),c.a.createElement("h4",{className:"ui dividing header"},"Sick Leave"),c.a.createElement("div",{className:"equal width fields"},c.a.createElement(M.b,{label:"Start Date",placeholder:"YYYY-MM-DD",name:"sickLeave.startDate",component:ne}),c.a.createElement(M.b,{label:"End Date",placeholder:"YYYY-MM-DD",name:"sickLeave.endDate",component:ne}))),"Hospital"===l.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"ui dividing header"},"Discharge"),c.a.createElement("div",{style:{color:"red"}},c.a.createElement(M.a,{name:"discharge"})),c.a.createElement("div",{className:"equal width fields"},c.a.createElement(M.b,{label:"Date",placeholder:"YYYY-MM-DD",name:"discharge.date",component:ne}),c.a.createElement(M.b,{label:"Criteria",placeholder:"Criteria",name:"discharge.criteria",component:ne}))),c.a.createElement(A.a,null,c.a.createElement(A.a.Column,{floated:"left",width:5},c.a.createElement(g.a,{type:"button",onClick:t,color:"red"},"Cancel")),c.a.createElement(A.a.Column,{floated:"right",width:5},c.a.createElement(g.a,{type:"submit",floated:"right",color:"green",disabled:!n||!a},"Add"))))}))},oe=function(e){var a=e.modalOpen,t=e.onClose,n=e.onSubmit,r=e.error;return c.a.createElement(F.a,{open:a,onClose:t,centered:!1,closeIcon:!0},c.a.createElement(F.a.Header,null,"Add a new entry"),c.a.createElement(F.a.Content,null,r&&c.a.createElement(I.a,{inverted:!0,color:"red"},"Error: ".concat(r)),c.a.createElement(ie,{onSubmit:n,onCancel:t})))},se=function(){var e=Y(),a=Object(d.a)(e,2),t=a[0].sensitivePatients,n=a[1],r=c.a.useState(!1),i=Object(d.a)(r,2),o=i[0],s=i[1],p=Object(b.f)().id,h=Object.values(t).find((function(e){return e.id===p})),O=function(){s(!1)},C=function(){var e=Object(m.a)(u.a.mark((function e(a){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),e.next=4,E.a.post("".concat(y,"/patients/").concat(p,"/entries"),a);case 4:t=e.sent,r=t.data,console.log(r),n(S(r)),O(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){h||function(){var e=Object(m.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(y,"/patients/").concat(p));case 3:a=e.sent,t=a.data,n(S(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[n,p,h]),c.a.createElement("div",{className:"App"},c.a.createElement(f.a,{textAlign:"left"},h?c.a.createElement("div",null,c.a.createElement(v.a,{as:"h1"},h.name," ","male"===h.gender?c.a.createElement(K.a,{name:"mars"}):"female"===h.gender?c.a.createElement(K.a,{name:"venus"}):c.a.createElement(K.a,{name:"venus mars"})),c.a.createElement("div",null,"ssn: ",h.ssn),c.a.createElement("div",null,"occupation: ",h.occupation),c.a.createElement(v.a,{as:"h3"},"entries"),c.a.createElement(Q.a.Group,null,h.entries.map((function(e){return c.a.createElement(ae,{key:e.id,entry:e})})))):c.a.createElement(v.a,null,"patient not found")),c.a.createElement(oe,{modalOpen:o,onSubmit:C,onClose:O}),c.a.createElement(g.a,{onClick:function(){return s(!0)}},"Add New Entry"))},ue=function(){var e=Y(),a=Object(d.a)(e,2)[1];return c.a.useEffect((function(){E.a.get("".concat(y,"/ping")),function(){var e=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(y,"/patients"));case 3:t=e.sent,n=t.data,a(k(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),c.a.createElement("div",{className:"App"},c.a.createElement(h.a,null,c.a.createElement(f.a,null,c.a.createElement(v.a,{as:"h1"},"Patientor"),c.a.createElement(g.a,{as:h.b,to:"/",primary:!0},"Home"),c.a.createElement(O.a,{hidden:!0}),c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",render:function(){return c.a.createElement(U,null)}}),c.a.createElement(b.a,{path:"/patients/:id"},c.a.createElement(se,null))))))};o.a.render(c.a.createElement(T,{reducer:function(e,a){switch(a.type){case"SET_PATIENT_LIST":return Object(j.a)(Object(j.a)({},e),{},{patients:Object(j.a)(Object(j.a)({},a.payload.reduce((function(e,a){return Object(j.a)(Object(j.a)({},e),{},Object(C.a)({},a.id,a))}),{})),e.patients)});case"ADD_PATIENT":return Object(j.a)(Object(j.a)({},e),{},{patients:Object(j.a)(Object(j.a)({},e.patients),{},Object(C.a)({},a.payload.id,a.payload))});case"ADD_SENSITIVE_PATIENT":return Object(j.a)(Object(j.a)({},e),{},{sensitivePatients:Object(j.a)(Object(j.a)({},e.sensitivePatients),{},Object(C.a)({},a.payload.id,a.payload))});case"SET_DIAGNOSIS_LIST":return Object(j.a)(Object(j.a)({},e),{},{diagnosis:Object(j.a)(Object(j.a)({},a.payload.reduce((function(e,a){return Object(j.a)(Object(j.a)({},e),{},Object(C.a)({},a.code,a))}),{})),e.diagnosis)});default:return e}}},c.a.createElement(ue,null)),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.362cc302.chunk.js.map