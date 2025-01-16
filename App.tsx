import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import vacationDestination , { vacationPricing } from './app/vacation';

export default function App() {
  type Person = {
    name: string;
    age: number;
    isStudent?: boolean;
    height: number;
  };

  interface Person2 {
    name: string;
    occupation: string;
    vacationDestination?: string;
    vacationPricing?: string;
  }

  const name: string = "John Doe";
  let occupation: string = "Software Developer";

  const isStudent: boolean = true;
  const age: number = 25
  const height: number = 5.11;
  const data: Person = {
    name: "John Doe",
    age: 25,
    isStudent: true,
    height: 5.11
  };

  const data2: Person = {
    name, age, isStudent, height
  }

  const data3: Person2 = {
    name: "Dion",
    occupation: "Student and Line Cook",
    vacationDestination: vacationDestination('Dubai'),
    vacationPricing: vacationPricing(1000)
  }

  const datalist = [data, data2];

  console.log(datalist[0].name);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Title}>
          Welcome {datalist[0].name}
        </Text>
      </View>
      <View>
        <Text>
          Vacation Destination: {data3.vacationDestination}
        </Text>
        <Text>
        Vacation Price: {data3.vacationPricing}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {alert("Vacation Ready")}}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
