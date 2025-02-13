import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import vacationDestinations from "../constants/list_items";
 
const Destination = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);
 
  const toggleSelection = (id: number) => {
    setSelectedDestinations((select) =>
      select.includes(id) ? select.filter((item) => item !== id) : [...select, id]
    );
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.destinationItem}
            onPress={() => toggleSelection(item.id)}
          >
            <Text style={styles.text}>
              {item.location} | Price: ${item.price} {"\n"}Ave. Temperature: {item.average_yearly_temperature}
            </Text>
            {selectedDestinations.includes(item.id) && <Text>{"\u2705"}</Text>}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "red",
  },
  destinationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});
 
export default Destination;