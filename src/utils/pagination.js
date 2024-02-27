export function  splitRangeIntoIntervals(min, max, numIntervals) {
    const intervals = [];
    const intervalSize = Math.ceil((max - min) / numIntervals);
  
    let start = min;
    for (let i = 0; i < numIntervals; i++) {
      const end = Math.min(start + intervalSize - 1, max);
      intervals.push([start, end]);
      start = end + 1;
    }
  
    return intervals;
  }