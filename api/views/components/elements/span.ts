const css = /*css*/`
    .span{
        
    }

`
const Span = (content:string,...meta:{tag:string,val:string}[]) => {
const html = /*html*/`
    <div 
        
        ${
            meta.map((m)=>/*html*/`
            ${m.tag}="${m.val}"
                `
            ).join(' ')
        }
        class="span"
        style = ${css}
    >
        ${content}
    </div>
`
return html
}
export default Span;