import React, { useEffect } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  margin: 5%;
  flex:1
  border-width: 1px;
  border-color: gray;
  background-color: #ffffff;
`;

const TitleBox = styled.View`
  border-right-width: 1px;
  flex: 2.5;
`;
const InfoBox = styled.View`
  flex: 7.5;
`;

const Title = styled.Text`
  padding: 10px;
`;

const ProductInfo = ({ product }) => {
  console.log(Object.keys(product));
  console.log(Object.values(product));
  return (
    <Container>
      <TitleBox>
        <Title>ID</Title>
        <Title>Size</Title>
        <Title>Phone</Title>
        <Title>balance</Title>
        <Title>Site</Title>
        <Title>CreateAt</Title>
        <Title>UpdateAt</Title>
        <Title>Status</Title>
        <Title>Address</Title>
      </TitleBox>

      <InfoBox>
        <Title>{product.orderIdx}</Title>
        <Title>{product.size}</Title>
        <Title>{product.phoneNumber}</Title>
        <Title>{product.cost}</Title>
        <Title>{product.site}</Title>
        <Title>{product.createAt}</Title>
        <Title>{product.updateAt}</Title>
        <Title>{product.status}</Title>
        <Title>{product.address}</Title>
      </InfoBox>
    </Container>
  );
};

export default ProductInfo;
