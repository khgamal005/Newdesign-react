import React from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import classes from "./lightbox.module.css";
import { Col } from "react-bootstrap";







export default function LightBox(props) {
  return (
  <>
      <div  onClick={(e)=>props.closeForm(e.target)}>   </div>

        
       
       <Col md="8" xs="12" sm="12">
       <div className={classes.card} >
       <Card className={classes.modal}>
          {props.children}
        <Button onClick={props.closeForm} >close</Button>
    </Card>
       </div>
   
       </Col>
  </>

  )
}


