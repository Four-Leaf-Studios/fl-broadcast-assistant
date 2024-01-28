"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Session, User } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext<{
  user: User | null;
  session: Session | null;
  handleSignOut: Function;
}>({
  user: null,
  session: null,
  handleSignOut: () => {},
});

export const AuthContextProvider = (props: any) => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const path = usePathname();
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("AUTH RERENDERED");
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") router.push("/");

        if (
          event === "SIGNED_IN" ||
          event === "SIGNED_OUT" ||
          event === "TOKEN_REFRESHED" ||
          event === "USER_UPDATED"
        ) {
          setUserSession(session);
          setUser(session?.user ?? null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router, supabase.auth, user]);

  const handleSignOut = useCallback(() => {
    supabase.auth.signOut();
  }, [supabase.auth]);

  useEffect(() => {
    if (!user && path !== "/login") router.push("/login");
  }, [path, router, user]);

  const value = useMemo(() => {
    return {
      userSession,
      user,
      handleSignOut,
    };
  }, [handleSignOut, user, userSession]);
  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a AuthContextProvider.");
  }
  return context;
};
