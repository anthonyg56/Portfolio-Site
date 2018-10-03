import React from 'react';

const Style = {
    fontSize: "2.5em",
    fontWeight: "700",
    color: "white",
    fontFamily: "Mallanna",
    textShadow: "3px 3px 1px rgba(0,0,0,0.45)",
}

class Clock extends React.Component {
    getTimeString = () => {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }

    constructor(props) {
        super(props);
        var date = this.getTimeString();
        this.state = {
            Time: date
        }
    }

    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function () {
            var date = _this.getTimeString();
            _this.setState({
                time: date
            })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(){
        return <h3 style={Style}>{this.state.time}</h3>;
    }
}

export default Clock;