using Asistencia.DataTypes.Objects.Others;
using Asistencia.DataTypes.Petitions.Responses;
using Microsoft.Extensions.Configuration;
using Asistencia.DataAccess;
using Asistencia.BusinessLayer.Utility;
using Asistencia.DataTypes.Objects.Lists;
using System.Collections.Generic;
using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Petitions.Requests;
using System.Threading.Tasks;
using Asistencia.DataTypes.Objects.Filters;

namespace Asistencia.BusinessLayer
{
    public class SucursalConfiguracionLogic
    {
        private readonly SucursalConfiguracionData _baseData;

        public SucursalConfiguracionLogic(IConfiguration configuration)
        {
            _baseData = new SucursalConfiguracionData(configuration);
        }

        //public async Task<Response<int>> Insert(SucursalConfiguracionRequest request)
        //{
        //    Marcador objMarcador;
        //    int newId;

        //    objMarcador = request.marcador;

        //    #region Validaciones

        //    #endregion

        //    newId = await _baseData.Insert(objMarcador);

        //    return Functions.ResponseGeneric(newId);
        //}

        public Response<SucursalConfiguracionResponse> List(SucursalConfiguracionRequest request)
        {
            Response<SucursalConfiguracionResponse> response;
            SucursalConfiguracionFilter filter;
            List<SucursalConfiguracionList> list;

            filter = request.FilterSucursalConfiguracion;

            list = _baseData.List(filter);

            response = new Response<SucursalConfiguracionResponse>
            {
                IsCorrect = true,
                Value = new SucursalConfiguracionResponse
                {
                    ListSucursalConfiguracion = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

    }
}
