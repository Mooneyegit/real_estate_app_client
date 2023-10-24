'use client'
import {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import {BiMoon,BiSun} from 'react-icons/bi'

//type Props = {}

 const ThemeSwitcher = () => {
    const [mount , setMount] = useState(false)
    const {theme, setTheme} = useTheme();
    useEffect(()=>setMount(true),[])

    if(!mount){return null}
  return (
    <div className='flex items-center justify-center mx-4'>
        {
            theme === "light" ? (
                <BiMoon 
                className="cursor-pointer"
                fill="black"
                size={25}
                onClick={()=> setTheme("dark")}
                />
            ) : (
                <BiSun 
                size={25}
                className='cursor-pointer'
                onClick={()=> setTheme("light")}
                />
            )
        }
        </div>
  )
}

export default ThemeSwitcher