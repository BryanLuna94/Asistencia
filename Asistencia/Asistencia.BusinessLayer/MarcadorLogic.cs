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
    public class MarcadorLogic
    {
        private readonly MarcadorData _baseData;

        public MarcadorLogic(IConfiguration configuration)
        {
            _baseData = new MarcadorData(configuration);
        }

        public async Task<Response<int>> Insert(MarcadorRequest request)
        {
            Marcador objMarcador;
            int newId;

            objMarcador = request.marcador;

            #region Validaciones

            #endregion

            newId = await _baseData.Insert(objMarcador);

            return Functions.ResponseGeneric(newId);
        }

        public async Task<Response<int>> Update(string pId, MarcadorRequest request)
        {
            Marcador objMarcador;
            int result;
            objMarcador = request.marcador;
            result = await _baseData.Update(objMarcador);
            return Functions.ResponseGeneric(result);
        }

        public Response<MarcadorResponse> List(MarcadorRequest request)
        {
            Response<MarcadorResponse> response;
            MarcadorFilter filter;
            List<MarcadorList> list;

            filter = request.FilterMarcador;

            list = _baseData.List(filter);

            response = new Response<MarcadorResponse>
            {
                IsCorrect = true,
                Value = new MarcadorResponse
                {
                    ListMarcador = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

    }
}
