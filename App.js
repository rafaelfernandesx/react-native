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

const Hello = () => {
  const [name, setName] = useState('Rafael');
  const [backupName, setbackupName] = useState('');

  const handleClick = () => {
    setbackupName(name);
  };

  return (
    <View>
      <Input value={name} onChangeText={t => setName(t)} />

      <Button title="Change name to Jhon" onPress={handleClick} />

      <Text>{backupName}</Text>
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
