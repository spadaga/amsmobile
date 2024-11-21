import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import { Menu, Provider, DefaultTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons

const ProductDetails = ({ product }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleTakePhoto = () => {
    closeMenu();
    console.log("Take Photo selected");
    // Add logic to open camera
  };

  const handleUploadFromPhotos = () => {
    closeMenu();
    console.log("Upload from Photos selected");
    // Add logic to upload from gallery
  };

  if (!product) return <Text>No product data available</Text>;

  // Example of inventory data
  const productInventories = [
    { name: "Inventory 1", onHand: 100, min: 10, max: 200, ordered: 50, binLocation: "A1" },
    { name: "Inventory 2", onHand: 150, min: 20, max: 300, ordered: 80, binLocation: "B1" },
    { name: "Inventory 3", onHand: 200, min: 30, max: 500, ordered: 100, binLocation: "C1" },
    { name: "Inventory 4", onHand: 250, min: 40, max: 600, ordered: 120, binLocation: "D1" },
    { name: "Inventory 5", onHand: 300, min: 50, max: 700, ordered: 150, binLocation: "E1" },
  ];

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      surface: "white", // Change menu background color here
    },
  };

  return (
    <Provider theme={customTheme}>
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.label}>
              CPN: <Text style={styles.value}>{product.upc}</Text>
            </Text>
            <Text style={styles.label}>
              Price: <Text style={styles.value}>{product.max}</Text>
            </Text>
            <Text style={styles.label}>
              Total Quantity in Hand:{" "}
              <Text style={styles.value}>{product.onHand}</Text>
            </Text>
            <Text style={styles.label}>
              Total Quantity Ordered:{" "}
              <Text style={styles.value}>{product.ordered}</Text>
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={product.imageUrl} style={styles.image} />
            {/* Link under the image */}
            <Menu
              visible={menuVisible}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity onPress={openMenu} style={styles.link}>
                  <Text style={styles.linkText} numberOfLines={1}>Tap to change photo</Text>
                </TouchableOpacity>
              }
              contentStyle={styles.menuContent}
            >
              <View style={{ backgroundColor: "white", borderRadius: 0 }}>
                <Menu.Item
                  onPress={handleTakePhoto}
                  title={
                    <View style={styles.menuItemContainer}>
                      <MaterialIcons name="photo-camera" size={20} style={styles.icon} />
                      <Text style={styles.menuItemText}>Take Photo</Text>
                    </View>
                  }
                />
                <View style={styles.divider} />
                <Menu.Item
                  onPress={handleUploadFromPhotos}
                  title={
                    <View style={styles.menuItemContainer}>
                      <MaterialIcons name="photo-library" size={20} style={styles.icon} />
                      <Text style={styles.menuItemText}>Upload from computer</Text>
                    </View>
                  }
                />
              </View>
            </Menu>
          </View>
        </View>

        {/* Inventory List */}
        <View style={styles.inventoryContainer}>
          <Text style={styles.inventoryTitle}>Inventory List</Text>
          {productInventories.map((inventory, index) => (
            <View key={index} style={styles.inventoryItem}>
              {/* Inventory Header */}
              <View style={styles.inventoryHeader}>
                <Text style={styles.inventoryName}>{inventory.name}</Text>
                <TouchableOpacity style={styles.editIcon}>
                  <MaterialIcons name="edit" size={20} color="blue" />
                </TouchableOpacity>
              </View>

              {/* Inventory Details */}
              <View style={styles.inventoryDetailsRow}>
                <Text style={styles.inventoryDetail}>On Hand: {inventory.onHand}</Text>
                <Text style={styles.inventoryDetail}>Min: {inventory.min}</Text>
                <Text style={styles.inventoryDetail}>Max: {inventory.max}</Text>
              </View>
              <Text style={styles.inventoryDetail}>Bin Location: {inventory.binLocation}</Text>
            </View>
          ))}
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16, // Same left and right padding
    width: "100%",
  },
  innercontainer: {
    flexDirection: "row",
    padding: 8,
    borderColor: "rgb(204, 204, 204)",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F6F8F9",
  },
  detailsContainer: {
    flex: 3,  // Takes 75% of the width
    justifyContent: "center",
    paddingRight: 10,
  },
  imageContainer: {
    flex: 1,  // Takes 25% of the width
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#7E8A8C",
  },
  value: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7E8A8C",
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
    color: "black",
  },
  menuItemText: {
    fontSize: 16,
    color: "black",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 12,
  },
  menuContent: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },

  // Link style
  link: {
    marginTop: 8,
    paddingHorizontal: 16,  // Added padding to the left and right of the link
  },
  linkText: {
    color: "#003069",
    textDecorationLine: "underline",
    fontSize: 16,paddingHorizontal: 4, 
    paddingRight:8
  },

  // Inventory section styles
  inventoryContainer: {
    marginTop: 20,
    paddingHorizontal: 0, // Same left and right padding as 'container'
  },
  inventoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    backgroundColor: "#003069", // Background color for inventory header
    color: "white", // White text
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 0,
  },
  inventoryItem: {
    backgroundColor: "#f8f8f8",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  inventoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inventoryName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  editIcon: {
    padding: 8,
  },
  inventoryDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  inventoryDetail: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default ProductDetails;
