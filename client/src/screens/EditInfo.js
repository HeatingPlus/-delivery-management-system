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

const CreateInfo = ({ route, navigation }) => {
  const product = route.params.product;
  const [size, setSize] = useState(product.size);
  const [phone, setPhone] = useState(product.phoneNumber);
  const [cost, setCost] = useState(product.cost);
  const [site, setSite] = useState(product.site);
  const [status, setStatus] = useState(product.status);
  const [address, setAddress] = useState(product.address);

  const submitPress = async () => {
    const data = {
      size: size,
      phone: phone,
      cost: cost,
      site: site,
      status: status,
      address: address,
    };

    const responce = await axios.patch(
      "http://13.125.141.27:3000/app/order/" + product.orderIdx,
      data
    );

    console.log(responce.data);
    if (responce.status === 200) {
      Alert.alert("수정되었습니다.");
      navigation.navigate("Admin");
    } else {
      Alert.alert("에러가 발생하였습니다.");
    }
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
            value={size}
          ></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>phone</TitleText>
          </TitleBox>
          <InputBox
            onChangeText={(text) => setPhone(text)}
            value={phone}
          ></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>잔금</TitleText>
          </TitleBox>
          <InputBox
            onChangeText={(text) => setCost(text)}
            value={cost}
          ></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>주문사이트</TitleText>
          </TitleBox>
          <InputBox
            onChangeText={(text) => setSite(text)}
            value={site}
          ></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>상태</TitleText>
          </TitleBox>
          <InputBox
            onChangeText={(text) => setStatus(text)}
            value={status}
          ></InputBox>
        </TitleInputBox>

        <TitleInputBox>
          <TitleBox>
            <TitleText>주소</TitleText>
          </TitleBox>
          <InputBox
            onChangeText={(text) => setAddress(text)}
            value={address}
          ></InputBox>
        </TitleInputBox>
      </TitleInputContiner>

      <BottomContainer>
        <SubmitButton onPress={async () => submitPress()}>
          <Text>수정하기</Text>
        </SubmitButton>
      </BottomContainer>
    </>
  );
};

export default CreateInfo;
