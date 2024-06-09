import { groupElements } from "../../lib/group-elements";
import { Token, contractConfig } from "../../repository/tokens";
import { Box, Grid, GridCol, Loader, ThemeIcon } from "@mantine/core";
import { useAccount, useBalance, useReadContracts } from "wagmi";
import { formatUnits } from "viem";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { INCH_ROUTER } from "../../shared/constants";

function transformTokensInfo<T>(tokens: T[]): Token[] {
  const groupedElements = groupElements(tokens, 5);

  const result = [];
  for (const [balance, symbol, name, decimals, allowance] of groupedElements) {
    result.push({ balance, symbol, name, decimals, allowance });
  }

  return result as Token[];
}

export const TokensList = () => {
  const { address } = useAccount();
  const { data } = useReadContracts({
    //@ts-expect-error address has right format
    contracts: contractConfig({ address: address!, spender: INCH_ROUTER }),
    allowFailure: false,
  });

  const { data: native } = useBalance({ address });

  if (!data || !native) return <Loader />;

  const tokens = transformTokensInfo(data);

  return (
    <Box>
      <Box>
        <Box>Ethereum</Box>
        <Box>
          {formatUnits(native.value, native.decimals)} {native.symbol}
        </Box>
      </Box>
      {tokens.map(({ balance, symbol, name, decimals, allowance }) => (
        <Box key={symbol}>
          <Box>{name}</Box>
          <Box>
            {formatUnits(balance, decimals)} {symbol}
          </Box>
          <Grid justify="flex-start">
            <GridCol span={"content"}>Allowance:</GridCol>
            <GridCol span={"content"}>
              {allowance ? (
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck />
                </ThemeIcon>
              ) : (
                <ThemeIcon color="red" size={24} radius="xl">
                  <IconCircleX />
                </ThemeIcon>
              )}
            </GridCol>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
