# Routes
**Simple, straight-forward**

- Server routes: /portal - root 
    - /api - client route
    - /auth - private route for user Authentication
    - /views - template distro
        - /pages - page templates
        - /mods - module templates
- browser routes are hanldled with htmx like shown below
- example request:

~~~typescript
    `${$links.map((i,l)=>/*html*/`
        ${li(`
            ${link(l.url,/*html*/`
                ${l.link_name}
                `,
                {tag:'id',val:`link_${i}`},
                //... more attributes here
                {tag:'hx-get',val:'/portal/views/pages/about'},
                {tag:'hx-swap',val:'inner-html'},
                {tag:'hx-trigger',val:'click'},
                {tag:'hx-target','#main_content'},
                {tag:'hx-push-url',val:'/portal/views/pages/about'}
            )}`
        )}`
    )}`

~~~