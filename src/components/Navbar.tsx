import React, { useRef } from 'react';
import Logo from "@/assets/images/Logo.png"
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";



let anchorTags: { href: string; label: string }[] = [];

anchorTags = [
    { href: "home", label: "Home" },
    { href: "benefits", label: "Benefits" },
    { href: "classes", label: "Our Classes" },
]

const Navbar = () => {

    const navRef = useRef<HTMLDivElement>(null);
    const [toggle, setToggle] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<string>();

    // Get current page
    const indicateCurrentPage = (arg: string) => setCurrentPage(arg)

    const handleToggle = () => {
        if (navRef.current) {
            if (navRef.current.classList.contains("hidden")) {
                navRef.current.classList.remove("hidden")
                setToggle(true)
                return
            }
            navRef.current.classList.add("hidden")
            setToggle(false)
        }
    }

    const callBack = (arg: string) => {
        handleToggle()
        indicateCurrentPage(arg)
    }

    return (
        <nav className='
        w-[100%]
        fixed
        top-0
        z-10
        bg-white
        '>
            <div className="
            mx-auto
            flex
            justify-between
            w-full
            py-5
            px-5
            md:px-0
            md:w-5/6
            relative
            ">
                <div><img src={Logo} alt={Logo} /></div>

                {!toggle // Switch hamburgar icon
                    ? <Bars3Icon className="md:hidden h-6 w-6" onClick={handleToggle} />
                    : <XMarkIcon className="md:hidden h-6 w-6" onClick={handleToggle} />
                }

                <div ref={navRef} className="
                hidden
                absolute
                md:relative
                top-[63px]
                md:top-0
                right-[0.5%]
                w-[70%]
                bg-white
                h-[90vh]
                md:w-4/5
                md:h-full
                md:block
                border-t
                md:border-0
                pt-20
                md:pt-0
                ">

                    <div className="
                     w-full
                     flex
                     flex-col
                     space-y-10
                     md:space-y-0
                     md:flex-row
                     justify-between
                     items-start
                    ">
                        {/* Right column */}
                        <div className="
                        flex
                        flex-col
                        md:flex-row
                        w-full
                        text-center
                        gap-8
                        md:w-3/5
                        space-y-3
                        md:space-y-0
                        font-light
                        ">
                            {anchorTags.map((tag) => (
                                <a
                                    href={`#${tag.href}`} key={tag.label} onClick={() => callBack(tag.href)}
                                    className={currentPage === tag.href ? "text-primary-300" : ""}>{tag.label}
                                </a>
                            ))}
                        </div>

                        {/* Left column */}
                        <div className='flex justify-center w-full md:max-w-fit'>
                            <Button label="Become a member" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

// bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600



// rotate animation
// animate-spin h-10 h-10 m-auto" viewBox="0 0 24 24"

// Bounce animation 
// animate-bounce m-auto bg-blue text-center