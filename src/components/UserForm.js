import React from "react";
import Button from "./Button";
import Input from "./Input";
import useForm from "../hooks/useForm";

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };

  const { name, lastname, email } = form;
  
  return (
    <form onSubmit={handleSubmit}>
      <Input
        autoComplete='off'
        label='Nombre'
        name='name'
        value={name}
        onChange={handleChange}
        placeholder='Nombre..'
      />
      <Input
        autoComplete='off'
        label='Apellido'
        name='lastname'
        value={lastname}
        onChange={handleChange}
        placeholder='Apellido..'
      />
      <Input
        autoComplete='off'
        label='Correo'
        name='email'
        value={email}
        onChange={handleChange}
        placeholder='Correo..'
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
