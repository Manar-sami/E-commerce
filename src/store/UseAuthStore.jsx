import { create } from 'zustand'

 const UseAuthStore = create((set)=>({
  Token: localStorage.getItem('accessToken') ,
  setToken:(newtoken)=>{
    set({
        Token:newtoken,
    })
    localStorage.setItem('accessToken',newtoken)
   
  },

  logout:()=>{
    set({
        Token:null,
    })
    localStorage.removeItem('accessToken')
  }
 }))

 export default UseAuthStore