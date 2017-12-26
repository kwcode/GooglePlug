/*获取head信息*/
var title = '';
var description = '';
var robots = '';
var keywords = '';
var language = '';
var canonical = '';
var links_overall = 0;
var html_lang = '';
var charset_and_mime = '';
var doc_text = '';
/**
*
* TITLE
*
*/
var titles = document.getElementsByTagName("title");
if (titles.length > 0) title = titles[0].innerHTML;
/**
*
* HTML Language
*
*/
var h = document.getElementsByTagName("html")[0];

if (h.hasAttribute("lang")) {
    html_lang = h.getAttribute("lang");
}


/**
*
* META ATTRIBUTES
*
*/

var metas = document.getElementsByTagName("meta");

for (var i = 0; i < metas.length; i++) {

    if (metas[i].hasAttribute("name")) {

        var attr_name = metas[i].getAttribute("name");

        if (attr_name != "") {

            if (attr_name.toLowerCase() == "description") {
                description = metas[i].getAttribute("content");
            }

            if (attr_name.toLowerCase() == "robots") {
                robots = metas[i].getAttribute("content");
            }

            if (attr_name.toLowerCase() == "keywords") {
                keywords = metas[i].getAttribute("content");
            }

            if (attr_name.toLowerCase() == "language") {
                language = metas[i].getAttribute("content");
            }

        }


    }

    if (metas[i].hasAttribute("http-equiv")) {

        var eq_name = metas[i].getAttribute("http-equiv");

        if (eq_name != "") {

            if (eq_name.toLowerCase() == "content-type") {

                charset_and_mime = metas[i].getAttribute("content");

            }

        }

    }

}

var links = document.getElementsByTagName("link");



for (i = 0; i < links.length; i++) {

    var link = links[i];

    if (link.hasAttribute("rel")) {

        attr_name = link.getAttribute("rel");

        if (attr_name != "") {

            if (attr_name == "canonical") {

                canonical = link.getAttribute("href");

            }

        }

    }

}

var as = document.getElementsByTagName("a");

links_overall = as.length;
var meta = new Object();
meta.title = title;
meta.description = description;
meta.robots = robots;
meta.keywords = keywords;
meta.url = document.URL;
meta.language = language;
meta.canonical = canonical;
meta.links_overall = links_overall;
meta.html_lang = html_lang;
meta.content_type = charset_and_mime;

