import ErrorPage from "./pages/ErrorPage";
import { useRoutes } from "react-router-dom";
import GenerateTest from "./pages/GenerateTest";
import ModifyTest from "./pages/ModifyTest";
import MyTests from "./pages/MyTests";
import Results from "./pages/Results";
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/Signin";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Addemails from "./pages/Addemails";
import "./App.css";

function App() {
  const routeResult = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/register",
      element: <Contact />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/generate",
      element: (
        <Layout>
          <GenerateTest />
        </Layout>
      ),
    },
    {
      path: "/myTests",
      element: (
        <Layout>
          <MyTests />
        </Layout>
      ),
    },
    {
      path: "/modifyTests",
      element: (
        <Layout>
          <ModifyTest />
        </Layout>
      ),
    },
    {
      path: "/addemails",
      element: (
        <Layout>
          <Addemails />
        </Layout>
      ),
    },
    {
      path: "/results",
      element: (
        <Layout>
          <Results />
        </Layout>
      ),
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      {/* Conditionally render Navbar outside the Layout */}
      {window.location.pathname !== "/generate" &&
        window.location.pathname !== "/myTests" &&
        window.location.pathname !== "/modifyTests" &&
        window.location.pathname !== "/addemails" &&
        window.location.pathname !== "/results" && <Navbar />}

      {routeResult}

      {/* Conditionally render Footer outside the Layout */}
      {window.location.pathname !== "/generate" &&
        window.location.pathname !== "/myTests" &&
        window.location.pathname !== "/modifyTests" &&
        window.location.pathname !== "/addemails" &&
        window.location.pathname !== "/results" && <Footer />}
    </>
  );
}

export default App;
