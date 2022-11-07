import React from "react";
import Main from "./component/Main";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
import {Container} from "react-bootstrap"
import './App.css';
const App = () => {
  return (
    <div>
      
        <Container>
          <Menu></Menu>
        </Container>

    </div>
  )
}

export default App;
//export defaut: khi import có thể đổi tên được
//export const: khi import phải đúng tên và trong 1 object ,VD:{App}