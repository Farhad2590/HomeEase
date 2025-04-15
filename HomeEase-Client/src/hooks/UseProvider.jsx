import { useQuery } from '@tanstack/react-query';
import axios from 'axios'; // Import axios
import useAuth from './useAuth';

const UseProvider = () => {
    const { user } = useAuth();

    const { data: isProvider, isPending: isProviderLoading } = useQuery({
        queryKey: [user?.email, 'isProvider'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:9000/users/provider/${user?.email}`);
            // console.log(res.data);
            return res.data?.provider;
        }
    });
    // console.log(isProvider);
    
    return [isProvider, isProviderLoading];
};

export default UseProvider;
