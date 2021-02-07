import { Emoji, ZooWrapper, AnimalWrapper, AnimalName } from "./styles";

const ZooAnimals = ({ animals, setCageAnimal, setShowNewAnimalForm }) => {
  return (
    <ZooWrapper>
      {animals.map((animal) => (
        <AnimalWrapper key={animal.name} onClick={() => setCageAnimal(animal)}>
          <Emoji>{animal.emoji}</Emoji>
          <AnimalName>{animal.name}s</AnimalName>
        </AnimalWrapper>
      ))}

      <AnimalWrapper onClick={() => setShowNewAnimalForm(true)}>
        <Emoji>➕</Emoji>
        <AnimalName>Add</AnimalName>
      </AnimalWrapper>
    </ZooWrapper>
  );
};

export default ZooAnimals;
