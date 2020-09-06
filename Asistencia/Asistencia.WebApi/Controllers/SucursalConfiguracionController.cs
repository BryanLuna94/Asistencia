using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asistencia.WebApi.Controllers
{
    public class SucursalConfiguracionController : Controller
    {
        private readonly SucursalConfiguracionLogic _sucursalconfiguracionLogic;

        public SucursalConfiguracionController(IConfiguration configuration)
        {
            _sucursalconfiguracionLogic = new SucursalConfiguracionLogic(configuration);
        }

        //[HttpPost(Constants.RoutesApi.MARCADOR_INSERT)]
        //[Attributes.Excepcion]
        //public async Task<ActionResult> InsertMarcador([FromBody] MarcadorRequest request)
        //{
        //    var response = await _marcadorLogic.Insert(request);
        //    return Ok(response);
        //}

        [HttpPost(Constants.RoutesApi.SUCURSALCONFIGURACION_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListSucursalConfiguracion([FromBody] SucursalConfiguracionRequest request)
        {
            var response = _sucursalconfiguracionLogic.List(request);
            return Ok(response);
        }

    }
}
