import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import AccountsListItem from './AccountsListItem';

export default function AccountsList() {
  return (
    <FlatList
      data={[1, 2, 3]}
      contentContainerStyle={styles.container}
      renderItem={() => <AccountsListItem />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0, 
    gap: 10,
  },
});