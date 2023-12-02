import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(KeyboardAvoidingView).attrs({
  behavior: "padding",
})`
  background-color: #853439;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Form = styled.View`
  display: flex;
  margin-top: 100px;
  gap: 10px;
`;
