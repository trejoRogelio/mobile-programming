import { Button, Text, View, TouchableHighlight } from "react-native";
import { Link } from "react-router-native";
import { useEffect, useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";

function LinkHome() {
  return (
    <Link
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
      to="/"
    >
      <View>
        <Icon name="md-home" size={50} color="black" />
      </View>
    </Link>
  );
}

export default LinkHome;
