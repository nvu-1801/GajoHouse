/**
 * Component InfoCard - Editorial List with Horizontal Dividers
 */
export function InfoCardList({ items = [] }) {
    return `
    <ul class="editorial-list">
        ${items.map(item => `
            <li class="editorial-list-item">
                ${item.num ? `<div class="editorial-num-badge">${String(item.num).padStart(2, '0')}</div>` : ''}
                ${item.icon ? `<div class="editorial-check-badge"><i class="${item.icon}"></i></div>` : ''}
                <div class="editorial-item-content">
                    <div class="editorial-item-title">${item.title}</div>
                    <div class="editorial-item-desc">${item.desc}</div>
                </div>
            </li>
        `).join('')}
    </ul>`;
}
