import namesJSON from '../JSON/names.json';
import memoize from './memoize'

let selectedName : string;

/**
 * pickRandomNameForCPU
 * @desc select random names from names.json file for start game
 * @return {string} Returns name.
 */
export function pickRandomNameForCPU()  {
  const randomIndex = Math.floor(Math.random() * namesJSON.length);
  selectedName = namesJSON[randomIndex];
  removeElementFromArray(namesJSON, selectedName);
  return selectedName;
};

/**
 * removeElementFromArray
 * @desc function remove element from array
 * @param {string[]} array 
 * @param {string} element which we want to remove from array
 * 
 */
const removeElementFromArray = (arr: string[], element: string) => {
  const index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
  }
};

/**
 * pickRandomNameForCPU
 * @desc function select last letter of name
 * @param {string} word the word whose last letter we want to choose
 * @return {string} Returns last letter of name.
 */
const endsWith = (word: string) => word[word.length -1];

/**
 * filterNameList
 * @desc function select last letter of name
 * @param {string[]} array of names
 * @param {string} lastLetter last letter of name.
 * @return  Returns names that match the last letter
 */
const filterNameList = (nameList: string[], lastLetter: string) => {
  const startEndRE = new RegExp(`^${lastLetter}.*$`)
  return nameList.filter((name) => name.match(startEndRE));
};

const memoizedFilterNameList = memoize(filterNameList);

/**
 * pickName
 * @desc select a random name from the list of names
 * @param {string[]} nameList of names
 * @return  Returns selected random name
 */
const pickName = (nameList: string[]) => {
  const name = nameList[Math.floor(Math.random() * nameList.length)];
  removeElementFromArray(namesJSON, name);
  return name;
}

/**
 * answer
 * @desc main function that selects a name for the computer
 * @param {string} word the word whose last letter we want to choose
 * @return  returns the selected name
 */
export async function answer(word: string) {
  const lastLetter :string =  endsWith(word);
  const pickedNames =  memoizedFilterNameList(namesJSON, lastLetter);
  return pickName(pickedNames);
}

/**
 * getProbability
 * @desc calculates probability
 * @return  what percentage of probability returns what happened
 */
export function getProbability() {
  let probable = Math.random() * 100;
  if (probable < 3) //3% 
    return 'wrongAnswer';
  else if (probable < 5) //5%
    return 'timesUp';
  else 
    return true;
}

