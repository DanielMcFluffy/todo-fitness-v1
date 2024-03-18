import { useState, useEffect } from "react";



const LandingEffect = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  // disappear after 4 sec
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
  }, []);

  return showWelcome ? (
    <div className="welcome-effect">
      <img src="https://cdn.pond5.com/blog/rs/uploads/2020/10/Cyberpunk-After-Effects-Plugins-Modulation.gif" alt="Cyberphonk" style={{ width: '100%', height: 'auto' }} />
      <p className="fw-light fs-2" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: 'white' }}>Wake up Samurai, we got some fat to burn.</p>
    </div>
  ) : null;
};

export default LandingEffect;
