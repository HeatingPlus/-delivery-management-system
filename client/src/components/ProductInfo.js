import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
`;

const InfoBox = styled.View`
  border-right-width: 1px;
`;

const Info = styled.Text`
  padding: 10px;
`;

const ProductInfo = ({ product }) => {
  return (
    <Container>
      <InfoBox style={{ width: "10%" }}>
        <Info>ID: {product.id}</Info>
      </InfoBox>
      <InfoBox style={{ width: "10%" }}>
        <Info>Size: {product.size}</Info>
      </InfoBox>

      <InfoBox style={{ width: "20%" }}>
        <Info>Phone: {product.phone}</Info>
      </InfoBox>
      <InfoBox style={{ width: "30%" }}>
        <Info>Address:{product.address}</Info>
      </InfoBox>
      <InfoBox style={{ width: "15%" }}>
        <Info>잔금: {product.balance}</Info>
      </InfoBox>
    </Container>
  );
};

export default ProductInfo;
