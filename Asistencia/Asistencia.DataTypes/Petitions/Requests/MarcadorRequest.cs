using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Filters;

namespace Asistencia.DataTypes.Petitions.Requests
{
    public class MarcadorRequest
    {
        public Marcador marcador { get; set; }
        public MarcadorFilter FilterMarcador { get; set; }
    }
}
