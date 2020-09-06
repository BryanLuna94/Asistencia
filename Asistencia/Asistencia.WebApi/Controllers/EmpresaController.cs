using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asistencia.WebApi.Controllers
{
    public class EmpresaController : Controller
    {
        private readonly EmpresaLogic _empresaLogic;

        public EmpresaController(IConfiguration configuration)
        {
            _empresaLogic = new EmpresaLogic(configuration);
        }


        [HttpGet(Constants.RoutesApi.EMPRESA_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListEmpresa()
        {
            var response = _empresaLogic.List();
            return Ok(response);
        }

    }
}
