import { test, expect, request } from '@playwright/test'
import { addPet, getPetById } from '../utils/api-helpers'
import { testPet } from '../utils/test-data'

test.describe('Tests for API automation', () => {
    
    test('add new pet and retrieve its data by API call', async ({request}) => {
        await addPet(request, testPet)

        const petData = await getPetById(request, testPet.id)
        console.log(petData)        
    })

    test.skip('update an existing pet', async ({request}) => {
        
        // code here

    })

})