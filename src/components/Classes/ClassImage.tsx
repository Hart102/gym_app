interface classsImageInterface {
    image: string;
    name: string;
    description?: string
}

const ClassImage = ({ image, name, description }: classsImageInterface) => {
    return (
        <li className="
        relative
        inline-block
        h-[380px]
        w-[450px]
        mr-10
        ">
            <img className="absolute" src={image} alt={image} />

            {/* Overlay hover */}
            <div className="
                  w-full
                  h-full
                  absolute
                  top-100
                  flex
                  flex-col
                  text-center
                  justify-center
                  bg-rgba
                  opacity-0
                  hover:opacity-90
                  transition
                  duration-500
                  text-white
                  px-2
                  ">
                <p className="capitalize font-bold">{name}</p>
                <p className="font-light">{description}</p>
            </div>
        </li>
    )
}

export default ClassImage
