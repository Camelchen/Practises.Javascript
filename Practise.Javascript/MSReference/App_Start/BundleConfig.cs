using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Fundamentals
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/Common").Include(
                "~/Scripts/Common/*.js")
                );
            bundles.Add(new ScriptBundle("~/Scripts/Fundamentals")
                .Include("~/Scripts/Fundamentals/*.js")
                );
        }
    }
}