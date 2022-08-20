import React from 'react'
import Dropdown from './Dropdown'

const menuItems = {
    title: "Customize",
    items: ["SQ3R Method", "Spaced repetition", "PQ4R Method", "Feynman Technique"],
}

const Navbar = () => {
  return (
    <div className="left-0 right-0 top-0 h-40 shadow flex px-10 fixed justify-between items-center">
        <div className="flex justify-center items-center space-x-3">
            <img src="/logo.svg" />
            <h1 className="text-2xl font-bold">Carduo</h1>
        </div>
        <ul className="flex space-x-10 items-center">
            <li>Decks</li>
            <li>Resources</li>
            <li>
                <Dropdown {...menuItems} />
            </li>
            <li>
                <button className="bg-[#EE5253] text-white inline-flex justify-center w-full rounded-md shadow-sm px-8 py-2 text-sm font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500">
                    Logout
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
