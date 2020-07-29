using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace Asistencia.DataAccess.Connection
{
    public class GetConnection
    {
        readonly IConfiguration _configuration;

        public GetConnection(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public SqlConnection DBPLANILLA()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DBPLANILLA"));
            return con;
        }
    }
}
