import supabase from "./config";
import { INewUser } from "../types";

export async function createUserAccount(user: INewUser) {
  try {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

    if (signUpError) {
      console.error("Supabase SignUp Error:", signUpError.message);
      throw signUpError;
    }

    console.log("no signup error");

    // Check if user data is available after sign up
    if (!data || !data.user) {
      console.error("No user data returned after sign up.");
      throw new Error("User creation failed: No user data.");
    }

    console.log("User data returned after sign up:", data.user);

    const newAuthUser = data.user;
    console.log("New Supabase Auth User:", newAuthUser);

    try {
      // --- DEBUGGING STEP: Check current user session before insert ---
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("Supabase current user before saving profile:", user);
      // --- END DEBUGGING STEP ---

      const {
        data: saveduser,
        error,
      } = await supabase
        .from("user")
        .insert([
          {
            id: data.user.id,
            email: data.user.email,
          },
        ])
        .select(); // .select() returns the inserted data

      if (error) {
        console.error("Supabase Save Profile Error:", error.message);
        throw error;
      }

      if (!data || saveduser.length === 0) {
        console.error("No data returned after saving user profile.");
        throw new Error("Failed to save user profile.");
      }

      console.log("New Supabase User Profile:", saveduser[0]);
      return saveduser[0]; 
    } catch (error) {
      console.error("Error in saveUserProfileToDB:", error);
      return null;
    }

    return ;
  } catch (error) {
    console.error("Error in createUserAccount:", error);
    // You might want to handle specific errors differently (e.g., email already exists)
    return null;
  }
}

export async function saveUserProfileToDB(profileData: {
  userId: string;
  email: string;
  name: string;
}) {
  try {
    // --- DEBUGGING STEP: Check current user session before insert ---
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log("Supabase current user before saving profile:", user);
    // --- END DEBUGGING STEP ---

    const { data, error } = await supabase
      .from("user")
      .insert([
        {
          id: profileData.userId,
          email: profileData.email,
          name: profileData.name,
        },
      ])
      .select(); // .select() returns the inserted data

    if (error) {
      console.error("Supabase Save Profile Error:", error.message);
      throw error;
    }

    if (!data || data.length === 0) {
      console.error("No data returned after saving user profile.");
      throw new Error("Failed to save user profile.");
    }

    console.log("New Supabase User Profile:", data[0]);
    return data[0]; // Return the first (and only) inserted record
  } catch (error) {
    console.error("Error in saveUserProfileToDB:", error);
    return null;
  }
}
