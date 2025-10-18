import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ServiceItem = {
  icon: string;
  title: string;
};

const ServicesPage: React.FC = () => {
  const goAnywhere: ServiceItem[] = [
    { icon: "🚗", title: "Ride" },
     { icon: "🚘", title: "Rental Cars" },
    { icon: "📦", title: "Send items" },
    { icon: "🚐", title: "Group Ride" },
      { icon: "👴", title: "Seniors" },
       { icon: "🗓️", title: "Reserve" },
        { icon: "🧒", title: "Teens" },
  ];

  const deliveries: ServiceItem[] = [
    { icon: "🍔", title: "Restaurants" },
  { icon: "🛒", title: "Grocery" },
  { icon: "💊", title: "Pharmacy" },
  { icon: "🍷", title: "Liquor" },
  { icon: "🌸", title: "Flowers" },
  { icon: "🐶", title: "Pet Supplies" },
  { icon: "📦", title: "Parcel Delivery" },
  { icon: "🏪", title: "Convenience Store" },
  { icon: "🍰", title: "Bakery" },
  { icon: "☕", title: "Coffee & Beverages" },
  { icon: "🧰", title: "Hardware" },
  { icon: "💻", title: "Electronics" }
];
  

  const renderGrid = (data: ServiceItem[]) => {
    return (
      <View style={styles.grid}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Services</Text>

      <Text style={styles.sectionTitle}>Go anywhere</Text>
      {renderGrid(goAnywhere)}

      <Text style={styles.sectionTitle}>Get anything delivered</Text>
      {renderGrid(deliveries)}
    </ScrollView>
  );
};

export default ServicesPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    paddingVertical: 20,
    marginBottom: 15,
  },
  icon: {
    fontSize: 30,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});
