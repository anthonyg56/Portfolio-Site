import React from 'react';

const HeaderTextStyle = {
    color: "#ff8f00",
    fontSize: "155px",
    fontFamily: "Overpass",
    fontWeight: "800",
    textShadow: "5px 5px 3px rgba(0, 0, 0, 0.45)"
}

const Blogs = (props) => {
    let style = {
        backgroundColor: "white",
        fontFamily: "Mallanna",
        fontSize: "2.25em",
        fontWeight: "600",
        borderRadius: "15px",
        padding: "15px 35px",
        margin: "15px auto",
        letterSpacing: "3px",
        boxShadow: "8px 8px 5px rgba(0,0,0,0.65)",
        width: "865"
    }

    return (
        <button style={style}>{props.topic} | {props.title}</button>
    );
}

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: <Blogs topic={"Test"} title={"The Quick Brown Dog Jumped Over The Lazy Dog"}/>
        }
    }

    render(){
        return(
            <div>
                <div className="blog-header" style={{marginBottom: "40px"}}>
                    <h2 style={HeaderTextStyle}>Blog</h2>
                </div>
                <div className="blog-data">
                    {this.state.data}
                    <Blogs topic={"Test"} title={"The Quick Brown Dog Jumped Over The Lazy Dog"}/>
                    <Blogs topic={"Test"} title={"The Quick Brown Dog Jumped Over The Lazy Dog"}/>
                    <Blogs topic={"Test"} title={"The Quick Brown Dog Jumped Over The Lazy Dog"}/>
                </div>
            </div>
        );
    }
}

export default Blog;