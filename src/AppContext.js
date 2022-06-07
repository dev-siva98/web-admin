import { createContext } from "react";

export const TableContext = createContext({
    tableRouterData: {
        route: '',
        component: ''
    },
    setTableRouterData: () => { }
})

export const LoadingContext = createContext({
    loading: false,
    setLoading: () => { }
})