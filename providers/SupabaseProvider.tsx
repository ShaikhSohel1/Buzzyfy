"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { SupabaseClient } from "@supabase/supabase-js"
// import { Session } from "inspector"
import React, { useState } from "react"

import { Database } from "../types_db"

interface SupabaseProviderProps {
    children: React.ReactNode
};

const SupaBaseProvider:React.FC<SupabaseProviderProps> = ({ children }) => {
   

    const [supabaseClient] = useState(() => 
       createClientComponentClient<Database>()
    );

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
            </SessionContextProvider>
        
    )
}

export default SupaBaseProvider;