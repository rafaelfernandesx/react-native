import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 200px;
  border: 1px solid blue;
`;

const Hello = () => {
  const [ name, setName ] = useState('Rafael');

  return (
    <View>
      <Input value={name} onChangeText={ t => setName(t)} />
      <Text>Olá {name}</Text>
    </View>
  );
};

export default () => {
  return (
    <Page>
      <Hello />
    </Page>
  );
};
