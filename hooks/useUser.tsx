import { Subscription, UserDetails } from "../types";

import {useSessionContext, useUser as useSupaUser} from "@supabase/auth-helpers-react"

import {User} from "@supabase/auth-helpers-nextjs";
import { createContext, use, useContext, useEffect, useState } from "react";

type userContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscriptions: Subscription | null;
}

export const UserContext = createContext<userContextType | undefined>(undefined);


export interface Props {
    [propName : string] : any;
};

export const MyUserContextProvider = (props : Props) => {
    const {
         session,
         isLoading: isLoadingUser,
         supabaseClient: supabase

    } = useSessionContext();

    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscriptions, setSubscriptions] = useState<Subscription | null>(null);
      

    const getUserDetails = () => supabase.from('user').select('*').single();
    const getSubscriptions = () => supabase.from('subscriptions').select('*,prices(*, products(*))').in('status',['trail','active']).single();


    useEffect(() => {
        if(user && !isLoadingData && !userDetails && !subscriptions) {
            setIsLoadingData(true);
            Promise.allSettled([getUserDetails(), getSubscriptions()])
            .then((results) => {
               const userDetailsPromise = results[0];
                const subscriptionsPromise = results[1];

                 if(userDetailsPromise.status === 'fulfilled') {
                     setUserDetails(userDetailsPromise.value.data as UserDetails);
                 }

                    if(subscriptionsPromise.status === 'fulfilled') {
                        setSubscriptions(subscriptionsPromise.value.data as Subscription);
                    }

                    setIsLoadingData(false);

            })
            .finally(() => setIsLoadingData(false));
        } else if(!user && !isLoadingUser  && !isLoadingData) {
            setUserDetails(null);
            setSubscriptions(null);
        }
    } , [user, isLoadingUser]);


    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingUser || isLoadingData,
        subscriptions
    };
    
    return <UserContext.Provider value={value} {...props} />; 

}

export const useUser = () => {
    const context =useContext(UserContext);
    if(context === undefined) {
        throw new Error('useUser must be used within a UserContextProvider');
    }
    return context;
}