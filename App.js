import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: 200px;
  background-color: #ccc;
`;

const Squad = styled.View`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.cor};
`;

export default () => {
  return (
    <Page>
      <Header>
        <Squad cor="red"></Squad>
        <Squad style={{alignSelf: 'flex-start'}} cor="green"></Squad>
        <Squad cor="blue"></Squad>
        <Squad cor="gray"></Squad>
      </Header>
    </Page>
  );
};
