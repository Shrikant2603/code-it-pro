import { Suspense } from "react";
import { MutatingDots } from "react-loader-spinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";
import routes from "./pages/Routes";


function App() {
  return (
    <div className="font-play">
      <Suspense fallback={
        <MutatingDots
            height={100}
            width={100}
            color="#0097d7"
            secondaryColor="#0097d7"
            radius={12.5}
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh'
            }}
            visible={true}
        />
      }>
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
