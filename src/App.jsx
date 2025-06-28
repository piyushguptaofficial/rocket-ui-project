// import React from 'react';
// import RootLayout from './layouts/RootLayout';
// import Button from './components/Button';

// import './index.css';

// const App = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-r from-[#414345] to-[#232526] text-white">
//       <RootLayout />
//       <Button button_text="Apply Now 🚀" className="fixed bottom-6 right-6 px-4 py-2"/>
//     </div>
//   );
// }

// export default App;



import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ApplyPage from './pages/ApplyPage'; // 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} />
      <Route path="/apply" element={<ApplyPage />} /> 
    </Routes>
  );
};

export default App;

