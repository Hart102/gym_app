import Button from "@/components/Button"
import HomePageGrahpics from "@/assets/images/HomePageGraphic.png"
import EvolveText from "@/assets/images/EvolveText.png"
import Bull from "@/assets/images/SponsorRedBull.png"
import Forbs from "@/assets/images/SponsorForbes.png"
import Fortune from "@/assets/images/SponsorFortune.png"
import { motion } from "framer-motion"



const Home = () => {
    return (
        <section id="home" className="
        w-100
        p-5
        md:px-0
        min-h-[60vh]
        ">
            {/* Right Column */}
            <div className="
            w-full
            md:w-5/6
            md:flex
            justify-between
            align-baseline
            mx-auto
            py-28
            ">
                <motion.div className="
                space-y-8
                flex 
                flex-col 
                justify-center
                mb-5
                md:mb-0
                "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="
                        hidden 
                        md:block 
                        absolute 
                        z-[-1] 
                        top-[-70px] 
                        -left-20
                        ">
                            <img src={EvolveText} />
                        </div>

                        <h1 className="
                        text-5xl
                        md:text-8xl
                        font-extrabold
                        text-gray-500
                        ">
                            EVOGYM
                        </h1>

                        <p className="
                        text-5xl
                        font-light
                        text-neutral-500
                        ">
                            evolutionary fitness
                        </p>
                    </div>

                    <p className="font-light">
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
                    </p>
                    <div className="flex items-center gap-8">
                        <Button label="Join Now" />
                        <p className="underline text-primary-500">Read More</p>
                    </div>
                </motion.div>

                {/* Left Column */}
                <div>
                    <img src={HomePageGrahpics} alt={HomePageGrahpics} />
                </div>
            </div>


            {/* Icons  */}
            <div className="
            hidden
            py-8
            md:block
            mt-[-8em]
            bg-primary-100
            ">
                <div className="w-5/6 mx-auto">
                    <div className="w-3/5 flex justify-between">
                        <div><img src={Bull} alt={Bull} /></div>
                        <div><img src={Forbs} alt={Forbs} /></div>
                        <div><img src={Fortune} alt={Fortune} /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home