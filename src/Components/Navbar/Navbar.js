import {Drawer, Layout, Menu} from "antd";
import {useEffect, useState} from "react";
import Logo from '../../Images/LOGO.jpg'
import logo from "../../Images/Thumbnail/MMS B.png"
import { MenuOutlined, CloseOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
// import {Header} from "antd/es/layout/layout";

const {Header} = Layout;
const  items=[

        {
            label: "Home",
            key: "home",
            url:'/'
        },
        {
            label: "About",
            key: "about",
            url:'/about'
        },
        {
            label: "Works",
            key: "works",
            url:'/works'
        },
        {
            label: "Contact",
            key: "contact",
            url:'/contact'
        }
]
const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return(
        <div>

            <div style = {{backgroundColor:"#ffffff", opacity:"0.8",position:"fixed", zIndex:"1", padding:"3%"}}
            className='menuIcon'
            >
                <img src={logo} style={{padding: "10px", height:"100%", width:"20%", float:"left"}} />
                <MenuOutlined style={{color:"black",fontSize:"30px", float:"right",padding:"12px"}}
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
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 0) {
                header.classList.add('scroll');
            } else {
                header.classList.remove('scroll');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [selectedItem, setSelectedItem] = useState(null);
    return(
        <div>
        <Header className="header" style={{ position: 'fixed', zIndex: 1, height:"10%",width: '100%'}}>
            <img  src={logo} style={{padding: "10px", height:"100%", width:"8%", float:"left"}} />
            <Menu
                theme={"dark"}
                mode={isInline?"inline":"horizontal"}
                 className = "NavbarMenu"
            style={{ display: 'flex', justifyContent: 'flex-end', background:"transparent", height:"100%"}}
            >
                {items.map(item => (
                    <Menu.Item  key={item.key}
                                // icon={item.icon}
                        style={{color:"black"}}
                                className={selectedItem === item.key ? "selected" : ""}
                                onMouseEnter={() => setSelectedItem(item.key)}
                                onMouseLeave={() => setSelectedItem(null)}
                              >
                        {/*<Link to={item.url}>{item.label}</Link>*/}
                        <a href={item.url}>{item.label} </a>

                    </Menu.Item>
                ))}

            </Menu>
        </Header>
            <div className="mbl-nav">
                <Menu

                    mode={isInline?"inline":"Horizontal"}
                    className = "NavbarMenu"
                    // style={{ display: 'flex', justifyContent: 'flex-end', background:"transparent"}}
                >
                    {items.map(item => (
                        <Menu.Item key={item.key} icon={item.icon}  style={{float:"right"}}>
                            {/*<Link to={item.url}>{item.label}</Link>*/}
                            <a href={item.url}>{item.label} </a>

                        </Menu.Item>
                    ))}

                </Menu>
            </div>
        </div>


    )

}

export default Navbar;