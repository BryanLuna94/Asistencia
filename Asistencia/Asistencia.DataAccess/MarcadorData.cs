﻿using Asistencia.DataAccess.Connection;
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

        public async Task<int> Update(Marcador marcador)
        {
            using SqlConnection con = _connection.DBPLANILLA();
            SqlCommand cmd = new SqlCommand("usp_tbl_Marcador_Update", con)
            {
                CommandType = CommandType.StoredProcedure
            };
            cmd.Parameters.Add("@id", SqlDbType.Int).Value = marcador.id;
            cmd.Parameters.Add("@fecha_hora_marcador", SqlDbType.DateTime).Value = marcador.fecha_hora_marcador;
            cmd.Parameters.Add("@pUpdateUserId", SqlDbType.VarChar).Value = marcador.UpdateUserId;
            if (con.State != ConnectionState.Open) { con.Open(); }
            int rowsAffect = await cmd.ExecuteNonQueryAsync();
            if (con.State == ConnectionState.Open) { con.Close(); }
            return rowsAffect;
        }


        public List<MarcadorList> List(MarcadorFilter pFilter)
        {
            List<MarcadorList> List = new List<MarcadorList>();

            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_Marcador_List", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@emp_codigo", SqlDbType.VarChar).Value = pFilter.emp_codigo;
                    cmd.Parameters.Add("@nro_documento", SqlDbType.VarChar).Value = pFilter.nro_documento;

                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            List.Add(new MarcadorList
                            {
                                id = DataReader.GetIntValue(dr, "Id"),
                                emp_codigo = DataReader.GetStringValue(dr, "Emp_codigo"),
                                nro_documento = DataReader.GetStringValue(dr, "nro_documento"),
                                emp_nombre = DataReader.GetStringValue(dr, "emp_nombre"),
                                fecha_Hora_Actual = DataReader.GetDateTimeValue(dr, "Fecha_Hora_Actual").ToString(),
                                fecha_Hora_Inicial = DataReader.GetDateTimeValue(dr, "Fecha_Hora_Inicial").ToString(),
                                fecha_Hora_Final = DataReader.GetDateTimeValue(dr, "Fecha_Hora_Final").ToString(),
                                fecha_Hora_Inicial_Manual = DataReader.GetDateTimeValue(dr, "Fecha_Hora_Inicial_Manual").ToString(),
                                longitud = DataReader.GetDecimalValue(dr, "Longitud"),
                                latitud = DataReader.GetDecimalValue(dr, "Latitud"),
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
