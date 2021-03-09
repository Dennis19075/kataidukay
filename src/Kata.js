import React, { Component } from 'react';
import './Kata.css';

class Kata extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  generateArray(filasArray, columnasArray) {

   let resultadoArray = [];
   let count = 1;
   for (let row = 0; row < filasArray; row++) {
     const filaInterna = [];
     for (let col = 0; col < columnasArray; col++) {
       filaInterna.push(count);
       count++;
     }
     resultadoArray.push(filaInterna);
   }
   this.setState({resultadoArray: resultadoArray})
  console.log(resultadoArray);
  }

  render() {
    return (
      <div className="Kata">
       {
         this.state.resultadoArray.map((filasArray) => {
          return row.map((columnasArray) => {
            return <span>{col}</span>
          });
         })
       }
      </div>
    );
  }
}

export default Kata;
