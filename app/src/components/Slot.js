/* *
  title: BoardContainer.js 

  date: 10/4/2019

  author:  javier olaya

  description: this container handles the slot that will hold the the mine or numbers
         
 */
//import { connect } from "react-redux"; // use redux
import React from 'react';
import pages from '../css/index.scss'

const Slot = (props) =>{
  const {clickSlot, indx }= props;
    return(
      <div className={"column boardSlot slotCover"} onClick={clickSlot} id={"2"} >
          Slot
      </div>
    )
  }

export default Slot;