const css = {
    wrapper: `font-mono h-screen border-box relative`,
    wrapperDark: `dark font-mono h-screen border-box`,
    isDark: window.matchMedia('(prefers-color-scheme: dark)').matches
}

module.exports = css;