import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup.page";
import SignInPage from "./pages/signin.page";
import DashboardPage from "./pages/dashboard.page";
import ProfilePage from "./pages/profile.page";
import CreateBookPage from "./pages/createBook.page";
import UpdateBookPage from "./pages/updateBook.page";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <h1 className="header">Library API</h1>
      <Routes>
        <Route path="/" element={<SignInPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        <Route path="dashboard" element={<DashboardPage/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="create-book" element={<CreateBookPage/>}/>
        <Route path="update-book" element={<UpdateBookPage/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
