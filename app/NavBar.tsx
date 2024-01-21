'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import classNames from 'classnames';

const NavBar = () => {

    const currentPath = usePathname();
    const links = [
        {label: 'Dashboard', href :'/'}, 
        {label: 'Sales', href : '/Sales'}, 
        {label: 'Expenses', href : '/Expenses'},
        {label: 'Empolyees', href : '/Employees'},
        {label: 'Reports', href : '/Reports'},
        {label: 'RegisterAgents', href : '/RegisterAgents'},
        {label: 'AccountStatements', href : '/AccountStatements'},
    ];
  return (
    <nav className='flex space-x-6 border-b mb-5 padding-5 px-2 h-12 items-center hover:bg-slate-200 justify-center'>
        <Link className='text-5xl hover:text-zinc-8-- transion-colors' href="/"><MdOutlineAdminPanelSettings /></Link>
        <ul className='space-x-6 flex'>
            {links.map(link => 
            <Link key={link.href} 
            className={classNames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !==  currentPath,
                'hover:text-zinc-800 transion-colors' : true
            })}
            href={link.href}>{link.label} </Link> )}
        </ul>
    </nav>
  )
}

export default NavBar
