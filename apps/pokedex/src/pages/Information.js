<<<<<<< HEAD
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
=======
import { Button, Text, View, } from 'react-native';
import { Link } from 'react-router-native';

function Information() {
    return (
        <View>
            <Text>Information Page</Text>

            <Link to='/'>
                <Text> Go To Home!!!</Text>
            </Link>
        </View>
    );
>>>>>>> 9eba55971e178c6907ee037230a7f9156f75cec9
}

export default Information;
