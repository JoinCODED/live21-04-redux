import { ModalContent, ModalBackground } from "./styles";

const Modal = ({ hideModal, children }) => {
  return (
    <>
      <ModalBackground onClick={hideModal} />

      <ModalContent>{children}</ModalContent>
    </>
  );
};

export default Modal;
