using Asistencia.DataTypes.Objects.Others;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Asistencia.BusinessLayer.Utility
{
    public static class Functions
    {
        public static Response<int> ResponseGeneric(int valor)
        {
            return new Response<int>(true, valor, Constants.StatusWebApi.OK);
        }

        public static async Task<string> SaveFile(string path, IFormFile file)
        {
            string localPath = path;
            string fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            string localFilePath = Path.Combine(localPath, fileName);

            using var stream = File.Create(localFilePath);
            await file.CopyToAsync(stream);
            return fileName;
        }

        public static string SaveImageFromBase64(string path, string ImgStr)
        {
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            string fileName = Guid.NewGuid().ToString() + GetExtensionFromBase64String(ImgStr);
            string imgPath = Path.Combine(path, fileName);

            byte[] imageBytes = Convert.FromBase64String(GetBase64FromString(ImgStr));
            File.WriteAllBytes(imgPath, imageBytes);

            return fileName;
        }

        public static string SaveImageFromBase64IntoApi(string path, string ImgStr)
        {
            path = Path.Combine(Directory.GetCurrentDirectory(), Constants.Application.PATH_IMAGES, path);

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            string fileName = Guid.NewGuid().ToString() + GetExtensionFromBase64String(ImgStr);
            string imgPath = Path.Combine(path, fileName);

            byte[] imageBytes = Convert.FromBase64String(GetBase64FromString(ImgStr));
            File.WriteAllBytes(imgPath, imageBytes);

            return fileName;
        }

        public static string GetBase64FromString(string ImgStr)
        {
            var index = ImgStr.IndexOf(',') + 1;
            return ImgStr.Substring(index);
        }

        public static string GetExtensionFromBase64String(string ImgStr)
        {
            var index = ImgStr.IndexOf(':') + 1;
            var len = ImgStr.IndexOf(';');
            var mimeType = ImgStr.Substring(index, len - index);
            var types = GetExtension();
            return types[mimeType];
        }

        public static void DeleteFile(string pPath, string pFileName)
        {
            string localPath = pPath;
            string localFilePath = Path.Combine(localPath, pFileName);

            File.Delete(localFilePath);
        }

        public static string GetFileBase64(string path, string imageName)
        {
            byte[] file;
            file = File.ReadAllBytes(Path.Combine(path, imageName));
            var base64 = Convert.ToBase64String(file);
            var imgSrc = $"data:{GetContentType(imageName)};base64,{base64}";
            return imgSrc;
        }

        private static string GetContentType(string path)
        {
            var types = GetMimeTypes();
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return types[ext];
        }

        private static Dictionary<string, string> GetMimeTypes()
        {
            return new Dictionary<string, string>
            {
                {".txt", "text/plain"},
                {".pdf", "application/pdf"},
                {".doc", "application/vnd.ms-word"},
                {".docx", "application/vnd.ms-word"},
                {".xls", "application/vnd.ms-excel"},
                {".xlsx", "application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet"},
                {".png", "image/png"},
                {".jpg", "image/jpeg"},
                {".jpeg", "image/jpeg"},
                {".gif", "image/gif"},
                {".csv", "text/csv"}
            };
        }

        private static Dictionary<string, string> GetExtension()
        {
            return new Dictionary<string, string>
            {
                {"text/plain", ".txt"},
                {"application/pdf", ".pdf"},
                {"application/vnd.ms-word", ".docx"},
                {"application/vnd.ms-excel", ".xls"},
                {"application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet", ".xlsx"},
                {"image/png", ".png"},
                {"image/jpeg", ".jpg"},
                {"image/gif", ".gif"},
                {"text/csv", ".csv"}
            };
        }
    }
}
