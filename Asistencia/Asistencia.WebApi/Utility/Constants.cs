namespace Asistencia.WebApi.Utility
{
    public class Constants
    {
        public static class RoutesApi
        {
            public const string LOGIN = "api/Autenticacion/Login";

            #region USUARIO

            public const string USER_INSERT = "api/User/InsertUser";
            public const string USER_UPDATE = "api/User/UpdateUser/{pId}";
            public const string USER_DISABLE = "api/User/DisableUser/{pId}";
            public const string USER_LIST = "api/User/ListUser";
            public const string USER_SELECT = "api/User/SelectUser/{pId}";

            #endregion

            #region BASE

            public const string ROLE_AUTOCOMPLETE = "api/Base/ListRoleAutocomplete/{pValue?}";
            public const string COUNTRY_AUTOCOMPLETE = "api/Base/ListCountryAutocomplete/{pValue?}";
            public const string COMPANY_AUTOCOMPLETE = "api/Base/ListCompanyAutocomplete/{pValue?}";
            public const string REGION_AUTOCOMPLETE = "api/Base/ListRegionAutocomplete/{pValue?}";

            #endregion

            #region EMPLEADO
            public const string EMPLEADO_INSERT = "api/Empleado/InsertEmpleado";
            public const string EMPLEADO_UPDATE = "api/Empleado/UpdateEmpleado/{pId}";
            public const string EMPLEADO_DISABLE = "api/Empleado/DisableEmpleado/{pId}";
            public const string EMPLEADO_LIST = "api/Empleado/ListEmpleado";
            public const string EMPLEADO_SELECT = "api/Empleado/SelectEmpleado/{pId}";
            #endregion

            #region MARCADOR
            public const string MARCADOR_INSERT = "api/Marcador/InsertMarcador";
            public const string MARCADOR_UPDATE = "api/Marcador/UpdateMarcador/{pId}";
            public const string MARCADOR_DISABLE = "api/Marcador/DisableMarcador/{pId}";
            public const string MARCADOR_LIST = "api/Marcador/ListMarcador";
            public const string MARCADOR_SELECT = "api/Marcador/SelectMarcador/{pId}";
            #endregion

            #region EMPRESA
            public const string EMPRESA_LIST = "api/Empresa/ListEmpresa";
            public const string SUCURSAL_LIST = "api/Sucursal/ListSucursal";
            public const string AREA_LIST = "api/Area/ListArea";
            public const string SUBAREA_LIST = "api/SubArea/ListSubArea";
            public const string PUNTODEVENTA_LIST = "api/PuntodeVenta/ListPuntodeVenta";
            #endregion

            #region SUCURSAL CONFIGURACION
            public const string SUCURSALCONFIGURACION_INSERT = "api/SucursalConfiguracion/InsertSucursalConfiguracion";
            public const string SUCURSALCONFIGURACION_UPDATE = "api/SucursalConfiguracion/UpdateSucursalConfiguracion/{pId}";
            public const string SUCURSALCONFIGURACION_LIST = "api/SucursalConfiguracion/ListSucursalConfiguracion";
            public const string SUCURSALCONFIGURACION_SELECT = "api/SucursalConfiguracion/SelectSucursalConfiguracion/{pId}";
            #endregion
        }

        public enum NameClaim
        {
            JWT_IDUSER = 1
        }
    }
}
