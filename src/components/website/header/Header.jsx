'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { label: 'Início', href: '/' },
        { label: 'Serviços', href: '/servicos' },
        { label: 'Sobre nós', href: '/sobre' },
        { label: 'Contato', href: '/contato' },
    ]

    return (
        <header className='bg-black text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* menu de navegação */}
                <div className='flex justify-between items-center h-14'>
                    <div className='flex-shrink-0'>
                        {/* WIP: componentizar o logo, mais fácil pq vamo usar em uma pá de lugar */}
                        {/* <Logo/> */}
                    </div>
                    <div className='hidden md:flex items-center space-x-8'>
                        <nav className='flex space-x-6'>
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className='text-gray-300 hover:text-white transition-colors duration-200 text-lg font-normal'
                                    style={{ fontWeight: '400' }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header