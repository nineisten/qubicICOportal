const css = /*css*/`
    
`
function Form (content:string,...meta:{tag:string,val:string}[]){
    const html = /*html*/`
        <style>${css}</style>
        <form 
        ${meta.map((m)=>/*html*/`
            ${m.tag}=${m.val}
        `
        ).join(' ')}
        >
            ${content}
        </form>
    `
    return html
}
export default Form;