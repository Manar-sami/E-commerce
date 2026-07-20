
import { useQuery } from "@tanstack/react-query";
import axiosinstance from './../API/axiosinstance'
import i18n from "../languge"

function Getcategorise() {

  const getcategorise= async ()=>{

   const respons= await axiosinstance.get(`/Categories`);

  console.log(respons.data)
  return respons.data

  }

 const query =useQuery({
    queryKey:['categorise',i18n.language],
    queryFn:getcategorise,
    staleTime:1000*60*5
  });

  return query;
    
}

export default Getcategorise