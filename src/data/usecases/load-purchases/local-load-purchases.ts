import { CacheStore } from '@/data/protocols/cache'
import { SavePurchase, LoadPurchases } from '@/domain/usecases'

export class LocalLoadPurchases implements SavePurchase, LoadPurchases {
  private readonly key = 'purchases'
  constructor(
    private readonly cacheStore: CacheStore,
    private readonly timestamp: Date
  ) {}

  async save(purchases: Array<SavePurchase.Params>): Promise<void> {
    this.cacheStore.replace(this.key, {
      timestamp: this.timestamp,
      value: purchases
    })
  }

  async loadAll(): Promise<Array<LoadPurchases.Result>> {
    try {
      this.cacheStore.fetch(this.key)
      return []
    } catch (error) {
      this.cacheStore.delete(this.key)
      return []
    }
  }
}
