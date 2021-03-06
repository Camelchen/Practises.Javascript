﻿using System;
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

            bundles.Add(new ScriptBundle("~/Scripts/Log4Javascript").Include("~/Scripts/Log4Javascript/*.js"));

            bundles.Add(new ScriptBundle("~/Scripts/Common").Include("~/Scripts/Common/*.js"));

            var bdJSON = new ScriptBundle("~/Scripts/JSON").Include(
                "~/Scripts/JSON/*.js");
            bundles.Add(bdJSON);

            var bdAJAX = new ScriptBundle("~/Scripts/AJAX").Include(
                "~/Scripts/AJAX/*.js");
            bundles.Add(bdAJAX);

            var bdJavascriptBasic = new ScriptBundle("~/Scripts/JavascriptBasic").Include(
                "~/Scripts/Javascript/Basic.js");
            bundles.Add(bdJavascriptBasic);

            var bdJavascriptAdvanced = new ScriptBundle("~/Scripts/JavascriptAdvanced").Include(
                "~/Scripts/Javascript/Advanced.js");
            bundles.Add(bdJavascriptAdvanced);

            var bdJavascriptAdvancedClosure = new ScriptBundle("~/Scripts/JavascriptAdvancedClosure").Include(
                "~/Scripts/Javascript/Advanced-Closure.js");
            bundles.Add(bdJavascriptAdvancedClosure);

            var bdJQuery =
                new ScriptBundle("~/Scripts/JQuery", "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.2.0.js").Include(
                    "~/Scripts/jquery-{version}.js");
            bundles.Add(bdJQuery);

            var bdJQuery2 = new ScriptBundle("~/Scripts/JQuery2").Include(
                "~/Scripts/JQuery/*.js");
            bundles.Add(bdJQuery2);

            bundles.Add(new StyleBundle("~/Content/Themes").Include(
                "~/Content/Themes/*.css")
                );


        }
    }


}