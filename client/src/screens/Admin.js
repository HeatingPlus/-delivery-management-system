import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import ProductInfo from "../components/ProductInfo";
import { Alert, Text } from "react-native";
import axios from "axios";

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

const Admin = ({ navigation }) => {
  const [infos, setInfos] = useState([]);

  useEffect(async () => {
    const response = await axios.get("http://13.125.141.27:3000/admin");

    setInfos(response.data);
  }, []);

  return (
    <>
      <TopView>
        <StyledText>정렬 추가될 예정 test</StyledText>
      </TopView>
      <Container>
        {infos.map((product) => (
          // <ProductInfoView>
          <ProductInfo
            product={product}
            navigation={navigation}
            key={product.orderIdx}
          ></ProductInfo>
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
