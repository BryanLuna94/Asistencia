using Asistencia.DataTypes.Objects.Entities;

using System.Collections.Generic;

namespace Asistencia.DataTypes.Petitions.Responses
{
    public class EmpleadoResponse
    {
        public Empleado Empleado { get; set; }
        public List<Empleado> ListEmpleado { get; set; }
        public string Token { get; set; }
    }
}
