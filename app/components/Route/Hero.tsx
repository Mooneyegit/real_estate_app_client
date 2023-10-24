import React,{FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

const Hero : FC<Props>  = (props) => {
  return (
    <>
    {/* <div className='w-full 1000px:flex items-center'>
      <div className='absolute top-[100px] 1000px:top-[unset] 1500px:h-[700] 1100px:h-[600px] h-[50vh] w-[50vh] hero-animation'>
        <div className='1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10'>
             <Image 
             src={require("../../../public/assert/images/hero-image.jpg")}
             alt="hero-image"
             className='object-contain 1100px:max-w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]' 
             />
        </div>
        <div className='1000px:w-[60] flex flex-col items-center 1000px:mt-[10] text-center 1000px:text-left mt-[150px]'>
          <h2 className='dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75] 1500px:w-[0]'>
             Best real estate and 
          </h2>
          <br />
          <p className='dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]'>
            we give real and subsidezed prices for well developed housing
          </p>
          <br />
          <br />
          <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative'>
            <input
            type='search'
            placeholder='search here!'
            className='bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none' 
            />
          </div>
        </div>
      </div>
    </div> */}
    <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '50%',
      backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
      height: '500px',
    }}>
 <div
   className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
   <div className="flex h-full items-center justify-center">
     <div className="px-6 text-center text-white md:px-12">
       <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
         The best offer on the market <br /><span>for your business</span>
       </h1>
       <button type="button"
         className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
         data-te-ripple-init data-te-ripple-color="light">
         Get started
       </button>
     </div>
   </div>
 </div>
</div>
</>
  )
}

export default Hero;