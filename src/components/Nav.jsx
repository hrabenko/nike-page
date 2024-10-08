import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import {navLinks} from "../constants/index.js";
import {useState} from "react";

const Nav = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const handleClick = () => {
        setShowBurgerMenu((prevState) => !prevState)
    }

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map(((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black"
                            >
                                {item.label}
                            </a>
                        </li>
                    )))}
                </ul>
                <div className="hidden max-lg:block cursor-pointer">
                    <img
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                        onClick={handleClick}
                    />
                </div>
            </nav>
            {showBurgerMenu && (
                <ul className="flex-1 flex flex-col items-center gap-16 pt-10 lg:hidden w-full bg-white fixed bottom-0 right-0 left-0 top-20 z-20">
                    {navLinks.map(((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={handleClick}
                                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black"
                            >
                                {item.label}
                            </a>
                        </li>
                    )))}
                </ul>
            )}
        </header>
    )
}

export default Nav;