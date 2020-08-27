using System;

namespace Asistencia.DataTypes.Objects.Entities
{
    public class Marcador
    {
		public int id { get; set; }
		public string emp_codigo { get; set; }
		public DateTime fecha_hora_marcador { get; set; }
		public decimal longitud { get; set; }
		public decimal latitud { get; set; }
	}
}
