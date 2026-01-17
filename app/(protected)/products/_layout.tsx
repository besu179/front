import { Stack } from 'expo-router';

export default function ProductsLayout() {
    return (
        // This Stack Navigator manages the history for the Products tab.
        // It allows us to "push" the detail screen on top of the list.
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Product List' }} />
        </Stack>
    );
}
