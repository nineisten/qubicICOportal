//Stylesheet
const css = /*css*/`
    nav{
        
    }
`

//View template
function Nav(content:string,...meta:{tag:string,val:string}[]){
const html = /*html*/`
    <style>${css}</style>
    <nav 
        ${
            meta.map((m)=>/*html*/`
            ${m.tag}="${m.val}"
                `
            ).join(' ')
        }
    >
        ${content}
    </nav>
`
return html
}
export default Nav;