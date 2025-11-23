const css = /*css*/`
    
`
function Link (url:string,content:string,...meta:{tag:string,val:string}[]){
    const html = /*html*/`
        <style>${css}</style>
        <a 
        href=${url}
        ${meta.map((m)=>/*html*/`
            ${m.tag}=${m.val}
        `
        ).join(' ')}
        >
            ${content}
        </a>
    `
    return html
}
export default Link;