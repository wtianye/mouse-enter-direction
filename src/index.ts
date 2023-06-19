const card = document.querySelector(".box") as HTMLDivElement;

const DIRECTION = {
  LEFT: "左",
  RIGHT: "右",
  UP: "上",
  DOWN: "下",
} as const;

type DirectionType = (typeof DIRECTION)[keyof typeof DIRECTION];

const renderCard = (direction?: DirectionType) => {
  card.innerText = direction || "";
};
let pointerPosition: { x: number; y: number } | null = null;
document.addEventListener("mousemove", (e) => {
  pointerPosition = { x: e.clientX, y: e.clientY };
});
card.addEventListener("mouseenter", () => {
  if (pointerPosition === null) {
    return;
  }
  const { x, y, width, height } = card.getBoundingClientRect();
  if (pointerPosition.x < x) {
    renderCard(DIRECTION.LEFT);
  } else if (pointerPosition.y < y) {
    renderCard(DIRECTION.UP);
  } else if (pointerPosition.x > x + width) {
    renderCard(DIRECTION.RIGHT);
  } else if (pointerPosition.y > y + height) {
    renderCard(DIRECTION.DOWN);
  }
});
card.addEventListener("mouseleave", () => {
  renderCard();
});
