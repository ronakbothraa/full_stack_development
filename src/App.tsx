import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Home } from "./_root/pages";
import CreatePost from "./_root/pages/CreatePost";
import EditPosts from "./_root/pages/EditPosts";
import Explore from "./_root/pages/Explore";
import PostDetails from "./_root/pages/PostDetails";
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
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<div>save</div>} />
          <Route path="/all-users" element={<div>all-user</div>} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPosts />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<div>Explore</div>} />
          <Route path="/update-profile/:id" element={<div>Explore</div>} />
        </Route>
      </Routes>
      <Toaster />
    </main>

  )
}

export default App