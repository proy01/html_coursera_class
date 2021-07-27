let navButton = document.getElementById("nav_button");
navButton.addEventListener('blur', function (){
    if (window.innerWidth < 768) {
        new bootstrap.Collapse("#navbarSupportedContent", {
            toggle: true
        });
    }
});

(function (global) {
    let ajaxutils = {};

    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
    }

    ajaxutils.sendGetRequest = function (requestUrl, responseHandler, isJsonResponse) {
        let request = getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open("GET", requestUrl, true);
        request.send(null);
    };

    function handleResponse(request, responseHandler, isJsonResponse) {
        if ((request.readyState == 4) && (request.status == 200)) {
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }

            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText))
            } else {
                responseHandler(request.responseText)
            }
        }
    }

    global.ajaxutils = ajaxutils;

})(window);

(function (global) {
    let dc = {};
    let homeHtml = "../snippets/home.html";

    let insertHtml = function (selector, html) {
        let targetElement = document.querySelector(selector);
        targetElement.innerHTML = html
    };

    let showLoading = function (selector) {
        let html = "<div class='d-flex justify-content-center'>" +
            "<div class='spinner-border' role='status'>" +
            "<span class='visually-hidden'>Loading...</span> </div> </div>"
        insertHtml(selector, html)
    };
    document.addEventListener("DOMContentLoaded", function (event) {
        showLoading("#main-content");
        ajaxutils.sendGetRequest(homeHtml, function (responseText) {
            document.querySelector("#main-content")
                .innerHTML = responseText
        }, false);
    });
    global.dc = dc;
})(window);