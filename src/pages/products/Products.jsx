import { Link } from "react-router-dom";
import useGetproducts from "../../Hook/Getproducts";
function Products() {
  
   
  const {data, isLoading, error} = useGetproducts();
  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2>Error</h2>
      </>
    );
  
  }
  console.log(data.response.data)
  return (
    <>
    <h2 className="text-5xl font-bold mb-4 text-center pt-28 pb-10">Products</h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
        {data.response.data.map((product) => (
          <Link to={`/product/${product.id}`} >
      <div className="bg-white rounded-lg shadow-md   hover:shadow-lg transition duration-300" key={product.id}>
        <img src={product.image} alt={product.name}  className="w-full h-[400px]"/>
        <div className="p-4">
          <h3 className="text-lg font-bold">{product.name}</h3>
        <span className="text-gray-600">{product.price}</span>
        </div>
        
      </div>
      </Link>
    ))}
      </div>
    
    </>
  )
}

export default Products;