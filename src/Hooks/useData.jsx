import { useQuery } from '@tanstack/react-query';
const useData = () => {
    const { data: data = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/alldata')
            return res.json()
        }
    })
    return [data, loading, refetch]
};

export default useData;