using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Asistencia.Web.Controllers
{
    public class MarcadorController : Controller
    {
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

        // POST: MarcadorController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
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
