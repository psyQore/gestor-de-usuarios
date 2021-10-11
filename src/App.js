import React from "react";
import useForm from "./hooks/useForm";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

const App = () => {
  const [form, handleChange] = useForm({ name: "", lastname: "", email: "" });

  const { name, lastname } = form;

  console.log(form);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form>
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
              value={lastname}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default App;
