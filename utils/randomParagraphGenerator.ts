export const randomParagraphGenerator = (
  listWords: string[],
  howManyWordsToUse: number
): string[] => {
  const maxCount = listWords.length;
  const generatedParagraph = [];

  for (let step = 0; step <= howManyWordsToUse; step++) {
    const randomPosition = Math.floor(Math.random() * maxCount);
    generatedParagraph.push(listWords[randomPosition]);
  }

  return generatedParagraph;
};
