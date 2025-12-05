import Section from "../components/elements/section";

const css = /*css*/`
   
    
`
function PreFooter (content:string,...meta:{tag:string,val:string}[]){
    const html = /*html*/`
        <style>${css}</style>
        ${Section(/*html*/`
            ${content}
        `,...meta)}
    `
    return html.trim()
}
export default PreFooter;