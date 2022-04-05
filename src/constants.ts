import { chain } from 'wagmi'

// Environments
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
export const IS_MAINNET = process.env.NEXT_PUBLIC_IS_MAINNET === 'true'

// Git
export const GIT_COMMIT_SHA =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7)
export const GIT_COMMIT_REF = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF

// Messages
export const ERROR_MESSAGE = 'Something went wrong!'
export const CONNECT_WALLET = 'Please connect your wallet.'
export const WRONG_NETWORK = IS_MAINNET
  ? 'Please change network to Polygon mainnet.'
  : 'Please change network to Polygon Mumbai testnet.'

// URLs
export const STATIC_ASSETS = 'https://assets.lenster.xyz/images'
export const API_URL = IS_MAINNET
  ? 'https://api-mumbai.lens.dev'
  : 'https://api-mumbai.lens.dev'
export const POLYGONSCAN_URL = IS_MAINNET
  ? 'https://polygonscan.com'
  : 'https://mumbai.polygonscan.com'
export const IMAGEKIT_URL = 'https://ik.imagekit.io/lensterimg'

// Web3
export const INFURA_ID = '1423f014ff0243e3b7ab20fbb3f8656f'
export const POLYGON_MAINNET = {
  ...chain.polygonMainnet,
  name: 'Polygon Mainnet',
  rpcUrls: ['https://polygon-rpc.com']
}

export const POLYGON_MUMBAI = {
  ...chain.polygonTestnetMumbai,
  name: 'Polygon Mumbai',
  rpcUrls: ['https://rpc-mumbai.maticvigil.com']
}
export const CHAIN_ID = IS_MAINNET ? POLYGON_MAINNET.id : POLYGON_MUMBAI.id

// Addresses
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const LENSHUB_PROXY = IS_MAINNET
  ? '0xd7B3481De00995046C7850bCe9a5196B7605c367'
  : '0xd7B3481De00995046C7850bCe9a5196B7605c367'
export const REVERT_COLLECT_MODULE = IS_MAINNET
  ? '0x98dfAB2360352D9Da122b5F43a4a4fa5D3Ce25a3'
  : '0x98dfAB2360352D9Da122b5F43a4a4fa5D3Ce25a3'
export const DEFAULT_COLLECT_TOKEN = IS_MAINNET
  ? '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
  : '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
