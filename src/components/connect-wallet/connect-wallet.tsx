import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";

export const ConnectWallet = () => {
  const [ready, setReady] = useState(false);
  const {
    connect,
    connectors: [connector],
  } = useConnect();

  useEffect(() => {
    const provider = connector.getProvider().then(() => {
      setReady(!!provider);
    });
  }, [connector]);

  return (
    <Button disabled={!ready} onClick={() => connect({ connector })}>
      Connect wallet
    </Button>
  );
};
