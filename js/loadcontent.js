"use strict";

import {loadHomePage} from "./home.js";

export function loadContent(page) {
    switch(page) {
        case "home":
            loadHomePage();
            break;
        default:
            break;
    }
}