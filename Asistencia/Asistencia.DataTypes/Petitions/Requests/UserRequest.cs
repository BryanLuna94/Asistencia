using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Filters;

namespace Asistencia.DataTypes.Petitions.Requests
{
    public class UserRequest
    {
        public UserDataType ObjectUser { get; set; }
        public UserFilter FilterUser { get; set; }
    }
}
