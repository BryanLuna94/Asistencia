namespace Asistencia.WebApi.Utility
{
    public class Constants
    {
        public static class RoutesApi
        {
            public const string LOGIN = "api/Autenticacion/Login";

            #region USUARIO

            public const string EMPLEADO_INSERT = "api/Empleado/InsertEmpleado";
            public const string EMPLEADO_UPDATE = "api/Empleado/UpdateEmpleado/{pId}";
            public const string EMPLEADO_DISABLE = "api/Empleado/DisableEmpleado/{pId}";
            public const string EMPLEADO_LIST = "api/Empleado/ListEmpleado";
            public const string EMPLEADO_SELECT = "api/Empleado/SelectEmpleado/{pId}";

            public const string MARCADOR_INSERT = "api/Marcador/InsertMarcador";
            public const string MARCADOR_UPDATE = "api/Marcador/UpdateMarcador/{pId}";
            public const string MARCADOR_DISABLE = "api/Marcador/DisableMarcador/{pId}";
            public const string MARCADOR_LIST = "api/Marcador/ListMarcador";
            public const string MARCADOR_SELECT = "api/Marcador/SelectMarcador/{pId}";

            #endregion
        }

        public enum NameClaim
        {
            JWT_IDUSER = 1
        }
    }
}
