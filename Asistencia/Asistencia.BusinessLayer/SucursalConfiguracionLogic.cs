using Asistencia.DataTypes.Objects.Others;
using Asistencia.DataTypes.Petitions.Responses;
using Microsoft.Extensions.Configuration;
using Asistencia.DataAccess;
using Asistencia.BusinessLayer.Utility;
using Asistencia.DataTypes.Objects.Lists;
using System.Collections.Generic;
using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Petitions.Requests;
using System.Threading.Tasks;
using Asistencia.DataTypes.Objects.Filters;
using System;

namespace Asistencia.BusinessLayer
{
    public class SucursalConfiguracionLogic
    {
        private readonly SucursalConfiguracionData _baseData;

        public SucursalConfiguracionLogic(IConfiguration configuration)
        {
            _baseData = new SucursalConfiguracionData(configuration);
        }

        public Response<SucursalConfiguracionResponse> Select(int pId)
        {
            Response<SucursalConfiguracionResponse> response;
            SucursalConfiguracion objSucursalConfiguracion;

            objSucursalConfiguracion = _baseData.Select(pId);

            response = new Response<SucursalConfiguracionResponse>
            {
                IsCorrect = true,
                Value = new SucursalConfiguracionResponse
                {
                    ObjectSucursalConfiguracion = objSucursalConfiguracion
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

        public async Task<Response<int>> Insert(SucursalConfiguracionRequest request)
        {
            SucursalConfiguracion objSucursalConfiguracion;
            int newId;

            objSucursalConfiguracion = request.sucursalConfiguracion;

            #region Validaciones

            #endregion

            newId = await _baseData.Insert(objSucursalConfiguracion);

            return Functions.ResponseGeneric(newId);
        }

        public async Task<Response<int>> Update(string pId, SucursalConfiguracionRequest request)
        {
            SucursalConfiguracion objSucursalConfiguracion;
            SucursalConfiguracion objSucursalConfiguracionOld;
            int result;
            int SucursalConfiguracionId;

            objSucursalConfiguracion = request.sucursalConfiguracion;
            //SucursalConfiguracionId = Convert.ToInt32(pId);
            //objSucursalConfiguracion.id = SucursalConfiguracionId;
            //objSucursalConfiguracionOld = _baseData.Select(userId);

            //#region Validaciones

            //if (objUser.UserName != objUserOld.UserName && _userData.ValidateExists(objUser))
            //{
            //    return new Response<int> { IsCorrect = false, Status = Constantes.StatusWebApi.ITEM_EXISTS };
            //}

            //#endregion

            result = await _baseData.Update(objSucursalConfiguracion);

            return Functions.ResponseGeneric(result);
        }


        public Response<SucursalConfiguracionResponse> List(SucursalConfiguracionRequest request)
        {
            Response<SucursalConfiguracionResponse> response;
            SucursalConfiguracionFilter filter;
            List<SucursalConfiguracionList> list;

            filter = request.FilterSucursalConfiguracion;

            list = _baseData.List(filter);

            response = new Response<SucursalConfiguracionResponse>
            {
                IsCorrect = true,
                Value = new SucursalConfiguracionResponse
                {
                    ListSucursalConfiguracion = list
                },
                Status = Constants.StatusWebApi.OK,
            };

            return response;
        }

    }
}
