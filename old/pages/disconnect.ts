import Button from "../components/elements/button"
import Link from "../components/elements/link"
import Section from "../components/elements/section"


const css = /*css*/`

`
function Disconnect(){
    const html = /*html*/`
    <style>${css}</style>
    ${Section({
        content:/*html*/`
            <!-- start section-->
            ${Button({
                label:'Wallet Disconnect',
                "hx-post":"views/mod/disconnect",
                "hx-target":"#top_header",
                'hx-oob-swap':'innerHTML:#disconnect_section',
                'hx-trigger':'click'
            })}
            <!-- end section-->
        `,class:'flex_columns',
        id:'disconnect_section'
    })}
    `
    return html
}
export default Disconnect;