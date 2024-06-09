export function truncateAddress(address: string, chars = 5): string {
  if (!address) return "";
  return `${address.substring(0, chars + 2)}...${address.substring(
    address.length - chars
  )}`;
}
