using Asistencia.DataTypes.Objects.Entities;
using System;

namespace Asistencia.DataTypes.Objects.Lists
{
    public class MarcadorList : Marcador
    {
        public DateTime? fecha_Hora_Actual { get; set; }
        public DateTime? fecha_Hora_Inicial { get; set; }
        public DateTime? fecha_Hora_Final { get; set; }
        public DateTime? fecha_Hora_Inicial_Manual { get; set; }
    }
}
