import { Component } from '@angular/core';

import { Fornecedor } from './models/fornecedor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fornecedores';
  fornecedor: Fornecedor = new Fornecedor();

  salvar() {
    console.log(this.fornecedor);
    alert('Fornecedor Cadastrado: ' + this.fornecedor.NomeFantasia + ' : ' + this.fornecedor.RazaoSocial + ' : ' + this.fornecedor.CNPJ);
  }

}
