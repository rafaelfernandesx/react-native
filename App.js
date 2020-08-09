import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Squad = styled.View`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.cor};
`;

export default () => {
  return (
    <Page>
      <Squad cor="red"></Squad>
      <Squad cor="green"></Squad>
      <Squad cor="blue"></Squad>
    </Page>
  );
};
