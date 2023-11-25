import React from 'react'
import { RiHome3Line, RiDashboardLine, RiDatabase2Line, 
       RiPlug2Line, RiToolsLine, RiSettings2Line,
      RiArrowDropRightLine
      } from "react-icons/ri";
import { GoFileMedia, GoSearch } from "react-icons/go";
import { IoDocumentTextOutline, IoLogOutOutline } from "react-icons/io5";
import { BsActivity, BsPaintBucket } from "react-icons/bs";
import { MdDarkMode,  MdLightMode } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

export default function Sidebar({logo, handleChange, inputValue,
       toggle, toggleTheme, theme, toggleOpen, lightMode, darkMode,
       user
      }) 
       {
      const links = [
            {name: 'home', icon: <RiHome3Line/>, id: uuidv4()},
            {name: 'dashboard', icon: <RiDashboardLine/>, id: uuidv4()},
            {name: 'media', icon: <GoFileMedia/>, id: uuidv4()},
            {name: 'document', icon: <IoDocumentTextOutline/>, id: uuidv4()},
            {name: 'database', icon: <RiDatabase2Line/>, id: uuidv4()},
            {name: 'activity', icon: <BsActivity/>, id: uuidv4()},
            {name: 'appearance', icon: <BsPaintBucket/>, id: uuidv4()},
            {name: 'plugins', icon: <RiPlug2Line/>, id: uuidv4()},
            {name: 'tools', icon: <RiToolsLine/>, id: uuidv4()},
            {name: 'Settings', icon: <RiSettings2Line/>, id: uuidv4()},
      ]

      const firstLink = links.slice(0, 2) 
      const renderFirstLink = firstLink.map((link) => (
            <ul key={link.id} className={`flex items-center capitalize gap-4 mt-1 py-2 px-3 hover:rounded-lg
                   ${ theme === "light" ? "hover:bg-lightBgColor" : "hover:bg-toggleBgColor"} 
                  cursor-pointer text-[12px]`}
            >
                  <li className={`${toggle ? "text-lg" : "text-2xl"}`}>{link.icon}</li>
                 { toggle && <li><a href="#">{link.name}</a></li>}
            </ul>
      ))
      const secondLinks = links.slice(2, 6)
      const renderSecondLinks = secondLinks.map(link => (
            <ul key={link.id} className={`flex items-center capitalize gap-4 mt-1 py-2 px-3 hover:rounded-lg
                   ${ theme === "light" ? "hover:bg-lightBgColor" : "hover:bg-toggleBgColor"} cursor-pointer text-[12px]`}
            >
                  <li className={`${toggle ? "text-lg" : "text-2xl"}`}>{link.icon}</li>
                 { toggle && <li><a href="#">{link.name}</a></li>}

            </ul>
      ))
      const thirdLinks = links.slice(6, 10)
      const renderThirdLinks = thirdLinks.map(link => (
            <ul key={link.id} className={`flex items-center capitalize gap-4 mt-1 py-2 px-3 hover:rounded-lg
                   ${ theme === "light" ? "hover:bg-lightBgColor" : "hover:bg-toggleBgColor"} cursor-pointer text-[12px]`}
            >
                  <li className={`${toggle ? "text-lg" : "text-2xl"}`}>{link.icon}</li>
                 { toggle && <li><a href="#">{link.name}</a></li>}

            </ul>
      ))


      return (
      <header className={`transition-all ${theme === "light" ? "bg-lightColor text-darkColor" : "bg-darkColor text-lightColor" } 
                 ${toggle ? "w-[232px] " : "w-[79px] "} py-6 px-4 `}>
            <div className='relative'>
                  <div className='flex items-center gap-2'>
                        
                       <div className='p-2 rounded-full bg-logoColor shrink-0'>
                        <img className='w-6 h-6' src={logo} alt="logo" /> 
                       </div>
                        
                        {toggle && <h1 className='text-xl'>DeoluDH</h1>}
                  </div>
                  <div className={` absolute transition-[.3s] cursor-pointer rounded-full text-4xl top-0 -right-9
                        ${theme === "light" 
                              ? "text-darkColor bg-lightColor hover:bg-lightBgColor"
                              : "text-lightColor hover:bg-toggleBgColor bg-darkColor"
                        } 
                         ${toggle ? "rotate-180" : "-rotate-0"}
                         `}
                         onClick={toggleOpen}
                  >
                        <RiArrowDropRightLine/>
                  </div>
            </div>
            <div className='relative mt-6 '>
                 <div className={`text-darkColor text-2xl absolute w-2 h-2 ${toggle ? "ml-2" : "ml-[15px]"} top-[6px] transition-all`}>
                  <GoSearch/>
                 </div>
                  <input 
                        className={`text-darkColor ${theme === "light" ? "bg-lightBgColor" : "bg-lightColor"} 
                        py-[6px] pr-3 pl-10 w-full outline-0 placeholder:text-darkColor
                        rounded-lg`}
                        type="text" 
                        value={inputValue} 
                        onChange={handleChange}
                        placeholder='Search'
                  />
            </div>
            
            <nav>
                  <div className={`mt-6 border-b-[1px] ${theme === "light" ? "border-borderLgtColor" : "border-borderColor"} pb-2`}>
                        {renderFirstLink}
                  </div>
                  <div className={`mt-6 border-b-[1px] ${theme === "light" ? "border-borderLgtColor" : "border-borderColor"} pb-2`}>
                        {renderSecondLinks}
                  </div>
                  <div className={`mt-6 border-b-[1px] ${theme === "light" ? "border-borderLgtColor" : "border-borderColor"} pb-2`}>
                        {renderThirdLinks}
                  </div>
            </nav>
            <div>
                  {toggle ? 
                        (<div className={`w-full me-5 flex justify-between relative after:transition-[.3s]
                        ${theme === "light" 
                              ? "bg-lightBgColor after:ml-[106px] after:bg-white after:text-darkColor " 
                              : "bg-toggleBgColor after:bg-darkColor after:ml-0"
                        } 
                        py-[2px] px-[2px] rounded-lg mt-4 after:content-[''] after:absolute after:w-[90px] 
                        after:h-8 after:-z-[0] after:rounded-[6px] after:inline-block 
                   `}
                  >
                        <div 
                              onClick={darkMode}
                              className={`flex relative items-center z-[1] gap-[5px] py-1 pl-[14px] cursor-pointer
                              ${theme === "light" && "text-gray-500"}`}
                              
                        >
                              <MdDarkMode className={`text-lg `}/>
                              <p>Dark</p>
                        </div>
                        <div 
                              onClick={lightMode}
                              className='flex items-center gap-[5px] z-[1] relative pr-[17px] cursor-pointer' >
                              <MdLightMode className={`${toggle ? "text-lg" : "text-2xl"}`}/>
                              <p>light</p>
                        </div>
                  </div>
                  ) : (
                  <div className='mt-4 flex justify-center text-2xl cursor-pointer flex-col items-center gap-3'>
                       <div onClick={toggleTheme}>
                        {theme === "light" ? <MdLightMode/> : <MdDarkMode/>}
                        </div>
                        <div>
                              <IoLogOutOutline/>
                        </div>
                  </div>

                  )}
                  
            </div>
            <div className={`flex items-center mt-4 gap-2`}>
                  <div className={`${!toggle && "h-10 w-10 ml-[3px]"} h-8 w-8 border-[2px] border-green-600 rounded-full`}>
                        <img className='w-full h-full object-cover' src={user} alt="user" />
                  </div>
                  {toggle &&  <div className='text-sm'>
                        <h2 className='font-medium'>Omo Oba</h2>
                        <p className='text-[10px] font-normal'>web-developer</p>
                  </div>}
                  {toggle && <div className='ml-auto text-xl cursor-pointer'>
                        <IoLogOutOutline/>
                  </div>}

            </div>
            
            
      </header>
  )
}
