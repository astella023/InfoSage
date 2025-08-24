import React from "react";
import { View, Text } from "react-native";
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>InfoSage Mobile</Text>
    </View>
  );
}

{
  "expo": {
    "name": "InfoSage",
    "slug": "infosage",
    "platforms": ["ios", "android"],
    "version": "1.0.0"
  }
}