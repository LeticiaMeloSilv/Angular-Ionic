import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
//  pre usar a linha de cima, tem q instalar npm install @ionic/storage-angular

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {
    this.init();
  }

  private async init(): Promise<void> {
    await this.storage.create();
  }

  async saveData(key: string, value: any): Promise<void> {
    await this.storage.set(key, value);
  }

  async getData(key: string): Promise<any> {
    return await this.storage.get(key);
  }
}

