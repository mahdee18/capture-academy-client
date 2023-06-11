import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: selectClass = [], refetch } = useQuery({
        queryKey: ['selectClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/select-class?email=${user?.email}`)
            return res.data;
        }
    })
    return [selectClass, refetch]
};

export default useSelectedClass;