const css =/*css*/`
    nav {
        display:flex;
        align-items:center;
        justify-content: center;
        gap:10pt;
    }
    nav a{
        font-size:9pt;
        font-weight:600;
    }
`
function Nav (content:string,...meta:{tag:string,val:string}[]){
    const html = /*html*/`
        <style>${css}</style>
        <nav 
            ${meta.map((m)=>/*html*/`
                ${m.tag}=${m.val}
            `
            ).join(' ')}
        >
            ${content}
        </nav>
    `
    return html
}
export default Nav;