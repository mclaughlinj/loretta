Handlebars.registerPartial("aboutContent", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <header class=\"home__section__header\">\n      <h2>\n        About me, <em>Loretta Garrison</em>\n      </h2>\n    </header>\n\n    <img  src=\"/img/about_image.jpg\" alt=\"Holding image for about section\" height=\"800\" width=\"796\" height=\"800\" class=\"home__section__about__img\" />\n\n    <p>\n    Printmaking has been quite a recent discovery for me, only starting my journey 3 years ago. I love the flexibility and possibilities within print; I especially enjoy experimenting with different techniques and my work often incorporates multiple print forms such as monoprint, drypoint and collagraph.\n    </p>\n\n    <p>\n    I am influenced by abstract expressionism, nebulae, urban decay and 50's textiles.\n    </p>\n\n    <p>\n    On this website\n    </p>\n\n    <p>\n    Thanks for taking the time to have a look around.\n    </p>\n\n\n    <h3>Exhibitions</h3>\n\n    <p>\n      <strong>Under Ground Women</strong><br />\n      ArtsLav, 180 Kennington Road, Lambeth, London<br />\n      <em>15 November - 23 November 2014</em>\n    </p>\n\n    <p>\n      <strong>'Migration' - Group Exhibition</strong><br />\n      St Augustine's Tower, The Narroway, Hackney, London<br />\n      <em>29 September - 4 October 2015</em>\n    </p>\n\n    <p>\n      <strong><a href=\"/blog#test\">'Don't even ask' - Group Exhibition</a></strong><br />\n      A-Side B-Side Gallery, Hackney Downs Studios, Hackney, London<br />\n      <em>30 June - 4 July 2016</em>\n    </p>\n";
},"useData":true}));
this["lg"] = this["lg"] || {};
this["lg"]["templates"] = this["lg"]["templates"] || {};
this["lg"]["templates"]["content"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<header class=\"home__header\">\n"
    + ((stack1 = container.invokePartial(partials.pageHeader,depth0,{"name":"pageHeader","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</header>\n<aside class=\"home__aside\">\n	<nav>\n"
    + ((stack1 = container.invokePartial(partials.pageNav,depth0,{"name":"pageNav","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</nav>\n</aside>\n<section class=\"home__section__mainContent\">\n	<header class=\"home__section__header\">\n		<h2>\n			Web content, design and development\n		</h2>\n	</header>\n\n		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat ligula, accumsan fringilla convallis at, suscipit vitae turpis. Pellentesque eu tempor lectus. Vivamus vitae libero eu quam mollis dignissim rhoncus accumsan neque. Fusce sit amet augue tortor. Phasellus dapibus ipsum tortor, a posuere orci pulvinar vitae. In hac habitasse platea dictumst. Pellentesque id mauris consectetur lacus convallis rutrum. Phasellus tempus interdum mi eget pretium. Sed pharetra dapibus ipsum nec dapibus. Cras ornare fermentum vulputate.</p>\n\n	<p>Maecenas egestas urna eu massa pulvinar bibendum. Pellentesque consectetur laoreet facilisis. Suspendisse suscipit odio eu nibh sodales iaculis id ut massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum faucibus, urna at bibendum eleifend, felis ligula euismod lacus, sed molestie velit quam sed augue. Curabitur dignissim dui sit amet arcu aliquet vulputate. Etiam orci lacus, laoreet ut dolor vitae, hendrerit eleifend turpis. Aenean vel euismod justo.</p>\n\n	<p>In metus metus, posuere et aliquam nec, fringilla non diam. Etiam adipiscing ut purus et vehicula. Aenean sagittis accumsan orci id venenatis. Cras quis quam non lacus vestibulum tristique in at diam. In non pellentesque dui. Curabitur sodales malesuada ligula, quis faucibus neque vestibulum luctus. Donec vulputate tortor ut nulla pellentesque, at commodo lectus interdum. Mauris eu lobortis ante. Maecenas eu consequat leo. Duis augue orci, molestie quis metus semper, fermentum sollicitudin massa. In vel nunc eu quam blandit lobortis. Vestibulum feugiat mauris et diam semper luctus. Integer aliquet elit a leo bibendum facilisis.</p>\n\n	<p>Pellentesque vestibulum nec ante nec ullamcorper. Phasellus tincidunt leo ut convallis congue. Nam lobortis lobortis orci quis congue. Cras dignissim pellentesque arcu, et laoreet libero ornare eu. Duis non euismod nulla, nec volutpat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in interdum justo. Maecenas non elementum diam.</p>\n\n	<p>Nullam risus urna, bibendum id nisi at, gravida pretium nulla. Phasellus gravida quam nec ante accumsan, in dignissim justo rutrum. Duis ornare nec leo varius malesuada. Duis mauris odio, vulputate a orci id, commodo faucibus enim. Donec nec hendrerit nisl. Aenean semper nunc luctus, porttitor risus ut, commodo nunc. Etiam feugiat, velit vel consectetur imperdiet, quam augue ornare lectus, a semper est tortor ac lectus. Curabitur pellentesque sem id aliquet tincidunt. Nunc pellentesque erat id tellus elementum feugiat. Donec eu purus at diam mollis accumsan. Quisque iaculis ante imperdiet porttitor eleifend. Etiam vehicula ullamcorper tincidunt.</p>\n\n</section>\n<footer>\n"
    + ((stack1 = container.invokePartial(partials.pageFooter,depth0,{"name":"pageFooter","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</footer>\n";
},"usePartial":true,"useData":true});
Handlebars.registerPartial("blogContent", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Blog</h2>\n\n<aside class=\"blog__aside\">\n  <h3>Blog posts</h2>\n  <a href=\"#test\">New exhibition: Don't Even Ask</a>\n</aside>\n\n<article id=\"test\" class=\"blog__article\">\n\n<heading>\n<h3>New exhibition: Don't Even Ask</h2>\n</heading>\n\n<div class=\"blog__image__div\">\n<a href=\"/img/blog/dont_even_ask.jpg\" class=\"blog__image__a\"><img src=\"/img/blog/dont_even_ask.jpg\" alt=\"Don't even ask\" class=\"blog__image__img\"></a>\n</div>\n\n<div class=\"blog__content__div\">\n\n<p><strong>Don't even ask what it's about.</strong></p>\n\n<p>We can't usually explain our visual decisions. It's part of a journey where what we started out with becomes something quite different as the piece develops. There's some mystery in the creative process that could come from the unconscious, or a spiritual dimension, or just the trial and error of going for something new.</p>\n\n<p>When doing art, the title often comes last. If viewers look for it first, does it enlighten or conversely divert the attention from the visual to the verbal?</p>\n\n<p>We are meaning-hungry. Our brains prioritise \"the meaning\" and need to make sense.</p>\n\n<p>Here visitors will have the opportunity to devise their own titles to pieces, which can then be compared to that of the artist. A small prize will be given for the best one. How do we know what's best?</p>\n\n<p>Don't even ask.</p>\n\n<p>Don't Even Ask, a group exhibition of new works by Loretta Garrison, Alison Haworth, <a href=\"http://connijohnson.weebly.com/\" target=\"_blank\">Conni Johnson</a>, <a href=\"http://stellamorgan.artspan.com/\" target=\"_blank\">Stella Morgan</a> and <a href=\"http://www.rebecca-willcox.com/\" target=\"_blank\">Rebecca Willcox</a> is at the A-side B-side Gallery <time datetime=\"P5D\"><time datetime=\"2016-06-30 19:00\">30th June 2016</time> - <time datetime=\"2016-07-04 18:00\">4th July 2016</time></time> <time datetime=\"12:00\">12</time>-<time datetime=\"18:00\">6pm</time>. Public view on Thursday <time datetime=\"2016-06-30 19:00\">30th June 7-9.30pm</time>.</p>\n\n<p><a href=\"https://www.facebook.com/events/642443285909227/\" target=\"_blank\">https://www.facebook.com/events/642443285909227/</a></p>\n\n<p>\nA-side B-side Gallery<br/>\nHackney Downs Studios<br/>\nAmhurst Terrace<br/>\nLondon E8 2BT\n</p>\n\n</div>\n\n<footer>\n<p>02/06/2016, 09:37</p>\n</footer>\n\n</article>\n";
},"useData":true}));
this["lg"]["templates"]["error"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h1>Error</h1>\n<p>"
    + ((stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"useData":true});
Handlebars.registerPartial("contactContent", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Contact me</h2>\n\n<noscript>\n  <a href=\"mailto:leogarrison1@gmail.com\">Email me...</a>\n</noscript>\n\n<div class=\"contact__content__form__inner__div\">\n  <span class=\"contact__content__form__inner__required__span\">Fields marked <span class=\"contact__content__form__required\">r</span> are required to allow me to contact you.</span>\n  <form method=\"post\" action=\"/\" id=\"lgContact\" class=\"contact__content__form\">\n\n      <p class=\"contact__content__form__name\"><label for=\"name\" form=\"lgContact\">Name:<span class=\"contact__content__form__required\" title=\"This field is required\">r</span> </label><input type=\"text\" name=\"name\" id=\"name\" required /></p>\n      <p class=\"contact__content__form__email\"><label for=\"email\" form=\"lgContact\">Email:<span class=\"contact__content__form__required\" title=\"This field is required\">r</span> </label><input type=\"email\" name=\"email\" id=\"email\" required /></p>\n\n      <p class=\"contact__content__form__special\" style=\"clear: both;\"><label for=\"special\" form=\"lgContact\">Message:<span class=\"contact__content__form__required\" title=\"This field is required\">r</span><br /></label><textarea rows=\"4\" cols=\"50\" name=\"special\" id=\"special\" required></textarea></p>\n      <input type=\"submit\" class=\"contact__content__form__submit\" value=\"Send your message\"/>\n  </form>\n</div>\n\n";
},"useData":true}));
this["lg"]["templates"]["home"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.galleryContent,depth0,{"name":"galleryContent","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.blog : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.blogContent,depth0,{"name":"blogContent","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.contact : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.contactContent,depth0,{"name":"contactContent","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.aboutContent,depth0,{"name":"aboutContent","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"home__header__div\">\n\n  <header>\n"
    + ((stack1 = container.invokePartial(partials.pageHeader,depth0,{"name":"pageHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </header>\n  <aside>\n    <nav class=\"home__aside__nav\">\n"
    + ((stack1 = container.invokePartial(partials.pageNav,depth0,{"name":"pageNav","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </nav>\n  </aside>\n  <p class=\"home__header__div__tagline\">Printmaking</p>\n\n</div>\n\n<div class=\"home__columnShades__div\">\n  <div class=\"home__columnShades__div__column\">\n    <div class=\"home__columnShades__div__columnOne\"></div>\n  </div>\n  <div class=\"home__columnShades__div__column\">\n    <div class=\"home__columnShades__div__columnTwo\"></div>\n  </div>\n  <div class=\"home__columnShades__div__column\">\n    <div class=\"home__columnShades__div__columnThree\"></div>\n  </div>\n  <div class=\"home__columnShades__div__column\">\n    <div class=\"home__columnShades__div__columnFour\"></div>\n  </div>\n</div>\n\n\n<div class=\"home__mainContent__div\">\n\n  <section class=\"home__section__mainContent clearfix\">\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.gallery : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n\n  </section>\n\n  <footer>\n"
    + ((stack1 = container.invokePartial(partials.pageFooter,depth0,{"name":"pageFooter","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </footer>\n\n  </div>\n  <div class=\"home__modal__div\">\n    <div class=\"home__modal__div__close\">&times;</div>\n    <div class=\"home__modal__div__content\">\n      <p>Click or tap the screen to enter</p>\n    </div>\n  </div>\n\n";
},"usePartial":true,"useData":true});
Handlebars.registerPartial("galleryContent", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.current : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "  <div class=\"gallery__image__div\">\n  <a href=\"/img/gallery/"
    + alias2(alias1((depth0 != null ? depth0.fileName : depth0), depth0))
    + "\" class=\"gallery__image__a\"><img src=\"/img/gallery/"
    + alias2(alias1((depth0 != null ? depth0.fileName : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "\" title=\""
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" width=\"100%\">\n  <h4>"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4></a>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Gallery</h2>\n\n<div class=\"gallery__images__div\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.galleryItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true}));
this["lg"]["templates"]["jquery"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<header class=\"home__header\">\n"
    + ((stack1 = container.invokePartial(partials.pageHeader,depth0,{"name":"pageHeader","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</header>\n<aside class=\"home__aside\">\n	<nav>\n"
    + ((stack1 = container.invokePartial(partials.pageNav,depth0,{"name":"pageNav","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</nav>\n</aside>\n<section class=\"home__section__mainContent\">\n	<header class=\"home__section__header\">\n		<h2>\n			jQuery\n		</h2>\n	</header>\n\n\n\n</section>\n<footer>\n"
    + ((stack1 = container.invokePartial(partials.pageFooter,depth0,{"name":"pageFooter","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</footer>\n\n";
},"usePartial":true,"useData":true});
Handlebars.registerPartial("modPsyCredit", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"modPsy__credit\">\n  <div class=\"modPsy__credit__link\">This website designed and developed by<a href=\"http://www.modpsy.co.uk\" target=\"_modspsy\"><img src=\"/img/modpsy_logo.png\" alt=\"ModPsy WebWorks Limited\" height=\"155\" width=\"466\"  class=\"modPsy__credit__image\"/></a><span><a href=\"http://www.modpsy.co.uk\" target=\"_modspsy\">ModPsy WebWorks Limited</a></span></div>\n</div>\n";
},"useData":true}));
this["lg"]["templates"]["portfolio"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<header class=\"portfolio__header\">\n"
    + ((stack1 = container.invokePartial(partials.pageHeader,depth0,{"name":"pageHeader","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</header>\n<aside class=\"portfolio__aside\">\n	<nav>\n"
    + ((stack1 = container.invokePartial(partials.pageNav,depth0,{"name":"pageNav","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</nav>\n</aside>\n<section class=\"portfolio__section__mainContent\">\n	<header class=\"portfolio__section__header\">\n		<h2>\n			Portfolio\n		</h2>\n	</header>\n	<img src=\"/img/portfolio/nbt/homePage.png\" class=\"portfolio__section__img imgOne\" />\n	<img src=\"/img/portfolio/nbt/homePage.png\" class=\"portfolio__section__img imgTwo\" />\n	<img src=\"/img/portfolio/nbt/homePage.png\" class=\"portfolio__section__img imgThree\" />\n</section>\n<footer>\n"
    + ((stack1 = container.invokePartial(partials.pageFooter,depth0,{"name":"pageFooter","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</footer>\n";
},"usePartial":true,"useData":true});
Handlebars.registerPartial("pageFooter", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page__footer__byline\">\n  <!-- todo -->\n</div>\n\n<p class=\"page__footer__p\">\n  <!-- todo -->\n</p>\n\n\n";
},"useData":true}));
this["lg"]["templates"]["aboutContent"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <header class=\"home__section__header\">\n      <h2>\n        About me, <em>Loretta Garrison</em>\n      </h2>\n    </header>\n\n    <img  src=\"/img/about_image.jpg\" alt=\"Holding image for about section\" height=\"800\" width=\"796\" height=\"800\" class=\"home__section__about__img\" />\n\n    <p>\n    Printmaking has been quite a recent discovery for me, only starting my journey 3 years ago. I love the flexibility and possibilities within print; I especially enjoy experimenting with different techniques and my work often incorporates multiple print forms such as monoprint, drypoint and collagraph.\n    </p>\n\n    <p>\n    I am influenced by abstract expressionism, nebulae, urban decay and 50's textiles.\n    </p>\n\n    <p>\n    On this website\n    </p>\n\n    <p>\n    Thanks for taking the time to have a look around.\n    </p>\n\n\n    <h3>Exhibitions</h3>\n\n    <p>\n      <strong>Under Ground Women</strong><br />\n      ArtsLav, 180 Kennington Road, Lambeth, London<br />\n      <em>15 November - 23 November 2014</em>\n    </p>\n\n    <p>\n      <strong>'Migration' - Group Exhibition</strong><br />\n      St Augustine's Tower, The Narroway, Hackney, London<br />\n      <em>29 September - 4 October 2015</em>\n    </p>\n\n    <p>\n      <strong><a href=\"/blog#test\">'Don't even ask' - Group Exhibition</a></strong><br />\n      A-Side B-Side Gallery, Hackney Downs Studios, Hackney, London<br />\n      <em>30 June - 4 July 2016</em>\n    </p>\n";
},"useData":true});
Handlebars.registerPartial("pageHead", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<head>\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</title>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link href=\"/css/main.css\" rel=\"stylesheet\" media=\"screen\" />\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Antic\" />\n  <script src=\"/js/ie_html5_elements.js\"></script>\n	<script src=\"/js/jquery.min.js\"></script>\n  <script src=\"/js/retina.min.js\"></script>\n  <script src=\"/js/jquery.mobile.custom.min.js\"></script>\n  <script src=\"/js/jquery.waitforimages.min.js\"></script>\n  <script src=\"/js/bootstrap/bootstrap.js\"></script>\n  <script src=\"/js/handlebars-v4.0.5.js\"></script>\n  <script src=\"/templates/templates.js\"></script>\n	<script src=\"/js/modpsy.js\"></script>\n	<noscript>\n    <link href=\"/css/noscript.css\" rel=\"stylesheet\" media=\"screen\" />\n  </noscript>\n</head>\n";
},"useData":true}));
this["lg"]["templates"]["blogContent"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Blog</h2>\n\n<aside class=\"blog__aside\">\n  <h3>Blog posts</h2>\n  <a href=\"#test\">New exhibition: Don't Even Ask</a>\n</aside>\n\n<article id=\"test\" class=\"blog__article\">\n\n<heading>\n<h3>New exhibition: Don't Even Ask</h2>\n</heading>\n\n<div class=\"blog__image__div\">\n<a href=\"/img/blog/dont_even_ask.jpg\" class=\"blog__image__a\"><img src=\"/img/blog/dont_even_ask.jpg\" alt=\"Don't even ask\" class=\"blog__image__img\"></a>\n</div>\n\n<div class=\"blog__content__div\">\n\n<p><strong>Don't even ask what it's about.</strong></p>\n\n<p>We can't usually explain our visual decisions. It's part of a journey where what we started out with becomes something quite different as the piece develops. There's some mystery in the creative process that could come from the unconscious, or a spiritual dimension, or just the trial and error of going for something new.</p>\n\n<p>When doing art, the title often comes last. If viewers look for it first, does it enlighten or conversely divert the attention from the visual to the verbal?</p>\n\n<p>We are meaning-hungry. Our brains prioritise \"the meaning\" and need to make sense.</p>\n\n<p>Here visitors will have the opportunity to devise their own titles to pieces, which can then be compared to that of the artist. A small prize will be given for the best one. How do we know what's best?</p>\n\n<p>Don't even ask.</p>\n\n<p>Don't Even Ask, a group exhibition of new works by Loretta Garrison, Alison Haworth, <a href=\"http://connijohnson.weebly.com/\" target=\"_blank\">Conni Johnson</a>, <a href=\"http://stellamorgan.artspan.com/\" target=\"_blank\">Stella Morgan</a> and <a href=\"http://www.rebecca-willcox.com/\" target=\"_blank\">Rebecca Willcox</a> is at the A-side B-side Gallery <time datetime=\"P5D\"><time datetime=\"2016-06-30 19:00\">30th June 2016</time> - <time datetime=\"2016-07-04 18:00\">4th July 2016</time></time> <time datetime=\"12:00\">12</time>-<time datetime=\"18:00\">6pm</time>. Public view on Thursday <time datetime=\"2016-06-30 19:00\">30th June 7-9.30pm</time>.</p>\n\n<p><a href=\"https://www.facebook.com/events/642443285909227/\" target=\"_blank\">https://www.facebook.com/events/642443285909227/</a></p>\n\n<p>\nA-side B-side Gallery<br/>\nHackney Downs Studios<br/>\nAmhurst Terrace<br/>\nLondon E8 2BT\n</p>\n\n</div>\n\n<footer>\n<p>02/06/2016, 09:37</p>\n</footer>\n\n</article>\n";
},"useData":true});
Handlebars.registerPartial("pageHeader", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 title=\"ModPsy\" class=\"home__header\">\n  <a href=\"/\" class=\"home__header__a\">\n  <!-- <img src=\"/img/lg_logo_white.png\" height=\"51\" width=\"60\" alt=\"LG initials\" class=\"home__header__img\"> -->\n  <object type=\"image/svg+xml\" data=\"/img/lg_logo.svg\" class=\"logo\">\n  </object>\n  LG\n  </a>\n</h1>\n<div class=\"page__nav__reveal__div\"></div>\n";
},"useData":true}));
this["lg"]["templates"]["contactContent"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Contact me</h2>\n\n<noscript>\n  <a href=\"mailto:leogarrison1@gmail.com\">Email me...</a>\n</noscript>\n\n<div class=\"contact__content__form__inner__div\">\n  <span class=\"contact__content__form__inner__required__span\">Fields marked <span class=\"contact__content__form__required\">r</span> are required to allow me to contact you.</span>\n  <form method=\"post\" action=\"/\" id=\"lgContact\" class=\"contact__content__form\">\n\n      <p class=\"contact__content__form__name\"><label for=\"name\" form=\"lgContact\">Name:<span class=\"contact__content__form__required\" title=\"This field is required\">r</span> </label><input type=\"text\" name=\"name\" id=\"name\" required /></p>\n      <p class=\"contact__content__form__email\"><label for=\"email\" form=\"lgContact\">Email:<span class=\"contact__content__form__required\" title=\"This field is required\">r</span> </label><input type=\"email\" name=\"email\" id=\"email\" required /></p>\n\n      <p class=\"contact__content__form__special\" style=\"clear: both;\"><label for=\"special\" form=\"lgContact\">Message:<span class=\"contact__content__form__required\" title=\"This field is required\">r</span><br /></label><textarea rows=\"4\" cols=\"50\" name=\"special\" id=\"special\" required></textarea></p>\n      <input type=\"submit\" class=\"contact__content__form__submit\" value=\"Send your message\"/>\n  </form>\n</div>\n\n";
},"useData":true});
Handlebars.registerPartial("pageNav", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"home__aside__nav__ul\">\n  <li class=\"active\"><a href=\"/\" class=\"home__aside__nav__li__about__a\">about</a></li>\n  <li class=\"\"><a href=\"/gallery/\" class=\"home__aside__nav__li__gallery__a\">gallery</a></li>\n  <li class=\"\"><a href=\"/blog/\" class=\"home__aside__nav__li__blog__a\">blog</a></li>\n  <li class=\"\"><a href=\"/contact/\" class=\"home__aside__nav__li__contact__a\">contact</a></li>\n  <!-- <li class=\"page__nav__li\"><a href=\"/content/\" class=\"page__nav__content__a\">web&nbsp;content</a></li>\n  <li class=\"page__nav__li\"><a href=\"/design/\" class=\"page__nav__design__a\">web&nbsp;design</a></li>\n  <li class=\"page__nav__li\"><a href=\"/development/\" class=\"page__nav__development__a\">web&nbsp;development</a></li>\n  <li class=\"page__nav__li\"><a href=\"/faq/\" class=\"page__nav__faq__a\">faq</a></li> -->\n</ul>\n";
},"useData":true}));
this["lg"]["templates"]["galleryContent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.current : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "  <div class=\"gallery__image__div\">\n  <a href=\"/img/gallery/"
    + alias2(alias1((depth0 != null ? depth0.fileName : depth0), depth0))
    + "\" class=\"gallery__image__a\"><img src=\"/img/gallery/"
    + alias2(alias1((depth0 != null ? depth0.fileName : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "\" title=\""
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" width=\"100%\">\n  <h4>"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4></a>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Gallery</h2>\n\n<div class=\"gallery__images__div\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.galleryItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
this["lg"]["templates"]["modPsyCredit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"modPsy__credit\">\n  <div class=\"modPsy__credit__link\">This website designed and developed by<a href=\"http://www.modpsy.co.uk\" target=\"_modspsy\"><img src=\"/img/modpsy_logo.png\" alt=\"ModPsy WebWorks Limited\" height=\"155\" width=\"466\"  class=\"modPsy__credit__image\"/></a><span><a href=\"http://www.modpsy.co.uk\" target=\"_modspsy\">ModPsy WebWorks Limited</a></span></div>\n</div>\n";
},"useData":true});
Handlebars.registerPartial("partialTest", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p>echo: "
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true}));
this["lg"]["templates"]["pageFooter"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"page__footer__byline\">\n  <!-- todo -->\n</div>\n\n<p class=\"page__footer__p\">\n  <!-- todo -->\n</p>\n\n\n";
},"useData":true});
this["lg"]["templates"]["pageHead"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<head>\n  <title>"
    + container.escapeExpression(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</title>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link href=\"/css/main.css\" rel=\"stylesheet\" media=\"screen\" />\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Antic\" />\n  <script src=\"/js/ie_html5_elements.js\"></script>\n	<script src=\"/js/jquery.min.js\"></script>\n  <script src=\"/js/retina.min.js\"></script>\n  <script src=\"/js/jquery.mobile.custom.min.js\"></script>\n  <script src=\"/js/jquery.waitforimages.min.js\"></script>\n  <script src=\"/js/bootstrap/bootstrap.js\"></script>\n  <script src=\"/js/handlebars-v4.0.5.js\"></script>\n  <script src=\"/templates/templates.js\"></script>\n	<script src=\"/js/modpsy.js\"></script>\n	<noscript>\n    <link href=\"/css/noscript.css\" rel=\"stylesheet\" media=\"screen\" />\n  </noscript>\n</head>\n";
},"useData":true});
this["lg"]["templates"]["pageHeader"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 title=\"ModPsy\" class=\"home__header\">\n  <a href=\"/\" class=\"home__header__a\">\n  <!-- <img src=\"/img/lg_logo_white.png\" height=\"51\" width=\"60\" alt=\"LG initials\" class=\"home__header__img\"> -->\n  <object type=\"image/svg+xml\" data=\"/img/lg_logo.svg\" class=\"logo\">\n  </object>\n  LG\n  </a>\n</h1>\n<div class=\"page__nav__reveal__div\"></div>\n";
},"useData":true});
this["lg"]["templates"]["pageNav"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"home__aside__nav__ul\">\n  <li class=\"active\"><a href=\"/\" class=\"home__aside__nav__li__about__a\">about</a></li>\n  <li class=\"\"><a href=\"/gallery/\" class=\"home__aside__nav__li__gallery__a\">gallery</a></li>\n  <li class=\"\"><a href=\"/blog/\" class=\"home__aside__nav__li__blog__a\">blog</a></li>\n  <li class=\"\"><a href=\"/contact/\" class=\"home__aside__nav__li__contact__a\">contact</a></li>\n  <!-- <li class=\"page__nav__li\"><a href=\"/content/\" class=\"page__nav__content__a\">web&nbsp;content</a></li>\n  <li class=\"page__nav__li\"><a href=\"/design/\" class=\"page__nav__design__a\">web&nbsp;design</a></li>\n  <li class=\"page__nav__li\"><a href=\"/development/\" class=\"page__nav__development__a\">web&nbsp;development</a></li>\n  <li class=\"page__nav__li\"><a href=\"/faq/\" class=\"page__nav__faq__a\">faq</a></li> -->\n</ul>\n";
},"useData":true});
this["lg"]["templates"]["partialTest"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p>echo: "
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});