import React from 'react'
import Image from "next/image";

const Header = () => {
  return (
    <div className='w-full bg-white drop-shadow-md sticky top-0 h-20 flex'>
        <div className={"h-20 w-20 grid content-center justify-center"}>
            <Image src={"/navPictures/sprint_logo_cropped_1.png"} alt={""} width={50} height={50}></Image>
        </div>
        <div className={"h-20 w-auto grid grid-cols-2 content-center justify-center absolute right-2 top-0"}>
            <div className={"grid grid-cols-2 content-center mr-2"}>
                <p>14</p>
                <Image src={"/navPictures/fire.png"} width={25} height={25} alt={""}/>
            </div>
            <Image src={"/navPictures/profile_placeholder.png"} alt={""} width={50} height={50}/>
        </div>
    </div>
  )
}

export default Header