using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Filters;

namespace Asistencia.DataTypes.Petitions.Requests
{
    public class SucursalConfiguracionRequest
    {
        public SucursalConfiguracion sucursalConfiguracion { get; set; }
        public SucursalConfiguracionFilter FilterSucursalConfiguracion { get; set; }
    }
}
