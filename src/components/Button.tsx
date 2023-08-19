import React from "react"

interface buttonInterface {
  label: string,
  onclick?: () => void
}


const Button: React.FC<buttonInterface> = ({ label, onclick }) => {
  return (
    <button
    className="
    py-2
    px-5
    rounded
    bg-primary-500
    hover:bg-secondary-500
    font-light
    text-white
    " 
    onClick={onclick}>
      {label}
    </button>
  )
}

export default Button

