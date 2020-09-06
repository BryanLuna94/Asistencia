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
    public class EmpresaLogic
    {
        private readonly EmpresaData _baseData;

        public EmpresaLogic(IConfiguration configuration)
        {
            _baseData = new EmpresaData(configuration);
        }


        public Response<EmpresaResponse> List()
        {
            Response<EmpresaResponse> response;
            
            List<EmpresaList> list;

            list = _baseData.List();

            response = new Response<EmpresaResponse>
            {
                IsCorrect = true,
                Value = new EmpresaResponse
                {
                    ListEmpresa = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

    }
}
