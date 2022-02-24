import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Item from "../screens/Item";
import List from "../screens/List";
import Main from "../screens/Main";
import Admin from "../screens/Admin";
import Delivery from "../screens/Delivery";
import CreateInfo from "../screens/CreateInfo";

const Stack = createStackNavigator();

const StackNaviation = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="상품 정보 추가하기" component={CreateInfo} />
    </Stack.Navigator>
  );
};

export default StackNaviation;
