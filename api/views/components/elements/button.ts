const Button = (label:string,...meta:{tag:string,val:string}[]) => {
const html = /*html*/`
    <button 
        ${
            meta.map((m)=>/*html*/`
            ${m.tag}="${m.val}"
            `
            ).join(' ')
        }
        class="btn
    "
    >
        ${label}
    </button>
`
return html
}
export default Button;