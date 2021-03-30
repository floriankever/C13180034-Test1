import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(
    public fotoService:FotoService,
    private afStorage:AngularFireStorage) {}

  async ngOnInit() {
    await this.fotoService.loadFoto();
  }
  TambahFoto() {
    this.fotoService.tambahFoto();
  };
  UploadFoto() {
    //
  }

}

export interface fileFoto {
  name:string;
  path:string;
}
