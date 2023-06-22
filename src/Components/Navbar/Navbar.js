import {Drawer, Menu} from "antd";
import {useState} from "react";
import { MenuOutlined, CloseOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Header} from "antd/es/layout/layout";

const  items=[

        {
            label: "Home",
            key: "home",
            url:'/website'
        },
        {
            label: "About",
            key: "about",
            url:'#about'
        },
        {
            label: "Works",
            key: "works",
            url:'#works'
        },
        {
            label: "Contact",
            key: "contact",
            url:'#contact'
        }
]
const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return(
        <div>
            <div style = {{}}
            className='menuIcon'
            >
                <MenuOutlined style={{color:"black", padding:"12px", marginLeft:"85%"}}
                              onClick={() => {
                                setOpenMenu(true);
                }}
                />
            </div>
            <span className="headerMenu">
                <AppMenu onClick = {() => {
                    setOpenMenu(false);
                }}/>
            </span>
            <Drawer
                open = {openMenu}
                onClose = {() => {
                    setOpenMenu(false);
                }}
                closable={false}
                width={250}
                style = {{height:'300px'}}
            >
                <CloseOutlined style={{float: "right"}}
                               onClick={() => {
                                    setOpenMenu(false);
                }}/>
                <AppMenu isInline/>
            </Drawer>
        </div>
    )
}

function AppMenu({isInline=false}){
    return(
    <Menu
        style={{}}
        mode={isInline?"inline":"horizontal"}
        className = "NavbarMenu"
    >
        {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
                {/*<Link to={item.url}>{item.label}</Link>*/}
                <a href={item.url}>{item.label} </a>

            </Menu.Item>
        ))}

    </Menu>


    )
}

export default Navbar;