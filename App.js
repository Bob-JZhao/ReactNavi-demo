import React from "react";
import { Button, Image, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation"; // 1.0.0-beta.27
import { Icons } from "./app/assets";

class LogoTitle extends React.Component {
  render() {
    return <Image source={Icons.home} style={{ width: 30, height: 30 }} />;
  }
}

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
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "First Details"
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Back"
        color="#fff"
      />
    ),
    headerLeft: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Next"
        color="#fff"
      />
    )
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: "Updated!" })
          }
        />
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate("Details")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
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
