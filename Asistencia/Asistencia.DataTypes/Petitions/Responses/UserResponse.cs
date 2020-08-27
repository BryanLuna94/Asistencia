using Asistencia.DataTypes.Objects.Entities;
using Asistencia.DataTypes.Objects.Lists;
using System.Collections.Generic;

namespace Asistencia.DataTypes.Petitions.Responses
{
    public class UserResponse
    {
        public List<UserList> ListUser { get; set; }
        public UserDataType ObjectUser { get; set; }
    }
}
