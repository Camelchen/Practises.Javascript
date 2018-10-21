using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MDN.Controllers
{
    public class GuideController : Controller
    {
        //
        // GET: /Guide/

        public ActionResult Index()
        {
            
            return View();
        }
        public ActionResult Reference()
        {

            return View();
        }

    }
}
