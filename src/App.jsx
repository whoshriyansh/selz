import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AdminSignIn from "./admin/AdminSignIn";
import AdminHomePage from "./admin/AdminHomePage";
import AllOrdersPage from "./admin/AllOrdersPage";
import IndividualOrder from "./admin/IndividualOrder";
import UserIndividualPage from "./admin/UserIndividualPage";
import OrderPage from "./pages/OrderPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./layout/ProtectedRoute";
import AuthorizedRoute from "./layout/AutorizedRoute";
import MainLayout from "./layout/MainLayout";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* User Routes with Main Layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />

              {/* User Routes */}
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* Admin Routes with Admin Layout */}

            <Route element={<AdminLayout />}>
              <Route
                path="/admin-home"
                element={
                  <AuthorizedRoute allowedRoles={["admin"]}>
                    <AdminHomePage />
                  </AuthorizedRoute>
                }
              />
              <Route
                path="/admin/orders"
                element={
                  <AuthorizedRoute allowedRoles={["admin"]}>
                    <AllOrdersPage />
                  </AuthorizedRoute>
                }
              />
              <Route
                path="/admin/order/:id"
                element={
                  <AuthorizedRoute allowedRoles={["admin"]}>
                    <IndividualOrder />
                  </AuthorizedRoute>
                }
              />
              <Route
                path="/admin/user/:id"
                element={
                  <AuthorizedRoute allowedRoles={["admin"]}>
                    <UserIndividualPage />
                  </AuthorizedRoute>
                }
              />
            </Route>

            {/* Authentication Routes */}
            <Route path="/admin-signin" element={<AdminSignIn />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
