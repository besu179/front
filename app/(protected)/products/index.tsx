import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const MOCK_PRODUCTS = [
    { id: 1, name: 'Apple', price: '$1.00' },
    { id: 2, name: 'Banana', price: '$0.50' },
    { id: 3, name: 'Cherry', price: '$2.00' },
    { id: 4, name: 'Date', price: '$3.50' },
    { id: 5, name: 'Elderberry', price: '$5.00' },
];

export default function ProductsListScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <FlatList
                data={MOCK_PRODUCTS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.item}
                        // Programmatic Navigation:
                        // We push a new route to the stack.
                        // '/products/1' matches the file app/(protected)/products/[id]/index.tsx
                        onPress={() => router.push(`/products/${item.id}` as any)}
                    >
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: { fontSize: 18 },
    price: { fontSize: 18, color: 'gray' },
});
