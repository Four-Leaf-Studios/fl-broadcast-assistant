"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React from "react";

const Login = () => {
  const supabase = createClientComponentClient();
  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      appearance={{
        theme: ThemeSupa,
        extend: true,
        className: {
          container: "!max-w-md !m-auto",
          button: "!w-[50vw] !max-w-md",
          anchor: "!text-white",
          input: "!text-white !placeholder-white !w-[50vw] !max-w-md",
          label: "!text-white",
        },
      }}
      theme="dark"
      showLinks={true}
      providers={["twitch", "discord"]}
    />
  );
};

export default Login;
