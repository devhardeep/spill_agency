/* eslint-disable no-undef */

exports.onInitialClientRender = () => {
    setTimeout(function () {
        document.body.style.display = 'unset'
        console.log("resized")
        window.dispatchEvent(new Event('resize'));
    }, 100)
}

