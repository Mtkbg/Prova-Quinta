import { ListarFolhaComponent } from "./components/pages/folha/listar-folha/listar-folha.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarFolhaComponent } from "./components/pages/folha/cadastrar-folha/cadastrar-folha.component";
import { CadastrarUsuarioComponent } from "./components/pages/usuario/cadastrar-usuario/cadastrar-usuario.component";
// import { ListarUsuariosComponent } from "./components/pages/usuario/listar-usuarios/listar-usuarios.component";

const routes: Routes = [
  {
    path: "pages/usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "pages/usuario/cadastrar/:id",
    component: CadastrarUsuarioComponent,
  },
  // {
  //   path: "pages/usuario/listar",
  //   component: ListarUsuariosComponent,
  // },
  {
    path: "pages/folha/cadastrar",
    component: CadastrarFolhaComponent,
  },
  {
    path: "pages/folha/listar",
    component: ListarFolhaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
