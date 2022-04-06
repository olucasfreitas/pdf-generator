import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Checkbox, Modal } from "react-native-paper";
import IStep from "./IStep";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

export default function Step4({ backStep, info }: IStep) {
  const [formInfo, SetFormInfo] = useState(info);
  const [selectedPrinter, setSelectedPrinter] = useState<any>();
  const [lider, setLider] = useState<boolean>(false);
  const [comunicativo, setComunicativo] = useState<boolean>(false);
  const [colaborativo, setColaborativo] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 10,
    marginLeft: 40,
    width: "80%",
    height: "80%",
  };

  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${formInfo?.avatar}
    </h1>
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${formInfo?.cargo}
    </h1>
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${formInfo?.email}
    </h1>
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${formInfo?.nome}
    </h1>
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${formInfo?.whatsapp}
    </h1>
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${lider ? "Lider" : ""}
    </h1>
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${colaborativo ? "Colaborativo" : ""}
    </h1>
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      ${comunicativo ? "Comunicativo" : ""}
    </h1>
  </body>
</html>
`;

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log("File has been saved to:", uri);
    await Sharing.shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Habilidades</Text>
        <Checkbox.Item
          label="Lider"
          status={lider ? "checked" : "unchecked"}
          onPress={() => {
            setLider(!lider);
          }}
        />
        <Checkbox.Item
          label="Comunicativo"
          status={comunicativo ? "checked" : "unchecked"}
          onPress={() => {
            setComunicativo(!comunicativo);
          }}
        />
        <Checkbox.Item
          label="Colaborativo"
          status={colaborativo ? "checked" : "unchecked"}
          onPress={() => {
            setColaborativo(!colaborativo);
          }}
        />
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>{formInfo?.avatar}</Text>
          <Text>{formInfo?.cargo}</Text>
          <Text>{formInfo?.email}</Text>
          <Text>{formInfo?.nome}</Text>
          <Text>{formInfo?.whatsapp}</Text>
          {lider ? <Text>Lider</Text> : <Text></Text>}
          {comunicativo ? <Text>Comunicativo</Text> : <Text></Text>}
          {colaborativo ? <Text>Colaborativo</Text> : <Text></Text>}

          <Button
            title="Generate PDF"
            onPress={() => {
              printToFile();
            }}
          />
        </Modal>
      </View>

      <Button
        title="BACK"
        onPress={() => {
          backStep();
        }}
      />

      <Button
        title="Mostrar modal"
        onPress={() => {
          showModal();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});
