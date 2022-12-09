using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API_Imc.Models
{
  public class Usuario
  {
    //Data Annotations
    public int UsuarioId { get; set; }
    public string Nome { get; set; }
    public DateTime Nascimento { get; set; }
  }
}