import React from "react";
import styled from "styled-components/native";

import { Text } from "react-native";

const Conatiner = styled.View`
background-color = yellow;`;

const TitleInputBox = styled.View`
  margin: 5%;
   flex-direction = row;
   background-color = red;
`;

const TitleBox = styled.View``;
const TitleText = styled.Text``;

const InputBox = styled.TextInput``;

const title = [
  "ID",
  "Size",
  "Phone",
  "Balance",
  "Site",
  "CreateAt",
  "UpdateAt",
  "Status",
  "Address",
];

const CreateInfo = () => {
  return (
    <Conatiner>
      {title.map((info) => (
        <TitleInputBox>
          <TitleBox>
            <TitleText>{info}</TitleText>
          </TitleBox>
          <InputBox></InputBox>
        </TitleInputBox>
      ))}
    </Conatiner>
  );
};

export default CreateInfo;
