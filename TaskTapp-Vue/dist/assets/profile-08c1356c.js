import{N as r}from"./Navbar-792b0b7e.js";import{a as d}from"./axios-707ed124.js";import{_ as p,r as _,o as m,c as h,b as e,a as v,D as l,E as c,G as b,p as f,f as g}from"./index-5564841a.js";const x={name:"Home",components:{Navbar:r},data(){return{user:this.$auth0.user}},methods:{updateInfo(){const s=document.querySelector("#name").value,t=document.querySelector(".email").value;document.querySelector("#phoneNumber").value,console.log(this.$auth0),console.log(this.$auth0.user),console.log(JSON.stringify(this.$auth0.user)),console.log(JSON.stringify()),d.put("https://api.tasktapp.com/updateAccount/"+this.$auth0.user._value.sub,{name:s,email:t}).then(n=>{}).catch(n=>{console.log(n)})}}},a=s=>(f("data-v-160eb354"),s=s(),g(),s),y={class:"navbar"},N=a(()=>e("h1",{id:"title",class:"is-size-1 has-text-weight-bold pl-3"},"Account",-1)),S={class:"userInfo"},I={id:"username"},w={class:"field"},$=a(()=>e("label",{class:"label is-size-4 has-text-weight-semibold"},"Display Name",-1)),V={class:"control"},k={id:"email"},q=a(()=>e("label",{class:"label is-size-4 has-text-weight-semibold"},"Email",-1)),z={class:"control",id:"info"},B=a(()=>e("div",{id:"button"},[e("button",{class:"button"},"Update Info")],-1));function D(s,t,n,E,o,U){const u=_("navbar");return m(),h(b,null,[e("div",y,[v(u)]),e("main",null,[N,e("div",S,[e("div",I,[e("div",w,[$,e("div",V,[l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>o.user.name=i),id:"name",class:"input",type:"text"},null,512),[[c,o.user.name]])])])]),e("div",k,[q,e("div",z,[l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>o.user.email=i),class:"input email",type:"text"},null,512),[[c,o.user.email]])])])]),B])],64)}const C=p(x,[["render",D],["__scopeId","data-v-160eb354"]]);export{C as default};