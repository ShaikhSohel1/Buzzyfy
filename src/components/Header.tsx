"use client"
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import {FC} from 'react';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi';
import Button from './Button';

interface HeaderProps {
   children: React.ReactNode;
    className?: string;
}


const Header:FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();
    const handleLogOut = () => {
        // handle logout in future
        // router.push('/login');
        
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

                <div className="flex justify-between items-center gap-x-4">
                    <>
                   <div>
                        <Button 
                        className='bg-transparent text-neutral-300 font-medium'
                        onClick={() =>{}}
                        > 
                        Sign Up
                        </Button>
                     </div>

                        <div>
                        <Button 
                        className='bg-white px-6 py-2'
                        onClick={() =>{}}
                        > 
                        LogIn
                        </Button>
                  
                   </div>
                        
                    </>
                </div>
            </div>
            {children}
        </div>
     );
}
 
export default Header;