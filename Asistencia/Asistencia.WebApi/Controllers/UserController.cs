using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using System;

namespace Asistencia.WebApi.Controllers
{
    [Authorize]
    public class UserController : Controller
    {
        private readonly UserLogic _userLogic;

        public UserController(IConfiguration configuration)
        {
            _userLogic = new UserLogic(configuration);
        }

        [HttpPost(Constants.RoutesApi.USER_LIST)]
        [Attributes.Excepcion]
        public IActionResult ListUser([FromBody]UserRequest request)
        {
            var response = _userLogic.List(request);
            return Ok(response);
        }

        [HttpGet(Constants.RoutesApi.USER_SELECT)]
        [Attributes.Excepcion]
        public IActionResult SelectUser(int pId)
        {
            var response = _userLogic.Select(pId);
            return Ok(response);
        }

        [HttpPost(Constants.RoutesApi.USER_INSERT)]
        [Attributes.Excepcion]
        public async Task<ActionResult> InsertUser([FromBody]UserRequest request)
        {
            request.ObjectUser.CreateUserId = Functions.GetClaim(User, Constants.NameClaim.JWT_IDUSER);
            var response = await _userLogic.Insert(request);
            return Ok(response);
        }

        [HttpPut(Constants.RoutesApi.USER_UPDATE)]
        [Attributes.Excepcion]
        public async Task<IActionResult> UpdateUser(string pId, [FromBody]UserRequest request)
        {
            request.ObjectUser.UpdateUserId = Functions.GetClaim(User, Constants.NameClaim.JWT_IDUSER);
            var response = await _userLogic.Update(pId, request);
            return Ok(response);
        }

        [HttpPut(Constants.RoutesApi.USER_DISABLE)]
        [Attributes.Excepcion]
        public async Task<IActionResult> DisableUser(string pId)
        {
            var userId = Functions.GetClaim(User, Constants.NameClaim.JWT_IDUSER);
            var response = await _userLogic.Disable(pId, userId);
            return Ok(response);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}