import Link from "../../components/elements/link"
import Form from "../../components/elements/form"
import Section from "../../components/elements/section"



const css = /*css*/`

`
function Dashboard(){
    const html = /*html*/`
    <style>${css}</style>
    ${Section({
        content:/*html*/`
            <!-- start section-->
             hello
            ${Form({
                content:/*html*/`
                    <!--start form-->
                    hello?
                    <!--end form-->
                `
            })}
            
            <!-- end section-->
        `,class:'flex_columns'
    })}
    `
    return html
}
export default Dashboard;