const COLS = 5;
const ROWS = 3;
const TOTAL_PIECES = COLS * ROWS; // 15 piezas

let currentImageSrc = "collage-productos-soya.svg";
let slotPieces = Array(TOTAL_PIECES).fill(null);
let selectedPieceId = null;

function getBackgroundPosition(pieceId) {
  const col = pieceId % COLS;
  const row = Math.floor(pieceId / COLS);
  const xPercent = COLS > 1 ? (col / (COLS - 1)) * 100 : 0;
  const yPercent = ROWS > 1 ? (row / (ROWS - 1)) * 100 : 0;
  return `${xPercent}% ${yPercent}%`;
}

function createPieceNode(pieceId) {
  const pieceEl = document.createElement("div");
  pieceEl.className = "puzzle15-piece";
  if (selectedPieceId === pieceId) {
    pieceEl.classList.add("selected");
  }
  pieceEl.draggable = true;
  pieceEl.dataset.pieceId = String(pieceId);
  pieceEl.style.backgroundImage = `url("${currentImageSrc}")`;
  pieceEl.style.backgroundPosition = getBackgroundPosition(pieceId);

  const tag = document.createElement("span");
  tag.className = "puzzle15-piece-tag";
  tag.textContent = String(pieceId + 1);
  pieceEl.appendChild(tag);

  pieceEl.addEventListener("dragstart", (e) => {
    selectedPieceId = pieceId;
    e.dataTransfer.setData("text/plain", String(pieceId));
  });

  pieceEl.addEventListener("click", (e) => {
    e.stopPropagation();
    selectedPieceId = selectedPieceId === pieceId ? null : pieceId;
    renderPuzzle15();
  });

  return pieceEl;
}

function movePieceToSlot(pieceId, targetSlotIdx) {
  if (pieceId === null || pieceId === undefined || isNaN(pieceId)) return;
  const existingSlot = slotPieces.indexOf(pieceId);
  const occupant = slotPieces[targetSlotIdx];

  if (existingSlot !== -1) {
    slotPieces[existingSlot] = occupant !== undefined ? occupant : null;
  }
  slotPieces[targetSlotIdx] = pieceId;
  selectedPieceId = null;
  renderPuzzle15();
}

function returnPieceToTray(pieceId) {
  const idx = slotPieces.indexOf(pieceId);
  if (idx !== -1) {
    slotPieces[idx] = null;
    selectedPieceId = null;
    renderPuzzle15();
  }
}

function renderPuzzle15() {
  const board = document.getElementById("p15Board");
  const tray = document.getElementById("p15Tray");
  const guideImg = document.getElementById("p15GuideImg");
  guideImg.src = currentImageSrc;

  board.innerHTML = "";
  let correctCount = 0;

  for (let slotIdx = 0; slotIdx < TOTAL_PIECES; slotIdx++) {
    const slotEl = document.createElement("div");
    slotEl.className = "puzzle15-slot";
    slotEl.dataset.slotIdx = String(slotIdx);

    const assignedPiece = slotPieces[slotIdx];
    if (assignedPiece !== null) {
      if (assignedPiece === slotIdx) correctCount++;
      slotEl.appendChild(createPieceNode(assignedPiece));
    } else {
      const numSpan = document.createElement("span");
      numSpan.className = "puzzle15-slot-num";
      numSpan.textContent = String(slotIdx + 1);
      slotEl.appendChild(numSpan);
    }

    slotEl.addEventListener("dragover", (e) => {
      e.preventDefault();
      slotEl.classList.add("drag-over");
    });
    slotEl.addEventListener("dragleave", () => {
      slotEl.classList.remove("drag-over");
    });
    slotEl.addEventListener("drop", (e) => {
      e.preventDefault();
      slotEl.classList.remove("drag-over");
      const pId = Number(e.dataTransfer.getData("text/plain"));
      movePieceToSlot(pId, slotIdx);
    });
    slotEl.addEventListener("click", () => {
      if (selectedPieceId !== null) {
        movePieceToSlot(selectedPieceId, slotIdx);
      } else if (assignedPiece !== null) {
        returnPieceToTray(assignedPiece);
      }
    });

    board.appendChild(slotEl);
  }

  tray.innerHTML = "";
  for (let pId = 0; pId < TOTAL_PIECES; pId++) {
    const trayCell = document.createElement("div");
    trayCell.className = "puzzle15-tray-item";
    trayCell.addEventListener("dragover", (e) => e.preventDefault());
    trayCell.addEventListener("drop", (e) => {
      e.preventDefault();
      const draggedId = Number(e.dataTransfer.getData("text/plain"));
      returnPieceToTray(draggedId);
    });

    if (!slotPieces.includes(pId)) {
      trayCell.appendChild(createPieceNode(pId));
    }
    tray.appendChild(trayCell);
  }

  const isComplete = correctCount === TOTAL_PIECES;
  board.classList.toggle("assembled", isComplete);
  document.getElementById("p15Count").textContent = `${correctCount} / ${TOTAL_PIECES} en su lugar`;
  document.getElementById("p15WinBox").style.display = isComplete ? "block" : "none";
}

function shufflePuzzle15() {
  slotPieces = Array(TOTAL_PIECES).fill(null);
  selectedPieceId = null;
  renderPuzzle15();
}

function solvePuzzle15() {
  slotPieces = Array.from({ length: TOTAL_PIECES }, (_, idx) => idx);
  selectedPieceId = null;
  renderPuzzle15();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("p15ShuffleBtn").addEventListener("click", shufflePuzzle15);
  document.getElementById("p15SolveBtn").addEventListener("click", solvePuzzle15);
  document.getElementById("p15ImageSelect").addEventListener("change", (e) => {
    currentImageSrc = e.target.value;
    shufflePuzzle15();
  });

  renderPuzzle15();
});
