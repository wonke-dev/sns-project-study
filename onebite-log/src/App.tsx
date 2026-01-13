import RootRoute from "./lib/root-route";
import ModalProvider from "./provider/modal-provider";
import SessionProvider from "./provider/session-provider";

export default function App() {
  return (
    <SessionProvider>
      <ModalProvider>
        <RootRoute />
      </ModalProvider>
    </SessionProvider>
  );
}
