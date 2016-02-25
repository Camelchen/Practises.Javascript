using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace W3Schools.Controllers
{
    public class AJAXController : Controller
    {
        //
        // GET: /AJAX/

        public ActionResult ViewAJAX()
        {
            return View();
        }

        public ActionResult GetHint(string query)
        {
            Collection<string> spSet = new Collection<string>();
            spSet.Add( "Deployment_Box3_FES_Live_DB_CopyDatal sql");
            spSet.Add( "Deployment_Box3_FES_Live_DB_CopyData2sql");
            spSet.Add( "Deployment_Box3_FES_Live_DB_ManuaIUpdate.sql");
            spSet.Add( "Deployment_Box3_FES_Live_DB_Tableupdate.sql");
            spSet.Add( "Deployment_Bcx3_FES_SIM_DB_CopyDatal sql");
            spSet.Add( "Deployment_Box3_FES_SIM_DB_CopyData2sql");
            spSet.Add( "Deployment_Box3_FES_SIM_DB_ManualUpdate.sql");
            spSet.Add( "Deployment_Box3_FES_SIM_DB_TableUpdate.sql");
            spSet.Add( "Deployment_Box3_TRX_Live_DB_ManualUpdate_1.sql");
            spSet.Add( "Deployment_Box3_TRX_Live_DB_ManualUpdate_2.sql");
            spSet.Add( "Deployment_Box3_TRX_Live_DB_TableUpdate.sql");
            spSet.Add( "Deployment_Box3_TRX_SIM_DB_ManualUpdate_1.sql");
            spSet.Add( "Deployment_Box3_TRX_SIM_DB_ManualUpdate_2.sql");
            spSet.Add( "Deployment_Box3_TRX_SIM_DB_TableUpdate.sql");
            spSet.Add( "Deployment_Box3_TRX_Test_DB_CopyData1.sql");
            spSet.Add( "Deployment_Box3_TRX_Test_DB_CopyData2.sql");
            spSet.Add( "Deployment_Box3_TRX_Test_DB_ManualUpdate.sql");
            spSet.Add( "Deployment_Box3_TRX_Test_DB_ManualUpdate_1.sql");
            spSet.Add( "Deployment_Box3_TRX_Test_DB_ManualUpdate_2.sql");
            spSet.Add( "Deployment_Box3_TRX_Test_DB_TableUpdate.sql");
            spSet.Add( "Deployment_StoreHouse3_FES_Live_DB_ManualUpdate.sql");
            spSet.Add( "Deployment_StoreHouse3_FES_SIM_DB_ManualUpdate.sql");
            spSet.Add( "Deployment_StoreHouse3_TRX_Test_2005_DB_ManualUpdate.sql");

            string hint = "";
            if (query.Length > 0)
            {
                string[] separators = new string[] {" "};
                string[] qSet = query.Split(separators, StringSplitOptions.None);
                foreach (string spName in spSet)
                {
                    bool AndHint = false;
                    foreach (string qs in qSet)
                    {
                        if (spName.ToLower().Contains(qs.ToLower()))
                        {
                            AndHint = true;
                        }
                        else
                        {
                            AndHint = false;
                            break;
                        }
                        
                    }
                    if (AndHint)
                    {
                        hint += "\r\n" + "<option value='" + spName + "'>" + spName + "</option>";
                    }
                }
            }

            if (hint == "")
            {
                Response.Write("no result match!");
            }
            else
            {
                Response.Write("("+hint.Length.ToString()+") : "+hint);
            }

            return View();
        }
    }
}
