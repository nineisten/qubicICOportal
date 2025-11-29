
const css = /*css*/`
    button{
        padding:5pt 10pt;
        font-size:9pt;
        font-weight:600;
        box-sizing:border-box;
        text-transform:uppercase;
        border-radius:5pt;
        border:none;
        min-width: max-content;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        gap:5pt;
    }
`
function Button(label:string,...meta:{tag:string,val:string}[]){
const html = /*html*/`
    <style>${css}</style>
    <button 
        ${
            meta.map((m)=>/*html*/`
            ${m.tag}="${m.val}"
            `
            ).join(' ')
        }
        class="btn"
    >
        ${label}
    </button>
`
return html.trim()
}
export default Button;