/**
 * Component DestinationCard - Renders local destination item in 4x2 grid
 */
export function DestinationCard(item) {
    return `
    <div class="exp-card-flip">
        <div class="exp-card-img-wrap">
            <span class="exp-card-badge">${item.num}</span>
            <img src="${item.img}" alt="${item.title}" style="object-position: ${item.position || 'center'};">
        </div>
        <div class="exp-card-flip-info">
            <h5>${item.title}</h5>
            <p>${item.sub}</p>
        </div>
    </div>`;
}
