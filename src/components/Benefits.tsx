import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/images/BenefitsPageGraphic.png";
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
        <section className="
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
                        <div key={item.title} className="
                        border
                        rounded
                        text-center
                        px-6
                        py-8
                        space-y-6
                        ">
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
                        </div>
                    )
                })}
            </div>

            {/* Benefits Description with image */}
            <div className="
            md:flex
            items-center
            justify-between
            py-10
            w-full
            ">
                <img className="md:w-1/2" src={BenefitsPageGraphic} alt={BenefitsPageGraphic} />

                <div className="px-2 md:w-1/2">
                    <p className="
                    font-extrabold
                    text-3xl
                    ">MILLIONS OF HAPPY MEMBERS GETTING FIT</p>

                    <p className="
                    my-5
                    font-light
                    text-justify">
                        Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio. Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
                    </p>

                    <Button label="Join Now"/>
                </div>
            </div>
        </section>
    )
}

export default Benefits