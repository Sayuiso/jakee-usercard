import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

//10件のダミーデータ。valには番号が入る
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `さゆいそ${val}`,
    image:
      "https://source.unsplash.com/elephant-walking-during-daytime-QJbyG6O0ick",
    email: "1234@ezweb.jp",
    phone: "080-6560-6118",
    company: {
      name: "ライト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
