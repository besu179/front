import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetailScreen() {
    // 1. Read the Dynamic Route Parameter
    // Matches file name: [id].tsx -> 'id'
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            {/* 
        2. Dynamic Header Configuration
        We can use Stack.Screen to configure the header options from *inside* the screen.
        This allows us to set the title dynamically based on data (e.g., "Product 5").
      */}
            <Stack.Screen options={{ title: `Product ${id}` }} />

            <Text style={styles.title}>Details for Product #{id}</Text>
            <Text>Here is some more info about this item.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});
