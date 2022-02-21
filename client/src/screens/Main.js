import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const MainButton = styled.Pressable`
  background-color: #3498db;
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
`;

const StyledText = styled.Text`
  font-size: 50;
  color: #fff;
`;

const Main = ({ navigation }) => {
  return (
    <Container>
      <MainButton onPress={() => navigation.navigate("Admin")}>
        <StyledText>관리팀</StyledText>
      </MainButton>

      <MainButton>
        <StyledText onPress={() => navigation.navigate("Delivery")}>
          배송팀
        </StyledText>
      </MainButton>
    </Container>
  );
};

export default Main;
