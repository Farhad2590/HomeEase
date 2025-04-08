import { useQuery } from '@tanstack/react-query';
import axios from 'axios'; // Import axios
import useAuth from './useAuth';

const UseWriter = () => {
    const { user } = useAuth();

    const { data: isWriter, isPending: isWriterLoading } = useQuery({
        queryKey: [user?.email, 'isWriter'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/writer/${user?.email}`);
            console.log(res.data);
            return res.data?.writer;
        }
    });
    
    return [isWriter, isWriterLoading];
};

export default UseWriter;
