import{N as d}from"./Navbar-2324159a.js";import{a as p}from"./axios-707ed124.js";import{_,r as h,o as m,c as f,b as e,a as v,D as i,P as n,e as c,G as b,p as y,f as k}from"./index-981f3b4c.js";const R={name:"Home",components:{Navbar:d},data(){return{userRole:"",user:this.$auth0.user}},methods:{isProvider(){p.put("http://localhost:3000/userRole/"+this.$auth0.user._value.sub,{role:this.userRole}).then(s=>{const o=s.data;console.log(o._id);const a=this.$route.query.redirect||"/";this.$router.push(a)}).catch(s=>{console.log(s)})}}},x=s=>(y("data-v-c6b70efc"),s=s(),k(),s),S={class:"navbar"},T=x(()=>e("h1",{id:"title",class:"is-size-1 has-text-weight-bold"},"What do you want to use TaskTapp for?",-1)),g={id:"checks",class:"field is-size-3"},P={id:"first",for:""},N={for:""};function V(s,o,a,w,r,l){const u=h("navbar");return m(),f(b,null,[e("div",S,[v(u)]),e("main",null,[T,e("form",null,[e("div",g,[e("label",P,[i(e("input",{class:"check","onUpdate:modelValue":o[0]||(o[0]=t=>r.userRole=t),value:"rol_Qyye4GcdiGS4c6hu",name:"userType",type:"radio"},null,512),[[n,r.userRole]]),c(" Sell my services ")]),e("label",N,[i(e("input",{class:"check","onUpdate:modelValue":o[1]||(o[1]=t=>r.userRole=t),value:"rol_sn3XBo7RlfuZixOf",name:"userType",type:"radio"},null,512),[[n,r.userRole]]),c(" Find Service Providers ")])]),e("button",{class:"button is-block is-dark is-large",onClick:o[2]||(o[2]=(...t)=>l.isProvider&&l.isProvider(...t)),style:{"font-family":"Montserrat"}},"Get Started")])])],64)}const z=_(R,[["render",V],["__scopeId","data-v-c6b70efc"]]);export{z as default};