"use client"
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import {FC} from 'react';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi';
import Button from './Button';
import useAuthModel from '../../hooks/useAuthModel';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '../../hooks/useUser';
import { FaUserAlt } from 'react-icons/fa';
import {toast} from 'react-hot-toast';

interface HeaderProps {
   children: React.ReactNode;
    className?: string;
}


const Header:FC<HeaderProps> = ({
    children,
    className
}) => {

    const authModel = useAuthModel();
    const router = useRouter();

    const supabaseClient = useSupabaseClient();
    const { user } = useUser();


    const handleLogOut = async () => {
        const { error } = await supabaseClient.auth.signOut();

        //Reset Any playoing song
        router.refresh();

        if(error){
            toast.error(error.message);
        } else
        {
            toast.success('Logged Out Successfully');
        }
        
    }

    return ( 
        <div
        className={twMerge("h-fit bg-gradient-to-b from-emerald-600 p-6", className)}
        >
            <div className="w-full flex mb-4 items-center justify-between">

                <div className='hidden md:flex gap-x-2 items-center'>
                    <button className='rounded-full bg-black items-center justify-center flex hover:opacity-75 transition'>
                        <RxCaretLeft size={35}
                        className="text-white"
                        onClick={()=> router.back()}
                        />
                    </button>

                    <button className='rounded-full bg-black items-center justify-center flex hover:opacity-75 transition'>
                        <RxCaretRight size={35}
                        className="text-white"
                        onClick={()=> router.forward()}
                        
                        />
                    </button>
                </div>
                <div className='flex md:hidden gap-x-2 items-center'>
                    <button className='rounded-full bg-white items-center justify-center flex hover:opacity-75 transition p-2'>
                        <HiHome size={30} className="text-black"/>
                    </button>

                    <button className='rounded-full bg-white items-center justify-center flex hover:opacity-75 transition p-2'>
                        <BiSearch size={30} className="text-black"/>
                    </button>
                </div>

                <div className="flex justify-between  items-center gap-x-4">
                    {user ? (
                       <div className='flex gap-x-4 items-center '>
                        <Button
                        onClick={handleLogOut}
                        className='bg-white px-6 py-2 '
                        >
                        LogOut

                        </Button>
                        <Button onClick={()=>router.push('/account')}
                        className="bg-white"
                        >
                            <FaUserAlt/>
                        </Button>
                       </div>
                    ): (

                    <>
                   <div>
                        <Button 
                        className='bg-transparent text-neutral-300 font-medium'
                        onClick={authModel.onOpen}
                        > 
                        Sign Up
                        </Button>
                     </div>

                        <div>
                        <Button 
                        className='bg-white px-6 py-2'
                        onClick={authModel.onOpen}
                        > 
                        LogIn
                        </Button>
                  
                   </div>
                        
                    </>
                    )
                }
                </div>
            </div>
            {children}
        </div>
     );
}
 
export default Header;