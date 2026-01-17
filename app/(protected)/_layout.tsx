import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

// This is a "Layout Route" for the (protected) group.
// It wraps all screens inside app/(protected)/* in a Bottom Tab Navigator.
export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            {/* 1. Home Tab */}
            <Tabs.Screen
                name="index" // Maps to (protected)/index.tsx
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                }}
            />

            {/* 2. Products Tab 
                This points to the 'products' FOLDER.
                Because 'products' has its own _layout.tsx (Stack), 
                we are "nesting" a Stack Navigator inside this Tab.
            */}
            <Tabs.Screen
                name="products" // Maps to (protected)/products folder
                options={{
                    title: 'Products',
                    tabBarIcon: ({ color }) => <Ionicons name="cart" size={24} color={color} />,
                    // We hide the Tab header because the inner Stack will provide its own header.
                    // If we didn't do this, we'd see TWO headers (Tab header + Stack header).
                    headerShown: false,
                }}
            />

            {/* 3. Profile Tab */}
            <Tabs.Screen
                name="profile" // Maps to (protected)/profile.tsx
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
