import { Component, OnInit } from '@angular/core';
import { MutantesService } from '../../services/mutantes.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private _ms:MutantesService )
  {
    console.log(_ms);
  }

  ngOnInit() {
  }

}
