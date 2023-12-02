import React, { useState } from "react";

import { Container, Logo, Form } from "./styles";
import { Button, TextField } from "../../components";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleTouchablePress = () => {
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Início");
    }, 3000);
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouchablePress}>
      <Container>
        <Logo source={require("../../assets/logo.png")} />

        <Form>
          <TextField
            onChange={setLogin}
            value={login}
            placeholder="E-mail"
            textContentType="emailAddress"
            returnKeyType="next"
          />
          <TextField
            onChange={setPassword}
            value={password}
            secureTextEntry
            placeholder="Senha"
            returnKeyType="join"
          />

          <Button label="Entrar" isLoading={isLoading} onPress={onSubmit} />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
