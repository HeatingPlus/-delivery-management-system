import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import ProductInfo from "../components/ProductInfo";
import { Alert, Text } from "react-native";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";

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

  align-items: center;
  justify-content: center;
`;

const BottomViw = styled.View`
  flex: 1;
  background-color: red;
  flex-direction: row;
`;

const Admin = ({ navigation }) => {
  const [infos, setInfos] = useState([]);
  const [category, setCategory] = useState(1);

  useEffect(async () => {
    const response = await axios.get(
      "http://13.125.141.27:3000/app/order/list",
      {
        params: {
          category: category,
        },
      }
    );

    setInfos(response.data.result);

    // const result = response.data;
    // console.log(result);
  }, [category]);

  return (
    <>
      <TopView>
        <RNPickerSelect
          selectedValue={category}
          placeholder={{}}
          onValueChange={(value) => setCategory(value)}
          items={[
            { label: "배송 준비중만 보기", value: 1 },
            { label: "배송중인것만 보기", value: 2 },
            { label: "배송완료만 보기", value: 3 },
            { label: "모두 보기", value: 4 },
          ]}
        />
      </TopView>
      <Container>
        {infos
          ? infos.map((product) => (
              // <ProductInfoView>
              <ProductInfo
                product={product}
                navigation={navigation}
                key={product.orderIdx}
              ></ProductInfo>
              // </ProductInfoView>
            ))
          : console.log("no")}
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
