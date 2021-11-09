import { useState } from "react";

function useForms() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
    
  };
  const handleSubmit = e => {
    e.preventDefault();
}

  return { handleChange, values, handleSubmit };
}

export default useForms;
