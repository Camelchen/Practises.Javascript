using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace MSReference
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
            bundles.Add(new ScriptBundle("~/Scripts/Debug").Include("~/Scripts/_debug.js"));
            bundles.Add(new ScriptBundle("~/Scripts/Common").Include("~/Scripts/Common/*.js"));

            var bdFundamentals = new ScriptBundle("~/Scripts/Fundamentals").Include(
                "~/Scripts/Fundamentals/*.js");
            bundles.Add(bdFundamentals);


            var bdAdvanced = new ScriptBundle("~/Scripts/Advanced").Include(
                "~/Scripts/Advanced/*.js");
            bdFundamentals.Orderer = new BundleOrdererByCreateTime();
            bundles.Add(bdAdvanced);

            bundles.Add(new StyleBundle("~/Content/Themes").Include(
                "~/Content/Themes/*.css")
                );


        }
    }


}