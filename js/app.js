"use strict";

import {loadContent} from "./loadcontent.js";

($ => {
    const $context = $("div#navbarContent"),
          $activePage = $("a.nav-link.active",$context),
          page = $activePage.data("page") ?? 'home';
    loadContent(page);
})(jQuery)