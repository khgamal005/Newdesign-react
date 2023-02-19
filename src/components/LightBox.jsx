import React from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import classes from "./lightbox.module.css";







export default function LightBox(props) {
  return (
  <>
      <div className={classes.backdrop}  onClick={props.closeForm}></div>
        <Card className={classes.modal}>
          {props.children}
        <Button onClick={props.closeForm} >close</Button>
    
    </Card>
    
  </>

  )
}


