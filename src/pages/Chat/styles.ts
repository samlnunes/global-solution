import styled from "styled-components/native";

interface MessageContainerProps {
  my?: boolean;
}

export const Container = styled.View`
  padding: 0 20px 20px 20px;
  height: 100%;
  display: flex;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 18px;
`;

export const Time = styled.Text`
  color: #000;
  font-size: 14px;
  opacity: 0.5;
`;

export const Messages = styled.ScrollView`
  gap: 5px;
`;

export const BoxMessage = styled.TextInput`
  width: 90%;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
`;

export const Message = styled.View<MessageContainerProps>`
  padding: 10px;
  background-color: ${(props) => (props.my ? "#E7FFDB" : "#fff")};
  border-radius: 8px;
  align-self: ${(props) => (props.my ? "flex-end" : "flex-start")};
  align-items: ${(props) => (props.my ? "flex-end" : "flex-start")};
  gap: 5px;
  max-width: 100%;
  margin-bottom: 5px;
`;

export const ContentTextField = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 40px;
  height: auto;
`;

export const Header = styled.View`
  background-color: #853439;
  margin: 0 -20px;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  padding-top: 60px;
  flex-direction: row;
  gap: 15px;
`;

export const Photo = styled.Image`
  border-radius: 100%;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;

export const AutomaticMessages = styled.View`
  flex-direction: row;
  gap: 5px;
  margin: 10px 0;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
