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
    public class SucursalData
    {
        private readonly GetConnection _connection;

        public SucursalData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }

        #region METODOS


        public List<SucursalList> List(SucursalFilter pFilter)
        {
            List<SucursalList> List = new List<SucursalList>();

            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_Sucursal_List", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@com_codigo", SqlDbType.VarChar).Value = pFilter.com_codigo;
                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            List.Add(new SucursalList
                            {
                                cod_ofi = DataReader.GetStringValue(dr, "COD_OFI"),
                                nom_ofi = DataReader.GetStringValue(dr, "NOM_OFI"),
                              
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
