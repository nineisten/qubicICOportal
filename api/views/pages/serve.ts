import AppFrame from "../mods/app_frame.ts"
import MainHeader from "../mods/main_header.ts";
import Main from "../components/elements/main.ts";
import Footer from "../components/elements/footer.ts";

const serve = ()=>{
    const html = /*html*/`
        ${AppFrame(/*html*/`
            <!--app starts here-->
            ${MainHeader(true)}
            ${Main(/*html*/` <!-- page content swaps here-->
            `,
            {tag:'id',val:'content_module'},
            {tag:'hx-get',val:'portal/views/page/home'},
            {tag:'hx-target',val:'#content_module'},
            {tag: 'hx-swap',val:'innerHTML'},
            {tag:'hx-trigger',val:'load'},
            {tag:'hx-push-url',val:'/'},
            )}
            ${Footer({year:2025,entity:'Qubic ICO'},/*html*/`
            `)}
            <!--app ends here-->
        `)}
    `
    return html
}
export default serve;

