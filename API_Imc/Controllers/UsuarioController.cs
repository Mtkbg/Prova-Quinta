using System.Collections.Generic;
using System.Linq;
using API_Imc.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_Imc.Controllers
{
  [ApiController]
  [Route("api/usuario")]
  public class UsuarioController : ControllerBase
  {
    private readonly DataContext _context;

    //Injeção de dependência - balta.io
    public UsuarioController(DataContext context) =>
        _context = context;

    private static List<Usuario> usuarios = new List<Usuario>();

    // POST: /api/usuario/cadastrar
    [Route("cadastrar")]
    [HttpPost]
    public IActionResult Cadastrar([FromBody] Usuario usuario)
    {
      _context.Usuarios.Add(usuario);
      _context.SaveChanges();
      return Created("", usuario);
    }
  }
}