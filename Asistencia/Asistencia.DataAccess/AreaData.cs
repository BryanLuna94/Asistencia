using Asistencia.DataAccess.Connection;
using Asistencia.DataAccess.Utility;
using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Filters;
using Asistencia.DataTypes.Objects.Lists;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Asistencia.DataAccess
{
    public class AreaData
    {
        private readonly GetConnection _connection;

        public AreaData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }

        #region METODOS


        public List<AreaList> List(AreaFilter pFilter)
        {
            List<AreaList> List = new List<AreaList>();

            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_Area_List", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@com_codigo", SqlDbType.VarChar).Value = pFilter.com_codigo;
                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            List.Add(new AreaList
                            {
                                are_codigo = DataReader.GetStringValue(dr, "ARE_CODIGO"),
                                are_descripcion = DataReader.GetStringValue(dr, "ARE_DESCRIPCION"),
                              
                            });
                        }
                    }
                }
                if (con.State == ConnectionState.Open) { con.Close(); }
            }

            return List;
        }

        #endregion

    }
}
