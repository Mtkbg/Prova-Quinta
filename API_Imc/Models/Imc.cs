using System;
using System.ComponentModel.DataAnnotations;

namespace API_Imc.Models
{
  public class Imc
  {
    public Imc() => CriadoEm = DateTime.Now;

    [Key]
    public int Id { get; set; }
    public double Altura { get; set; }
    public double Peso { get; set; }
    public int UsuarioId { get; set; }
    public Usuario Usuario { get; set; }
    public DateTime CriadoEm { get; set; }
  }
}