import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Formdata from "./Form/Formdata";

import "../oct 1-2/colors.css"
class Firstr extends React.Component{
    render(){
        return(
            <div>
                <h1>Hi pranav studying in 3rd standard</h1>;
                <button className="btn btn-secondary">click</button>
                <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
    <Formdata/>
            </div>
    )
        }
}
export default Firstr