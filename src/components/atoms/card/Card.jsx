//どんなものでも、受け取ったものをカード化する
//<Card></Card>に挟まれた要素を受け取る
//どこでも使用できるようにするためCardコンポーネント自体には横幅などの大きさの概念は持たせない
//レイアウトの調整はコンポーネントを呼ぶ側の責務にする

import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
