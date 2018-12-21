import React, { Component } from 'react';
import Color from '../views/Color.js';
import { getRndInteger } from '../utils/helper.js';
import PropTypes from 'prop-types';

export default class ColorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: '#000000',
      availibleColors: ['#000000']
    };

    this.colors = ['#000000'];


    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const firstColor = this.getRandomColor();
    const secondColor = this.getRandomColor();
    
    Promise.all([firstColor, secondColor])
      .then((values) => {
        let availibleColors = this.state.availibleColors;
        let randInt = getRndInteger(0,1);
        availibleColors.push("#"+values[randInt].new_color);
        this.setState({availibleColors: availibleColors}); 
        values.forEach((item) => {
          this.colors.push("#" + item.new_color);
        });
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
    const { currentColor, availibleColors } = this.state;

    availibleColors.forEach((item) => {
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
        text = {this.props.text}
      />
      )
  }
}

ColorContainer.propTypes = {
  text: PropTypes.string
};

