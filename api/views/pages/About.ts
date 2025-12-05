import Main from "../components/elements/main";

const css = /*css*/`
    
`
function About(){
    const html = /*html*/`
    ${Main(/*html*/`
        <style>${css}</style>
        <h1> This is the About page</h1>
    `),{tag:'hx-location',val:'/about'}}
    `
    return html.trim()
}
export default About;