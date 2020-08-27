using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Asistencia.WebApi.Utility.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace Asistencia.WebApi.Controllers
{
    [AllowAnonymous]
    public class AutenticacionController : Controller
    {
        private readonly UserLogic _usuarioLogic;
        private readonly TokenGenerator _tokenGerator;

        public AutenticacionController(IConfiguration configuration)
        {
            _usuarioLogic = new UserLogic(configuration);
            _tokenGerator = new TokenGenerator(configuration);
        }

        [HttpPost(Constants.RoutesApi.LOGIN)]
        [Attributes.Excepcion]
        public IActionResult Login([FromBody]LoginRequest request)
        {
            var response = _usuarioLogic.Login(request);
            if (response.IsCorrect)
            {
                var token = _tokenGerator.GenerateJSONWebToken(response.Value, request.MinutosExpiracion);
                response.Value.Token = token;
            }
            return Ok(response);
        }
    }
}