import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = (val) => {
    if (val === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (val === 'C') {
      setInput('');
    } else {
      setInput(input + val);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <div className="row">
          <button className="number" onClick={() => handleButtonPress('7')}>7</button>
          <button className="number" onClick={() => handleButtonPress('8')}>8</button>
          <button className="number" onClick={() => handleButtonPress('9')}>9</button>
          <button onClick={() => handleButtonPress('/')}>/</button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonPress('4')}>4</button>
          <button className="number" onClick={() => handleButtonPress('5')}>5</button>
          <button className="number" onClick={() => handleButtonPress('6')}>6</button>
          <button onClick={() => handleButtonPress('*')}>*</button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonPress('1')}>1</button>
          <button className="number" onClick={() => handleButtonPress('2')}>2</button>
          <button className="number" onClick={() => handleButtonPress('3')}>3</button>
          <button onClick={() => handleButtonPress('-')}>-</button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonPress('0')}>0</button>
          <button className="number" onClick={() => handleButtonPress('.')}>.</button>
          <button className="equal" onClick={() => handleButtonPress('=')}>=</button>
          <button onClick={() => handleButtonPress('+')}>+</button>
        </div>
        <div className="row">
          <button className="clear" onClick={() => handleButtonPress('C')}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;


