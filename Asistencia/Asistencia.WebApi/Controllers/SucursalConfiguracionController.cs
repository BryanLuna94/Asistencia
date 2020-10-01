using System;
using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize]
        [HttpGet(Constants.RoutesApi.SUCURSALCONFIGURACION_SELECT)]
        [Attributes.Excepcion]
        public IActionResult SelectSucursalConfiguracion(int pId)
        {
            var response = _sucursalconfiguracionLogic.Select(pId);
            return Ok(response);
        }
        [Authorize]
        [HttpPost(Constants.RoutesApi.SUCURSALCONFIGURACION_INSERT)]
        [Attributes.Excepcion]
        public async Task<ActionResult> InsertSucursalConfiguracion([FromBody] SucursalConfiguracionRequest request)
        {
            request.sucursalConfiguracion.UpdateUserId = Functions.GetClaim(User, Constants.NameClaim.JWT_IDUSER);
            var response = await _sucursalconfiguracionLogic.Insert(request);
            return Ok(response);
        }

        [Authorize]
        [HttpPut(Constants.RoutesApi.SUCURSALCONFIGURACION_UPDATE)]
        [Attributes.Excepcion]
        public async Task<IActionResult> UpdateSucursalConfiguracion(string pId, [FromBody] SucursalConfiguracionRequest request)
        {
            request.sucursalConfiguracion.UpdateUserId = Functions.GetClaim(User, Constants.NameClaim.JWT_IDUSER);
            var response = await _sucursalconfiguracionLogic.Update(pId, request);
            return Ok(response);
        }

        
        [HttpPost(Constants.RoutesApi.SUCURSALCONFIGURACION_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListSucursalConfiguracion([FromBody] SucursalConfiguracionRequest request)
        {
            var response = _sucursalconfiguracionLogic.List(request);
            return Ok(response);
        }

    }
}
