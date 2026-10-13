export function header(siteName, menu) {
    return `
    <header class="header">
        <a class="header__logo" href="/">${siteName}</a>
        <nav class="header__nav">
            ${(menu ?? []).map(({ label, link }) => 
                `<a class="header__link" href="${link}">${label}</a>`
            ).join('')}
          
            <a class="header__link" href="#testimonials" data-f="menu[1]" data-src="common">Відгуки</a>
            <a class="header__link" href="#contacts" data-f="menu[2]" data-src="common">Контакти</a>
        </nav>
    </header>
    `.join();
}