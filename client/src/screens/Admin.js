import React from "react";
import styled from "styled-components/native";
import ProductInfo from "../components/ProductInfo";
import { Text } from "react-native";

const ProductInfoView = styled.View`
  flex-direction: row;
  border: 1px;
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
    address: "경기도 용인시 수지구",
    balance: 250000,
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
    <>
      {infos.map((product) => (
        <ProductInfoView>
          <ProductInfo product={product}></ProductInfo>
          <EditButton onPress={() => alert("Not yet")}>
            <StyledText>정보 변경</StyledText>
          </EditButton>
        </ProductInfoView>
      ))}
    </>
  );
};

export default Admin;
