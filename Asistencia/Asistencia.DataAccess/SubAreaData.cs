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
    public class SubAreaData
    {
        private readonly GetConnection _connection;

        public SubAreaData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }

        #region METODOS


        public List<SubAreaList> List(SubAreaFilter pFilter)
        {
            List<SubAreaList> List = new List<SubAreaList>();

            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_SubArea_List", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@com_codigo", SqlDbType.VarChar).Value = pFilter.com_codigo;
                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            List.Add(new SubAreaList
                            {
                                aresub_codigo = DataReader.GetStringValue(dr, "ARESUB_CODIGO"),
                                aresub_descripcion = DataReader.GetStringValue(dr, "ARESUB_DESCRIPCION"),
                              
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
