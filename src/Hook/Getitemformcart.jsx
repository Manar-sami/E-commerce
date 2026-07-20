import { useQuery } from "@tanstack/react-query";
import Authinstance from "../API/Authinstance";
import i18n from "../languge";

function Getitemformcart() {
  const getitemformcart = async () => {
    const respons = await Authinstance.get(`/Carts`);

    return respons.data.items;
  };

  const query = useQuery({
    queryKey: ["cart",i18n.language],
    queryFn: getitemformcart,
    staleTime: 1000 * 60 * 5,
  });

  return query;
}

export default Getitemformcart;
