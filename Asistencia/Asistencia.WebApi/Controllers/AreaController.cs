using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asistencia.WebApi.Controllers
{
    public class AreaController : Controller
    {
        private readonly AreaLogic _areaLogic;

        public AreaController(IConfiguration configuration)
        {
            _areaLogic = new AreaLogic(configuration);
        }



        [HttpPost(Constants.RoutesApi.AREA_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListArea([FromBody] AreaRequest request)
        {
            var response = _areaLogic.List(request);
            return Ok(response);
        }

    }
}
