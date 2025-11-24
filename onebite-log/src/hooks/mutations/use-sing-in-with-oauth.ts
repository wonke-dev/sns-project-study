import { singInWithOAuth } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithOAuth() {
  return useMutation({
    mutationFn: singInWithOAuth,
  });
}
