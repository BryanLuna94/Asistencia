using System.Threading.Tasks;
using Asistencia.BusinessLayer;
using Asistencia.DataTypes.Petitions.Requests;
using Asistencia.WebApi.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Asistencia.WebApi.Controllers
{
    public class MarcadorController : Controller
    {
        private readonly MarcadorLogic _marcadorLogic;

        public MarcadorController(IConfiguration configuration)
        {
            _marcadorLogic = new MarcadorLogic(configuration);
        }

        // GET: MarcadorController
        public ActionResult Index()
        {
            return View();
        }

        // GET: MarcadorController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: MarcadorController/Create
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost(Constants.RoutesApi.MARCADOR_INSERT)]
        [Attributes.Excepcion]
        public async Task<ActionResult> InsertUser([FromBody] MarcadorRequest request)
        {
            var response = await _marcadorLogic.Insert(request);
            return Ok(response);
        }

        // GET: MarcadorController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: MarcadorController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: MarcadorController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: MarcadorController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
