import Container from "../components/elements/container.ts"

function AppFrame(content:string,...meta:{tag:string,val:string}[]){
const html = /*html*/`
    ${Container(/*html*/`
        ${content}
    `,...meta,{tag:'id',val:'app_frame'})}
`
    return html
}
export default AppFrame;  