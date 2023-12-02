import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Tag;
