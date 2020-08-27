using Asistencia.DataTypes.Objects.Entities;

namespace Asistencia.DataTypes.Objects.Lists
{
    public class UserList : UserDataType
    {
        public string CompanyName { get; set; }
        public string CountryName { get; set; }
        public string RoleName { get; set; }
        public string RegionName { get; set; }
    }
}
