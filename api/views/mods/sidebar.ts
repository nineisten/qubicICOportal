
import Link from "../components/elements/link"
import Nav from "../components/elements/nav"
import Ulist from "../components/elements/ul"
import Li from "../components/elements/li"
import Div from "../components/elements/div"


const css = /*css*/`
    .sidebar{
        flex-grow:1;
        display:flex;
        flex-direction:column;
        max-width:max-content;
        align-items:center;
    }
    .sidebar nav{
        display:flex;
        flex-direction:column; 
        width:100%;
        align-items:center;
        justify-content:start;
        
        flex-grow:1;
        padding:0;
        margin:0;   
    }
    .sidebar ul{
        display:flex;
        gap:0;
        flex-direction:column;
        justify-content:start;
        align-items:flex-end;
        font-weight:bold;
        margin:0;
        padding:0;
        border-right:1pt solid var(--primary-color);
        padding-left:10pt;

    }
    .sidebar ul li{
        flex-grow:1;
        justify-content:center;
        border-bottom:1pt solid var(--primary-color);
        text-transform:uppercase;
        margin:0;
        padding:10pt 20pt;
        min-width: max-content;
    }
    
     @media screen and (max-width:63em){
        
        .sidebar{
            flex-direction:row;  
            max-width:100%;
            border-right:none;
            border-bottom:1pt solid var(--primary-color);           
            max-height:max-content ;
            align-items:center;
            justify-content:center;

            ul{
                flex-direction:row;
                border-left:1pt solid var(--primary-color);
                border-right:none;
                border-bottom:none;
                padding:0;
                li{
                    border-right:1pt solid var(--primary-color);
                    border-bottom:none;
                }
            }
            nav{
                width:100%;
                flex-direction:row;
                align-items:center;
                justify-content:center;
                height:min-content;
                padding:0;

            }
        }
        
    }
`
function Sidebar(){
    const html = /*html*/`
    <style>${css}</style>
    ${Div({
        content:/*html*/`
            <!-- start section-->
        ${Nav({
            content:/*html*/`
            ${Ulist({
                content:/*html*/`
                ${Li({
                    content:Link({
                        label:'ICO Portal',
                        href:'/'
                })})}
                 ${Li({
                    content:Link({
                        label:'Activity',
                        href:'/'
                })})}
                 ${Li({
                    content:Link({
                        label:'Launch',
                        href:'/'
                })})}
                `
            })}
            `
        })}
        <!-- end section-->
        `,class:'sidebar',
        id:'sidebar'
    })}
    `
    return html
}
export default Sidebar