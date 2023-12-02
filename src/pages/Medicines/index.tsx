import React, { useEffect, useState } from "react";

import { Container, Title, SubTitle, Top, Header, Page } from "./styles";
import { Medicine } from "../../components";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import dayjs from "dayjs";
import axios from "axios";
import Toast from "react-native-toast-message";

const Medicines: React.FC = () => {
  const navigation = useNavigation();

  const [medicinesRevenue, setMedicinesRevenue] = useState();

  const getMedicines = async () => {
    try {
      const response = await axios.get(
        "http://172.173.251.78:8080/receita_completa"
      );

      setMedicinesRevenue(response.data[0]);
    } catch {
      Toast.show({
        type: "error",
        text1: "Algo deu errado! Tente novamente!",
      });
    }
  };

  useEffect(() => {
    getMedicines();
  }, []);

  return (
    <Container>
      <StatusBar style="light" />

      <Header>
        <TouchableOpacity onPress={() => navigation.navigate("Início")}>
          <FontAwesome5 name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Page>Medicamentos</Page>
      </Header>

      <Top>
        <Title>Olá, José!</Title>
        <SubTitle>Estes são seus remédios do dia</SubTitle>
      </Top>

      <Medicine name="Dipirona" qtd={2} time={dayjs("2023-11-30T10:00:00")} />
      <Medicine
        name="Paracetamol"
        qtd={1}
        time={dayjs("2023-11-30T15:00:00")}
      />
      <Medicine
        name="Prediminisona"
        qtd={1}
        time={dayjs("2023-11-30T19:00:00")}
      />
      <Medicine
        name={
          medicinesRevenue?.receitaParcial?.medicamento?.nome ?? "Amoxilina"
        }
        qtd={medicinesRevenue?.receitaParcial?.quantidade ?? 2}
        time={dayjs(
          medicinesRevenue?.receitaParcial?.horario ?? "2023-11-30T20:00:00"
        )}
      />
    </Container>
  );
};

export default Medicines;
