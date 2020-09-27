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
    public class UserData
    {
        private readonly GetConnection _connection;

        public UserData(IConfiguration configuration)
        {
            _connection = new GetConnection(configuration);
        }

        #region METODOS

        public UserDataType Login(string pAccess, string pPassword)
        {
            using (SqlConnection con = _connection.DBPLANILLA())
            {
                if (con.State != ConnectionState.Open) { con.Open(); }

                using (SqlCommand cmd = new SqlCommand("usp_tbl_User_Login", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@pUserName", SqlDbType.VarChar).Value = pAccess;
                    cmd.Parameters.Add("@pUserPassword", SqlDbType.VarChar).Value = pPassword;

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            return new UserDataType
                            {
                                cod_user = Convert.ToString(dr["Cod_User"]),
                                nom_user = Convert.ToString(dr["Nom_User"]),
                                pass_user = Convert.ToString(dr["Pass_User"]),
                                est_user = Convert.ToString(dr["Est_User"]),
                                nivel = Convert.ToString(dr["Nivel"]),
                                codi_sucursal = Convert.ToString(dr["Codi_Sucursal"]),
                            };
                        }
                    }
                }
                if (con.State == ConnectionState.Open) { con.Close(); }
            }

            return null;
        }

        public List<UserList> List(UserFilter pFilter)
        {
            List<UserList> List = new List<UserList>();

            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_User_List", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    //cmd.Parameters.Add("@pRoleId", SqlDbType.Int).Value = pFilter.RoleId;
                    cmd.Parameters.Add("@pUserName", SqlDbType.VarChar).Value = pFilter.UserName;
                    cmd.Parameters.Add("@pUserLastName", SqlDbType.VarChar).Value = pFilter.UserLastName;
                    cmd.Parameters.Add("@pUserFirstName", SqlDbType.VarChar).Value = pFilter.UserFirstName;
                    //cmd.Parameters.Add("@pCompanyId", SqlDbType.Int).Value = pFilter.CompanyId;
                    //cmd.Parameters.Add("@pRegionId", SqlDbType.Int).Value = pFilter.RegionId;
                    //cmd.Parameters.Add("@pCountryId", SqlDbType.Int).Value = pFilter.CountryId;

                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            List.Add(new UserList
                            {
                                //CompanyId = DataReader.GetIntValue(dr, "CompanyId"),
                                UserMail = DataReader.GetStringValue(dr, "UserMail"),
                                UserFirstName = DataReader.GetStringValue(dr, "UserFirstName"),
                                UserLastName = DataReader.GetStringValue(dr, "UserLastName"),
                                UserName = DataReader.GetStringValue(dr, "UserName"),
                                //CompanyName = DataReader.GetStringValue(dr, "CompanyName"),
                                //CreateDate = DataReader.GetDateTimeValue(dr, "CreateDate").Value,
                                //CreateUserId = DataReader.GetIntValue(dr, "CreateUserId"),
                                IsDisable = DataReader.GetBooleanValue(dr, "IsDisable"),
                                //RoleId = DataReader.GetIntValue(dr, "RoleId"),
                                //RoleName = DataReader.GetStringValue(dr, "RoleName"),
                                UpdateDate = DataReader.GetDateTimeValue(dr, "UpdateDate"),
                                UpdateUserId = DataReader.GetStringValue(dr, "UpdateUserId"),
                                UserId = DataReader.GetIntValue(dr, "UserId"),
                                //CountryName = DataReader.GetStringValue(dr, "CountryName"),
                                //RegionName = DataReader.GetStringValue(dr, "RegionName"),
                            });
                        }
                    }
                }
                if (con.State == ConnectionState.Open) { con.Close(); }
            }

            return List;
        }

        public UserDataType Select(int pId)
        {
            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_User_Select", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@pUserId", SqlDbType.Int).Value = pId;
                    if (con.State != ConnectionState.Open) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            return new UserDataType
                            {
                                UpdateUserId = DataReader.GetStringValue(dr, "UpdateUserId"),
                                UserId = DataReader.GetIntValue(dr, "UserId"),
                                CreateUserId = DataReader.GetStringValue(dr, "CreateUserId"),
                                CompanyId = DataReader.GetIntValue(dr, "CompanyId"),
                                UserMail = DataReader.GetStringValue(dr, "UserMail"),
                                CreateDate = DataReader.GetDateTimeValue(dr, "CreateDate").Value,
                                IsDisable = DataReader.GetBooleanValue(dr, "IsDisable"),
                                RoleId = DataReader.GetIntValue(dr, "RoleId"),
                                UpdateDate = DataReader.GetDateTimeValue(dr, "UpdateDate"),
                                UserFirstName = DataReader.GetStringValue(dr, "UserFirstName"),
                                UserLastName = DataReader.GetStringValue(dr, "UserLastName"),
                                UserName = DataReader.GetStringValue(dr, "UserName")
                            };
                        }
                    }
                }
                if (con.State == ConnectionState.Open) { con.Close(); }
            }

            return null;
        }

        public async Task<int> Insert(UserDataType pEntity)
        {
            using SqlConnection con = _connection.DBPLANILLA();
            SqlCommand cmd = new SqlCommand("usp_tbl_User_Insert", con)
            {
                CommandType = CommandType.StoredProcedure
            };
            //cmd.Parameters.Add("@pRoleId", SqlDbType.Int).Value = pEntity.RoleId;
            cmd.Parameters.Add("@pUserName", SqlDbType.VarChar).Value = pEntity.UserName;
            cmd.Parameters.Add("@pUserPassword", SqlDbType.VarChar).Value = pEntity.UserPassword;
            cmd.Parameters.Add("@pUserLastName", SqlDbType.VarChar).Value = pEntity.UserLastName;
            cmd.Parameters.Add("@pUserFirstName", SqlDbType.VarChar).Value = pEntity.UserFirstName;
            cmd.Parameters.Add("@pUserMail", SqlDbType.VarChar).Value = pEntity.UserMail;
            //cmd.Parameters.Add("@pCompanyId", SqlDbType.Int).Value = pEntity.CompanyId;
            //cmd.Parameters.Add("@pCreateUserId", SqlDbType.Int).Value = pEntity.CreateUserId;
            cmd.Parameters.Add("@pCreateUserId", SqlDbType.Int).Value = pEntity.CreateUserId;
            cmd.Parameters.Add("@pUserId", SqlDbType.Int).Value = 0;
            cmd.Parameters["@pUserId"].Direction = ParameterDirection.Output;
            if (con.State != ConnectionState.Open) { con.Open(); }
            await cmd.ExecuteNonQueryAsync();
            int newId = Convert.ToInt32(cmd.Parameters["@pUserId"].Value);
            if (con.State == ConnectionState.Open) { con.Close(); }
            return newId;
        }

        public async Task<int> Update(UserDataType pEntity)
        {
            using SqlConnection con = _connection.DBPLANILLA();
            SqlCommand cmd = new SqlCommand("usp_tbl_User_Update", con)
            {
                CommandType = CommandType.StoredProcedure
            };
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@pUserId", SqlDbType.Int).Value = pEntity.UserId;
            //cmd.Parameters.Add("@pRoleId", SqlDbType.Int).Value = pEntity.RoleId;
            cmd.Parameters.Add("@pUserName", SqlDbType.VarChar).Value = pEntity.UserName;
            cmd.Parameters.Add("@pUserLastName", SqlDbType.VarChar).Value = pEntity.UserLastName;
            cmd.Parameters.Add("@pUserFirstName", SqlDbType.VarChar).Value = pEntity.UserFirstName;
            cmd.Parameters.Add("@pUserMail", SqlDbType.VarChar).Value = pEntity.UserMail;
            //cmd.Parameters.Add("@pCompanyId", SqlDbType.Int).Value = pEntity.CompanyId;
            cmd.Parameters.Add("@pUpdateUserId", SqlDbType.Int).Value = pEntity.UpdateUserId;
            if (con.State != ConnectionState.Open) { con.Open(); }
            int rowsAffect = await cmd.ExecuteNonQueryAsync();
            if (con.State == ConnectionState.Open) { con.Close(); }
            return rowsAffect;
        }

        public async Task<int> UpdateState(string pId, bool pState, string pUpdateUserId)
        {
            using SqlConnection con = _connection.DBPLANILLA();
            SqlCommand cmd = new SqlCommand("usp_tbl_User_UpdateState", con)
            {
                CommandType = CommandType.StoredProcedure
            };
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@pUserId", SqlDbType.Int).Value = pId;
            cmd.Parameters.Add("@pIsDisable", SqlDbType.Bit).Value = !pState;
            cmd.Parameters.Add("@pUpdateUserId", SqlDbType.Int).Value = pUpdateUserId;
            if (con.State != ConnectionState.Open) { con.Open(); }
            int rowsAffect = await cmd.ExecuteNonQueryAsync();
            if (con.State == ConnectionState.Open) { con.Close(); }
            return rowsAffect;
        }

        public bool ValidateExists(UserDataType pEntity)
        {
            int result = 0;
            using (SqlConnection con = _connection.DBPLANILLA())
            {
                using (SqlCommand cmd = new SqlCommand("usp_tbl_User_ValidateExists", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@pUserName", SqlDbType.VarChar).Value = pEntity.UserName;
                    bool openConn = (con.State == ConnectionState.Open);
                    if (!openConn) { con.Open(); }

                    using (var dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            result = Convert.ToInt32(dr[0]);
                        }

                    }
                }
                if (con.State == ConnectionState.Open) { con.Close(); }
            }

            return (result > 0);
        }

        #endregion


    }
}
