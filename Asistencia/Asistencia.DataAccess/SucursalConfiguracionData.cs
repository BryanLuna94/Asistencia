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
    public class SucursalConfiguracionData
    {
        private readonly GetConnection _connection;

        public SucursalConfiguracionData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }

        #region METODOS

        public SucursalConfiguracion Select(int pId)
        {
            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_SucursalConfiguracion_Select", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@Id", SqlDbType.Int).Value = pId;
                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            return new SucursalConfiguracion
                            {
                                id = DataReader.GetIntValue(dr, "Id"),
                                codigo_sucursal = DataReader.GetStringValue(dr, "Codigo_Sucursal"),
                                descripcion_sucursal = DataReader.GetStringValue(dr, "Descripcion_Sucursal"),
                                direccion_fisica = DataReader.GetStringValue(dr, "Direccion_Fisica"),
                                latitud = DataReader.GetDecimalValue(dr, "Latitud"),
                                longitud = DataReader.GetDecimalValue(dr, "Longitud"),
                                distancia_metros_permitida = DataReader.GetIntValue(dr, "Distancia_Metros_Permitida"),
                            };
                        }
                    }
                }
                if (con.State == ConnectionState.Open) { con.Close(); }
            }

            return null;
        }

        public async Task<int> Insert(SucursalConfiguracion sucursalConfiguracion)
        {
            using SqlConnection con = _connection.DBPLANILLA();
            SqlCommand cmd = new SqlCommand("usp_tbl_SucursalConfiguracion_Insert", con)
            {
                CommandType = CommandType.StoredProcedure
            };
            cmd.Parameters.Add("@codigo_sucursal", SqlDbType.VarChar).Value = sucursalConfiguracion.codigo_sucursal;
            cmd.Parameters.Add("@direccion_fisica", SqlDbType.VarChar).Value = sucursalConfiguracion.direccion_fisica;
            cmd.Parameters.Add("@latitud", SqlDbType.Decimal).Value = sucursalConfiguracion.latitud;
            cmd.Parameters.Add("@longitud", SqlDbType.Decimal).Value = sucursalConfiguracion.longitud;
            cmd.Parameters.Add("@distancia_metros_permitida", SqlDbType.Int).Value = sucursalConfiguracion.distancia_metros_permitida;
            cmd.Parameters.Add("@pCreateUserId", SqlDbType.VarChar).Value = sucursalConfiguracion.UpdateUserId;
            cmd.Parameters.Add("@id", SqlDbType.Int).Value = 0;
            cmd.Parameters["@id"].Direction = ParameterDirection.Output;
            if (con.State != ConnectionState.Open) { con.Open(); }
            await cmd.ExecuteNonQueryAsync();
            int newId = Convert.ToInt32(cmd.Parameters["@id"].Value);
            if (con.State == ConnectionState.Open) { con.Close(); }
            return newId;
        }

        public async Task<int> Update(SucursalConfiguracion sucursalConfiguracion)
        {
            using SqlConnection con = _connection.DBPLANILLA();
            SqlCommand cmd = new SqlCommand("usp_tbl_SucursalConfiguracion_Update", con)
            {
                CommandType = CommandType.StoredProcedure
            };
            //cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@id", SqlDbType.Int).Value = sucursalConfiguracion.id;
            cmd.Parameters.Add("@codigo_sucursal", SqlDbType.VarChar).Value = sucursalConfiguracion.codigo_sucursal;
            cmd.Parameters.Add("@direccion_fisica", SqlDbType.VarChar).Value = sucursalConfiguracion.direccion_fisica;
            cmd.Parameters.Add("@latitud", SqlDbType.Decimal).Value = sucursalConfiguracion.latitud;
            cmd.Parameters.Add("@longitud", SqlDbType.Decimal).Value = sucursalConfiguracion.longitud;
            cmd.Parameters.Add("@distancia_metros_permitida", SqlDbType.Int).Value = sucursalConfiguracion.distancia_metros_permitida;
            cmd.Parameters.Add("@pUpdateUserId", SqlDbType.VarChar).Value = sucursalConfiguracion.UpdateUserId; 
            if (con.State != ConnectionState.Open) { con.Open(); }
            int rowsAffect = await cmd.ExecuteNonQueryAsync();
            if (con.State == ConnectionState.Open) { con.Close(); }
            return rowsAffect;
        }

        public List<SucursalConfiguracionList> List(SucursalConfiguracionFilter pFilter)
        {
            List<SucursalConfiguracionList> List = new List<SucursalConfiguracionList>();

            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_SucursalConfiguracion_List", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@codigo_sucursal", SqlDbType.VarChar).Value = pFilter.codigo_sucursal;

                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            List.Add(new SucursalConfiguracionList
                            {
                                id = DataReader.GetIntValue(dr, "Id"),
                                codigo_sucursal = DataReader.GetStringValue(dr, "Codigo_Sucursal"),
                                descripcion_sucursal = DataReader.GetStringValue(dr, "Descripcion_Sucursal"),
                                direccion_fisica = DataReader.GetStringValue(dr, "Direccion_Fisica"),
                                latitud = DataReader.GetDecimalValue(dr, "Latitud"),
                                longitud = DataReader.GetDecimalValue(dr, "Longitud"),
                                distancia_metros_permitida = DataReader.GetIntValue(dr, "Distancia_Metros_Permitida"),
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
