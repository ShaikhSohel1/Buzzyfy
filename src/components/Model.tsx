import { FC, useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import {IoMdClose} from 'react-icons/io';

interface ModelProps {
    isOpen : boolean ;
    onChange : (open: boolean) => void;
    description : string;
    title : string;

    children : React.ReactNode;
}


const Model: FC<ModelProps> = ({isOpen, onChange, description, title, children}) => {
    return ( 
        <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>

    <Dialog.Portal>
      <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0"/>
      <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
        <Dialog.Title className="text-xl text-center font-bold  mb-4"> 
            {title}
        </Dialog.Title>
        <Dialog.Description className="text-sm text-center leading-normal mb-5">
            {description}    
        </Dialog.Description>
        <div>
            {children}
        </div>
        <Dialog.Close asChild>
            <button className="text-2xl text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline ">
                <IoMdClose />
            </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal> 
  </Dialog.Root>
     );
}
 
export default Model;