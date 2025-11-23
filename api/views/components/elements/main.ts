//Stylesheet
const css = /*css*/`
    main{
        flex-grow: 1;
    }
`

//View template
function Main(content:string,...meta:{tag:string,val:string}[]){
const html = /*html*/`
    <style>${css}</style>
    <main 
        ${
            meta.map((m)=>/*html*/`
            ${m.tag}="${m.val}"
                `
            ).join(' ')
        }
    >
        ${content}
    </main>
`
return html
}
export default Main;