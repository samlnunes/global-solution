import styled from "styled-components/native";

interface ContainerProps {
  width: string;
  color: string;
}

interface TitleProps {
  fontSize?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${(props) => props.width};
  height: 230px;
  background-color: ${(props) => (props.disabled ? "grey" : props.color)};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${(props) => props.fontSize ?? "18px"};
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;
