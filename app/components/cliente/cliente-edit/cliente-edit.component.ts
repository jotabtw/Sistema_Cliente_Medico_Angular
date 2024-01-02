import { Cliente } from './../../../models/model.cliente';
import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrl: './cliente-edit.component.css'
})
export class ClienteEditComponent {
  Cliente:Cliente;
  datanascimento: Date = new Date();

  constructor(private clienteService:ClienteService, private activatedRoute:ActivatedRoute, private router:Router){
    this.Cliente = new Cliente();
    const id:string|null =this.activatedRoute.snapshot.paramMap.get('id');
    this.clienteService.getById(String(id))
    .pipe(take(1))
    .subscribe({
      next:(jsonCliente:Cliente)=>{this.Cliente=jsonCliente;
        this.handleDataFormatada(this.Cliente)
      },
      error: erro => console.log(erro)
    }
    );

  }

  handleDataFormatada(Cliente: Cliente):void{
    if (Cliente.DataNascimento != null){
      this.datanascimento = new Date(Cliente.DataNascimento)
      this.Cliente.DataNascimento = new Date(this.datanascimento).toLocaleDateString('pt-BR')
  }
    this.Cliente = Cliente;
}

  alterar():void{
    this.clienteService.put(this.Cliente)
    .pipe(take(1))
    .subscribe({
      next:(jsonCliente:Cliente)=>{this.Cliente=jsonCliente;
      this.handleDataFormatada(this.Cliente)
      alert("Cliente Alterado Com Sucesso!");
      this.router.navigate(['cliente']);
    },
    error: erro => console.log(erro)
    });
  }
}
