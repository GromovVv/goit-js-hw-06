import users from './users.js';
return users
//flattens arrays user.skills into one array
.reduce((allSkills, user) => {
  return allSkills.concat(user.skills)
}, [])
// removes duplicates
.reduce((filteredSkills, skill) => {
  if (filteredSkills.indexOf(skill) === -1) {
   filteredSkills.push(skill)
  }
  return filteredSkills
}, [])
// sorts skills alphabetically
.sort()