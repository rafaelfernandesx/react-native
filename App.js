import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Hello = (props) => {
  return (
    <Text>{props.frase}</Text>
  );

};

export default () => {
  return (
    <Page>
      <Hello frase="Bem vindo" />
      <Hello frase="Frase de Teste 1" />
    </Page>
  );
};
