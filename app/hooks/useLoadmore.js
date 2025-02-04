import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useLoadmore = (params, queryKey, queryFn, getTotalFn, getData) => {
    const [page, setPage] = useState(1);
    const [dataSource, setDataSouce] = useState([]);
    const { data, isLoading } = useQuery({
        queryKey: [queryKey, params, page],
        queryFn: () => queryFn({ ...params, page})
    });
    const totalElement = getTotalFn(data);

     useEffect(() => {
        if (!data) return;
        const tmpData= getData(data);
        setDataSouce(prev => page === 1 ? tmpData : [...prev, ...tmpData]);
    }, [data, page])

    const onLoadmore = () => {
        setPage(prev => prev + 1);
    }

    const onChangeParams = () => setPage(1);

    return {
        page,
        totalElement,
        dataSource,
        isLoading,
        onChangeParams,
        onLoadmore
    }
}