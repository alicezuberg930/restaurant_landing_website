'use client'
import React, { useEffect, useState } from "react"
import '@/styles/header.scss'
import Link from "next/link"
import Image from "next/image"
import { title } from "process"
import { icons } from "@/common/icons"

const Header: React.FC = () => {
    const { FaBars } = icons
    const menuItems = [
        {
            link: "/",
            title: "Trang chủ"
        },
        {
            link: "/menu",
            title: "Thực đơn"
        },
        {
            link: "/reservation",
            title: "Đặt bàn"
        },
        {
            link: "/contact",
            title: "Liên hệ"
        },
        {
            link: "/about",
            title: "About"
        }
    ]
    const [isTop, setIsTop] = useState<boolean>(true)
    const [y, setY] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            setY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        // return () => {
        //     window.removeEventListener("scroll", handleScroll)
        // }
    }, []);

    useEffect(() => {
        if (y > 0) setIsTop(false)
        if (y == 0) setIsTop(true)
    }, [y])

    return (
        // <header className='header'>
        //     <div className='header-wrapper'>
        //         <div className='header-main'>
        //             <div className='header-inner'>
        //                 <div className='logo'>
        //                     <Link href="/" title="Soái Ca" rel="home">
        //                         <div className='header-logo'>
        //                             <Image fill src='/assets/logo.png' alt="logo" />
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="menu-wrapper">
        //                     <ul className="header-nav">
        //                         {
        //                             menuItems.map(item => {
        //                                 return (
        //                                     <li key={item.link} className="menu-item">
        //                                         <Link href={item.link}>{item.title}</Link>
        //                                     </li>
        //                                 )
        //                             })
        //                         }
        //                         <li>
        //                             <div className="header-button">
        //                                 <Link href='/booking'>Đặt bàn</Link >
        //                             </div>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='header-bg-container fill'>
        //             <div className='header-bg-image fill'></div>
        //             <div className='header-bg-color fill'></div>
        //         </div>
        //     </div>
        // </header>
        <header>
            <div className="wrap-menu-header" style={{ background: isTop ? 'linear-gradient(#00000099, #00000000)' : '#ffffffe6' }}>
                <div className="menu-header-container">
                    <div className="wrap-header">
                        <div className="logo">
                            <Link href='/'>
                                <img src={`assets/${isTop ? 'logo.png' : 'logo2.png'}`} alt="logo" />
                            </Link>
                        </div>

                        <div className="wrap-menu">
                            <nav className="menu">
                                <ul className="main-menu">
                                    {
                                        menuItems.map(item => {
                                            return (
                                                <li key={item.link} className="menu-item">
                                                    <Link style={{ color: isTop ? 'white' : 'black' }} href={item.link}>{item.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>

                        <div className="social">
                            <button>
                                <FaBars size={20} fill={isTop ? 'white' : 'black'} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header