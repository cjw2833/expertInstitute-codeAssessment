export interface Asset {
    id: string;
    rank: number;
    symbol: string;
    name: string;
    supply: number;
    maxSupply: number;
    marketCapUsd: number;
    volumeUsd24Hr: number;
    priceUsd: number;
    changePercent24Hr: number;
    vwap24Hr: number;
  }

/* Data Example
  {
    "id": "bitcoin",
    "rank": "1",
    "symbol": "BTC",
    "name": "Bitcoin",
    "supply": "17193925.0000000000000000",
    "maxSupply": "21000000.0000000000000000",
    "marketCapUsd": "119150835874.4699281625807300",
    "volumeUsd24Hr": "2927959461.1750323310959460",
    "priceUsd": "6929.8217756835584756",
    "changePercent24Hr": "-0.8101417214350335",
    "vwap24Hr": "7175.0663247679233209"
}
*/