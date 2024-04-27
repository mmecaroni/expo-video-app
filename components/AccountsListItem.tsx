import { StyleSheet, Text, View } from 'react-native';

export default function AccountsListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Profit</Text>
      <Text style={styles.percentage}>10%</Text>
      <Text style={styles.percentage}>20%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  percentage: {},
});