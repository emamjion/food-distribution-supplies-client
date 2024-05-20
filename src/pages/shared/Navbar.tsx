import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// type TMenus = {
//     id : number;
//     name : string;
//     link: string;
// }

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const menus = [
    {
        id: 1,
        name: 'Home',
        link: "/",
    },
    {
        id: 2,
        name: 'About',
        link: "/about",
    },
    {
        id: 3,
        name: 'Supplies',
        link: "/supplies",
    },
    {
        id: 4,
        name: 'Dashboard',
        link: "/dashboard",
    },
    {
        id: 5,
        name: 'Contact',
        link: "/contact",
    },
];

    return (
    <div className="flex justify-between items-center w-full h-20 px-4 border-b border-b-gray-300 bg-white sticky top-0">
        <div>
            <h1 className="text-4xl font-semibold">FoodFlow</h1>
        </div>

        <div className="md:flex items-center gap-6">
        <ul className="hidden md:flex">
            {menus.map((menu , index) => (
            <li
                key={index}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
                <Link
                to={`${menu?.link}`}
                className="hover:text-green-500"
                >
                    <h1>{menu?.name}</h1>
                </Link>
            </li>
            ))}
        </ul>
        <Link to='/login'>
            <button className='px-6 py-2.5 text-white bg-[#212121] font-medium rounded-lg'>Login</button>
        </Link>
        </div>

        <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {menus?.map((menu, index) => (
                <li
                key={index}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                <Link
                    onClick={() => setNav(!nav)}
                    to={menu?.link}
                    className="hover:text-green-500"
                >
                    <h1>{menu?.name}</h1>
                </Link>
                </li>
            ))}
            </ul>
        )}
    </div>
);
};

export default Navbar;