import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import GenieLogin from "./components/ui/GenieLogin";   // ← import it
import Home from "./pages/Home";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [origin, setOrigin] = useState(null);
  const signUpBtnRef = useRef(null);

  const openLogin = () => {
    if (signUpBtnRef.current) {
      const rect = signUpBtnRef.current.getBoundingClientRect();
      setOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      <Navbar 
        onSignUpClick={openLogin} 
        signUpBtnRef={signUpBtnRef} 
      />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* This is the Genie Login modal */}
      {showLogin && (
        <GenieLogin 
          origin={origin} 
          onClose={closeLogin} 
        />
      )}
    </>
  );
}