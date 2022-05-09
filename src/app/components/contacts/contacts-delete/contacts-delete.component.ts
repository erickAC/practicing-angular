import { Contato } from './../contato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-delete',
  templateUrl: './contacts-delete.component.html',
  styleUrls: ['./contacts-delete.component.css']
})
export class ContactsDeleteComponent implements OnInit {

  contact!: Contato;

  constructor(private contatoService: ContatoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get('id');
    this.contatoService.readById(Number(id)).subscribe(c => {
      this.contact = c;
    })
    console.log(this.contact);
  }

  deleteContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.contact.favorite);
    this.contatoService.delete(Number(id)).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  backToHome() {
    this.router.navigate(['']);
  }
 
}
