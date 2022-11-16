import { CacheStore } from '@/data/protocols/cache'
import { SavePurchase } from '@/domain/usecases'

export class LocalSavePurchases implements SavePurchase {
  constructor(
    private readonly cacheStore: CacheStore,
    private readonly timestamp: Date
  ) {}

  async save(purchases: Array<SavePurchase.Params>): Promise<void> {
    this.cacheStore.delete('purchases')
    this.cacheStore.insert('purchases', {
      timestamp: this.timestamp,
      value: purchases
    })
  }
}
