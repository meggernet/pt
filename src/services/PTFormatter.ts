export function toPT(input: string, onePThasHours = 6) {
  const [weeks, pts, hours] = parseInput(input);
  const totalHours = calculateTotalHours([weeks, pts, hours], onePThasHours);
  const totalPT = totalHours / onePThasHours;

  return `${totalPT}PT`;
}

export function calculateTotalHours(input: number[], onePThasHours = 6) {
  return input[0] * 5 * onePThasHours + input[1] * onePThasHours + input[2];
}

export function parseInput(input: string) {
  // parse input into weeks, pts, hours
  // 1W => [1, 0, 0]
  // 1PT => [0, 1, 0]
  // 1H => [0, 0, 1]
  const inputAsUpper = input.toUpperCase();
  const weeks = inputAsUpper.match(/(\d+\.?\d*)W/)?.[1];
  const pts = inputAsUpper.match(/(\d+\.?\d*)D/)?.[1];
  const hours = inputAsUpper.match(/(\d+\.?\d*)H/)?.[1];

  const weeksAsNumber = (weeks && parseFloat(weeks.trim())) || 0;
  const ptsAsNumber = (pts && parseFloat(pts.trim())) || 0;
  const hoursAsNumber = (hours && parseFloat(hours.trim())) || 0;
  return [weeksAsNumber, ptsAsNumber, hoursAsNumber];
}
