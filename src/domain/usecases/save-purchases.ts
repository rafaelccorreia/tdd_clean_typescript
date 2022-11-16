export interface SavePurchase {
  save: (purchases: Array<SavePurchase.Params>) => Promise<void>
}

namespace SavePurchase {
  export type Params = {
    id: string
    date: Date
    value: number
  }
}
