import { Link } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWordTitle}>Hello World</Text>
      <ActivityIndicator size={"large"} />
      <Link href="/about">Sobre nós</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloWordTitle: {
    color: "blue",
  },
  image: {
    width: 100,
    height: 100,
  },
});
