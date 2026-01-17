import { Stack } from 'expo-router';

export default function ProductsLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Product List' }} />
            {/* We will add the detail screen configuration here later, or let it auto-configure */}
        </Stack>
    );
}
