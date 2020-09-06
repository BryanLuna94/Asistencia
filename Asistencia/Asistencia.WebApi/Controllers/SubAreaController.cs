using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asistencia.WebApi.Controllers
{
    public class SubAreaController : Controller
    {
        private readonly SubAreaLogic _subareaLogic;

        public SubAreaController(IConfiguration configuration)
        {
            _subareaLogic = new SubAreaLogic(configuration);
        }



        [HttpPost(Constants.RoutesApi.SUBAREA_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListSubArea([FromBody] SubAreaRequest request)
        {
            var response = _subareaLogic.List(request);
            return Ok(response);
        }

    }
}
