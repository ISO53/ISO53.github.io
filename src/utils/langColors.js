export const LANG_COLORS = {
    Java: '#b07219',
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    CSS: '#563d7c',
    HTML: '#e34c26',
    'C++': '#f34b7d',
    C: '#555555',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051',
    Vue: '#42b883',
    'Jupyter Notebook': '#DA5B0B',
    default: '#8b0000',
}

export function getLangColor(lang) {
    if (!lang) return LANG_COLORS.default
    return LANG_COLORS[lang] || LANG_COLORS.default
}
