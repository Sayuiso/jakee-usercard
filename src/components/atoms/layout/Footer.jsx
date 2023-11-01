import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2023 sayuiso Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #6495ed;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
`;
