// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching (array, name){
    const sameName = array.filter(driver => driver.toUpperCase() === name.toUpperCase())
    return sameName;
}

function fuzzyMatch (array, name){
  const sameLetter = array.filter(letter => letter[0] === name[0]);
  return sameLetter;
}
 
function matchName (array, name){
    const exactName = array.filter(person => person.name === name);
    return exactName;
}