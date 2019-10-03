/* *
  title: BoardContainer.js 

  date: 10/4/2019

  author:  javier olaya

  description: this container handles the board it self and the slots
         
 */
//import { connect } from "react-redux"; // use redux
import React from 'react';
import pages from '../css/index.scss'
import Row from './Row';

const BoardContainer = (props) =>{
  const {height, width,clickSlot} = props;
  const h = new Array(height).fill(null);
    return(
      <div className={""} >
      {h.map((e, indx)=>
        <Row  width={width} key={indx} clickSlot={clickSlot}></Row>
      )}
      </div>
    )
  }

export default BoardContainer;