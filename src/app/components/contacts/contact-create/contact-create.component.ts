import { Router } from '@angular/router';
import { ContatoService } from './../contato.service';
import { Contato } from './../contato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact: Contato = {
    nome: '',
    email: '',
    favorite: true, 
  };

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveContact(): void{
    this.contatoService.create(this.contact).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  backToHome(): void {
    this.router.navigate(['']);
  }

}
