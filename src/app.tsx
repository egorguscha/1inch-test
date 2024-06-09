import { Button, Container, Title } from "@mantine/core";

import { useAccount, useDisconnect } from "wagmi";

import { ConnectWallet } from "./components/connect-wallet";
import { TokensList } from "./components/tokens";
import { truncateAddress } from "./lib/truncate-address";

export function App() {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return (
      <Container>
        <ConnectWallet />
      </Container>
    );
  }

  return (
    <Container>
      <Button onClick={() => disconnect()}>Disconnect</Button>
      <Title>{truncateAddress(address!)}</Title>
      <TokensList />
    </Container>
  );
}
