

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeProvider from "./components/ThemeProvider"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"
import BooksPage from "./pages/BooksPage"
import ServicesPage from "./pages/ServicesPage"
import AcquisitonsPage from "./pages/AcquisitonsPage"
import LoginPage from "./pages/LoginPage"
// import SignupPage from "./pages/SignupPage"
// import ProfilePage from "./pages/logged-in/ProfilePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/books",
                element: <BooksPage />,
            },
            {
                path: "/services",
                element: <ServicesPage />,
            },
            {
                path: "/acquisitions",
                element: <AcquisitonsPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);


function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App