import Link from "../components/elements/link"
import Section from "../components/elements/section"


const css = /*css*/`

`
function pageNotFound(){
    const html = /*html*/`
    <style>${css}</style>
    ${Section({
        content:/*html*/`
        </script>
            <!-- start section-->
            <h1>Page Not Found </h1>
            <h4>This page has been moved, or does not exist.</h4>
           
            <!-- end section-->
        `,
        class:'flex_columns'
    })}
    `
    return html
}
export default pageNotFound
