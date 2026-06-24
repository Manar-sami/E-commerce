
import useGetcategorise from './../../Hook/Getcategorise'
function Categories() {

   const{data,isLoading,isError}=useGetcategorise();
 
   if(isLoading){
    return <>
     <h2>lodaing</h2>
    </>
   }
      if(isError){
    return <>
     <h2>error</h2>
    </>
   }


  return (
    <>
   <div className="container mx-auto px-4 py-8">
  <div className="flex flex-col gap-3.5 ">
    {data.response.data.map((data) => (
      <div
        
        className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
      >
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          {data.name}
        </h3>
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default Categories