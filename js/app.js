"use strict";

($ => {
    const $tabEl = $('button[data-bs-toggle="pill"]');
    $tabEl.each((index, el) => {
        $(el).on('shown.bs.tab', event => {
            /*
               event.target // newly activated tab
               event.relatedTarget // previous active tab
            */
        })
    })
})(jQuery)