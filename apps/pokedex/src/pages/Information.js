import { Button, Text, View } from 'react-native';
import { Link } from 'react-router-native';

function Information() {
  return (
    <View>
      <Text>Pokemon information</Text>
      <Link to='/'>
        <Text>Return to home</Text>
      </Link>
    </View>
  );
}

export default Information;
