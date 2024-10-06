'use client'
import { Dispatch, SetStateAction, ReactNode, createContext } from "react";
import { useState } from "react";
import { useSession } from 'next-auth/react';
// import Spinner from "@/components/spinner";
import Spinner1 from "@/components/spinner/spinner1";
type ContextType = {
    loading : boolean;
    setLoading: Dispatch<SetStateAction<boolean>> // Dispatch et SetStateAction garantissent que setLoading accepte uniquement un booléen en entrée.
}
const initialState={
    loading:false,
    setLoading: () => {}
}
export const GlobalContext = createContext<ContextType>(initialState)

export default function GlobalState ({children}: {children : ReactNode }) {
    const [loading,setLoading] = useState(false);
    const {data:session} = useSession();
if(session === undefined) return <Spinner1/>
    return(
        <GlobalContext.Provider value={{loading, setLoading}}>{children}</GlobalContext.Provider>
    )
}