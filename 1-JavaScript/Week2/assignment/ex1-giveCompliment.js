export function giveCompliment(name) {
  const compliments = [
    'amazing',
    'brilliant',
    'awesome',
    'fantastic',
    'kind',
    'thoughtful',
    'creative',
    'talented',
    'generous',
    'inspiring',
  ];

  const randomIndex = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[randomIndex];

  return `You are ${compliment}, ${name}!`;
}

function main() {
  const myName = 'Tahinur';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Utrecht';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
