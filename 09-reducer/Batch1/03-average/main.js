const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

// const average = scores.reduce((acc,item) => acc+(item.score*item.weight),0)

const summarizeObj = scores.reduce((acc, item) => {
  acc.totalSum += item.score*item.weight;
  acc.totalW += item.weight
  return acc
}, {totalSum:0,totalW:0});
