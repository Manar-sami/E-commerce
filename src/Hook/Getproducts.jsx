import axiosinstance from "./../API/axiosinstance";
import { useQuery } from "@tanstack/react-query";
import i18n from "../languge";
function Getproducts() {
  const getproducts = async () => {
    const response = await axiosinstance.get("/products");
    console.log(response.data);
    return response.data;
  };

  const query = useQuery({
    queryKey: ["products",i18n.language],
    queryFn: getproducts,
    staleTime: 1000 * 60 * 5,
  });

  return query;
}

export default Getproducts;
