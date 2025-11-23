const css = /*css*/`
    footer{
        color:white;
        padding:10pt;
        background-color:darkcyan;
        text-align: center;
    }

`
const Footer = (copyright:{year:number,entity:string},content:string,...meta:{tag:string,val:string}[])=>{
    const {year,entity} = copyright
    const html = /*html*/`
        <style>${css}</style>
        <footer 
            ${meta.map((m)=>/*html*/`
                ${m.tag}=${m.val}
                    `).join(' ')}
        >
        ${content}
        &copy;${year}${entity}
        </footer>
    `
    return html
}
export default Footer;