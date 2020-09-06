using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asistencia.WebApi.Controllers
{
    public class PuntodeVentaController : Controller
    {
        private readonly PuntodeVentaLogic _puntodeventaLogic;

        public PuntodeVentaController(IConfiguration configuration)
        {
            _puntodeventaLogic = new PuntodeVentaLogic(configuration);
        }



        [HttpPost(Constants.RoutesApi.PUNTODEVENTA_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListPuntodeVenta([FromBody] PuntodeVentaRequest request)
        {
            var response = _puntodeventaLogic.List(request);
            return Ok(response);
        }

    }
}
