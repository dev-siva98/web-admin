import { createContext } from "react";

export const TableContext = createContext({
    tableRouterData: {
        route: '',
        component: '',
        selectionIndex: 0
    },
    setTableRouterData: () => { }
})

export const LoadingContext = createContext({
    loading: false,
    setLoading: () => { }
})