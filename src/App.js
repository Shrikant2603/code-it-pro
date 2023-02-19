import { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./pages/Routes";
import PlaygroundProvider from "./context/PlaygroundContext";
import ModalProvider from "./context/ModalContext";

const Loader = () => {
  <div>Loading...</div>;
};
function App() {
  return (
    <Suspense fallback={Loader()}>
      {
        <PlaygroundProvider>
          <ModalProvider>
            <Router>
              <Routes>
                <>
                  {routes.map((route) => {
                    return (
                      <Route path={route.path} element={route.component} />
                    );
                  })}
                </>
              </Routes>
            </Router>
          </ModalProvider>
        </PlaygroundProvider>
      }
    </Suspense>
  );
}

export default App;
