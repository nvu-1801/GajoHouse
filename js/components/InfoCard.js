/**
 * Component InfoCard - List items & card helpers with borderless luxury design
 */
export function InfoCardList({ items = [] }) {
    return `
    <ul class="flip-list">
        ${items.map(item => `
            <li>
                ${item.num ? `<div class="flip-list-num">${item.num}</div>` : ''}
                ${item.icon ? `<div class="flip-checklist-wrap"><i class="${item.icon}"></i></div>` : ''}
                <div>
                    <strong>${item.title}</strong>
                    <p>${item.desc}</p>
                </div>
            </li>
        `).join('')}
    </ul>`;
}
