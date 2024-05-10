import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import MenuComponent from "./components/MenuComponent";
import NotFound from "./pages/NotFound";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);


  const handleLogin = (user) => {
    setUser(user); // Cập nhật user vào state khi đăng nhập thành công
  };

  return (
    <div>
      {user ? <HeaderComponent user={user}/> : ""}
      <div className="body_container">
      {
        user ?  <div>
          <MenuComponent />
        </div> : ""
      }

        <div className="body_page" style={user ? {width: "calc( 100% - 250px )"} :  {width:"100%"}}>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
            <Route path="/home" element={user ? <HomePage /> : <Navigate to="/login" />} />

            <Route path="/login" element={user ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
            <Route path="*" element={user ?  <NotFound/> : <Navigate to="/login" />} />

          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
