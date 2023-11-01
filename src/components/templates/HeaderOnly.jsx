//テンプレートは情報を持たない
//childrenとして画面の要素を受け取る

import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
