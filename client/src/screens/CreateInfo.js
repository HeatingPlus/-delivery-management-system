import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import { TextInput, StyleSheet, Text, Alert } from "react-native";

const Conatiner = styled.View`
    background-color=green;
`;

const TitleInputContiner = styled.ScrollView`
flex:9
  padding: 5%;
`;

const TitleInputBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.View`
  flex: 2;
`;
const TitleText = styled.Text``;

const InputBox = styled.TextInput`
  flex : 8
  margin: 12px;
  border-width: 1;
  padding: 10px;
`;

const SubmitButton = styled.Pressable`
  height: 40;
  width: 100;
  background-color: #3498db;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled.View`
flex :2
  align-items: center;
  justify-content: center;
`;

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

const CreateInfo = (props) => {
  return (
    <>
      <TitleInputContiner>
        {title.map((info) => (
          <TitleInputBox>
            <TitleBox>
              <TitleText>{info}</TitleText>
            </TitleBox>
            <InputBox></InputBox>
          </TitleInputBox>
        ))}
      </TitleInputContiner>
      <BottomContainer>
        <SubmitButton onPress={() => Alert.alert("Not yet")}>
          <Text>등록하기</Text>
        </SubmitButton>
      </BottomContainer>
    </>
  );
};

export default CreateInfo;
