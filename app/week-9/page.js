"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle login
  const login = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <h1>Week-9</h1>
      {user ? (
        // Content displayed if the user is logged in
        <div>
          <p>
            Signed in as {user.displayName} ({user.email})
          </p>
          <button onClick={logout} style={{ margin: "10px", padding: "10px 20px" }}>
            Logout
          </button>
          <br />
          <Link href="/week-9/shopping-list" style={{ color: "blue", textDecoration: "underline", marginTop: "20px" }}>
              Go to Shopping List
          </Link>
        </div>
      ) : (
        // Content displayed if the user is not logged in
        <div>
          <p>Please log in to continue</p>
          <button onClick={login} style={{ margin: "10px", padding: "10px 20px" }}>
            Login with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
