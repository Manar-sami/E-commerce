import axiosinstance from "./../API/axiosinstance";
import { useQuery } from "@tanstack/react-query";

function Getproducts() {
  const getproducts = async () => {
    const response = await axiosinstance.get("/products");
    console.log(response.data);
    return response.data;
  };

  const query = useQuery({
    queryKey: ["products"],
    queryFn: getproducts,
    staleTime: 1000 * 60 * 5,
  });

  return query;
}

export default Getproducts;
