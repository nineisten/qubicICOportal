import Link from "../../components/elements/link"
import Section from "../../components/elements/section"


const css = /*css*/`

`
function Contact(){
    const html = /*html*/`
    <style>${css}</style>
    ${Section({
        content:/*html*/`
            <!-- start section-->
            
            
            <!-- end section-->
        `,class:'flex_columns'
    })}
    `
    return html
}
export default Contact