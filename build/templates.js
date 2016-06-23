var Handlebars = require("handlebars");
 exports["views"] = exports["views"] || {};
exports["views"]["partials"] = exports["views"]["partials"] || {};
exports["views"]["partials"]["pageFooter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"page__footer__byline\">\n  ModPsy WebWorks Limited\n</div>\n\n<p class=\"page__footer__p\">\n  Registered in England & Wales<br />\n  Company Number 08786639<br />\n  VAT No. 177 8452 62\n</p>\n  Contact: <a href=\"mailto:queries@modpsy.co.uk\" class=\"page__footer__a\">queries@modpsy.co.uk</a>\n";
},"useData":true});
exports["views"]["partials"]["pageHead"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<head>\n  <title>"
    + this.escapeExpression(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</title>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link href=\"/css/main.css\" rel=\"stylesheet\" media=\"screen\" />\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Antic\" />\n  <script src=\"/js/ie_html5_elements.js\"></script>\n	<script src=\"/js/jquery.min.js\"></script>\n	<script src=\"/js/modpsy.js\"></script>\n  <script src=\"/js/retina.min.js\"></script>\n  <script src=\"/js/jquery.mobile.custom.min.js\"></script>\n  <script src=\"/js/bootstrap/bootstrap.js\"></script>\n</head>\n";
},"useData":true});
exports["views"]["partials"]["pageHeader"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1 title=\"ModPsy\" class=\"home__header\">\n  <a href=\"/\" class=\"home__header__a\">LG</a>\n</h1>\n";
},"useData":true});
exports["views"]["partials"]["pageNav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"home__aside__nav__ul\">\n  <li class=\"active\"><a href=\"/\" class=\"home__aside__nav__li__about__a\">about</a></li>\n  <li class=\"\"><a href=\"/gallery/\" class=\"home__aside__nav__li__gallery__a\">gallery</a></li>\n  <li class=\"\"><a href=\"/blog/\" class=\"home__aside__nav__li__portfolio__a\">blog</a></li>\n  <li class=\"\"><a href=\"/blog/\" class=\"home__aside__nav__li__portfolio__a\">contact</a></li>\n  <!-- <li class=\"page__nav__li\"><a href=\"/content/\" class=\"page__nav__content__a\">web&nbsp;content</a></li>\n  <li class=\"page__nav__li\"><a href=\"/design/\" class=\"page__nav__design__a\">web&nbsp;design</a></li>\n  <li class=\"page__nav__li\"><a href=\"/development/\" class=\"page__nav__development__a\">web&nbsp;development</a></li>\n  <li class=\"page__nav__li\"><a href=\"/faq/\" class=\"page__nav__faq__a\">faq</a></li> -->\n</ul>\n<div class=\"page__nav__reveal__div\"></div>\n";
},"useData":true});
exports["views"]["partials"]["partialTest"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<p>echo: "
    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});