import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import {Routes, Route} from "react-router-dom";
import { Toaster } from "sonner";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<div>Explore</div>} />
          <Route path="/saved" element={<div>save</div>} />
          <Route path="/all-users" element={<div>all-user</div>} />
          <Route path="/create-post" element={<div>Explore</div>} />
          <Route path="/update-post/:id" element={<div>Explore</div>} />
          <Route path="/posts/:id" element={<div>Explore</div>} />
          <Route path="/profile/:id/*" element={<div>Explore</div>} />
          <Route path="/update-profile/:id" element={<div>Explore</div>} />
        </Route>
      </Routes>
      <Toaster />
    </main>

  )
}

export default App