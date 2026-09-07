/**
 * Component PageContainer - Generates standardized HTML page wrapper
 * complying with rules in AGENTS.md & GEMINI.md
 */
export function PageContainer({ density = 'soft', extraClass = '', bodyHTML = '', pageNum = '', footerLabel = "GAJO's HOUSE • Hoài Nhơn" }) {
    if (density === 'hard') {
        return `
        <div class="page page-cover ${extraClass}" data-density="hard">
            ${bodyHTML}
        </div>`;
    }

    return `
    <div class="page ${extraClass}" data-density="${density}">
        <div class="page-content">
            <div class="page-body-center">
                ${bodyHTML}
            </div>
            <div class="page-footer">
                <span>${footerLabel}</span>
                <span class="page-number">${pageNum}</span>
            </div>
        </div>
    </div>`;
}
