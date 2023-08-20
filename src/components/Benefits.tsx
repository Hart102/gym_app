import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/images/BenefitsPageGraphic.png";
import AbstractWave from "@/assets/images/AbstractWaves.png";
import Sparkles from "@/assets/images/Sparkles.png"
import Button from "./Button";

const benefits = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];


const Benefits = () => {
    return (
        <section id="benefits" className="
        w-5/6
        mx-auto
        py-10
        ">
            <div className="
            w-full
            md:w-1/2
            ">
                <p className="
                font-extrabold
                text-3xl
                mb-5
                ">MORE THAN JUST GYM.</p>

                <p className="font-light">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </div>

            {/* Benefits Cards */}
            <div className="
            md:flex
            justify-between
            space-y-6
            md:space-x-6
            md:space-y-0
            font-light
            my-10
            ">
                {benefits.map((item) => {
                    return (
                        <motion.div key={item.title} className="
                        border
                        rounded
                        text-center
                        px-6
                        py-8
                        space-y-6
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
                            <div className="flex justify-center">
                                <div className="
                                w-10
                                h-10
                                flex
                                items-center
                                justify-center
                                rounded-full
                                drop-shadow-lg
                                bg-white
                                ">
                                    {item.icon}
                                </div>
                            </div>
                            <p className="text-medium font-bold">{item.title}</p>
                            <p>{item.description}</p>
                        </motion.div>
                    )
                })}
            </div>

            {/* Benefits Description with image */}
            <div className="
            md:flex
            items-center
            justify-between 
            gap-20
            py-10
            w-full
            ">
                <motion.div
                    className="md:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <img src={BenefitsPageGraphic} alt={BenefitsPageGraphic} />
                </motion.div>

                <motion.div className="px-2 md:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="relative">
                        <div className="
                        hidden 
                        md:block 
                        absolute 
                        z-[-1] 
                        top-[-100px] 
                        -left-20
                        ">
                            <img src={AbstractWave} alt={AbstractWave} />
                        </div>

                        <p className="
                        font-extrabold
                        text-3xl
                        ">MILLIONS OF HAPPY MEMBERS GETTING FIT</p>
                    </div>

                    <p className="
                    my-5
                    font-light
                    text-justify">
                        Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. <br /> <br /> Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio. Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
                    </p>

                    <div className="relavtive">
                        <div className="
                        hidden 
                        md:block 
                        absolute 
                        z-[-1] 
                        right-80
                        ">
                            <img src={Sparkles} alt={Sparkles} />
                        </div>
                        <Button label="Join Now" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Benefits