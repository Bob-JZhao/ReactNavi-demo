import React from "react";
import { Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

class CommentScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Comments Screen",
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
  }

  back = () => {
    this.props.navigation.navigate("Tag");
  };

  render() {
    const { params } = this.props.navigation.state;
    const image = params ? params.image : null;
    const tag = params ? params.tag : null;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Image path: {image}</Text>
        <Text>
          tag:
          {tag}
        </Text>

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
export default CommentScreen;
