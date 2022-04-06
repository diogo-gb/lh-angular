import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vaga } from '../models/Vagas.model'
@Component({
  selector: 'app-model-vagas',
  templateUrl: './model-vagas.component.html',
  styleUrls: ['./model-vagas.component.css']
})
export class ModelVagasComponent implements OnInit {
  public vagas: Vaga[] =[];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }
  listarVagas(){
    this._vagasService.getVagas()
    .subscribe(
      retornaVaga => {
        this.vagas = retornaVaga.map(
          item =>{
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          }
        )
      }
    )
  }
}
