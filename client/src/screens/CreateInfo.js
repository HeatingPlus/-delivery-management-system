import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import { TextInput, StyleSheet, Text, Alert } from "react-native";
import axios from "axios";

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

const title = ["Size", "Phone", "잔금", "주문 사이트", "Status", "Address"];

const CreateInfo = (props) => {
  const [size, setSize] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cost, setCost] = useState(null);
  const [site, setSite] = useState(null);
  const [status, setStatus] = useState(null);
  const [address, setAddress] = useState(null);

  const submitPress = async () => {
    const data = {
      size: size,
      phone: phone,
      cost: cost,
      site: site,
      status: status,
      address: address,
    };

    await axios.post("http://52.78.220.181:3000/admin", data);
    console.log(data);
    console.log(address);
    Alert.alert("hi");
    return;
  };

  return (
    <>
      <TitleInputContiner>
        <TitleInputBox>
          <TitleBox>
            <TitleText>Size</TitleText>
          </TitleBox>
          <InputBox
            onChangeText={(text) => setSize(text)}
            placeholder="size"
          ></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>phone</TitleText>
          </TitleBox>
          <InputBox
            onChangeText={(text) => setPhone(text)}
            placeholder="phone"
          ></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>잔금</TitleText>
          </TitleBox>
          <InputBox onChangeText={(text) => setCost(text)}></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>주문사이트</TitleText>
          </TitleBox>
          <InputBox onChangeText={(text) => setSite(text)}></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>상태</TitleText>
          </TitleBox>
          <InputBox onChangeText={(text) => setStatus(text)}></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>주소</TitleText>
          </TitleBox>
          <InputBox onChangeText={(text) => setAddress(text)}></InputBox>
        </TitleInputBox>
      </TitleInputContiner>

      <BottomContainer>
        <SubmitButton onPress={async () => submitPress()}>
          <Text>등록하기</Text>
        </SubmitButton>
      </BottomContainer>
    </>
  );
};

export default CreateInfo;
