import { Route, Routes } from "react-router-dom";
import { Batching } from "./pages/products";
import Company from "./company/pages/Company";
import Dashboard from "./dashboard/pages/Dashboard";
import Home from "./pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Register from "./user/Register";
import ProtectedRoute from "./dashboard/ProtectedRoute";
import "./assets/sass/main.scss";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/batchingsystem" element={<Batching />} />
          <Route path="/register" element={<Register />} />
          <Route path="/company/whoweare" element={<Company />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* <main> */}
          {/* <Route path="/" element={<Home />} />
        <Route path="/products/batchingsystem" element={<BatchingSystem />} />
        <Route path="/products/weighingsystem" element={<WeighingSystem />} />
        <Route path="/projects/cowdetection" element={<CowDetection />} />
        <Route path="/company/whoweare" element={<WhoWeAre />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
            // element={<Navigate to="/" />}
          />
          {/* </main> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
