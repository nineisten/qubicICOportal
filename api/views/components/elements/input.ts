const css = /*css*/`
    
`
function Input (content:string,...meta:{tag:string,val:string}[]){
    const html = /*html*/`
        <style>${css}</style>
        <input 
        ${meta.map((m)=>/*html*/`
            ${m.tag}=${m.val}
        `
        ).join(' ')}
        >
            ${content}
        </input>
    `
    return html
}
export default Input;