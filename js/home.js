"use strict";

export function loadHomePage() {
    $("main").load('../includes/home/main.html',() => {
        const $context = $("div#v-pills-tab"),
              $tabEl = $('button[data-bs-toggle="pill"]:not([disabled])',$context);

        $tabEl.each(function(index,el) {
            const $el = $(el),
                  $target = $($el.data('bs-target')),
                  file = $el.data('include');

            file ? $target.load(`../includes/home/${file}`) : '';
        })
    });
}