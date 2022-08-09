const css = {
    open: ` animate-drawerOpen`,
    close: `  translate-x-1/4 animate-drawerClose `,
    wrapper:    `w-1/6 float-right p-2 mr-1 rounded
                bg-white text-sm border
                dark:bg-slate-800 dark:border-slate-500 dark:text-white
                `,
    h3: `border-b dark:border-slate-600`,
    switch: `text-gray-600 dark:bg-slate-800 dark:text-amber-300 w-1/6 cursor-pointer`,
    li: `flex justify-between w-3/4 items-center p-1 text-xs`,
    ul: `flex flex-col items-center`
}

module.exports = css;