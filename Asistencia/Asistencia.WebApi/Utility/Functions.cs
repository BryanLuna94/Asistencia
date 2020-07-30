using System;
using System.Linq;
using System.Security.Claims;

namespace Asistencia.WebApi.Utility
{
    public static class Functions
    {
        public static string MessageError(Exception ex)
        {
            //Log.RegistrarLog(NivelLog.Error, ex);
            return ex.Message;
        }

        public static string GetClaim(this ClaimsPrincipal claimsPrincipal, Constants.NameClaim nameClaim)
        {
            var claim = claimsPrincipal.Claims.FirstOrDefault(c => c.Type == nameClaim.ToString());

            if (claim != null)
            {
                return claim.Value;
            }
            else
            {
                return string.Empty;
            }
        }
    }
}
