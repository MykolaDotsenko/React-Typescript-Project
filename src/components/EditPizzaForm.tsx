import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface EditPizzaFormProps {
  data:Pizza;
}


const EditPizzaForm: FC<EditPizzaFormProps> = ({ data }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handle change >> ", e.target);
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
     console.log('edit pizza');
    }
  };

  console.log("edit pizza");

  return (
    <form 
    className="edit-form"
    onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Picture"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit"> Submit</button>
    </form>
  );
};

export default EditPizzaForm;