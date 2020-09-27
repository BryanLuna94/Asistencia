using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Others;
using Asistencia.DataTypes.Petitions.Responses;
using Asistencia.DataTypes.Petitions.Requests;
using Microsoft.Extensions.Configuration;
using Asistencia.DataAccess;
using System.Threading.Tasks;
using Asistencia.BusinessLayer.Utility;
using Asistencia.DataTypes.Objects.Lists;
using System.Collections.Generic;
using Asistencia.DataTypes.Objects.Filters;
using System;

namespace Asistencia.BusinessLayer
{
    public class UserLogic
    {
        private readonly UserData _userData;

        public UserLogic(IConfiguration configuration)
        {
            _userData = new UserData(configuration);
        }

        #region METODOS

        public Response<LoginResponse> Login(LoginRequest request)
        {
            Response<LoginResponse> response;
            UserDataType objUser;

            objUser = _userData.Login(request.Acceso, request.Clave);

            if (objUser == null)
            {
                return new Response<LoginResponse> { IsCorrect = false, Status = Constants.StatusWebApi.USER_INCORRECT };
            }

            response = new Response<LoginResponse>
            {
                IsCorrect = true,
                Value = new LoginResponse
                {
                    Usuario = objUser
                },
                Status = Constants.StatusWebApi.OK
            };

            return response;
        }

        public Response<UserResponse> List(UserRequest request)
        {
            Response<UserResponse> response;
            UserFilter filter;
            List<UserList> list;

            filter = request.FilterUser;

            list = _userData.List(filter);

            response = new Response<UserResponse>
            {
                IsCorrect = true,
                Value = new UserResponse
                {
                    ListUser = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

        public Response<UserResponse> Select(int pId)
        {
            Response<UserResponse> response;
            UserDataType objUser;

            objUser = _userData.Select(pId);

            response = new Response<UserResponse>
            {
                IsCorrect = true,
                Value = new UserResponse
                {
                    ObjectUser = objUser
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

        public async Task<Response<int>> Insert(UserRequest request)
        {
            UserDataType objUser;
            int newId;

            objUser = request.ObjectUser;

            #region Validaciones

            if (_userData.ValidateExists(objUser))
            {
                return new Response<int> { IsCorrect = false, Status = Constants.StatusWebApi.ITEM_EXISTS };
            }

            #endregion

            newId = await _userData.Insert(objUser);

            return Functions.ResponseGeneric(newId);
        }

        public async Task<Response<int>> Update(string pId, UserRequest request)
        {
            UserDataType objUser;
            UserDataType objUserOld;
            int result;
            int userId;

            objUser = request.ObjectUser;
            userId = Convert.ToInt32(pId);
            objUser.UserId = userId;
            objUserOld = _userData.Select(userId);

            #region Validaciones

            if (objUser.UserName != objUserOld.UserName && _userData.ValidateExists(objUser))
            {
                return new Response<int> { IsCorrect = false, Status = Constants.StatusWebApi.ITEM_EXISTS };
            }

            #endregion

            result = await _userData.Update(objUser);

            return Functions.ResponseGeneric(result);
        }

        public async Task<Response<int>> Disable(string pId, string pUserId)
        {
            int result;

            result = await _userData.UpdateState(pId, Constants.StatusItem.ITEM_DISABLE, pUserId);

            return Functions.ResponseGeneric(result);

        }

        #endregion

    }
}
