/**
 * Component PageHeader - Renders section eyebrow, title and description
 */
export function PageHeader({ eyebrow = '', title = '', desc = '', extraClass = '' }) {
    return `
    <div class="page-header ${extraClass}">
        ${eyebrow ? `<div class="page-eyebrow">${eyebrow}</div>` : ''}
        <h2 class="page-title">${title}</h2>
        ${desc ? `<p class="page-desc">${desc}</p>` : ''}
    </div>`;
}
