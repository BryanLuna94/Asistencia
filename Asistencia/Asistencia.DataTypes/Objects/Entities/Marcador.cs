using System;

namespace Asistencia.DataTypes.Objects.Entities
{
    public class Marcador: AuditDataType
    {
		public int id { get; set; }
		public string emp_codigo { get; set; }
		public string nro_documento { get; set; }
		public string emp_nombre { get; set; }
		public DateTime fecha_hora_marcador { get; set; }
		public decimal longitud { get; set; }
		public decimal latitud { get; set; }
	}
}
