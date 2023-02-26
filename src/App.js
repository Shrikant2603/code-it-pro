import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";
import routes from "./pages/Routes";

const Loader = () => {
  return <div>Loading...</div>;
};

function App() {
  return (
    <div className="font-play">
      <Suspense fallback={Loader()}>
        {
          <PlaygroundProvider>
            <ModalProvider>
              <BrowserRouter>
                <Routes>
                  <>
                    {routes.map((route, i) => {
                      return (
                        <Route
                          key={i}
                          path={route.path}
                          element={route.component}
                        />
                      );
                    })}
                  </>
                </Routes>
              </BrowserRouter>
            </ModalProvider>
          </PlaygroundProvider>
        }
      </Suspense>
    </div>
  );
}

export default App;
