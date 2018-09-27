import React from "react";
import { Button, Image, View, Text } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home screen"
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Start !!!"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Image", {
              itemId: 86,
              otherParam: "First Details"
            });
          }}
        />
      </View>
    );
  }
}
export default HomeScreen;
