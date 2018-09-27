import React from "react";
import { Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

class TagScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "TAG Screen",
      headerRight: (
        <Button
          onPress={() => navigation.state.params.navigateNext()}
          title="Next"
          color="#fff"
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.state.params.navigateBack()}
          title="Back"
          color="#fff"
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ navigateBack: this.back });
    this.props.navigation.setParams({ navigateNext: this.next });
  }
  back = () => {
    this.props.navigation.navigate("Image");
  };
  next = () => {
    this.props.navigation.navigate("Comment", {
      image: this.props.navigation.state.params.image,
      tag: "this is a tag"
    });
  };

  render() {
    const { params } = this.props.navigation.state;
    const image = params ? params.image : null;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>get Image path from previous screen: {image}</Text>
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
export default TagScreen;
