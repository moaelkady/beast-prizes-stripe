import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader/loader.component";
import Navigation from "./routes/navigation/navigation.component";
import "./App.css";

const Home = React.lazy(() => import("./routes/home/home.component"));
const About = React.lazy(() => import("./routes/about/about.component"));
const BuyTicket = React.lazy(() =>
  import("./routes/buy-ticket/buy-ticket.component")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/buy-ticket"
          element={
            <Suspense fallback={<Loader />}>
              <BuyTicket />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
