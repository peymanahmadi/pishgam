import { Route, Routes } from "react-router-dom";
import Company from "./company/pages/Company";
import Dashboard from "./dashboard/pages/Dashboard";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/company/whoweare" element={<Company />} />
          <Route path="/dashboard/:userID" element={<Dashboard />} />
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
