import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";

// let benefits: { icon: HTMLElement; title: string; description: string }[] = []

const benefits: Array<BenefitType> = [
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
                ">
                    MORE THAN JUST GYM.
                </p>
                <p className="font-light">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </div>

            <div className="
            md:flex
            justify-between
            gap-4
            font-light
            my-10
            ">
                {benefits.map((item) => {
                    return (
                        <div className="border text-center px-6 py-8 space-y-6">
                            <{item.icon} className="w-6 h-6 mx-auto" />
                            <p className="text-3xl font-bold"></p>
                            <p>Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Benefits