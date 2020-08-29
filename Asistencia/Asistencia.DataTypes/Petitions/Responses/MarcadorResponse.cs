using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Lists;
using System.Collections.Generic;

namespace Asistencia.DataTypes.Petitions.Responses
{
    public class MarcadorResponse
    {
        public List<MarcadorList> ListMarcador { get; set; }
        public Marcador ObjectMarcador { get; set; }
    }
}
