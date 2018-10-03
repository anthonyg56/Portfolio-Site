import React from 'react';

const Descriptions = [
    "Web Developer",
    "Hoosier",
    "Hip-Hop Head",
    "UI/UX",
    "Gamer"
];

const HeaderTextStyle = {
    color: "#ff8f00",
    fontSize: "155px",
    fontFamily: "Overpass",
    fontWeight: "800",
    textShadow: "5px 5px 3px rgba(0, 0, 0, 0.45)"
};

const BodyTextStyle = {
    color: "white",
    fontSize: "3em",
    fontFamily: "Mallanna",
    fontWeight: "700"
}

const BodyStyle = {
    padding: "0px 50px"
}

class About extends React.Component{
    random = () => {
        let x = Math.floor((Math.random() * 5) + 0);
        return Descriptions[x];
    }
    constructor(props){
        super(props);
        let x = this.random();
        this.state={
            d: x
        }
    }

    componentDidMount(){
        const _this = this;
        this.timer = setInterval(function () {
            var date = _this.random();
            _this.setState({
                d: date
            })
        },5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(){
        return(
            <div className="about-me">
                <div className="about-me-header">
                    <h2 onClick={(e) =>
                        this.setState({
                            d: this.random()
                        })
                    } style={HeaderTextStyle}>{this.state.d}</h2>
                </div>
                <div className="about-me-text" style={BodyStyle}>
                    <p style={BodyTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        );
    }
}

export default About;