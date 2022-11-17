import { PurchaseModel } from '../models'

export interface SavePurchase {
  save: (purchases: Array<SavePurchase.Params>) => Promise<void>
}

export namespace SavePurchase {
  export type Params = PurchaseModel
}
