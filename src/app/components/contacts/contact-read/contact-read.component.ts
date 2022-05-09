import { ContatoService } from './../contato.service';
import { HttpClient } from '@angular/common/http';
import { Contato } from './../contato.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-read',
  templateUrl: './contact-read.component.html',
  styleUrls: ['./contact-read.component.css']
})
export class ContactReadComponent implements OnInit {

  contacts!: Contato[]; 

  constructor(private http: HttpClient, private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatoService.read().subscribe(c => {
      this.contacts = c;
      console.log(c);
    });
  }

}
