/**
 * Component PageFooter - Renders footer brand string and page number
 */
export function PageFooter({ label = "GAJO's HOUSE • Hoài Nhơn", pageNum = "" }) {
    return `
    <div class="page-footer">
        <span>${label}</span>
        <span class="page-number">${pageNum}</span>
    </div>`;
}
