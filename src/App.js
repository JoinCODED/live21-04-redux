import AnimalCage from "./components/AnimalCage";
import { AppWrapper } from "./components/styles";
import ZooAnimals from "./components/ZooAnimals";
import NewAnimalForm from "./components/NewAnimalForm";
import { useState } from "react";

const App = ({ state }) => {
  const [cageAnimal, setCageAnimal] = useState(false);
  const [showNewAnimalForm, setShowNewAnimalForm] = useState(false);

  return (
    <AppWrapper>
      <h2>Welcome to Coded's Zoo!</h2>
      <ZooAnimals
        animals={state.animals}
        setCageAnimal={setCageAnimal}
        setShowNewAnimalForm={setShowNewAnimalForm}
      />
      {cageAnimal ? (
        <AnimalCage setCageAnimal={setCageAnimal} animal={cageAnimal} />
      ) : null}
      {showNewAnimalForm ? (
        <NewAnimalForm
          state={state}
          setShowNewAnimalForm={setShowNewAnimalForm}
        />
      ) : null}
    </AppWrapper>
  );
};

export default App;
