import React from 'react';
//Icons
import MenuIcon from '../../IMG/ICONS/118705-free-basic-ui-elements/svg/menu.svg';
import MailIcon from '../../IMG/ICONS/118705-free-basic-ui-elements/svg/envelope.svg';
import CancelIcon from '../../IMG/ICONS/118705-free-basic-ui-elements/svg/cancel-1.svg';

//Content
import Blog from '../Content/Blog/Blog.jsx';
import Clock from './Clock.jsx';
import Contact from './Contact.jsx';
import Home from '../Content/Home/Home.jsx';
import About from '../Content/About/About.jsx';
import Nav from './Nav.jsx';

const OutterCardStyle = {
    backgroundColor: '#005a8a',
    boxShadow: "12px 12px 8px rgba(0,0,0,0.75)",
    height: "914px",
    borderRadius: "10px"
}

const InnerCardStyle = {
    padding: "10px",
    height: "100%",
    overflow: "auto"
}

const TopLayerStyle = {
    
}

const NavIconCardStyle = {
    display: "inline",
    float: "left",
    position: "fixed"
}

const ClockCardStyle = {
    display: "inline",
    right: "0",
    position: "fixed",
    marginRight: "65px"
}

const ContactCardStyle = {
    margin: "0px 0px 40px 15px",
    textAlign: "right",
    position: "fixed",
    bottom: "0",
}

const DataCardStyle = {
    margin: "128px 35px",
    textAlign: "center",
    Height: "474px",
    overflow: ""
}

const NavIcon = (props) => {
    const size = {
        width: "128px",
        height: "128px",
        color: "#ff8f00",
        fill: "currentColor"
    }

    if(props.id === true){
        return (
            <img style={size} src={MenuIcon} alt="Menu Icon" onClick={props.load}/>
        )
    }else{
        return (
            <img style={size} src={CancelIcon} alt="Close Menu" onClick={props.load}/>
        )
    }
}

const ContactIcon = (props) => {
    /*const text = {
        color: '#ff8f00',
        fontSize: '20px',
        fontWeight: '400',
        display: 'hidden'
    }*/

    const div = {
        padding: '0',
        margin: '0'
    }

    const size = {
        width: "128px",
        height: "128px",
        color: "#ff8f00",
        fill: "currentColor",
    }

    return (
        <div style={div} className="main-container">
            {/*<h4 style={text} className="main-contact">Contact Me</h4>*/}
            <img style={size} onClick={props.load} src={MailIcon} alt="Mail" className="main-icon"/>
        </div>
    );
}

let Tmp = {
    data: null,
    con: null,
};

class Card extends React.Component{
    //TODO: Write Function That Returns To The Last Card/Data Before Nav Menu Popped Up

    exitNav = () => {
        this.setState({
            Data: Tmp.data,
            NavIcon: <NavIcon load={() => this.loadNavMenu()} id={true}/>,
            ContactIcon: Tmp.con
        })
    }

    loadContact = () => {
        let data = <Contact />;
        let men = <NavIcon load={() => this.loadNavMenu()} id={true}/>;
        this.setState({
            Data: data,
            ContactIcon: null,
            NavIcon: men
        })
    }

    loadNavMenu = () => {
        Tmp.data = this.state.Data;
        Tmp.con = this.state.ContactIcon;
        let data = <Nav contact={() => this.loadContact()} home={() => this.loadHome()} blog={() => this.loadBlog()} about={() => this.loadAbout()}/>;
        let men = <NavIcon load={() => this.exitNav()} id={false}/>;
        let con = <ContactIcon load={() => this.loadContact()}/>;
        this.setState({
            Data: data,
            NavIcon: men,
            ContactIcon: con
        })
    }

    loadAbout = () => {
        let data = <About />;
        let men = <NavIcon load={() => this.loadNavMenu()} id={true}/>;
        let con = <ContactIcon load={() => this.loadContact()}/>;
        this.setState({
            Data: data,
            NavIcon: men,
            ContactIcon: con
        })
    }

    loadBlog = () => {
        let data = <Blog />;
        let men = <NavIcon load={() => this.loadNavMenu()} id={true}/>;
        let con = <ContactIcon load={() => this.loadContact()}/>;
        this.setState({
            Data: data,
            NavIcon: men,
            ContactIcon: con
        })
    }

    loadHome = () => {
        let data = <Home />;
        let men = <NavIcon load={() => this.loadNavMenu()} id={true}/>;
        let con = <ContactIcon load={() => this.loadContact()}/>;
        this.setState({
            Data: data,
            NavIcon: men,
            ContactIcon: con
        })
    }

    constructor(props){
        super(props);
        this.state={
            Clock: <Clock />,
            Data: <Home />,
            ContactIcon: <ContactIcon load={() => this.loadContact()}/>,
            NavIcon: <NavIcon load={() => this.loadNavMenu()} id={true}/> 
        }
    }

    render(){
        return(
            <div className="card-outskirt" style={OutterCardStyle}>
                <div className="card-content" style={InnerCardStyle}>
                    <div className="card-top-layer" style={TopLayerStyle}>
                        <div className="card-NavIcon" style={NavIconCardStyle}>
                            {this.state.NavIcon}
                        </div>
                        <div className="card-clock" style={ClockCardStyle}>
                            {this.state.Clock}
                        </div>
                    </div>
                    <div className="card-data" style={DataCardStyle}>
                        {this.state.Data}
                    </div>
                    {/*<div style={ContactCardStyle}>
                        {this.state.ContactIcon}
        </div>*/}
                </div>
            </div>
        );
    }
}

export default Card;