import Modal from "./Modal";
import { CageWrapper, Button } from "./styles";

const AnimalCage = ({ setCageAnimal, animal }) => {
  const hide = () => setCageAnimal(null);

  return (
    <Modal hideModal={hide}>
      <CageWrapper>
        <h1>{animal.name}s</h1>
        <h3>{`🌴   🌴${animal.emoji} ${animal.emoji}       🌴${animal.emoji}`}</h3>

        <Button onClick={hide}>Back to Zoo</Button>
      </CageWrapper>
    </Modal>
  );
};

export default AnimalCage;
