export default function () {
    // wrapper
    var wrapper = document.createElement('div')
    wrapper.classList.add('smit-store')
    wrapper.setAttribute('id', 'smit-store')

    // — container
    var container = document.createElement('div')
    container.classList.add('smit-store-container')

    // —— header
    var header = document.createElement('div')
    header.classList.add('smit-store-header')

    var headerOverviewTab = document.createElement('button')
    headerOverviewTab.classList.add('smit-store-tab-overview')
    headerOverviewTab.appendChild(document.createTextNode('Overzicht'))
    header.appendChild(headerOverviewTab)

    var headerDeliveryTab = document.createElement('button')
    headerDeliveryTab.classList.add('smit-store-tab-delivery')
    headerDeliveryTab.appendChild(document.createTextNode('Levering'))
    header.appendChild(headerDeliveryTab)

    var headerReviewTab = document.createElement('button')
    headerReviewTab.classList.add('smit-store-tab-review')
    headerReviewTab.appendChild(document.createTextNode('Controle'))
    header.appendChild(headerReviewTab)

    var headerCheckoutTab = document.createElement('button')
    headerCheckoutTab.classList.add('smit-store-tab-checkout')
    headerCheckoutTab.appendChild(document.createTextNode('Afgerond'))
    header.appendChild(headerCheckoutTab)

    // —— body
    var body = document.createElement('div')
    body.classList.add('smit-store-body')

    // —— footer
    var footer = document.createElement('div')
    footer.classList.add('smit-store-footer')

    var buttonContinue = document.createElement('button')
    buttonContinue.classList.add('smit-store-button-continue')
    buttonContinue.appendChild(document.createTextNode('Verder winkelen'))
    footer.appendChild(buttonContinue)

    var buttonClear = document.createElement('button')
    buttonClear.classList.add('smit-store-button-clear')
    buttonClear.appendChild(document.createTextNode('Wis winkelwagen'))
    footer.appendChild(buttonClear)

    container.appendChild(header)
    container.appendChild(body)
    container.appendChild(footer)
    wrapper.appendChild(container)
    document.body.appendChild(wrapper)

    // styles
    var css = '.smit-store{pointer-events:none}'
    css += '.smit-store-container{width:100vw;height:100vh;background:#fff;position:fixed;top:0;left:0;right:0;bottom:0}'
    css += '.smit-store-header{display:flex;width:100%;min-height:50px;background-color:#999}'
    css += '.smit-store-body{width:100%;height:50px;background-color:#777}'
    css += '.smit-store-footer{width:100%;height:50px;background-color:#888}'
    css += '.smit-store-button-continue{width:100%;height:50px;background-color:#000;color:#fff;outline:none}'
    css += '.smit-store-button-clear{width:100%;height:50px;background-color:#000;color:#fff;outline:none}'
    css += '.smit-store-tab-overview{width:100%;height:50px;background-color:#000;color:#fff;outline:none}'
    css += '.smit-store-tab-delivery{width:100%;height:50px;background-color:#000;color:#fff;outline:none}'
    css += '.smit-store-tab-review{width:100%;height:50px;background-color:#000;color:#fff;outline:none}'
    css += '.smit-store-tab-checkout{width:100%;height:50px;background-color:#000;color:#fff;outline:none}'
    var styles = document.createElement('style')
    styles.setAttribute('type', 'text/css')

    if (styles.styleSheet) {
        styles.styleSheet.cssText = css
    } else {
        styles.appendChild(document.createTextNode(css))
    }

    document.getElementsByTagName('head')[0].appendChild(styles)
}
