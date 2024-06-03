import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthContext, LoadingContext } from "@/context";
import {
  Homepage,
  Page404,
} from './pages';
import { useState } from 'react';
import { UserAuthRo } from './lib/types';
import { ThemeProvider } from './context/theme';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSportyStore } from './store';
import { BackgroundBeams } from './components/ui/background-beams';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const { user, setUser } = useSportyStore(state => ({
    user: state.user,
    setUser: state.setUser
  }));

  return (
    <>
      <ThemeProvider>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            {loading && (
              <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100'>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" /> 
              </div>
            )}
              <AuthContext.Provider value={{ user, setUser }}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="*" element={<Page404 />} />
                  </Route>
                </Routes>
              </AuthContext.Provider>
            <ToastContainer />
        </LoadingContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
