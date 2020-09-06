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
    public class AreaLogic
    {
        private readonly AreaData _baseData;

        public AreaLogic(IConfiguration configuration)
        {
            _baseData = new AreaData(configuration);
        }


        public Response<AreaResponse> List(AreaRequest request)
        {
            Response<AreaResponse> response;
            AreaFilter filter;
            List<AreaList> list;

            filter = request.FilterArea;

            list = _baseData.List(filter);

            response = new Response<AreaResponse>
            {
                IsCorrect = true,
                Value = new AreaResponse
                {
                    ListArea = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

    }
}
