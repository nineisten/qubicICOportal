import Div from "../components/elements/div"
const css = /*css*/`
    .chaindata{
        text-transform:uppercase;
        display:flex;
        justify-content:center;
        align-items:center;
        border-top:1pt solid var(--primary-color);
    }
    .dataBox{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-evenly;
        gap:5pt;
        font-size:10pt;
        padding:10pt;
    }
    .borders{

        border-right:1pt solid var(--primary-color);
        border-left:1pt solid var(--primary-color)

    }
`
export default function Chaindata (){
    
    const html = /*html*/`
        <style>${css}</style>
        ${Div({
            content:/*html*/`
                <!-- start div-->
                    ${Div({
                        content:/*html*/`
                            <!-- start div-->
                                <p>Current Epoch:</p> 
                                <p>191</p>
                            
                            <!-- end div-->
                        `,class:'dataBox'
                    })}
                     ${Div({
                        content:/*html*/`
                            <!-- start div-->
                                <p>Total Funds Raised:</p> 
                                <p>290,929,354,001 Qubic</p>
                            <!-- end div-->
                        `,class:'dataBox borders'
                    })}
                    ${Div({
                        content:/*html*/`
                            <!-- start div-->
                                <p>projects launched:</p> 
                                <p>124</p>
                            <!-- end div-->
                        `,class:'dataBox'
                    })}
                <!-- end div-->
            `,
            class:'chaindata'
        })}
    `
    return html.trim()
}