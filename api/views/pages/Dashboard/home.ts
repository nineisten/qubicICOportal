import Link from "../../components/elements/link"
import Form from "../../components/elements/form"
import Section from "../../components/elements/section"
import Sidebar from "../../mods/sidebar"
import Div from "../../components/elements/div"
import Button from "../../components/elements/button"
import DashFrame from "../../mods/dash_frame"



const css = /*css*/`
    .dashFrame{
        display:flex;
        flex-direction:row;
        flex-grow:1;
    }
    .list{

    }
    .ico_listing{
        border:1pt solid var(--primary-color);
        padding:10pt;
        margin:10pt;
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        border-radius:10pt;
        gap:10pt;
        font-size:9pt;
        font-weight:bold;
        text-transform:uppercase;
        
    }
   .ico_listing div{
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            min-width:max-content;
        }
`
function Dashboard(){
    const html = /*html*/`
    <style>${css}</style>
    ${Div({
        content:/*html*/`
        <!-- start dash frame content-->
        ${Sidebar()}
        ${Section({
            content:/*html*/`
                <!-- start section-->
                ${Div({
                    content:/*html*/`
                            Ticker
                         
                            Issuer
                         
                            Starting Epoch
                        
                            Ending Epoch
                        
                            status
                       
                            Price in Qubic
                      
                            Buy Link
                       
                    `,
                    id:'ico_single',
                    class:'ico_listing'
                })}
            
            <!-- end section-->
            `,class:'flex_columns'
            })}
        <!-- end dash frame content-->
        `,class:'dashFrame'
    })}
    `
    return html
}
export default Dashboard;

//  ${Button({
//                             label:'View ICO Details',
//                             'hx-get':'/ICO/single',
//                             'hx-target':'#content_module',
//                             'hx-swap':'innerHTML'
//                         })}