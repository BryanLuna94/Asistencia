using Asistencia.DataTypes.Objects.Others;
using Asistencia.DataTypes.Petitions.Responses;
using Microsoft.Extensions.Configuration;
using Asistencia.DataAccess;
using Asistencia.BusinessLayer.Utility;
using Asistencia.DataTypes.Objects.Lists;
using System.Collections.Generic;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.DataTypes.Objects.Filters;

namespace Asistencia.BusinessLayer
{
    public class PuntodeVentaLogic
    {
        private readonly PuntodeVentaData _baseData;

        public PuntodeVentaLogic(IConfiguration configuration)
        {
            _baseData = new PuntodeVentaData(configuration);
        }


        public Response<PuntodeVentaResponse> List(PuntodeVentaRequest request)
        {
            Response<PuntodeVentaResponse> response;
            PuntodeVentaFilter filter;
            List<PuntodeVentaList> list;

            filter = request.FilterPuntodeVenta;

            list = _baseData.List(filter);

            response = new Response<PuntodeVentaResponse>
            {
                IsCorrect = true,
                Value = new PuntodeVentaResponse
                {
                    ListPuntodeVenta = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

    }
}
