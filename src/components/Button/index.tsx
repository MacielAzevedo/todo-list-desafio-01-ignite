import { PlusCircle } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function Button ({title}: ButtonProps) {
    return (
        <button className='h-max p-4 bg-blueDark text-gray-100 border-none rounded-lg font-bold text-sm
        flex items-center gap-2 outline-none transition-all duration-150 hover:bg-blue focus-within:bg-blue'>
            {title}
            <PlusCircle width={20} height={20}/>
        </button>
    )
}