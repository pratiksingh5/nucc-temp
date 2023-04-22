import { API } from 'aws-amplify';

// Define your API endpoint and resource path
const apiName = 'myaddressapi';
const path = '/address';

// Create a new item
async function createAddress(addressBody: string, email: string) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // your React app URL
        // any other headers you need
      },
      queryParams: {
          email: {email}
      },
      body: JSON.stringify(addressBody)
  }
    const response = await API.post(apiName, path, { body: addressBody });
    return response;
  } catch (error) {
    console.error(error);
  }
}

// Retrieve an item by ID
async function getAddressById(id: number, email: string) {
  try {
    const options = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // your React app URL
          // any other headers you need
        },
        queryParams: {
            email: {email}
        }
    }
    
    const response = await API.get(apiName, `${path}/${id}`, options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// Update an item by ID
async function updateAddress(id: number, email: string, addressBody:string) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // your React app URL
        // any other headers you need
      },
      queryParams: {
          email: {email}
      },
      body: JSON.stringify(addressBody)
    }
    const response = await API.put(apiName, `${path}/${id}`, options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// Delete an item by ID
async function deleteAddress(id: number, email: string) {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // your React app URL
        // any other headers you need
      },
      queryParams: {
          email: {email}
      }
  }
    const response = await API.del(apiName, `${path}/${id}`, options);
    return response;
  } catch (error) {
    console.error(error);
  }
}
