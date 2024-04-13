using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers.AdminApp
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
