const { json } = require("body-parser");


//caminho feliz :D
describe('Cadastrar um novo Dog', () => {

  before(() => {

    cy.dropCollection("dogs", { database: 'test', failSilently: 'true' }).then(result => {
      cy.log(result);
    });
//Estratégia para controlar os dados no banco de dados evitando inflar o banco

  })

  it('passes', () => {

    const dogs = {
      "name": "Max",
      "owner": "João",
      "breed": "Golden Retriever",
      "gender": "Macho",
      "color": "Dourado"

    };




    cy.postDogs(dogs)
      .then(response => {
        expect(response.status).to.eql(201)
        


        expect(response.body.name).to.eql(dogs.name)
        expect(response.body.owner).to.eql(dogs.owner)
        expect(response.body.breed).to.eql(dogs.breed)
        expect(response.body.gender).to.eql(dogs.gender)
        expect(response.body.color).to.eql(dogs.color)
        expect(response.body._id).to.not.be.empty


      })
  })



it('Não deve cadastrar dois Dogs iguais', () => {



    const dogs = {
      "name": "Tonny",
      "owner": "Maria",
      "breed": "Labrador",
      "gender": "Macho",
      "color": "Preto"

    };

    cy.postDogs(dogs)
      .then(response => {
        expect(response.status).to.eql(201)
      })

    cy.postDogs(dogs)
      .then(response => {
        expect(response.status).to.eql(400)
        expect(response.body.erro).to.eql('O cão já foi cadastrado.');
      })




  })
})



