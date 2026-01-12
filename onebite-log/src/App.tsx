import RootRoute from "./lib/root-route";
import SessionProvider from "./provider/session-provider";

export default function App() {
  return (
    <SessionProvider>
      <RootRoute />
    </SessionProvider>
  );
}
