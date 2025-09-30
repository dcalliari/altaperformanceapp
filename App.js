import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handlePress = () => {
    setDisplayText(`Olá, ${text}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App para Teste com Appium</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={text}
        onChangeText={setText}
        testID="nameInput"
      />
      <Button title="Cumprimentar" onPress={handlePress} testID="greetButton" />
      {displayText ? <Text testID="greetingText">{displayText}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  input: { width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

export default App;