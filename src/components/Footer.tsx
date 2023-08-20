import Logo from "@/assets/images/Logo.png"

const Footer = () => {
    return (
        <section className="border-t">
            <div className="
            w-5/6
            space-y-12
            md:space-y-0
            mx-auto
            md:flex
            justify-between
            font-light
            gap-20
            py-20
            ">
                <div className="md:w-1/2 space-y-5">
                    <img src={Logo} alt={Logo} />
                    <p className="my-2">Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.</p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="md:w-1/2 space-y-5">
                    <p className="text-medium font-bold mb-3">Links</p>
                    <p>Massa orci senectus</p>
                    <p>Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="md:w-1/2 space-y-5">
                    <p className="text-medium font-bold mb-3">Contact Us</p>
                    <p>Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>
        </section>
    )
}

export default Footer