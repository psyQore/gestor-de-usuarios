import React, { useState } from "react";
import useForm from "./hooks/useForm";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, handleChange, reset] = useForm({
    name: "",
    lastname: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
    reset();
  };

  const { name, lastname, email } = form;

  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              autoComplete='off'
              label='Nombre'
              name='name'
              value={name}
              onChange={handleChange}
            />
            <Input
              autoComplete='off'
              label='Apellido'
              name='lastname'
              value={lastname}
              onChange={handleChange}
            />
            <Input
              autoComplete='off'
              label='Correo'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
      <Card>
        <ul>
          {users.map((x, index) => (
            <li key={index}>{`${x.name} ${x.lastname} - ${x.email}`}</li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default App;
