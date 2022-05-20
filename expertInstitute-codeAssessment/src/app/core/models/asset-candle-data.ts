export interface AssetCandleData {
  priceUsd: number;
  time: string;
  date: string;
  circulatingSupply?: number;
}

/* Data Example
  {
    "priceUsd": "2735.3558753692037796",
    "time": 1651831200000,
    "circulatingSupply": "120666368.5615000000000000",
    "date": "2022-05-06T10:00:00.000Z"
  },
*/