export const shortenAddress = (address: string, chars = 6): string => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`
}