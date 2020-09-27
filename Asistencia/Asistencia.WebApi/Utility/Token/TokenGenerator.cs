using Asistencia.DataTypes.Petitions.Responses;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Asistencia.WebApi.Utility.Token
{
    public class TokenGenerator
    {
        private readonly IConfiguration _config;
        public TokenGenerator(IConfiguration config)
        {
            _config = config;
        }

        public string GenerateJSONWebToken(LoginResponse user, string expiresIn)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Usuario.nom_user),
                new Claim(Constants.NameClaim.JWT_IDUSER.ToString(), user.Usuario.cod_user.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, ""),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Issuer"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(Convert.ToDouble(expiresIn)),
                signingCredentials: credentials
            );

            var encodeToken = new JwtSecurityTokenHandler().WriteToken(token);
            return encodeToken;
        }
    }
}
