import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from './../contato.service';
import { Contato } from './../contato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  contact: Contato = new Contato;

  constructor(private contatoService: ContatoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contatoService.readById(Number(id)).subscribe(c => {
      this.contact = c;
    });
  }

  updateContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contatoService.update(Number(id), this.contact).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  backToHome(): void {
    this.router.navigate(['']);
  }

}
