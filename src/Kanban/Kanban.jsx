import React from 'react'
import Card from '../Card/Card'
import CardHeading from '../Card/CardHeading'
import Header from '../Header/Header';

const Kanban = () => {
  return (
    <><Header/>
      <div class="container">
      
        <div class="inner-div">
          {" "}
          <Card />
          <CardHeading />
        </div>
        <div class="inner-div">
          <Card />
          <CardHeading />
        </div>
        <div class="inner-div">
          {" "}
          <Card />
          <CardHeading />
        </div>
        <div class="inner-div">
          {" "}
          <Card />
          <CardHeading />
        </div>
        <div class="inner-div">
          {" "}
          <Card />
          <CardHeading />
        </div>
      </div>
    </>
  );
}

export default Kanban