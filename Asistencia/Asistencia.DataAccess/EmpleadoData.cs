using Asistencia.DataAccess.Connection;
using Asistencia.DataAccess.Utility;
using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Lists;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Asistencia.DataAccess
{
    public class EmpleadoData
    {
        private readonly GetConnection _connection;

        public EmpleadoData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }

        #region METODOS
        public Empleado ObtenerEmpleado(string nroDocumento)
        {
            using (SqlConnection con = _connection.DBPLANILLA())
            {
                if (con.State != ConnectionState.Open) { con.Open(); }

                using (SqlCommand cmd = new SqlCommand("usp_List_Empleado", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@emp_nrodocumento", SqlDbType.VarChar,30).Value = nroDocumento;

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            return new Empleado
                            {
                                emp_codigo = Convert.ToString(dr["Emp_codigo"]),
                                emp_tipo = Convert.ToString(dr["emp_tipo"]),
                                emp_nombre = Convert.ToString(dr["emp_nombre"]),
                                suc_codigo = Convert.ToString(dr["suc_codigo"]),
                                are_codigo = Convert.ToString(dr["are_codigo"]),
                                suc_nombre = Convert.ToString(dr["SUC_NOMBRE"]),
                                are_descripcion = Convert.ToString(dr["ARE_DESCRIPCION"]),
                                aresub_codigo = Convert.ToString(dr["ARESUB_CODIGO"]),
                                aresub_descripcion = Convert.ToString(dr["ARESUB_DESCRIPCION"]),
                            };
                        }
                    }
                }
                if (con.State == ConnectionState.Open) { con.Close(); }
            }

            return null;
        }
        #endregion

    }
}
