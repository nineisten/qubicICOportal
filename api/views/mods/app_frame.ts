import Container from "../components/elements/container.ts"

const AppFrame = (content:string,...meta:{tag:string,val:string}[]) => {
const html = /*html*/`
    ${Container(/*html*/`
        ${content}
    `,{tag:'id',val:'app_frame'},...meta)}
`
    return html
}
export default AppFrame;  