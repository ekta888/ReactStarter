import React from "react";
import { useState, useEffect } from "react";
const useFormFields = (callback, validate) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  const handleSubmit = (event) => {
    // if (event) {
    //   event.preventDefault();
    // }
    // callback();
    if (event) event.preventDefault();
    setErrors(validate(inputs));
    setIsSubmitting(true);
    //callback();
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    errors,
    inputs
  };
};
export default useFormFields;
