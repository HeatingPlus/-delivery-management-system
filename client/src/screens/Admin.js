import React from "react";
import styled from "styled-components/native";
import ProductInfo from "../components/ProductInfo";
import { Text } from "react-native";

const Container = styled.ScrollView``;

const ProductInfoView = styled.View`
  flex-direction: row;
`;

const EditButton = styled.Pressable`
  background-color: #f0f;
`;

const StyledText = styled.Text`
  padding: 10px;
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

const Admin = () => {
  return (
    <Container>
      {infos.map((product) => (
        // <ProductInfoView>
        <ProductInfo product={product}></ProductInfo>
        // </ProductInfoView>
      ))}
    </Container>
  );
};

export default Admin;
