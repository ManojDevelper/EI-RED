import React, { useState } from 'react';
import logo from "../../assets/images/at_nav_logo.svg";
import dashboard from "../../assets/icons/dashboard.png";
import dashboard_hover from "../../assets/icons/dashboard_hover.png";
import orders from "../../assets/icons/orders.png";
import orders_hover from "../../assets/icons/orders_hover.png";
import team from "../../assets/icons/team.png";
import team_hover from "../../assets/icons/team_hover.png";
import patners from "../../assets/icons/patners.png";
import patners_hover from "../../assets/icons/patners_hover.png";
import about from "../../assets/icons/about.png";
import about_hover from "../../assets/icons/about_hover.png";
import payment from "../../assets/icons/payment.png";
import payment_hover from "../../assets/icons/payment_hover.png";
import note_icon from "../../assets/icons/note_icon.png";
import { DrawerSection, DrawerMenu, DrawerButton, NoteSection } from "./styles";


const Drawer = () => {
    const [tabActive, setTabActive] = useState("about")
    const tabActiveFun = (value) => {
        setTabActive(value)
    }
    return (
        <DrawerSection>
            <img src={logo} alt="nav_icon" className='drawer_logo' />
            <DrawerMenu>
                <DrawerButton onClick={() => tabActiveFun("dashboard")} className={tabActive === "dashboard" && "active_btn"}>
                    <img src={tabActive === "dashboard" ? dashboard_hover : dashboard} alt="dashboard" className='btn_logo' />
                    <span className={tabActive === "dashboard" && "active"}>dashboard</span>
                </DrawerButton>
                <DrawerButton onClick={() => tabActiveFun("orders")} className={tabActive === "orders" && "active_btn"}>
                    <img src={tabActive === "orders" ? orders_hover : orders} alt="orders" className='btn_logo' />
                    <span className={tabActive === "orders" && "active"}>Orders</span>
                </DrawerButton>
                <DrawerButton onClick={() => tabActiveFun("team")} className={tabActive === "team" && "active_btn"}>
                    <img src={tabActive === "team" ? team_hover : team} alt="team" className='btn_logo' />
                    <span className={tabActive === "team" && "active"}>Team Members</span>
                </DrawerButton>
                <DrawerButton onClick={() => tabActiveFun("patners")} className={tabActive === "patners" && "active_btn"}>
                    <img src={tabActive === "patners" ? patners_hover : patners} alt="patners" className='btn_logo' />
                    <span className={tabActive === "patners" && "active"}>Patners</span>
                </DrawerButton>
                <DrawerButton onClick={() => tabActiveFun("about")} className={tabActive === "about" && "active_btn"}>
                    <img src={tabActive === "about" ? about_hover : about} alt="about" className='btn_logo' />
                    <span className={tabActive === "about" && "active"}>About Us</span>
                </DrawerButton>
                <DrawerButton onClick={() => tabActiveFun("payment")} className={tabActive === "payment" && "active_btn"}>
                    <img src={tabActive === "payment" ? payment_hover : payment} alt="payment" className='btn_logo' />
                    <span className={tabActive === "payment" && "active"}>Payments Info</span>
                </DrawerButton>
            </DrawerMenu>

            <NoteSection>
                <img src={note_icon} alt="note_icon" className='note_icon' />
                <span className='help'>Need Help ?</span>
                <p className='notes_description'>Our support team is
                    at your disposal</p>
                <button className='get_help_button'>Get Help</button>
            </NoteSection>
        </DrawerSection>
    )
}
export default Drawer;