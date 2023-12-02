import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { Container, ContentActions } from "./styles";
import { ButtonActions } from "../../components";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { Linking, Platform } from "react-native";
import axios from "axios";
import dayjs from "dayjs";

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [disabledHappy, setDisabledHappy] = useState(false);
  const [disabledSad, setDisabledSad] = useState(false);

  const emergencia = () => {
    const numeroLink = `tel:192`;

    if (Platform.OS === "android" || Linking.canOpenURL(numeroLink)) {
      Linking.openURL(numeroLink);
    } else {
      Toast.show({
        type: "error",
        text1: "Não foi possível abrir o aplicativo de telefone para 192",
      });
    }
  };

  const onPressSad = async () => {
    try {
      await axios.post("http://172.173.251.78:8080/evento", {
        eventoTime: dayjs(),
        valor: "sad",
        tipo: "bem-estar",
        paciente: null,
      });
      setDisabledSad(true);
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Algo deu errado! Tente novamente!",
      });
    } finally {
      navigation.navigate("Chat", { messageAuto: "Acordei mal hoje!" });
    }
  };

  return (
    <Container>
      <StatusBar translucent />

      <ContentActions>
        <ButtonActions
          width="200px"
          title="Medicamentos"
          color="blue"
          icon="remedio"
          onPress={() => {
            navigation.navigate("Medicamentos");
          }}
        />
        <ButtonActions
          width="140px"
          title="Mensagens"
          color="#C7B300"
          icon="chat"
          onPress={() => {
            navigation.navigate("Chat", { messageAuto: "" });
          }}
        />
        <ButtonActions
          width="100%"
          title="SOS"
          color="red"
          icon="sos"
          onPress={() => {
            Toast.show({
              type: "success",
              text1: "Enviamos um chamado para o hospital!",
            });
            emergencia();
          }}
          fontSize="56px"
        />
        <ButtonActions
          width="170px"
          title="Acordei bem"
          color="green"
          icon="happy"
          disabled={disabledHappy}
          onPress={() => {
            Toast.show({
              type: "success",
              text1: "Que bom que acordou bem!",
            });
            setDisabledHappy(true);
          }}
          fontSize="32px"
        />
        <ButtonActions
          width="170px"
          title="Acordei mal"
          color="orange"
          icon="sad"
          disabled={disabledSad}
          onPress={onPressSad}
          fontSize="32px"
        />
      </ContentActions>
    </Container>
  );
};

export default Home;
