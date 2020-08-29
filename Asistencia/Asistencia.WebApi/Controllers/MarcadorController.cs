using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asistencia.WebApi.Controllers
{
    public class MarcadorController : Controller
    {
        private readonly MarcadorLogic _marcadorLogic;

        public MarcadorController(IConfiguration configuration)
        {
            _marcadorLogic = new MarcadorLogic(configuration);
        }

        [HttpPost(Constants.RoutesApi.MARCADOR_INSERT)]
        [Attributes.Excepcion]
        public async Task<ActionResult> InsertMarcador([FromBody] MarcadorRequest request)
        {
            var response = await _marcadorLogic.Insert(request);
            return Ok(response);
        }

        [HttpPost(Constants.RoutesApi.MARCADOR_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListMarcador([FromBody] MarcadorRequest request)
        {
            var response = _marcadorLogic.List(request);
            return Ok(response);
        }

    }
}
