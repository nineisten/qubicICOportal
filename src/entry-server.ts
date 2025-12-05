import serve from '../api/views/pages/serve'
export function render(_url: string) {
  const html = /*html*/`
    <div hx-boost="true">
    ${serve(_url)}
  </div>
    `
  return { html }
}
