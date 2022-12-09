using System.Collections.Generic;
using System.Linq;
using API_Imc.Models;
using API_Imc.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_Imc.Controllers
{
  [ApiController]
  [Route("api/imc")]
  public class ImcController : ControllerBase
  {
    private readonly DataContext _context;
    public ImcController(DataContext context) =>
        _context = context;


    // POST: /api/imc/cadastrar
    [HttpPost]
    [Route("cadastrar")]
    public IActionResult Cadastrar([FromBody] Imc imc)
    {
      imc.Imc =
          Calculos.CalcularImc
          (imc.Altura, imc.Peso);

      _context.Imcs.Add(imc);
      _context.SaveChanges();
      return Created("", imc);
    }

    // GET: /api/funcionario/listar
    [HttpGet]
    [Route("listar")]
    public IActionResult Listar()
    {
      List<Imc> imcs =
          _context.Imcs.Include(f => f.Funcionario).ToList();

      if (imcs.Count == 0) return NotFound();

      return Ok(imcs);
    }
  }
}