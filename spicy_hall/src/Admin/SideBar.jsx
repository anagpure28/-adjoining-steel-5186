import style from "../Styles/SideBar.module.css"
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { TfiDropbox, TfiDropboxAlt } from "react-icons/tfi";
import { HiOutlineUsers, HiUsers } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { AdminDashboard } from "./AdminDashboard";
import logo from "../Images/Home/logo.png"
import { AdminPage } from "./AdminPage";

const SideBar = ()=>{
    const [active1,setActive1] = useState(true);
    const [active2,setActive2] = useState(false);
    const [active3,setActive3] = useState(false);

    return <div id={style.main}>
        <div id={style.sidebar}>
            <div id={style.logo}>
                <img src={logo} alt="" />
            </div>
            <div id={style.menus}>
                <div 
                    className={active1 ? style.active : style.unactive}
                    onClick={()=>{
                        setActive1(true)
                        setActive2(false)
                        setActive3(false)
                    }}
                >
                    {
                        active1 ? <MdOutlineSpaceDashboard/> : <MdSpaceDashboard/>
                    }
                    <h4>Dashboard</h4>
                </div>
                <div 
                    className={active2 ? style.active : style.unactive}
                    onClick={()=>{
                        setActive1(false)
                        setActive2(true)
                        setActive3(false)
                    }}
                >
                    {
                        active2 ?  <TfiDropbox/>  : <TfiDropboxAlt/>
                    }
                    <h4>Products</h4>
                </div>
                <div 
                    className={active3 ? style.active : style.unactive}
                    onClick={()=>{
                        setActive1(false)
                        setActive2(false)
                        setActive3(true)
                    }}
                >
                    {
                        active3 ? <HiOutlineUsers/> : <HiUsers/>
                    }
                    <h4>Users</h4>
                </div>
                
            </div>
            <div >
                <AiFillGithub/>
                <h5>Code Source</h5>
                <BiChevronRight/>
            </div>
        </div>
        <div id={style.dashboard}>
            {
                active1 ? 
                <AdminDashboard/>:
                active2 ?
                <AdminPage /> : 
                ""
            }
        </div>
    </div>
}

export default SideBar