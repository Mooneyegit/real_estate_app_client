'use client'
import React,{FC,useState} from "react"
import Heading from "./utilis/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero"

interface Props {}

const Page : FC<Props> = (Props) =>{ 
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  return(
    <div>
      <Heading 
      title="Benbikos"
      description="benbikos is a Saas platform where you cant invest in real estate and large and medium scale bussiness"
      keyword="real-estate, investment, housing, agriculture"
      />
      <Header 
      open = {open}
      setOpen={setOpen}
      activeItem={activeItem}
      />
      <Hero />
    </div>
  )
}

export default Page;