

export function render(_url: string) {
  const html = /*html*/`
    <div 
      id="app_frame" 
      class="container"
    >
    <header id="greeting" hx-get="/api/hello" hx-trigger="click" hx-target="#greeting" hx-swap="innerHTML" hx-push-url="hello">
      Hello World
    </header>
      
    </div>
  `
  return { html }
}
