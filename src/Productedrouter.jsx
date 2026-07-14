import useAuthStore from './store/UseAuthStore'
import { Navigate } from 'react-router-dom';

function Productedrouter({children}) {
 
  const Token=useAuthStore((state)=>state.Token);
  
   if(!Token){
    return <Navigate to="/Login" />
   }
   else{
  return (
    <div>
      
      {children}
    </div>
  )
}
}

export default Productedrouter