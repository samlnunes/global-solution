import styled from "styled-components/native";

interface ButtonConfirmProps {
  isCheck: boolean;
}

export const Container = styled.View`
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 60px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 600;
`;

export const Infos = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const ButtonConfirm = styled.TouchableHighlight<ButtonConfirmProps>`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 0 8px 8px 0;
  background-color: ${(props) => (props.isCheck ? "green" : "red")};
  position: absolute;
  right: 0;
  top: 0;
`;
