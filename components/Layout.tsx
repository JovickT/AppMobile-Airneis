import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.content}>
                {children}
            </View>
            <View style={styles.lineSeparator} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    lineSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFD700',
        marginVertical: 10,
    },
});

export default Layout;
