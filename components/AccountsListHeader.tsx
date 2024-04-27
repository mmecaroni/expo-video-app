import { StyleSheet, Text, View } from 'react-native';

export default function AccountsList() {
  return (
    <View style={styles.header}>
      <Text style={styles.header_label}>Name</Text>
      <Text style={styles.header_label}>CAP</Text>
      <Text style={styles.header_label}>TAP</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  header_label: {
    fontWeight: "bold",
    fontSize: 16,
  }
});