import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Getcategorise() {

  const getcategorise= async ()=>{

   const respons= await axios.get(`${import.meta.env.VITE_BURL}/Categories`,{
    headers:{
        'Accept-Language':"en"
    }
   });

 
  return respons.data

  }

 const query =useQuery({
    queryKey:['categorise'],
    queryFn:getcategorise,
    staleTime:1000*60*5
  });

  return query;
    
}

export default Getcategorise