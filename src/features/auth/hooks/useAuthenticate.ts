import { ISocialProvider } from "../common/auth.api";

function useAuthenticate() {
  return async (by: { provider: ISocialProvider; id: string }) => {
    try {
      const { provider, id } = by;

      console.log(provider, id);
    } catch (err) {
      console.error(err);
    }
  };
}

export default useAuthenticate;
