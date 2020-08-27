using System.ComponentModel.DataAnnotations;

namespace Asistencia.DataTypes.Petitions.Requests
{
    public class LoginRequest
    {
        [Required]
        public string Acceso { get; set; }
        public string Clave { get; set; }
        [Required]
        public string MinutosExpiracion { get; set; }
    }
}
