import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import { AuthContext, LoadingContext } from "@/context";
import {
  Homepage,
  Page404,
} from './pages';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/theme';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSportyStore } from './store';
import { MultiStepLoader } from './components/ui/loader';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const { user, setUser } = useSportyStore(state => ({
    user: state.user,
    setUser: state.setUser
  }));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2250);
  }, []);

  return (
    <>
      <ThemeProvider>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            {loading && (
              <MultiStepLoader
                loadingStates={[
                  { text: "Loading my skills"},
                  { text: "Loading my passion"},
                  { text: "Loading your experience"},
                ]}
                loading={loading}
                duration={750}
              />
            )}
            {!loading && (
              <AuthContext.Provider value={{ user, setUser }}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="*" element={<Page404 />} />
                  </Route>
                </Routes>
              </AuthContext.Provider>
            )}
            <ToastContainer />
        </LoadingContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
