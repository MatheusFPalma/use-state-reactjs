import styled from "styled-components";

const NavBarStyled = styled.nav`
  height: 80px;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 50px;

  > a {
    padding: 0px 20px 0px 20px;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }

  > a:hover {
    color: white;
  }
`;

export default NavBarStyled;
