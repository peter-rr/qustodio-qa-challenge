import { APIRequestContext, expect, request } from '@playwright/test'

// Add a new pet to the store
export async function addPet(request: APIRequestContext, pet: any) {
    const response = await request.post('https://petstore.swagger.io/v2/pet', { data: pet })    
    expect(response.status()).toEqual(200)
  
    return response;
}

// Find pet by ID
export async function getPetById(request: APIRequestContext, petId: number) {
    const response = await request.get(`https://petstore.swagger.io/v2/pet/${petId}`)
    expect(response.status()).toEqual(200)

    return response.json();
}
