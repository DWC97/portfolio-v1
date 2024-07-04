"use client"

import Loading from "@/app/loading";
import { useMounted } from "@/hooks/useMounted";
import { ActiveSectionProvider } from "./ActiveSectionContext";

export function Providers({ children }){
    const mounted = useMounted();
    // return loading screen while app mounts
    if (!mounted) {
        return <Loading />;
    }
    // wrap entire layout in contexts that need to be global
    return (
        <ActiveSectionProvider>
        {children}
        </ActiveSectionProvider>
    );
}