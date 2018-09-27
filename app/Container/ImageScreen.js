import React from "react";
import { Text, View, Button, CameraRoll } from "react-native";
import { Item, Input, Icon } from "native-base";
import Camera from "react-native-camera";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  }
});

class ImageScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    console.log("navigation:", navigation);
    return {
      headerTitle: "Image Screen",
      headerLeft: (
        <Button
          onPress={() => navigation.state.params.navigateBack()}
          title="Back"
          color="#fff"
        />
      ),
      headerRight: (
        <Button
          onPress={() => navigation.state.params.navigateNext()}
          title="Next"
          color="#fff"
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  componentDidMount() {
    console.log("image screen componentDidMount ");
    this.props.navigation.setParams({ navigateBack: this.back });
    this.props.navigation.setParams({ navigateNext: this.next });
  }

  back = () => {
    this.props.navigation.navigate("Home", { image: this.state.image });
  };
  next = () => {
    this.props.navigation.navigate("Tag", { image: this.state.image });
  };

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Camera
          style={{ flex: 1 }}
          ref={cam => (this.camera = cam)}
          aspect={Camera.constants.Aspect.fill}
        />

        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: "Updated!" })
          }
        />
        <Text>Image path: {this.state.image}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

        <Item>
          <Input
            placeholder={"input "}
            defaultValue={""}
            autoCorrect={false}
            returnKeyType={"done"}
            value={this.state.image}
            onChangeText={inputText => this.setState({ image: inputText })}
          />
        </Item>
      </View>
    );
  }
}
export default ImageScreen;
