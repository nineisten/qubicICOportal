
const css = /*css*/`
    button{

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
        class="btn
    "
    >
        ${label}
    </button>
`
return html
}
export default Button;