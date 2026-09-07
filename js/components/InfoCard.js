/**
 * Component InfoCard - List items & card helpers
 */
export function InfoCardList({ items = [] }) {
    return `
    <ul class="flip-list">
        ${items.map(item => `
            <li>
                ${item.num ? `<div class="flip-list-num">${item.num}</div>` : ''}
                ${item.icon ? `<i class="${item.icon} flip-checklist-icon"></i>` : ''}
                <div>
                    <strong>${item.title}</strong>
                    <p>${item.desc}</p>
                </div>
            </li>
        `).join('')}
    </ul>`;
}
