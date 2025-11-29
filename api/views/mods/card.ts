import Div from "../components/elements/div";
import Label from "../components/elements/label";
const css = /*css*/`
    
`
function Card( label:string,
    content:string,
    footer:string,
    meta:{tag:string,val:string}[])
{
    const html = /*html*/`
        <style>${css}</style>
        ${Div(/*html*/`
        <!--start-->
            ${Div(/*html*/`
                <!--start-->
                ${Label(label)}
                <!--end-->
            `,{tag:'class',val:'card_heading'} )}
            ${Div(content,{tag:'class',val:'card_content'})}
            ${Div(footer,{tag:'class',val:'cart_footer'})}
         <!--end-->
            `,...meta)}
    `
    return html.trim()
}
export default Card;