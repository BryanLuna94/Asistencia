﻿namespace Asistencia.DataTypes.Objects.Entities
{
    public class SucursalConfiguracion
    {
        public int id { get; set; }
        public string direccion_fisica { get; set; }
        public decimal latitud { get; set; }
        public decimal longitud { get; set; }
        public int distancia_metros_permitida { get; set; }
        public int distancia_metros_calculada { get; set; }


    }
}
