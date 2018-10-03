import React from 'react';
import {Button, FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';

const HeaderTextStyle ={
    color: "#ff8f00",
    fontFamily: "Overpass",
    fontWeight: "800",
    fontSize: "155px",
    textShadow: "5px 5px 3px rgba(0,0,0,0.45)",
    margin: "50px auto 25px auto"
}

const ButtonStyle = {
    margin: "25px auto",
    padding: "5px 35px",
    backgroundColor: "transparent",
    borderColor: "transparent",
    fontFamily: "Mallanna",
    fontSize: "2.75em",
    color: "#ff8f00",
    fontWeight: "600",
    letterSpacing: "2px"
}

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    render(){
        return(
            <div className="form">
                <div className="form-title">
                    <h2 style={HeaderTextStyle}>Lets Help The World<br/>See Your Vision!</h2>
                </div>
                <Form>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel bsClass="FormLabel">Full Name</ControlLabel>
                        <FormControl
                            type="text"
                        />
                    </FormGroup>  
                </Form>
                <Form>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel bsClass="FormLabel">Email Address</ControlLabel>
                        <FormControl
                            type="email"
                        />
                    </FormGroup>  
                </Form>
                <Form>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel bsClass="FormLabel">Description of Project</ControlLabel>
                        <FormControl
                            type="textarea"
                        />
                    </FormGroup>  
                </Form>
                <Button style={ButtonStyle} type="submit">Submit</Button>
            </div>
        );
    }
}

export default Contact;