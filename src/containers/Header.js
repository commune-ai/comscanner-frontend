import { themeChange } from 'theme-change'
import React, {  useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Bars3Icon  from '@heroicons/react/24/outline/Bars3Icon'
import IMG from './avatar.png'

function Header(){

    const dispatch = useDispatch()
    const {noOfNotifications, pageTitle} = useSelector(state => state.header)
    const [currentTheme, setCurrentTheme] = useState("dark")


    function logoutUser(){
        localStorage.clear();
        window.location.href = '/'
    }

    return(
        
        <>
            <div className="navbar sticky top-0 bg-gray-900  z-10 shadow-md ">

                <div className="flex-1">
                    <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                    <Bars3Icon className="h-5 inline-block w-5"/></label>
                    <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
                </div>

                

            <div className="flex flex-row justify-between">
                <div>
                    <a href="https://comchat.io" target="_blank">
                        <p className="font-bold hover:text-slate-500">Comchat</p>
                    </a>
                </div>
                <div>
                    <a href="https://comswap.io" target="_blank">
                        <p className="font-bold hover:text-slate-500 ml-4">Comswap</p>
                    </a>
                </div>
                {/* Profile icon, opening menu on click */}
                <div className="dropdown dropdown-end ml-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src={IMG} ></img>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">
                        
                        <li><a onClick={logoutUser}>Logout</a></li>
                    </ul>
                </div>
            </div>
            </div>

        </>
    )
}

export default Header