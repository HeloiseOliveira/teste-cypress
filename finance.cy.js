
describe('Transacoes', () => {

    it('Cadastrar uma entrada', () => {
      cy.visit("https://devfinance-agilizei.netlify.app/")

      criarTransacao("Freela", 250)
      
     it('cadastrar uma saída', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/")
        criarTransacao("Cinema", -50)
   
     });

    });
  });

  function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
      cy.get('#description').type("descricao")
      cy.get('#amount').type(valor)
      cy.get('#date').type("2023-02-15")
      cy.contains('button', "Salvar").click()
      
  }

