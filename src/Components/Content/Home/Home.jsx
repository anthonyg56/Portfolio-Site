import React from 'react';


const HeaderTextStyle = {
    fontFamily: "Overpass",
    fontSize: "200px",
    fontStyle: "italic",
    fontWeight: "800",
    letterSpacing: "5px",
    textShadow: "8px 8px 5px rgba(0,0,0,0.45)",
    color: "#ff8f00"
}

const HeaderStyle = {
    margin: "40px auto 50px auto"
}

const SnakeStyle = {
    color: "white",
    fontFamily: "Mallanna",
    fontSize: "3.5em",
    fontWeight: "700",
    textShadow: "3px 3px 1px rgba(0,0,0,0.45)",
    letterSpacing: "5px",
}

const HomeStyle = {
    padding: "125px 0 0px 0"
}
class Home extends React.Component{
    render(){
        return(
            <div className="home" style={HomeStyle}>
                <div className="home-title" style={HeaderStyle}>
                    <h1 style={HeaderTextStyle}>Anthony Gayflor</h1>
                </div>
                <h3 className="snake" style={SnakeStyle}>Play Snake</h3>
            </div>
        );
    }
}

export default Home;