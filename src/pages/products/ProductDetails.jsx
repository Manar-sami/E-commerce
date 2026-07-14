import useProductdetails from "../../Hook/Productdetails";
import { useParams } from "react-router-dom";
import useAddtocart from "../../Hook/Addtocart";

function ProductDetails() {
    const {mutate:addtocart} = useAddtocart()
    const {id} = useParams()
    const{data, isLoading}=useProductdetails(id)

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    console.log(data)

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
     
      <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-8">
   
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center ">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full  hover:scale-105 duration-300"
          />
        </div>

      
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900">
            {data.name}
          </h1>

          <div className="flex items-center gap-2 mt-4">
           
            <span className="text-gray-500">
              ({data.reviews.length} Reviews)
            </span>
          </div>

          <h2 className="text-4xl font-bold text-emerald-600 mt-6">
            ${data.price}
          </h2>

          <div className="mt-3">
            <span className="font-semibold">Stock:</span>{" "}
            <span className="text-green-600">
              {data.quantity} Available
            </span>
          </div>

          <p className="mt-6 text-gray-600 leading-8 whitespace-pre-line">
            {data.description}
          </p>

          <button onClick={() => addtocart({ ProductId: data.id, Count: 1 })} className="mt-8 flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl hover:bg-gray-800 duration-300">
           
            Add To Cart
          </button>
        </div>
      </div>

     
      <div className="mt-14">
        <h2 className="text-3xl font-bold mb-8">
          Customer Reviews
        </h2>

        <div className="space-y-6">
          {data.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl p-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">
                  {review.userName}
                </h3>

               
              </div>

              <p className="text-gray-600 mt-3">
                {review.comment}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails