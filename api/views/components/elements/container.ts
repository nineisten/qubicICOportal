const css = /*css*/`
    .container{
    /* min-width:100dvw; */
    min-height:100dvh;
    display:flex;
    flex-direction:column;
    color:white;
    }

`
const Container = (content:string,...meta:{tag:string,val:string}[]) => {
const html = /*html*/`
    <style>${css}</style>
    <div 
        ${
            meta.map((m)=>/*html*/`
            ${m.tag}="${m.val}"
                `
            ).join(' ')
        }
        class="container"
    >
        ${content}
    </div>
`
return html
}
export default Container;