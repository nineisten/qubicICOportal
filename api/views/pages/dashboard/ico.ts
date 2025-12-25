import Card from "../../mods/card"
import Div from "../../components/elements/div"
import Section from "../../components/elements/section";
import Badge from "../../mods/badge";
import Button from "../../components/elements/button";


const css = /*css*/`
   
   .shop_card{
    min-width:50%;
   }
`
function ICO(){
    const html = /*html*/`
        <style>${css}</style>
        ${Section({
                content:/*html*/`
                <!--start section 2-->
                    ${Card({
                        card_header:/*html*/`
                        <!-- start card header-->
                            <h5> Issuer : SELJRM...UEMFI</h5> 
                            ${Badge({
                                label:'pending',
                                class:'pending'
                            })}
                        <!-- end card header-->
                        `,
                        card_body:/*html*/`
                        <!-- start card body-->
                            <h1>$QST</h1>
                         <!-- end card body-->
                        `,
                        card_footer:/*html*/`
                        <!-- start card footer-->
                        ${Div({
                            content:/*html*/`
                            <!-- start tiles-->
                            ${Div({
                                content:/*html*/`
                                <!-- start tile-->
                                    <h4>Max-Supply:</h4>
                                    <span class="secondary">1b<span>
                                    <!-- end tile-->
                                `,
                                class:'tile'
                            })}
                            ${Div({
                                content:/*html*/`
                                <!-- start tile-->
                                <h4>Price:</h4><span class="active"> 777 Qubic</span>
                                <!-- start tile-->
                                `,
                                class:'tile',
                                })}
                                <!-- end tiles-->
                                `,
                                class:'tiles'
                            })}
                                   
                        ${Button({
                                label:'Purchase Tokens',
                                class:'fullButton'
                        })}  
                            <!-- end card footer-->
                            `,
                            class:'shop_card'
                    })}
                <!--end section 2-->
                `,class:'flex_columns'
             })}       
       
    `
    return html
    }
export default ICO;