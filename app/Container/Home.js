import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home tab!</Text>
      </View>
    );
  }
}
export default Home;
