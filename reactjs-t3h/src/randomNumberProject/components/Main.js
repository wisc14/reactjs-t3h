import React, {useEffect, useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
// data va render cua react

export default function Main() {
  const [numberOfGuess, setNumberOfGuess] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [resultText, setResultText] =useState('');
  const [randomNumber, setRandomNumer] = useState(Math.floor(Math.random() * 100 + 1));
  useEffect(()=>{
    console.log('lifecycle: mounting');
  },[])
  const changeInput = (e)=>{
    if (e.target.value){
      setInputValue(e.target.value ? parseInt(e.target.value) : null)
    }
  }
  useEffect(()=>{
    if (numberOfGuess > 7){
      setResultText('Ban thua roi!')
      resetGame();
      return;
    }
  },[numberOfGuess])
  const guess = () =>{
      setNumberOfGuess(numberOfGuess+1); //setState la ham bat dong bo
      
      if (inputValue === randomNumber) {
        setResultText('Ban doan dung roi!');
        setNumberOfGuess(0);
        setInputValue(0);
        setRandomNumer(Math.floor(Math.random() * 100 + 1));
      }else if (inputValue < randomNumber){
        setResultText('So ban doan nho qua!');
        setInputValue(0);
      }else {
        setResultText('So ban doan lon qua roi');
        setInputValue(0);
      }
  }
  const resetGame = () =>{ 
      setNumberOfGuess(0);
      setInputValue(0);
      setRandomNumer(Math.floor(Math.random() * 100 + 1));
      // setResultText(null);
    }
  
  return (
    <div className='main'>
      <Row>
        {' '}
        <Col xm={3}>
          <Button variant='success' onClick={resetGame}>New Game</Button>
        </Col>
        
      </Row>
      <Row>So lan doan cua ban la: {numberOfGuess}
      <p>{randomNumber}</p>
      </Row>

      <Row>
        <Col xs={6} xl={3}>
          <Form.Control onChange={changeInput} value={inputValue} type="number" placeholder="Enter number" />
        </Col>
        <Col xs={6} xl={3}>
          <Button onClick={guess}>Guess</Button>
        </Col>
        
      </Row>

      <Row>
        <p className='mt-2'>{resultText}</p>
      </Row>
      
    </div>
  )
}

//react su dung visual DOM, so sanh xem data co thuc su thay doi hay khong thi moi cap nhat UI