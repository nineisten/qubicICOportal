const Footer = (content:string,...meta:{tag:string,val:string}[]) => {
const html = /*html*/`
    <footer
        ${
            meta.map((m)=>/*html*/`
            ${m.tag}="${m.val}"
                `
            ).join(' ')
        }
        class="footer"
    >
        ${content}
    </footer>
`
return html
}
export default Footer;