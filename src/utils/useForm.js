import { useState } from "react";

export default function useForm(defaultValue) {
  const [values, setValues] = useState(defaultValue);

  return [
    values,
    (formType, formValue) => {
      if (formType === "reset") {
        return setValues(defaultValue);
      }
      return setValues({ ...values, [formType]: formValue });
    },
  ];
}
