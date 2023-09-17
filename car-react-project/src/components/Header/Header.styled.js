import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: rgb(232 237 242 /1);
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: all 300ms ease-out;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: rgb(236, 53, 53);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;
