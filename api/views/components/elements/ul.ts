const css = /*css*/`
    
`
function Ul (content:string,...meta:{tag:string,val:string}[]){
    const html = /*html*/`
        <style>${css}</style>
        <ul 
        ${meta.map((m)=>/*html*/`
            ${m.tag}=${m.val}
        `
        ).join(' ')}
        >
            ${content}
        </ul>
    `
    return html
}
export default Ul;