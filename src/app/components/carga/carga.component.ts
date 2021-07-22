import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {
  estaSobreElemento: boolean = false;
  archivos: FileItem[] = []
  constructor( public cargaImagenesService: CargaImagenesService ) { }

  ngOnInit(): void {
  }

  cargarImagenes() {
    this.cargaImagenesService.cargarImagenesFirebase(this.archivos);
  }
  pruebaSobreElemento(event: any) {
    console.log(event)

  }
}
