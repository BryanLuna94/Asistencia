namespace Asistencia.WebApi.Utility
{
    public class Constants
    {
        public static class RoutesApi
        {
            public const string LOGIN = "api/Autenticacion/Login";

            #region USUARIO

            public const string MARCADOR_INSERT = "api/Empleado/InsertEmpleado";
            public const string MARCADOR_UPDATE = "api/Empleado/UpdateEmpleado/{pId}";
            public const string MARCADOR_DISABLE = "api/Empleado/DisableEmpleado/{pId}";
            public const string MARCADOR_LIST = "api/Empleado/ListMarcador";
            public const string MARCADOR_SELECT = "api/Empleado/SelectEmpleado/{pId}";

            #endregion
        }

        public enum NameClaim
        {
            JWT_IDUSER = 1
        }
    }
}
