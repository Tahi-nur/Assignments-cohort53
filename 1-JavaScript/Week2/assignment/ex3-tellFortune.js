function selectRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const kids = selectRandomly(numKids);
  const partner = selectRandomly(partnerNames);
  const location = selectRandomly(locations);
  const job = selectRandomly(jobTitles);

  return `You will be a ${job} in ${location}, married to ${partner} with ${kids} kid(s).`;
}

function main() {
  const numKids = [0, 1, 2, 3, 'a dozen', '100', 'no', 'infinite'];
  const partnerNames = [
    'Taylor Swift',
    'Zoro',
    'A robot',
    'an alien',
    'Your best friend',
  ];
  const locations = [
    'Utrecht',
    'Mars',
    'Narnia',
    'Tokyo',
    'a cabin in the woods',
  ];
  const jobTitles = [
    'space pirate',
    'underwater basket weaver',
    'TikTok influencer',
    'zoo magician',
    'quantum developer',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
