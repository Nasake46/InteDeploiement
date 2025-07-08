import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { User } from "@supabase/supabase-js";

export function useUser() {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user); // Peut être null ou User
    });
  }, []);

  return user;
}
