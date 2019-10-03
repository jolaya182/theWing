/* *
  title: index.js 

  date: 10/3/2019

  author:  javier olaya

  description: this file handles the content that goes on the web page
         
 */
import React from 'react';
import pages from '../css/index.scss';
import MainMenu from './MainMenu';
import BoardContainer from '../containers/BoardContainer';

export const whoops404 = () => (<div className={"whoops404"}>
  <h1>resources not found at {location.pathname}</h1>
</div>)

const PageTemplate = ({ children }) => <div className={"page"}>
  <MainMenu></MainMenu>
  {children}
</div>

export const MineSweep = () => (
  <PageTemplate>
    <div>
      <section className={"MineSweep"}>
        <h1>MineSweep</h1>
        <BoardContainer></BoardContainer>
      </section>
    </div>
  </PageTemplate>);
  
  export const home2 = () => (
    <PageTemplate>
      <div>
        <section className={"home"}>
          <h1>Home</h1>
        </section>
      </div>
    </PageTemplate>);

