import Div from "../../components/elements/div";
import Button from "../../components/elements/button";
import Section from "../../components/elements/section";
const css = /*css*/`
    .ico_listing{
        border:1pt solid var(--primary-color);
        padding:10pt;
        margin:10pt;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
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
    .content_section{
        flex-grow:1;
        padding:10pt;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:flex-start;
    }
`
function Home(){
    const html = /*html*/`
        <style>${css}</style>
            ${Section({
                content:/*html*/`
                      ${Div({
                    content:/*html*/`
                            <p>Ticker </p>
                         
                            <p>Issuer</p>
                         
                            <p>Starting Epoch</p>
                        
                            <p>Ending Epoch</p>
                        
                            <p>status</p>
                       
                            <p>Price in Qubic</p>
                      
                            <p>...</p>
                    `,
                    id:'ico_single',
                    class:'ico_listing'
                })}
                 ${Div({
                    content:/*html*/`
                            <p>$ABC </p>
                         
                            <p>SELJRM...UEMFI</p>
                         
                            <p>194</p>
                        
                            <p>197</p>
                        
                            <p>Pending</p>
                       
                            <p>12345</p>
                      
                            ${Button({
                                label:'View ICO',
                                'hx-get':'/ICO',
                                'hx-target':'#dashboard_content',
                                'hx-swap':'innerHTML',
                                'hx-trigger':'click'
                            })}
                                                
                    `,
                    id:'ico_single',
                    class:'ico_listing'
                })}
                 ${Div({
                    content:/*html*/`
                            <p>$ABC </p>
                         
                            <p>SELJRM...UEMFI</p>
                         
                            <p>191</p>
                        
                            <p>194</p>
                        
                            <p>Active</p>
                       
                            <p>12345</p>
                      
                            ${Button({
                                label:'View ICO',
                                'hx-get':'/ICO',
                                'hx-target':'#dashboard_content',
                                'hx-swap':'innerHTML',
                                'hx-trigger':'click'
                            })}
                                                
                    `,
                    id:'ico_single',
                    class:'ico_listing'
                })}

                `
            })}
                  
            
    `
    return html.trim()
}
export default Home;