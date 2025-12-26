import Button from "../components/elements/button"
import Link from "../components/elements/link"
import Section from "../components/elements/section"


const css = /*css*/`

`
function Connect(){
    const html = /*html*/`
    <style>${css}</style>
    ${Section({
        content:/*html*/`
            <!-- start section-->
            ${Button({
                label:'Wallet Connect',
                "hx-post":"views/mod/wallet-connect",
                "hx-target":"#top_header",
                'hx-oob-swap':'outerHTML: #connect_section',
                'hx-trigger':'click'
            })}
            <!-- end section-->
        `,class:'flex_columns',
        id:'connect_section'
    })}
    `
    return html
}
export default Connect