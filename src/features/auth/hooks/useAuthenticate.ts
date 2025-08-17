import { useState } from "react";
import { authenticateApi } from "../common/auth.api";

export type ISocialProvider = "google" | "kakao" | "apple";

function useAuthenticate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const authenticate = async (provider: ISocialProvider, token: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await authenticateApi(provider, token);
      console.log("로그인 성공:", response);
      return response;
    } catch (err: any) {
      console.error("로그인 실패:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { authenticate, loading, error };
}

export default useAuthenticate;