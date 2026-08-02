import { useQuery } from '@tanstack/react-query'
import Authinstance from '../API/Authinstance'

function Profile() {
 return useQuery({
    queryKey:['Profile'],
    queryFn:()=> Authinstance.get("/Profile")
 })
}

export default Profile