using Asistencia.DataTypes.Objects.Others;
using Asistencia.DataTypes.Petitions.Responses;
using Microsoft.Extensions.Configuration;
using Asistencia.DataAccess;
using Asistencia.BusinessLayer.Utility;
using Asistencia.DataTypes.Objects.Lists;
using System.Collections.Generic;
using Asistencia.DataTypes.Objects.Entities;

namespace Asistencia.BusinessLayer
{
    public class EmpleadoLogic
    {
        private readonly EmpleadoData _baseData;

        public EmpleadoLogic(IConfiguration configuration)
        {
            _baseData = new EmpleadoData(configuration);
        }

        public Response<EmpleadoResponse> ObtenerEmpleado(string nroDocumento)
        {
            Response<EmpleadoResponse> response;
            Empleado objEmpleado;

            objEmpleado = _baseData.ObtenerEmpleado(nroDocumento);

            if (objEmpleado == null)
            {
                return new Response<EmpleadoResponse> { IsCorrect = false, Status = Constants.StatusWebApi.USER_INCORRECT };
            }

            response = new Response<EmpleadoResponse>
            {
                IsCorrect = true,
                Value = new EmpleadoResponse
                {
                    Empleado = objEmpleado
                },
                Status = Constants.StatusWebApi.OK
            };

            return response;
        }
    }
}
