import { StyleSheet, View } from 'react-native';
import OnlineShopping from './Online-shopping';

export default function App() {
  return (
    <View style={styles.container}>
       <OnlineShopping />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
