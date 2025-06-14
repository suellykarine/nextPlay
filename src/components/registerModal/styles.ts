import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: var(--light-blue);
  padding: 3rem;
  border-radius: 10px;
  width: 350px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    color: var(--light-green);
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: var(--light-green);
  color: var(--light-blue);
  &::placeholder {
    color: var(--light-blue);
  }
`;

export const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 0.875rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  background: var(--light-green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
