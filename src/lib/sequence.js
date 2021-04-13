const sequence = [0, 1];
for (let i = 2; i < 500; i += 1) {
  const thisNum = sequence[i - 2] + sequence[i - 1];
  sequence.push(thisNum);
}

export default sequence;
