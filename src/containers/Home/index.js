
// Atualizado dia 27/10/2022 as20:52

import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";
//import {Link} from 'react-router-dom'

import axios from "axios";

import Casal1 from '../../assets/casal1.svg';
import Arrow from '../../assets/arrow.svg';

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Inputlabel,
  Input,
  Button
  //User,

} from "./styles";





function App() {
  const [users, setUsers] = useState([]);

  const history = useHistory();



  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    //console.log(newUser)
    setUsers([...users, newUser]);

    history.push("/usuarios");

  }

  return (
    <Container>
      <Image alt="logo-casal1" src={Casal1} />

      <ContainerItens>

        <H1>Back-end - 3001/Home</H1>

        <Inputlabel> Nome</Inputlabel>
        <Input ref={inputName} placeholder="Nome" />

        <Inputlabel>Idade</Inputlabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="Seta" src={Arrow} />
        </Button>



      </ContainerItens>
    </Container>

  );
}
export default App;
