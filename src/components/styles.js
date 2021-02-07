import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const ZooWrapper = styled.div`
  display: flex;
  width: 700px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -20px;
`;

export const AnimalWrapper = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  cursor: pointer;
  user-select: none;

  border-radius: 300px;
  background-color: rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Emoji = styled.span`
  font-size: 2em;
`;

export const AnimalName = styled.span`
  font-weight: bold;
  font-size: 1em;
`;

export const ModalBackground = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  z-index: 3;
  position: absolute;
  translate: (-50%, -50%);
`;

export const NewAnimalWrapper = styled.div`
  width: 500px;
  min-height: 200px;
  background-color: white;
  color: ${(props) => props.theme.black};
  padding: 50px;
  border-radius: 50px;
`;

export const CageWrapper = styled.div`
  white-space: pre-wrap;
  width: 700px;
  min-height: 200px;
  background-color: #484724;
  padding: 25px;
  border-radius: 50px;
  text-align: center;
`;

export const Cage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: ${(props) => props.color ?? "white"};
  color: ${(props) => props.textColor ?? "black"};

  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;

  &:hover {
    box-shadow: 0 9px #aaa;
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  font-size: 1.2em;
  padding: 0.5em;
  border-radius: 3px;
  margin-bottom: 0.5em;
`;
