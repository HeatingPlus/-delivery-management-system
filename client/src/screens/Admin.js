import React from "react";
import styled from "styled-components/native";
import ProductInfo from "../components/ProductInfo";
import { Alert, Text } from "react-native";

const Container = styled.ScrollView`
  flex: 12;
`;

const ProductInfoView = styled.View`
  flex-direction: row;
`;

const EditButton = styled.Pressable`
  flex: 1;
  background-color: #3498db;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  padding: 10px;
`;

const TopView = styled.View`
  flex: 1;
  background-color: blue;
`;

const BottomViw = styled.View`
  flex: 1;
  background-color: red;
  flex-direction: row;
`;

const infos = [
  {
    id: 1,
    size: 2,
    phone: "010-1234-1234",
    address:
      "경기도 용인시 수지구 동천동123213423512341242141245124124235125125",
    balance: 250000,
    site: "네이버",
    createAt: "2022-01-15",
    updateAt: "2022-01-15",
    status: "배송전",
  },
  {
    id: 2,
    size: 4,
    phone: "010-1234-1234",
    address: "경기도 용인시 수지구",
    balance: 300000,
  },
  {
    id: 3,
    size: 1,
    phone: "010-1234-1234",
    address: "경기도 용인시 수지구",
    balance: 100000,
  },
];

const Admin = ({ navigation }) => {
  return (
    <>
      <TopView>
        <StyledText>정렬 추가될 예정</StyledText>
      </TopView>
      <Container>
        {infos.map((product) => (
          // <ProductInfoView>
          <ProductInfo product={product}></ProductInfo>
          // </ProductInfoView>
        ))}
      </Container>
      <BottomViw>
        <EditButton>
          <StyledText>뭐넣지</StyledText>
        </EditButton>
        <EditButton onPress={() => navigation.navigate("상품 정보 추가하기")}>
          <StyledText>상품 정보 추가하기</StyledText>
        </EditButton>
      </BottomViw>
    </>
  );
};

export default Admin;
