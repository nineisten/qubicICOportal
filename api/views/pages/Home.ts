import Button from "../components/elements/button"
import Main from "../components/elements/main"
import Section from "../components/elements/section"
import Banner from "../mods/banner"


const css = /*css*/`

`
function Home(){
    const html = /*html*/`
    <style>${css}</style>
    ${Main(/*html*/`
        <!--start-->
        ${Section(/*html*/`
            <!--start-->
            ${Banner(/*html*/`
                <h1>Qubic ICO</h1>
                <h5>A standalone Token Launch utility.</h5> 
                ${Button('Get Started')}
            `)}
            <!--end-->
        `,{tag:'class',val:'columns full'}
        )}
        ${Section(/*html*/`
            <!--start-->
           
            <!--end-->
        `,{tag:'class',val:'columns full'}
        )}
        <!--end-->
    `,{tag:'hx-location',val:`/`})}
    `
    return html.trim()
}
export default Home