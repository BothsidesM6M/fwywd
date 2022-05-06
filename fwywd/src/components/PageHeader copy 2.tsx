import Image from "next/image";
import Link from "next/link";
import { useDebugValue } from "react";
import { Link as Scroll } from "react-scroll";

export default function Header() : JSX.Element {
    const menuList= [
        { link: 'about', name: 'ABOUT'},
        { link: 'skills', name: 'SKILLS'},
        { link: 'values', name: 'VALUES'},
        { link: 'future', name: 'FUTURE'},
        
    ];

    return (
        <div className='mx-auto max-w-[90%]'>
            <div className='flex justify-between items-center'>
                <div>
                    <Image src='/images/logo.png' alt='logo' width={150} height={75} />
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {menuList.map((value, index) => {
                        return (
                            <Scroll
                                to={value.link}
                                smooth={true}
                                offset={-50}
                                className='h-full font-semibold hover:opacity-50 text-primary-dark'
                                key={index}
                            >
                                {value.name}
                                </Scroll>
                        );

                    })}
                    
                </div>
            </div>
        </div>

    );
}