using Asistencia.DataTypes.Objects.Entities;
using System.Collections.Generic;

namespace Asistencia.DataTypes.Petitions.Responses
{
    public class LoginResponse
    {
        public UserDataType Usuario { get; set; }
        public List<int> ObjectOptionsRole { get; set; }
        public string Token { get; set; }
    }
}
