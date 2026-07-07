import axioseinstance from "../../src/API/axiosinstance";
import { useQuery } from "@tanstack/react-query";

function Productdetails(id) {


   const getproductdetails=async()=>{
    const response=await axioseinstance.get(`/Products/${id}`)
    return response.data.response;
   }

   const query =useQuery({
    queryKey: ['productdetails',id],
    queryFn: getproductdetails,
    staleTime: 1000*60*5,
   })

  return query;
}

export default Productdetails