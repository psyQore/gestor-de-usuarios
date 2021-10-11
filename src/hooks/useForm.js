import { useState } from "react";

const useForm = (initial) => {
  const [form, setForm] = useState(initial);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setForm(initial);
  };

  return [form, handleChange, reset];
};

export default useForm;
