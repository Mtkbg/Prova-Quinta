import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario";

@Component({
  selector: "app-cadastrar-usuario",
  templateUrl: "./cadastrar-usuario.component.html",
  styleUrls: ["./cadastrar-usuario.component.css"],
})
export class CadastrarUsuarioComponent implements OnInit {
  nome!: string;
  nascimento!: string;
  id!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Usuario>(`https://localhost:5001/api/usuario/buscar/${id}`).subscribe({
            next: (usuario) => {
              this.id = id;
              this.nome = usuario.nome;
            },
          });
        }
      },
    });
  }

  alterar(): void {
    let usuario: Usuario = {
      usuarioId: Number.parseInt(this.id),
      nome: this.nome,
      nascimento: this.nascimento,
    };

    this.http.patch<Usuario>("https://localhost:5001/api/usuario/alterar", usuario).subscribe({
      next: (usuario) => {
        this.router.navigate(["pages/usuario/listar"]);
      },
    });
  }

  cadastrar(): void {
    let usuario: Usuario = {
      nome: this.nome,
      nascimento: this.nascimento,
    };

    //Configurando a requisição para a API
    this.http
      .post<Usuario>("https://localhost:5001/api/usuario/cadastrar", usuario)
      // Executar a requisição
      .subscribe({
        next: (usuario) => {
          this.router.navigate(["pages/usuario/listar"]);
        },
      });
  }
}
