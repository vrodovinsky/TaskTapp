import{N as r}from"./Navbar-2324159a.js";import{a as d}from"./axios-707ed124.js";import{_ as p,r as _,o as m,c as h,b as e,a as b,D as i,E as c,G as v,p as f,f as g}from"./index-981f3b4c.js";const x={name:"Home",components:{Navbar:r},data(){return{user:this.$auth0.user}},methods:{updateInfo(){const s=document.querySelector("#name").value,t=document.querySelector(".email").value;document.querySelector("#phoneNumber").value,console.log(this.$auth0),console.log(this.$auth0.user),console.log(JSON.stringify(this.$auth0.user)),console.log(JSON.stringify()),d.put("http://localhost:3000/updateAccount/"+this.$auth0.user._value.sub,{name:s,email:t}).then(n=>{}).catch(n=>{console.log(n)})}}},a=s=>(f("data-v-6c02b3b9"),s=s(),g(),s),y={class:"navbar"},N=a(()=>e("h1",{id:"title",class:"is-size-1 has-text-weight-bold pl-3"},"Account",-1)),S={class:"userInfo"},I={id:"username"},w={class:"field"},$=a(()=>e("label",{class:"label is-size-4 has-text-weight-semibold"},"Display Name",-1)),V={class:"control"},q={id:"email"},z=a(()=>e("label",{class:"label is-size-4 has-text-weight-semibold"},"Email",-1)),B={class:"control",id:"info"},D=a(()=>e("div",{id:"button"},[e("button",{class:"button"},"Update Info")],-1));function E(s,t,n,U,o,k){const u=_("navbar");return m(),h(v,null,[e("div",y,[b(u)]),e("main",null,[N,e("div",S,[e("div",I,[e("div",w,[$,e("div",V,[i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.user.name=l),id:"name",class:"input",type:"text"},null,512),[[c,o.user.name]])])])]),e("div",q,[z,e("div",B,[i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>o.user.email=l),class:"input email",type:"text"},null,512),[[c,o.user.email]])])])]),D])],64)}const C=p(x,[["render",E],["__scopeId","data-v-6c02b3b9"]]);export{C as default};