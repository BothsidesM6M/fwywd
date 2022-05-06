import Image from "next/image";
import Link from "next/link";
import { useDebugValue } from "react";
import { Link as Scroll } from "react-scroll";

interface menu {
    url: string;
    name: string;
}

export default function Header() : JSX.Element {
    const menus: menu[] = [
        { url: 'about', name: 'ABOUT'},
        { url: 'skills', name: 'SKILLS'},
        { url: 'values', name: 'VALUES'},
        { url: 'future', name: 'FUTURE'},
        
    ];

    return (
        <header className='mx-auto max-w-[95%]'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link href='/'>
                        <a className='hover:opacity-75'>
                            <Image src='/images/logo.png' alt='logo' width={150} height={75} />
                        </a>
                    </Link>
                </div>
                <div>
                    <nav>
                        {/* itemはmenuのデータのurl, name */}
                        <ul className='grid grid-cols-4 gap-4'>
                            {menus.map((item, index) => (
                                <li className='h-full font-semibold hover:opacity-50 text-primary-dark hover:cursor-pointer' 
                                key={index}
                                >
                                    <Scroll
                                        to={item.url} smooth={true} offset={-50}>
                                        {item.url}
                                    </Scroll>
                                </li>
                            ))}
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    );
}