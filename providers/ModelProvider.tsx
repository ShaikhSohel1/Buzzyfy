"use client"

import AuthMOdel from "@/components/AuthModel";
import Model from "@/components/Model";
import { FC, useEffect, useState } from "react";

const ModelProvider = () => {
  
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
    },[]);

    if(!isMounted) return null;
  
    return ( 
        
        <>
        <AuthMOdel />
        </>
     );
}
 
export default ModelProvider;