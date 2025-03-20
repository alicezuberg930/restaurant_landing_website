import React from "react"
import '@/styles/header.scss'
import Link from "next/link"
import Image from "next/image"
import { title } from "process"

const Header: React.FC = () => {
    const menuItems = [
        {
            link: "/",
            title: "Trang chủ"
        },
        {
            link: "/#menu",
            title: "Thực đơn"
        },
        {
            link: "/#contact",
            title: "Liên hệ"
        }
    ]
    return (
        <header className='header'>
            <div className='header-wrapper'>
                <div className='header-main'>
                    <div className='header-inner'>
                        <div className='logo'>
                            <Link href="/" title="Soái Ca" rel="home">
                                <div className='header-logo'>
                                    <Image fill src='/assets/logo.png' alt="logo" />
                                </div>
                            </Link>
                        </div>
                        <div className="menu-wrapper">
                            <ul className="header-nav">
                                {
                                    menuItems.map(item => {
                                        return (
                                            <li key={item.link} className="menu-item">
                                                <Link href={item.link}>{item.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                                <li>
                                    <div className="header-button">
                                        <Link href='/booking'>Đặt bàn</Link >
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='header-bg-container fill'>
                    <div className='header-bg-image fill'></div>
                    <div className='header-bg-color fill'></div>
                </div>
            </div>
        </header>
    )
}

export default Header