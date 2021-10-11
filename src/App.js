import React from "react";
import useForm from "./hooks/useForm";
import Input from "./components/Input";

const App = () => {
  const [form, handleChange] = useForm({ name: "", lastname: "" });

  const { name, lastname } = form;

  console.log(form);
  return (
    <div>
      <form>
        <Input
          label='Nombre'
          name='name'
          value={name}
          onChange={handleChange}
        />
        <Input
          label='Apellido'
          name='lastname'
          value={lastname}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default App;
