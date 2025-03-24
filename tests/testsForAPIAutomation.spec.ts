import { test } from '@playwright/test'
import { addPet, updatePet, waitForDatabaseRefresh } from '../utils/api-helpers'
import { testPet, testPetEdited } from '../utils/test-data'

test.describe.serial('Tests for API automation', () => {
    
    test('add new pet and wait for database refresh to retrieve its data by API call', async ({request}) => {
        const petAdded = await addPet(request, testPet)
        console.log(petAdded)

        const petData = await waitForDatabaseRefresh(request, testPet.id, testPet.status);
        console.log(petData)    
    })

    test('update an existing pet and wait for database refresh to retrieve its data by API call', async ({request}) => {
        const petUpdated = await updatePet(request, testPetEdited)
        console.log(petUpdated)

        const petData = await waitForDatabaseRefresh(request, testPetEdited.id, testPetEdited.status);
        console.log(petData)
    })
})
