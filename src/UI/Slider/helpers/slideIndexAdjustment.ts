export function slideIndexAndjustment(
  newSlideIndex: number,
  minIndex: number,
  maxIndex: number
) {
  if (newSlideIndex > maxIndex) {
    newSlideIndex = minIndex;
  } else if (newSlideIndex < minIndex) {
    newSlideIndex = maxIndex;
  }

  return newSlideIndex;
}
