using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace W3Schools
{    
    class BundleOrdererByCreateTime : IBundleOrderer
    {
        public IEnumerable<BundleFile> OrderFiles(BundleContext context, IEnumerable<BundleFile> files)
        {
            return files;
        }
    }

    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/Common").Include("~/Scripts/Common/*.js"));

            var bdJSON = new ScriptBundle("~/Scripts/JSON").Include(
                "~/Scripts/JSON/*.js");
            bundles.Add(bdJSON);

            var bdAJAX = new ScriptBundle("~/Scripts/AJAX").Include(
                "~/Scripts/AJAX/*.js");
            bundles.Add(bdAJAX);

            var bdJavascript = new ScriptBundle("~/Scripts/Javascript").Include(
                "~/Scripts/Javascript/*.js");
            bundles.Add(bdJavascript);

            var bdJQuery =
                new ScriptBundle("~/Scripts/JQuery", "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.2.0.js").Include(
                    "~/Scripts/jquery-{version}.js");
            bundles.Add(bdJQuery);

            bundles.Add(new StyleBundle("~/Content/Themes").Include(
                "~/Content/Themes/*.css")
                );


        }
    }


}