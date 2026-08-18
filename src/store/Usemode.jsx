import { create } from "zustand";


const UseThemmode=create((set)=>({
    mode:"dark",
    togglemode:()=>{
        
        set((state)=>({
            mode:state.mode==="light"?"dark":"light",
        }))
    }
}))

export default UseThemmode;