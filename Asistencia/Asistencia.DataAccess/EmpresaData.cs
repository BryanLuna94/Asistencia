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
    public class EmpresaData
    {
        private readonly GetConnection _connection;

        public EmpresaData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }

        #region METODOS


        public List<EmpresaList> List()
        {
            List<EmpresaList> List = new List<EmpresaList>();

            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_Empresa_List ", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            List.Add(new EmpresaList
                            {
                                com_codigo = DataReader.GetStringValue(dr, "COM_CODIGO"),
                                com_descripcion = DataReader.GetStringValue(dr, "COM_DESCRIPCION"),
                                com_nit = DataReader.GetStringValue(dr, "COM_NIT").ToString(),
                                com_direccion1 = DataReader.GetStringValue(dr, "COM_DIRECCION1").ToString(),
                                com_ano = DataReader.GetStringValue(dr, "Com_Ano").ToString(),
                                com_tipo = DataReader.GetStringValue(dr, "Com_Tipo").ToString(),
                                com_departamento = DataReader.GetStringValue(dr, "Com_Departamento"),
                                com_representante = DataReader.GetStringValue(dr, "Com_Representante"),
                                logo = DataReader.GetStringValue(dr, "logo"),
                                firma = DataReader.GetStringValue(dr, "Firma"),
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
