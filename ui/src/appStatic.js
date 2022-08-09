const css = {
    wrapper: `font-mono h-screen border-box`,
    wrapperDark: `dark font-mono h-screen border-box`,
    isDark: window.matchMedia('(prefers-color-scheme: dark)').matches
}

module.exports = css;