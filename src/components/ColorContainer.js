import React, { Component } from 'react';
import Color from '../views/Color.js';
import { getRndInteger } from '../utils/helper.js';

export default class ColorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: '#000000',
      colorArray: ['#000000']
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const firstColor = this.getRandomColor();
    const secondColor = this.getRandomColor();
    
    Promise.all([firstColor, secondColor])
      .then((values) => {
        let colorArray = this.state.colorArray;
        let randInt = getRndInteger(0,1);
        colorArray.push("#"+values[randInt].new_color);
        this.setState({colorArray: colorArray});
      })
      .catch((errors) => {
        console.log(errors);
      });
  }

  getRandomColor() {
    return new Promise((resolve, reject) => {
      fetch('http://www.colr.org/json/color/random')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
      })
  }

  handleClick(e) {
    const { currentColor, colorArray } = this.state;

    colorArray.forEach((item) => {
      if(item !== currentColor) {
        this.setState({currentColor: item});
      }
    });
  }

  render() {
    return (
      <Color
        currentColor = {this.state.currentColor}
        handleClick = {this.handleClick}
      />
      )
  }
}

