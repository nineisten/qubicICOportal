# Routes
**Simple, straight-forward**

- browser routes are hanldled with htmx like shown below
- example request:

~~~typescript
    `${$links.map((i,l)=>/*html*/`
        ${li(`
            ${link({
                content:/*html*/`
                <!-- start html-->
                ${l.link_name}
                <!-- end html-->
                `,
               'id':`link_${i}`, 
                //... more attributes here
               'hx-get':'/link/to/template',
               'hx-swap':'inner-html',
               'hx-trigger':'click',
               'hx-target','#main_content',
               'hx-push-url':`${l.url}`
            }
                
            )}`
        )}`
    )}`

~~~