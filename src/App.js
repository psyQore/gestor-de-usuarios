import React from "react";
import useForm from "./hooks/useForm";

const App = () => {
  const [form, handleChange] = useForm({ name: "" });

  const { name } = form;

  console.log(form);
  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Nombre..'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default App;
