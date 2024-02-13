import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// You can import from local files
import { Search } from "./components/Search";
// or any pure javascript modules available in npm


const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "CheapShark",
          headerStyle: {
            backgroundColor: "#38344E",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: "#38344E" }}>
      <MyStack />
    </NavigationContainer>
  );
}

const HomeScreen = (props) => {
  const nav = useNavigation();
  return (
    <View style={styles.view}>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    flex: 1,
    padding: 8,
    textAlign: "left",
  },
});
