import { useState } from 'react';

export default function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => setValues({ ...values, [key]: value });

  const onChange = (key) => (ev) =>
    setValue(key, ev.target ? ev.target.value : ev);

  return {
    values,
    reset: () => setValues(initialValues),
    handlers: Object.keys(values).reduce(
      (acc, key) => ({
        ...acc,
        [key]: { value: values[key], onChange: onChange(key) },
      }),
      {}
    ),
  };
}
