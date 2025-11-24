import { singInWithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithPassword() {
  return useMutation({
    mutationFn: singInWithPassword,
  });
}
