import styled from 'styled-components';

const ModalStyled = styled.div`
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  max-width: 50vw;
  max-height: 50vh;
  overflow-y: auto;
`;
export default ModalStyled;
