using System;

namespace Asistencia.DataTypes.Objects.Entities
{
    public class AuditDataType
    {
        public DateTime CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string CreateUserId { get; set; }
        public string UpdateUserId { get; set; }
    }
}
