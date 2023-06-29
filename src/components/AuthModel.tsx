"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import useAuthModel from "../../hooks/useAuthModel";
import Model from "./Model";

const AuthMOdel = () => {
    const supabaseClient= useSupabaseClient();
    const router = useRouter();
    const {session} = useSessionContext();
    const { onClose, isOpen} = useAuthModel();

    const onChange = (open:boolean) => {
        if(!open){
            onClose();
        }
    }

    useEffect(() => {
        if(session) {
            router.refresh();
            onClose();
        }
    },[session,router,onClose]);


    return ( 
        <Model title="Welcome Back"
        description="Login To Your Account"
        isOpen={isOpen}
        onChange={onChange}
        >
          <Auth
          theme="dark"

          providers={['github']}
          magicLink
          supabaseClient={supabaseClient} 
          appearance={{
            theme : ThemeSupa,
            variables : {
                default:{
                    colors:{
                        brand: '#404040',
                        brandAccent: '#422c55e',
                    }
                }
          }
            
          }}
          />  
        </Model>
     );


    }
 
export default AuthMOdel;