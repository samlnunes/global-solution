import React, { useEffect, useState } from "react";

import {
  Container,
  Message,
  Text,
  Time,
  ContentTextField,
  BoxMessage,
  Messages,
  Header,
  Photo,
  Name,
  AutomaticMessages,
} from "./styles";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Keyboard, TouchableHighlight, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import dayjs from "dayjs";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { Tag } from "../../components";

const Chat: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { messageAuto } = route.params;

  useEffect(() => {
    if (messageAuto) {
      sendMessage(messageAuto);
    }
  }, [messageAuto]);

  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Oi seu José, bom dia!",
      time: dayjs(),
      sentBy: "other",
    },
    {
      message: "Tomou seus remédios hoje?",
      time: dayjs(),
      sentBy: "other",
    },
    {
      message: "Tomei doutora!",
      time: dayjs(),
      sentBy: "my",
    },
  ]);

  const handleTouchablePress = () => {
    Keyboard.dismiss();
  };

  const sendMessage = (message?: string) => {
    if (!text && !message) {
      return;
    }

    if (message) {
      Toast.show({
        type: "success",
        text1: "Enviamos uma mensagem para o médico!",
      });
    }
    const oldMessages = [...messages];

    oldMessages.push({
      message: message ?? text,
      sentBy: "my",
      time: dayjs(),
    });

    setText("");
    setMessages(oldMessages);
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouchablePress}>
      <StatusBar style="light" />

      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate("Início")}>
            <FontAwesome5 name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Photo
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkU4ygxWEhWfuoVLMlCTsm6tBGa_9ZJLlmSgSIjE9r2g&s",
            }}
            width={50}
            height={50}
          />
          <Name>Dr. Maria Luiza</Name>
        </Header>

        <Messages>
          {messages.map((message, key) => (
            <Message key={key} my={message.sentBy === "my"}>
              <Text>{message.message}</Text>
              <Time>{dayjs(message.time).format("HH:mm")}</Time>
            </Message>
          ))}

          <AutomaticMessages>
            <TouchableOpacity
              onPress={() => sendMessage("Acordei animado hoje")}
            >
              <Tag text="Acordei animado hoje" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => sendMessage("Estou sentindo tonturae")}
            >
              <Tag text="Estou sentindo tontura" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => sendMessage("Quero falar com um enfermeiro")}
            >
              <Tag text="Quero falar com um enfermeiro" />
            </TouchableOpacity>
          </AutomaticMessages>
        </Messages>

        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
          enableOnAndroid={true}
          extraScrollHeight={Platform.OS === "android" ? -200 : 0}
        >
          <ContentTextField>
            <BoxMessage
              onChangeText={setText}
              value={text}
              placeholder="Mensagem"
            />
            <TouchableHighlight
              onPress={() => sendMessage()}
              underlayColor="none"
            >
              <Ionicons name="ios-send" size={24} color="black" />
            </TouchableHighlight>
          </ContentTextField>
        </KeyboardAwareScrollView>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Chat;
