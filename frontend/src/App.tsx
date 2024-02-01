import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/login' element={<Login />} /> */}
                </Routes>
            </Layout>
        </BrowserRouter>
  );
}

export default App;
