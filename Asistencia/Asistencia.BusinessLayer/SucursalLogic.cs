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
    public class SucursalLogic
    {
        private readonly SucursalData _baseData;

        public SucursalLogic(IConfiguration configuration)
        {
            _baseData = new SucursalData(configuration);
        }


        public Response<SucursalResponse> List(SucursalRequest request)
        {
            Response<SucursalResponse> response;
            SucursalFilter filter;
            List<SucursalList> list;

            filter = request.FilterSucursal;

            list = _baseData.List(filter);

            response = new Response<SucursalResponse>
            {
                IsCorrect = true,
                Value = new SucursalResponse
                {
                    ListSucursal = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

    }
}
