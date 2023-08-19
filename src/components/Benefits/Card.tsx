import React from 'react'

type Props = {
    icon?: HTMLElement,
    title: string,
    description?: string
}

const Card = ({ icon, title, description }: Props) => {
    return (
        <div className="border text-center px-6 py-8 space-y-6">
            {/* {icon} */}
            <p className="text-3xl font-bold">{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default Card