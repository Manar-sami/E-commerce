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
    <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto py-20">
        {data.response.data.map((product) => (
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300" key={product.id}>
        <img src={product.image} alt={product.name}  className="w-full h-[400px]"/>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <span className="text-gray-600">{product.price}</span>
        
      </div>
    ))}
      </div>
    </>
  )
}

export default Products;