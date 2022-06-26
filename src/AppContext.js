import { createContext } from "react";

export const LoadingContext = createContext({
    loading: false,
    setLoading: () => { }
})

export const SelectMenuContext = createContext({
    selected: null,
    setSelected: () => { }
})