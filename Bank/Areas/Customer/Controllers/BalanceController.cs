using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bank.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class BalanceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
