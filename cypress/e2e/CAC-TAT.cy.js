 describe('Central de Atendimento ao Cliente TAT', () => {
     beforeEach(() => { 
          cy.visit('./src/index.html')
     })

  it('verifica o título da aplicação', () => {
     cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

it('preenche os campos obrigatórios e envia o formulário', () => {
  const longText = Cypress._.repeat('Às vezes, tudo o que precisamos é de um momento de silêncio para organizar os pensamentos.' , 10)

     cy.get('#firstName').type('Nathan')
     cy.get('#lastName').type('Mesquita')
     cy.get('#email').type('Mesqquita@gmail.com')
     cy.get('#open-text-area').type(longText ,{delay:0})
     cy.contains('button', 'Enviar').click()

   cy.get('.success').should('be.visible')
  }) 

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
   

    cy.get('#firstName').type('Nathan')
     cy.get('#lastName').type('Mesquita')
     cy.get('#email').type('Mesqquita dadas')
     cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

   cy.get('.error').should('be.visible')
   //   cy.get('.failure').should('not.be.equal', 'Valide os campos obrigatórios!')

  })


  it('Valor não numerico no campo telefone', () => {
    
     cy.get('#phone')
      .type('abcde')
        .should('have.value', '')
       
  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
   

    cy.get('#firstName').type('Nathan')
     cy.get('#lastName').type('Mesquita')
     cy.get('#email').type('Mesqquita dadas')
     cy.get('#open-text-area').type('teste')
     cy.get('#phone-checkbox').check()
     cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
   

    cy.get('#firstName').type('Nathan').should('have.value', 'Nathan')
        .clear().should('have.value', '')
     cy.get('#lastName').type('Mesquita').should('have.value', 'Mesquita')
        .clear().should('have.value', '')
     cy.get('#email').type('Mesqquita@dadas').should('have.value', 'Mesqquita@dadas')
        .clear().should('have.value', '')
     cy.get('#phone').type('11041423423').should('have.value', '11041423423')
        .clear().should('have.value', '')
    
     
    })

    it('Valor não numerico no campo telefone', () => {
    
      cy.contains('button', 'Enviar').click()
      cy.get('.error').should('be.visible')
       
  })
  it('envia o formuário com sucesso usando um comando customizado',() =>{
  //  const data = {
    //   firstName: 'Nathan',
    //   lastName: 'Mesquita',
    //   email:'Mesqquita@dadas.com.br',
    //   text: 'teste'
    // }
      
   cy.fillMandatoryFieldsAndSubmit()
   cy.get('.success').should('be.visible')
  })

   it('Usando o comando o Cy.commands ', () => {

       cy.get('#firstName').type('Nathan')
     cy.get('#lastName').type('Mesquita')
     cy.get('#email').type('Mesqquita@gmail.com')
     cy.get('#open-text-area').type('teste')
     cy.contains('button', 'Enviar').click()
     cy.get('.success').should('be.visible')
   })

   it('seleciona um produto (YouTube) por seu texto' , () => {

      cy.get('#product').select('YouTube')
         .should('have.value' , 'youtube')

       })

       it('seleciona um produto (Mentoria) por seu valor (value)' , () => {
          cy.get('#product').select('mentoria')
         .should('have.value' , 'mentoria')
       })

       it('seleciona um produto (Blog) por seu índice' , () => {
          cy.get('#product').select(1)
         .should('have.value' , 'blog')
       })
       it('marca o tipo de atendimento "Feedback"', ()=>{
           cy.get('input[type="radio"][value="feedback"]')
           .check().should('be.checked')
       })
      it('marca cada tipo de atendimento', () =>{
            cy.get('input[type="radio"]')
            .each( typeOfService => {
               cy.wrap(typeOfService)
               .check()
               .should('be.checked')
            })
      })
      it('marca ambos checkboxes, depois desmarca o último', () => { 
       //  cy.get('#email-checkbox').check().should('be.checked')
       //  cy.get("#phone-checkbox").check().should('be.checked')
       //   .last().uncheck().should('not.be.checked')
          cy.get('input[type="checkbox"]').check()
          .should('be.checked')
          .last().uncheck()
          .should('not.be.checked')

      })
      it('seleciona um arquivo da pasta fixtures', () => {
          cy.get('#file-upload')
            .selectFile('cypress/fixtures/example.json')
            .should(input => {
               expect(input[0].files[0].name).to.equal('example.json')
            })
      })
      it('seleciona um arquivo da pasta fixtures', () => {
         cy.get('#file-upload')
            .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(input => {
               expect(input[0].files[0].name).to.equal('example.json')
            })
      })
      it('seleciona um arquivo da pasta fixtures', () => { 
         cy.fixture('example.json').as('sampleFile')
         cy.get('#file-upload')
            .selectFile('@sampleFile')
            .should(input => {
               expect(input[0].files[0].name).to.equal('example.json')
            }) 
      })

      it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
         cy.contains('a', 'Política de Privacidade')
            .should('have.attr', 'href', 'privacy.html')
            .and('have.attr', 'target', '_blank')
    })
      it('testa a página da política de privacidade de forma independente', () => {
         cy.contains('a', 'Política de Privacidade')
            .invoke('removeAttr' ,'target')
            .click()

         cy.contains('h1', 'CAC TAT - Política de Privacidade')
            .should('be.visible')
      })
      

})


