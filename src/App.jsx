import NavBar from "./components/NavBar.jsx";
import {Routes, Route} from "react-router-dom";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Account from "./pages/Account.jsx";
import {AuthContextProvider} from "./context/AuthContext.jsx";


function App() {
    return (
        <div>
            <NavBar/>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Signin />}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/account" element={
                        <ProtectedRoute>
                            <Account />
                        </ProtectedRoute>
                    }/>
                </Routes>
            </AuthContextProvider>
        </div>
    )
}

export default App
