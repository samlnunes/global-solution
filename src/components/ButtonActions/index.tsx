import React from "react";

import { Container, Title, Content, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonActionsProps extends TouchableOpacityProps {
  width: string;
  title: string;
  color: string;
  icon: string;
  fontSize?: string;
  onPress?: () => void;
}

const iconMapping: Record<string, any> = {
  chat: require("../../assets/chat.png"),
  remedio: require("../../assets/remedio.png"),
  sos: require("../../assets/sos.png"),
  happy: require("../../assets/happy.png"),
  sad: require("../../assets/sad.png"),
};

const ButtonActions: React.FC<ButtonActionsProps> = ({
  width,
  title,
  color,
  icon,
  fontSize,
  onPress,
  ...rest
}) => {
  const selectedIcon = iconMapping[icon];

  return (
    <Container
      onPress={onPress}
      width={width}
      color={color}
      disabled={rest.disabled}
    >
      <Content>
        <Title fontSize={fontSize}>{title}</Title>
        <Icon source={selectedIcon} />
      </Content>
    </Container>
  );
};

export default ButtonActions;
