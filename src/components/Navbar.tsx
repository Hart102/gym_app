import { useRef } from 'react';
import Logo from "@/assets/images/Logo.png"
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";


let anchorTags: { href: string; label: string }[] = [];

anchorTags = [
    { href: "", label: "Home" },
    { href: "", label: "Benefits" },
    { href: "", label: "Our Classes" },
]

const Navbar = () => {

    const navRef = useRef<HTMLDivElement>(null);
    const handleToggle = () => {
        if (navRef.current) {
            if (navRef.current.classList.contains("hidden"))
                return navRef.current.classList.remove("hidden")
            navRef.current.classList.add("hidden")
        }
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
            py-8
            w-full
            px-5
            md:px-0
            md:w-5/6
            relative
            ">
                <div>
                    <img src={Logo} alt={Logo} />
                </div>
                <Bars3Icon
                    className="md:hidden h-6 w-6"
                    onClick={handleToggle}
                />

                <div ref={navRef} className="
                hidden
                absolute
                right-0
                w-100
                bg-white
                h-[90vh]
                md:w-4/5
                md:h-0
                md:block
                transition
                ">
                    <div className="
                    w-full
                    flex
                    justify-end">
                        <XMarkIcon
                            className="md:hidden h-6 w-6"
                            onClick={handleToggle}
                        />
                    </div>

                    <div className="
                     w-full
                     flex
                     flex-col
                     space-y-10
                     md:space-y-0
                     md:flex-row
                     justify-between
                    ">
                        {/* Right column */}
                        <div className="
                        md:flex
                        gap-8
                        w-3/5
                        space-y-6
                        md:space-y-0
                        ">
                            {anchorTags.map(tag => <p key={tag.label} className="font-light">{tag.label}</p>)}
                        </div>

                        {/* Left column */}
                        <div>
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