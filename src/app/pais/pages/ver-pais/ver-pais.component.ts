import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap((pais: any) => this.PaisService.paisCodigo(pais['id'])),
      tap(console.log)
      )
    .subscribe(pais => this.pais = pais[0]);

    // this.activatedRoute.params
    // .subscribe(({id}) => {
    //   console.log(id);

    //   this.PaisService.paisCodigo(id)
    //   .subscribe(pais => {
    //     console.log(pais);
    //   })

    // })
  }

}
