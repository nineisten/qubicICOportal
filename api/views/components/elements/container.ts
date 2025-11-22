const Container = (content:string,...meta:{tag:string,val:string}[]) => {
const html = /*html*/`
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