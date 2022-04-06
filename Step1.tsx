import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Avatar, RadioButton } from "react-native-paper";
import IStep from "./IStep";

export default function Step1({ nextStep }: IStep) {
  const [value, setValue] = useState("./img/casseb.jpeg");
  const [nome, setNome] = useState<string>();

  return (
    <View>
      <Text>Identificador</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={setNome}
          value={nome}
        />

        <View style={styles.avatar}>
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <Avatar.Image size={90} source={require("./img/casseb.jpeg")} />
            <RadioButton.Item label="Casseb" value="./img/casseb.jpeg" />
            <Avatar.Image size={90} source={require("./img/belle.jpeg")} />
            <RadioButton.Item label="Isabelle" value="./img/belle.jpeg" />
          </RadioButton.Group>
        </View>
      </View>
      <Button
        title="NEXT"
        onPress={() => {
          nextStep({ nome: nome, avatar: value });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatar: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
