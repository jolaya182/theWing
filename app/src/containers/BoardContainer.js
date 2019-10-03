/* *
  title: BoardContainer.js 

  date: 10/4/2019

  author:  javier olaya

  description: this container handles the grouping of all the board game components, and logic
         
 */
//import { connect } from "react-redux"; // use redux
import React from 'react';
import pages from '../css/index.scss'
import Board from '../components/Board';

export default class BoardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode:"easy",
      width:19,
      height: 19,
      showSlots: {2: false},
      mines: {},
      flag:{}
    }
    
  }

  //use lifecycle to initiate the game

  //fire all necessary events once the slot has been clicked
  clickSlot = (e)=>{
        e.preventDefault();
        console.log("click", e.currentTarget.id);
        const slotId = e.currentTarget.id;
        let {showSlots} = this.state;
        showSlots[slotId] = true;
        //check if there is a mine
        //check if there is space
        //check if there are more spaces

        //update the state with no property values
        this.setState((state, props)=>(
          {showSlots}
        ));
      }

  //initiate all the board game settings
   generateBoadGame(){
     const mode = this.state.mode;
     this.setGameMode(mode);
     this.setAllSlotNotVisible();
      
   }

   //change the mode state, to the desired difficulty leve
   setGameMode = ()=>{
     switch(mode){
        case "easy":
          this.setState({mode:"easy", width: 19, height:19});
        break;
        case "med":
        this.setState({mode:"med", width: 16, height:16})
        break;
        case "hard":
        this.setState({mode:"hard", width: 30, height:16})
        break;
      }
   }

    //cover all the slots 
    setAllSlotNotVisible= ()=>{
      const totalSlots = this.state.height * this.state.width;
      let showSlots = {}
      for(let indx = 0; indx < totalSlots; indx += 1){
          showSlots[indx]=false;
      }
      this.setState((state, props)=>({showSlots}) )
    }
  //  generateAllMines= ()=>{}
  //  generateAllSlotNUmbers= ()=>{}
  //  checkMine= ()=>{}
  //  checkForSpace= ()=>{}
  //  updateCurrentSlot= ()=>{}
  //  checkForWinner= ()=>{}
  //  checkForLoser= ()=>{}
  //  setTimer= ()=>{}
  //  restart= ()=>{}
  //  flagSlot= ()=>{}

  render(){
    const {width, height} = this.state;
    const {clickSlot} = this;
    return(
      <div>
        <Board width = {width} height= {height} clickSlot={clickSlot}></Board>
      </div>
    )
  }
}