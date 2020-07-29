using Asistencia.DataTypes.Objects.Others;
using Asistencia.DataTypes.Petitions.Responses;
using Microsoft.Extensions.Configuration;
using Asistencia.DataAccess;
using Asistencia.BusinessLayer.Utility;
using Asistencia.DataTypes.Objects.Lists;
using System.Collections.Generic;

namespace Asistencia.BusinessLayer
{
    public class BaseLogic
    {
        private readonly BaseData _baseData;

        public BaseLogic(IConfiguration configuration)
        {
            _baseData = new BaseData(configuration);
        }
    }
}
