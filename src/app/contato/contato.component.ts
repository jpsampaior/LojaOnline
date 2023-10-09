import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formContato = this.formBuilder.group({
    nome: ['', [
      Validators.minLength(3),
      Validators.required
    ]],
    assunto: ['', [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ['', [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ['', [
      Validators.email,
      Validators.required
    ]],
    mensagem: ['', [
      Validators.minLength(20),
      Validators.required
    ]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private notificacaoService: NotificacaoService
  ) { }

  enviarFormulario() {
    this.formContato.reset();
    this.notificacaoService.notificar("Mensagem enviada!");
  }
}
