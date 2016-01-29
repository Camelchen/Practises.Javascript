using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace MSReference
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/Common").Include(
                "~/Scripts/Common/*.js")
                );
            bundles.Add(new ScriptBundle("~/Scripts/Fundamentals").Include(
                "~/Scripts/Fundamentals/*.js")
                );
            bundles.Add(new ScriptBundle("~/Scripts/Advanced").Include(
                "~/Scripts/Advanced/*.js")
                );

            bundles.Add(new StyleBundle("~/Content/Themes").Include(
                "~/Content/Themes/bootstrap.min.css")
                );

        }
    }
}