
import { useQuery } from "@tanstack/react-query";
import axiosinstance from './../API/axiosinstance'
function Getcategorise() {

  const getcategorise= async ()=>{

   const respons= await axiosinstance.get(`/Categories`);

 
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