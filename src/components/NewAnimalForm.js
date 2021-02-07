import { useState } from "react";
import Modal from "./Modal";
import { ButtonsWrapper, Button, NewAnimalWrapper, Input } from "./styles";

const NewAnimalForm = ({ state, setShowNewAnimalForm }) => {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    emoji: "",
  });

  const hide = () => setShowNewAnimalForm(false);

  const submit = (event) => {
    event.preventDefault();
    state.animals = [...state.animals, newAnimal];
    hide();
  };

  const handleChange = (event) => {
    setNewAnimal({ ...newAnimal, [event.target.name]: event.target.value });
  };

  return (
    <Modal hideModal={hide}>
      <NewAnimalWrapper>
        <h1>Add an animal</h1>

        <form onSubmit={submit}>
          <div>
            <label>Animal Name</label>
            <Input name="name" onChange={handleChange} placeholder="Duck" />
          </div>

          <div>
            <label>Animal Emoji</label>
            <Input name="emoji" onChange={handleChange} placeholder="🦆" />
          </div>

          <ButtonsWrapper>
            <Button
              type="reset"
              color="tomato"
              textColor="white"
              onClick={hide}
            >
              Back to Zoo
            </Button>

            <Button type="submit" color="forestgreen" textColor="white">
              Add Animal
            </Button>
          </ButtonsWrapper>
        </form>
      </NewAnimalWrapper>
    </Modal>
  );
};

export default NewAnimalForm;
