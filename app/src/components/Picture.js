/* *
  title: Picture.js 

  date: 10/3/2019

  author:  javier olaya

  description: component to hold the piture
         
 */
import React from 'react';
import proPic from '../pictures/profile.png';

const Picture = ({ picture }) => {
  return (<a>
    <img
      className={"pic"}
      src={picture}
      onError={(e) => { e.target.onerror = null; e.target.src = proPic }}
    ></img>
  </a>
  );
}
export default Picture;