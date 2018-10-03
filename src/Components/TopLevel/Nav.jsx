import React from 'react';

const RowStyle = {
    
    display: "inline-block",
    marginRight: "75px"
}

const MainStyle = {
    textAlign: "center",
    margin: "auto",
    width: "50%"
}

const TextStyle = {
    color: 'white',
    fontSize: "125px",
    textShadow: "3px 3px 3px rgba(0,0,0,0.45)",
    fontFamily: "Overpass",
    fontWeight: "800",
    letterSpacing: "5px"
}

class Nav extends React.Component{
    render(){
        return(
            <div style={MainStyle}>
                <div style={RowStyle}>
                    <h2 className="nav-links" onClick={this.props.home} style={TextStyle}>Home</h2>
                </div>
                <div style={RowStyle}>
                    <h2 className="nav-links" onClick={this.props.about} style={TextStyle}>About Me</h2>
                </div>
                <div style={RowStyle}>
                    <h2 className="nav-links" style={TextStyle}>Projects</h2>
                </div>
                <div style={RowStyle}>
                    <h2 className="nav-links" onClick={this.props.blog} style={TextStyle}>Blog</h2>
                </div>
                <div style={RowStyle}>
                    <h2 className="nav-links" onClick={this.props.contact} style={TextStyle}>Contact</h2>
                </div>
            </div>
        );
    }
}

export default Nav;