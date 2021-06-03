import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:any): void {
    //console.log('login', form.value);
    this.usuariosService.login(form.value)
    .subscribe(res => {
      if (res.success)
      this.router.navigateByUrl('/');
    })
  }

}
