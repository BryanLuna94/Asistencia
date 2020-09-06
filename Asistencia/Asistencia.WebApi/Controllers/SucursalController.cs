using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asistencia.WebApi.Controllers
{
    public class SucursalController : Controller
    {
        private readonly SucursalLogic _sucursalLogic;

        public SucursalController(IConfiguration configuration)
        {
            _sucursalLogic = new SucursalLogic(configuration);
        }



        [HttpPost(Constants.RoutesApi.SUCURSAL_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListSucursal([FromBody] SucursalRequest request)
        {
            var response = _sucursalLogic.List(request);
            return Ok(response);
        }

    }
}
