namespace Asistencia.DataTypes.Objects.Entities
{
    public class UserDataType : AuditDataType
    {

        public string cod_user { get; set; }
        public string nom_user { get; set; }
        public string pass_user { get; set; }
        public string est_user { get; set; }
        public string nivel { get; set; }
        public string codi_sucursal { get; set; }


        public int UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserMail { get; set; }
        public int RoleId { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public string UserLastName { get; set; }
        public int CompanyId { get; set; }
        public bool IsDisable { get; set; }

    }
}
