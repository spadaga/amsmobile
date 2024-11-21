// components/Header.js
import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from '../assets/StyleSheet';

const Header = ({ onToggle ,title}) => {
    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Action icon="menu" onPress={onToggle} color={styles.iconColor.color} />
            <Appbar.Content title={title} style={styles.content} titleStyle={styles.title} />
            <Appbar.Action icon="timer" onPress={() => console.log('Timer icon pressed')} color={styles.iconColor.color} />
        </Appbar.Header>
    );
}

export default Header;
