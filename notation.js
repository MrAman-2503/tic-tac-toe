const notationElement = document.getElementById('playerNotation');

export function updatePlayerNotation(oTurn) {
    if (!notationElement) return;
    if (oTurn) {
        notationElement.innerHTML = '<span style="color:#1e90ff; font-weight:bold;">O</span> - Player 2\'s Turn';
    } else {
        notationElement.innerHTML = '<span style="color:#ff6347; font-weight:bold;">X</span> - Player 1\'s Turn';
    }
}
