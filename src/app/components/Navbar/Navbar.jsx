"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {
    const pathName = usePathname()
    console.log('this path from nav', pathName, pathName.includes('dashboard'))
    
    if(!pathName.includes('dashboard')){
        return (
            <div className=' my-3'>
                <nav>
                    <ul className="flex items-center justify-center gap-5 py-6">
                        <Link href={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link href={'services'}>
                            <li>Services</li>
                        </Link>
                        <Link href={'about'}>
                            <li>About</li>
                        </Link>
                    </ul>
                </nav>
                <hr />
            </div>
        );
    }else{
     return   <></>
    }
};

