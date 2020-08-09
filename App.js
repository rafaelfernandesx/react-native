import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  background-color: #02f;
  font-size: 30px;
  flex: 1;
`;

const Texto = styled.Text`
  color: ${props=>props.cor};
  font-size: 30px;
  background-color: #222;
`;

export default () => {
  return (
    <Page>
      <Texto cor="red">Texo exemplo</Texto>
      <Texto cor="gray">Hello World</Texto>
    </Page>
  );
};
