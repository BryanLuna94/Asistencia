using Asistencia.DataAccess.Connection;
using Asistencia.DataAccess.Utility;
using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Lists;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Asistencia.DataAccess
{
    public class MarcadorData
    {
        private readonly GetConnection _connection;

        public MarcadorData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }

        #region METODOS
        public async Task<int> Insert(Marcador marcador)
        {
            using SqlConnection con = _connection.DBPLANILLA();
            SqlCommand cmd = new SqlCommand("usp_tbl_Marcador_Insert", con)
            {
                CommandType = CommandType.StoredProcedure
            };
            cmd.Parameters.Add("@emp_codigo", SqlDbType.VarChar).Value = marcador.emp_codigo;
            cmd.Parameters.Add("@fecha_hora_marcador", SqlDbType.DateTime).Value = marcador.fecha_hora_marcador;
            cmd.Parameters.Add("@longitud", SqlDbType.Decimal).Value = marcador.longitud;
            cmd.Parameters.Add("@latitud", SqlDbType.Decimal).Value = marcador.latitud;
            cmd.Parameters.Add("@id", SqlDbType.Int).Value = 0;
            cmd.Parameters["@id"].Direction = ParameterDirection.Output;
            if (con.State != ConnectionState.Open) { con.Open(); }
            await cmd.ExecuteNonQueryAsync();
            int newId = Convert.ToInt32(cmd.Parameters["@id"].Value);
            if (con.State == ConnectionState.Open) { con.Close(); }
            return newId;
        }
        #endregion

    }
}
