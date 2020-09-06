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
    public class SubAreaLogic
    {
        private readonly SubAreaData _baseData;

        public SubAreaLogic(IConfiguration configuration)
        {
            _baseData = new SubAreaData(configuration);
        }


        public Response<SubAreaResponse> List(SubAreaRequest request)
        {
            Response<SubAreaResponse> response;
            SubAreaFilter filter;
            List<SubAreaList> list;

            filter = request.FilterSubArea;

            list = _baseData.List(filter);

            response = new Response<SubAreaResponse>
            {
                IsCorrect = true,
                Value = new SubAreaResponse
                {
                    ListSubArea = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

    }
}
