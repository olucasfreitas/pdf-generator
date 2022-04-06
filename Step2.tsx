import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import IStep from "./IStep";

export default function Step2({ nextStep, backStep }: IStep) {
  const [email, setEmail] = useState<string>();
  const [whatsapp, setWhatapp] = useState<string>();

  return (
    <View>
      <Text>Dados Pessoais</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Whatsapp"
          onChangeText={setWhatapp}
          value={whatsapp}
        />
      </View>
      <Button
        title="NEXT"
        onPress={() => {
          nextStep({ email: email, whatsapp: whatsapp });
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
