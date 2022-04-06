import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import IStep from "./IStep";

export default function Step3({ nextStep, backStep }: IStep) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text>Poscionamento</Text>

      <TextInput
        style={styles.input}
        placeholder="Cargo"
        onChangeText={setText}
        value={text}
      />

      <Button
        title="NEXT"
        onPress={() => {
          {
            nextStep({ cargo: text });
          }
        }}
      />
      <Button
        title="BACK"
        onPress={() => {
          backStep();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
