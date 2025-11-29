const css = /*css*/`
    blockquote{
        padding:10pt;
    }
`
function Blockquote(content:string,...meta:{tag:string,val:string}[]) {
    const html = /*html*/`
        <style>${css}</style>
        <blockquote
            ${
                meta.map((m)=>/*html*/`
                ${m.tag}="${m.val}"
                    `
                ).join(' ')
            }
        >
            ${content}
        </blockquote>
    `
    return html
}
export default Blockquote;