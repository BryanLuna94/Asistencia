using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Asistencia.WebApi.Utility
{
    public class Attributes
    {
        public class ExcepcionAttribute : ExceptionFilterAttribute
        {
            public override void OnException(ExceptionContext context)
            {
                Functions.MessageError(context.Exception);
                context.Result = new JsonResult(new { Codigo = "0001", Mensaje = "Error Interno" });
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                base.OnException(context);
            }
        }
    }
}
