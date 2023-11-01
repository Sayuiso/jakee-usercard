import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//共通のcssが当たったBaseButtonに付け加える
const SButton = styled(BaseButton)`
  background-color: #ffa500;
`;
