# Mini Shop App - Expo Router Practice

A learning-focused "Mini Shop" application built to demonstrate advanced navigation patterns with Expo Router.

> **Focus**: Navigation Logic, Authentication Flow, Nested Navigators.
> **Stack**: React Native, Expo Router.

---

## 🏗 Project Architecture

The app mimics a real-world structure with two distinct areas, separated by "Groups":

```
app/
├── _layout.tsx              # ROOT LAYOUT (Authentication Logic)
├── _ctx.tsx                 # AUTH CONTEXT (Global State)
│
├── (auth)/                  # PUBLIC GROUP (Not logged in)
│   └── login.tsx            # Login Screen
│
└── (protected)/             # PRIVATE GROUP (Logged in)
    ├── _layout.tsx          # TABS NAVIGATOR
    ├── index.tsx            # Home Tab
    ├── profile.tsx          # Profile Tab
    │
    └── products/            # PRODUCTS TAB (Nested Stack)
        ├── _layout.tsx      # STACK NAVIGATOR
        ├── index.tsx        # Product List
        └── [id]/index.tsx   # Product Detail (Dynamic Route)
```

---

## 🧠 Key Concepts & Syntaxes Used

### 1. Route Groups `(...)`
Directories wrapped in parentheses, like `(auth)` and `(protected)`, are **Route Groups**.
- **Purpose**: Organize files without affecting the URL path.
- **Example**: `app/(auth)/login.tsx` is accessed via `/login`, NOT `/auth/login`.
- **Usage**: We use this to apply different sub-layouts (Tabs for protected, nothing for auth).

### 2. Root Layout & Authentication
`app/_layout.tsx` is the entry point. It wraps usage of `<Slot />` (the child route) with a Context Provider.
- **Logic**: It listens to the global `session` state.
- **Protection**:
  ```tsx
  // usage of useSegments() to know where we are
  const segments = useSegments();
  
  // Logic: If not logged in AND not in (auth) group -> Redirect to Login
  if (!session && segments[0] !== '(auth)') {
    router.replace('/login');
  }
  ```

### 3. Nested Navigators (Tabs + Stack)
We demonstrated how to nest navigators for complex flows.
- **Tabs**: Defined in `app/(protected)/_layout.tsx`. Wraps Home, Profile, and Products.
- **Stack**: Defined in `app/(protected)/products/_layout.tsx`.
  - The "Products" tab points to the `products/` **folder**.
  - That folder has its own `_layout (Stack)`, so clicking a product pushes a new screen *within* that tab.
  - **Trick**: We set `headerShown: false` on the Tab screen so the Stack can show its own header (with the Back button).

### 4. Dynamic Routes `[id]`
Files wrapped in square brackets capture URL parameters.
- **File**: `app/(protected)/products/[id]/index.tsx`.
- **Syntax**:
  ```tsx
  import { useLocalSearchParams } from 'expo-router';
  
  export default function Detail() {
    const { id } = useLocalSearchParams(); // Reads '101' from /products/101
    return <Text>Product {id}</Text>;
  }
  ```

### 5. Programmatic Navigation
We use the `useRouter` hook to move between screens via code.
- **Syntax**:
  ```tsx
  const router = useRouter();
  router.push('/products/123');   // Push onto stack (Back button works)
  router.replace('/login');       // Replace history (Back button doesn't work)
  ```

---

## 🚀 How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start the App**:
   ```bash
   npx expo start
   ```
3. **Verify Flows**:
   - Login (Simulated) -> Redirects to Home.
   - Tabs -> Switch between tabs.
   - Products -> Click item -> see Dynamic Detail screen.
