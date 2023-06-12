import { useQuery } from '@tanstack/react-query';

const useAllClass = () => {
    const { allClass: data = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://capture-academy-server-eta.vercel.app/alldata')
            return res.json()
        }
    })
    return [data, loading, refetch]
};

export default useAllClass;