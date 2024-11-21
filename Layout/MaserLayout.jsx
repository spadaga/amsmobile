// MasterLayout.js
import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import Header from "../Components/Header";
import LeftToggleMenu from "../Controls/LeftToggleMenu";
import MainContent from "../Components/MainContent";
import styles from "../assets/StyleSheet";
import ProjectSelection from "../Pages/ProjectSelection";
import PendingTransactions from "../Pages/PendingTransactions";
import PendingTimesheets from "../Pages/PendingTimesheets";
import CribCrawl from "../Pages/CribCrawl";
import Inventory from "../Pages/Inventory";
import ListProductDetails from "../Components/ListProductDetails";
import ProductDetails from "../Pages/ProductDetails";

const MasterLayout = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState(
    <Text style={styles.welcometext}>Welcome! Select a menu item.</Text>
  ); // Set Text wrapped inside Text component
  const [pageTitle, setPageTitle] = useState("Welcome!");
  const handleMenuClick = (content) => {
    switch (content) {
      case "Home":
        setPageTitle("Home - Project Selection");
        setSelectedContent(
          <ProjectSelection onNavigateToInventory={navigateToInventory} />
        ); // Pass the navigation function
        break;
      case "Pending Transactions":
        setPageTitle("Pending Transactions");
        setSelectedContent(<PendingTransactions />);
        break;
      case "Pending Timesheets":
        setPageTitle("Pending Timesheets");
        setSelectedContent(<PendingTimesheets />);
        break;
      case "CRIB CRAWL":
        setPageTitle("Crib Crawl");
        setSelectedContent(<CribCrawl />);
        break;
      case "List Product Details":
        setPageTitle("List Product Details");
        setSelectedContent(
          <ListProductDetails
            onNavigateToProductDetails={navigateToProductDetails}
          />
        );
        break;
      case "Inventory":
        setPageTitle("Inventory");
        setSelectedContent(
          <Inventory onNavigateToProductDetails={navigateToProductDetails} />
        );
        break;
      default:
        setPageTitle("Welcome!");
        setSelectedContent(
          <Text style={styles.welcometext}>Welcome! Select a menu item.</Text>
        );
    }
    setMenuVisible(false); // Close the menu after selection
  };
  const navigateToInventory = () => {
    console.log("Navigate to Inventory");
    handleMenuClick("Inventory"); // Change to Inventory component
  };
  // const navigateToProductDetails = (product) => {
  //     console.log("Navigate to Product Details:", product);
  //     handleMenuClick("Product Details", product);
  // };

  const navigateToProductDetails = (product) => {
    console.log("Navigate to Product Details:", product);
    setPageTitle("Product Details");
    setSelectedContent(<ProductDetails product={product} />);
  };
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleBackgroundPress = () => {
    if (isMenuVisible) {
      setMenuVisible(false); // Hide the menu when background is pressed
    }
  };

  return (
    <View style={styles.container}>
      <Header onToggle={toggleMenu} title={pageTitle} />
      <TouchableWithoutFeedback onPress={handleBackgroundPress}>
        <View style={styles.mainContainer}>
          {isMenuVisible && (
            <View style={styles.overlay}>
              <LeftToggleMenu onMenuClick={handleMenuClick} />
            </View>
          )}
          <MainContent
            renderComponent={selectedContent}
            style={styles.content}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MasterLayout;
