import React, { useState } from "react";

import { Container, Name, Infos, ButtonConfirm } from "./styles";
import { Feather, AntDesign } from "@expo/vector-icons";
import dayjs, { Dayjs } from "dayjs";

interface MedicineProps {
  name: string;
  qtd: number;
  time: Dayjs;
}

const Medicine: React.FC<MedicineProps> = ({ name, qtd, time }) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <Container>
      <Infos>
        <Name>
          {qtd}x {name}
        </Name>
        <Name>{dayjs(time).format("HH:mm")}</Name>
      </Infos>

      <ButtonConfirm onPress={() => setIsCheck(!isCheck)} isCheck={isCheck}>
        {isCheck ? (
          <Feather name="check" size={24} color="#fff" />
        ) : (
          <AntDesign name="clockcircleo" size={24} color="#fff" />
        )}
      </ButtonConfirm>
    </Container>
  );
};

export default Medicine;
