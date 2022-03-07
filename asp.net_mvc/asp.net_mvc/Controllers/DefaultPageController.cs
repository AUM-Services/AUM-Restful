using asp.net_mvc.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace asp.net_mvc.Controllers
{
    public class DefaultPageController : Controller
    {
        public IActionResult Index()
        {
            return View("DefaultPage");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}