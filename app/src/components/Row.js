/* *
  title: Row.js 

  date: 10/4/2019

  author:  javier olaya

  description: this container handles the board it self and the slots
         
 */
//import { connect } from "react-redux"; // use redux
import React from 'react';
import pages from '../css/index.scss'
import Slot from './Slot';

const Row = (props) =>{
  const {width, clickSlot} = props;
  const w = new Array(width).fill(null);
    return(
      <div className={"row boardRow"}  >
        row
      {w.map((e, indx)=>
        <Slot  key={indx} clickSlot={clickSlot} id={indx}></Slot>
      )}
      </div>
    )
  }

export default Row;