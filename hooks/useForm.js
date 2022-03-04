import { useState } from "react";

export const useForm = (initialValues = {}, onSubmit) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return { values, handleInputChange, handleSubmit };
};
