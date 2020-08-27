namespace Asistencia.DataTypes.Objects.Filters
{
    public class UserFilter
    {
        public int RoleId { get; set; }
        public string UserName { get; set; }
        public string UserLastName { get; set; }
        public string UserFirstName { get; set; }
        public int CountryId { get; set; }
        public int RegionId { get; set; }
        public int CompanyId { get; set; }
    }
}
