import { useQuery } from "@tanstack/react-query";
import Authinstance from "../API/Authinstance";

function Getitemformcart() {
  const getitemformcart = async () => {
    const respons = await Authinstance.get(`/Carts`);

    return respons.data.items;
  };

  const query = useQuery({
    queryKey: ["cart", "en"],
    queryFn: getitemformcart,
    staleTime: 1000 * 60 * 5,
  });

  return query;
}

export default Getitemformcart;
