describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("header contains recipe heading with a message that there are no recipes", () => {
        cy.get('.App-header').should('contain', 'My Recipes')
        cy.get('p').should('contain', 'There are no recipes to list yet... #GrowthMindset')
    })

    it('contains a button that says "Add Recipe" beneath the "My Recipes" heading that when clicked opens a form', ()=>{
        // eslint-disable-next-line cypress/no-assigning-return-values
        const addRecipeButton = cy.get('#add-recipe')
        addRecipeButton.click()

        expect(cy.get('#recipe-form')).toExist()
    })

    it('contains a form with fields "Recipe Name" and "Recipe Instructions" after clicking the "Add Recipe" button', ()=>{
        // eslint-disable-next-line cypress/no-assigning-return-values
        const addRecipeButton = cy.get('#add-recipe')
        addRecipeButton.click()

        expect(cy.get('input[name="newRecipeName"]')).toExist();
        expect(cy.get('textarea[name="newRecipeInstructions"]')).toExist();
    })

    it("displays a recipe name under the 'My Recipes' heading after it has been added through the 'Add Recipe' form",()=>{
        // eslint-disable-next-line cypress/no-assigning-return-values
        const addRecipeButton = cy.get('#add-recipe')
        // eslint-disable-next-line jest/valid-expect-in-promise
        addRecipeButton.click().then(()=>{
            cy.get('input[name="newRecipeName"]').type("Tofu Scramble Tacos")
            cy.get('textarea[name="newRecipeInstructions"]').type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
            cy.get('input[type="submit"]').click()
            // eslint-disable-next-line jest/valid-expect-in-promise
            cy.get('ul').then(()=>{
                cy.get('ul').contains("Tofu Scramble Tacos")
            })
        })
    })

})

