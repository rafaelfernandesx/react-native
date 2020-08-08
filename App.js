import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

// -------- maneiras de criar component
// const TextoInicial = () => {
//   return (
//     <Text>Texto 2 qualquer </Text>
//   );
// }

// function TextoInicial() {
//   return (
//     <Text>Texto 3 qualquer </Text>
//   );
// }

// class TextoInicial extends Component {
//   render() {
//     return (
//       <Text>Texto 4 qualquer </Text>
//     );
//   }
// }

// const TextoInicial = () => <Text>Texto 5 qualquer </Text>;

// export default TextoInicial;

export default () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={{color: '#fff', fontSize: 25}}>Olá Mundo!</Text>
      <Text style={styles.texto}>Olá Mundo2!</Text>
      <Text style={[styles.texto, {fontSize: 25}]}>Olá Mundo3!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: 200,
    backgroundColor: '#333',
  },
  texto: {
    color: '#55f',
    fontSize: 20,
  },
});
