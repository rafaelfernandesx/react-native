import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
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

const Quadrado = styled.View`
  height: 200px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
  margin-top: 20px;
`;

const Hello = () => {
  const [name, setName] = useState('Rafael');
  const [mostrar, setMostrar] = useState(false);

  const handleClick = () => {
    setMostrar(!mostrar);
  };

  return (
    <View>
      <Input value={name} onChangeText={t => setName(t)} />

      <Button title={mostrar ? 'Ocultar Nome' : 'Mostrar Nome'} onPress={handleClick} />

      {mostrar == true &&
        <Quadrado>
          <Text>Seu nome é: </Text>
          <Text>{name}</Text>
        </Quadrado>
      }

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
