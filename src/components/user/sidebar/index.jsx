// Sidebar.js
import { useEffect } from 'react';
import { NavLink } from "react-router-dom/dist";
import { LuLayoutDashboard } from "react-icons/lu";
const Sidebar = () => {
    
    useEffect(() => {
        // add hovered class to selected list item
        document.querySelectorAll(".navigation li");

        // Menu Toggle
        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");
        const publisher = document.querySelector(".pub_details");
        toggle.onclick = function () {
            navigation.classList.toggle("active");
            toggle.classList.toggle("change");
            main.classList.toggle("active");
            publisher.classList.toggle("active");
        };
    }, []);

    const openSkype = () => {

    };
    const changeMode = () => {
        const body = document.querySelector("body");
        const currentMode = body.getAttribute("mode");
        if (currentMode === "dark") {
            body.setAttribute("mode", "light");
            localStorage.setItem("mode", "light");
        } else {
            body.setAttribute("mode", "dark");
            localStorage.setItem("mode", "dark");
        }
    }
    useEffect(() => {
        const mode = localStorage.getItem("mode")
        if (mode){
            const body = document.querySelector("body");
            body.setAttribute("mode", mode);
        }
    }, [ ])


    return (
        <div className="tt-container">
            <div className="navigation">
                <div className='sidebar_logo'>
                    <a href="/">
                        <div className="title">
                            <img className="roco" src="/logo.svg" alt="Belo Logo" />
                        </div>
                    </a>
                </div>
                <ul className='ps-0'>


                    <li>
                        <NavLink to='/'>
                            <span className="icon">
                                <LuLayoutDashboard size={20} />
                            </span>
                            <span className="title">Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/' >
                            <span className="icon">
                                <LuLayoutDashboard size={20} />
                            </span>
                            <span className="title">Candidates</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <span className="icon">
                                < LuLayoutDashboard size={20} />

                            </span>
                            <span className="title">Roles</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <span className="icon">
                                <LuLayoutDashboard size={20} />

                            </span>
                            <span className="title">Team</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <span className="icon">
                                <LuLayoutDashboard size={20} />
                            </span>
                            <div className="dropdown">
                                <span className="title dropbtn">Schedule</span>
                            </div>
                        </NavLink>
                    </li>
                    <li data-bs-toggle="collapse" data-bs-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <NavLink to="/">
                            <span className="icon">
                                <LuLayoutDashboard size={20} />
                            </span>
                            <span className="title">Settings</span>
                        </NavLink>
                    </li>
                    <ul className="pb-0 pt-0 ps-5 collapse" id="collapseExample">
                        <li>
                            <NavLink to='/'>
                                <span className="icon">
                                    <LuLayoutDashboard size={20} />
                                </span>
                                <span className="title">Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                <span className="icon">
                                    <LuLayoutDashboard size={20} />
                                </span>
                                <span className="title">Billing</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                <span className="icon">
                                    <LuLayoutDashboard size={20} />
                                </span>
                                <span className="title">Email</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' onClick={changeMode} >
                                <span className="icon">
                                    <LuLayoutDashboard size={20} />
                                </span>
                                <span className="title">Password</span>
                            </NavLink>
                        </li>
                    </ul>



                    {/* Manager details */}
                    <div className='pub_details'>
                        <div onClick={openSkype} className='contact'>
                            <span className='cont_icons icon' ><LuLayoutDashboard /></span>
                            <span className='cont_id'>Help Center</span>
                        </div>

                    </div>
                </ul>

            </div>
        </div>

    );
}

export default Sidebar;
