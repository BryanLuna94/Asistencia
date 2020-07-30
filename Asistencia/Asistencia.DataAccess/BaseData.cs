using Asistencia.DataAccess.Connection;
using Asistencia.DataAccess.Utility;
using Asistencia.DataTypes.Objects.Lists;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Asistencia.DataAccess
{
    public class BaseData
    {
        private readonly GetConnection _connection;

        public BaseData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }
    }
}
