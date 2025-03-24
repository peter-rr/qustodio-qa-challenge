import { APIRequestContext, expect } from '@playwright/test'

// Add a new pet to the store
export async function addPet(request: APIRequestContext, pet: any) {
    const response = await request.post('https://petstore.swagger.io/v2/pet', { data: pet })
    expect(response.status()).toEqual(200)
  
    return response.json();
}

// Find pet by ID
export async function getPetById(request: APIRequestContext, petId: number) {
    const response = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`)
    expect(response.status()).toEqual(200)

    return response.json();
}

// Update an existing pet
export async function updatePet(request: APIRequestContext, pet: any) {
    const response = await request.put('https://petstore.swagger.io/v2/pet', { data: pet })
    expect(response.status()).toEqual(200)

    return response.json();
}

// Since the API database takes some time to refresh, we can repeatedly check the API until the expected data appears.
export async function waitForDatabaseRefresh(request: APIRequestContext, petId: number, petStatus: string, maxRetries = 10, delay = 1000) {
    for (let i = 0; i < maxRetries; i++) {
        const petData = await getPetById(request, petId);
        if (petData && petData.status === petStatus) {
            return petData;
        }
        await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
    }
    throw new Error('Pet update did not reflect in the database within the expected time');
}
