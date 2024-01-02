import { Router } from '@angular/router';
import { MedicoService } from './../../../services/medico/medico.service';
import { Medico } from './../../../models/model.medico';
import { Component } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrl: './medico-create.component.css'
})
export class MedicoCreateComponent {

  Medico: Medico;

  constructor(private MedicoService: MedicoService, private Router: Router){
    this.Medico = new Medico();
  }

  incluir(){
    this.MedicoService.post(this.Medico)
    .pipe(take(1))
    .subscribe({
      next: (JSONMedico:Medico) => {this.Medico = JSONMedico;
        alert('Medico criado com sucesso!'); this.Router.navigate(['medico'])},
        error: erro => {console.log(erro)}
      })
  }


}
