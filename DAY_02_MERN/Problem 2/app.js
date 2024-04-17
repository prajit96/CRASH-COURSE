
const axios = require('axios');

async function fetchUserData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    const userData = response.data;

    console.log('User Data:');
    userData.forEach(user => {
      console.log(`Name: ${user.name} | Email: ${user.email}`);
    });

    return userData; 
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error; 
  }
}

fetchUserData()
  .then(() => console.log('API call successful.'))
  .catch(err => console.error('API call failed:', err.message));
