import { Contato } from './../contato.model';
import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-favorite',
  templateUrl: './contact-favorite.component.html',
  styleUrls: ['./contact-favorite.component.css']
})
export class ContactFavoriteComponent implements OnInit {

  contato?: Contato;

  constructor(private contatoService: ContatoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contatoService.favorite(Number(id)).subscribe(() => {
      this.router.navigate(['']);
    });
  }



}
