import React from "react";
import { Button, Image, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation"; // 1.0.0-beta.27
import { Icons } from "./app/assets";
import HomeScreen from "./app/Container/HomeScreen";
import TagScreen from "./app/Container/TagScreen";
import ImageScreen from "./app/Container/ImageScreen";
import CommentScreen from "./app/Container/CommentScreen";

class LogoTitle extends React.Component {
  render() {
    return <Image source={Icons.home} style={{ width: 30, height: 30 }} />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Tag: {
      screen: TagScreen
    },
    Image: {
      screen: ImageScreen
    },
    Comment: {
      screen: CommentScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
