import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from 'src/app/core/models/Administrator';
import { AdministradorService } from 'src/app/core/services/administrador.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-miabmlist',
  templateUrl: './miabmlist.component.html',
  styleUrls: ['./miabmlist.component.scss']
})
export class MiabmlistComponent implements OnInit {

  administradores	: Administrador[];
  environment = environment;

  private administradorService : AdministradorService;

  ngOnInit(){
    this.consultar();
  }

  private consultar(){
    console.log("COSULTO")
    this.administradorService.getAll().subscribe((administrador: Administrador[])=>{
      this.administradores = administrador;
      console.log("esto",administrador)
    });
  }

  administradorActual(administrador: Administrador){
      //let administradorLogueado = this.login.obtenerAdministradorLogueado();
      return (true);

  }

  constructor(private as: AdministradorService,  private router: Router){
    this.administradorService = as;
  }

  nuevoAdministrador(p:Administrador){
      this.administradores.push(p);
  }

  deleteAdministrador(id: number){
    this.router.navigate([environment.FORMULARIO_CRUD_DEL_ADMINISTRADOR, id, environment.MODO_DELETE]);
  }

  updateAdministrador(id: number){
    this.router.navigate([environment.FORMULARIO_CRUD_DEL_ADMINISTRADOR, id, environment.MODO_UPDATE]);
  }

  administradorDetails(id: number){
    this.router.navigate([environment.FORMULARIO_CRUD_DEL_ADMINISTRADOR, id, environment.MODO_DISPLAY]);
  }

  createAdministrador(){
    this.router.navigate([environment.FORMULARIO_CRUD_DEL_ADMINISTRADOR, 0, environment.MODO_CREATE]);
  }

}
