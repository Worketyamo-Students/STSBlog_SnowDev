'use client'
import { useTheme } from "next-themes"
import { MdDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa6";

const ThemeToggler = () => {
const {theme, setTheme} = useTheme();
  return (
    <button onClick={()=>setTheme(theme === 'dark' ? 'light': 'dark')}>
        {
            theme === 'dark' ? <FaRegSun size={30}/> : <MdDarkMode size={30} />
        }
    </button>

  )
}

export default ThemeToggler