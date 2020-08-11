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
    }
}
