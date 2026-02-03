describe('Testes de API - Restful Booker', () => {

  before(() => {
    cy.request('https://restful-booker.herokuapp.com/ping')
    .then((response) => {
      expect(response.status).to.be.eq(201)
    })
})

  it('Deve buscar todos os bookings e salvar em JSON', () => {

    const livros = []

    cy.request({
      method: 'GET',
      url: 'https://restful-booker.herokuapp.com/booking',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')

      // Mapeia os bookingIds
      const bookingIds = [...new Set(response.body.map(item => item.bookingid))]

      // Executa as chamadas em sequência
      cy.wrap(bookingIds).each((bookingId) => {

        cy.request({
          method: 'GET',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          livros.push({
            bookingid: bookingId,
            ...res.body
          })
        })
      }).then(() => {

        cy.writeFile(
          'cypress/fixtures/livros.json',
          livros
        )
      })
    })
  })

  it('Create booking', () => {

  cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      headers: {
      'Content-Type': 'application/json'
      }, 
      body: {
      firstname: 'Harry',
      lastname: 'Potter',
      totalprice: 180,
      depositpaid: true,
      bookingdates: {
          checkin: '2025-02-23',
          checkout: '2025-10-23'
      },
      additionalneeds: 'Breakfast'
      }
  }).then((response) => {

      expect(response.status).to.be.oneOf([200, 201])

      const bookingId = response.body.bookingid
      cy.log(`Booking ID: ${bookingId}`)

      // Confere se não foi criado com ID duplicado
      return cy.request({
      method: 'GET',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      headers: { 'Content-Type': 'application/json' }
      })

  }).then((getResponse) => {

      expect(getResponse.status).to.eq(200)
      cy.log(JSON.stringify(getResponse.body))
    })  
  })

    it('Update Booking', () => {

          cy.request({
          method: 'PUT',
          url: `https://restful-booker.herokuapp.com/booking/1`,
          auth:{
              username : "admin",
              password : "password123"
          },
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: {
              "firstname" : "Pequeno",
              "lastname" : "Principe",
              "totalprice": 50,
              "depositpaid" : true,
              "bookingdates" : {
                  "checkin" : "2024-01-01",
                  "checkout" : "2025-01-01"
              }, 
              "additionalneeds" : "Livro infantil"
          }
      }).then((updateResponse) => {

          expect(updateResponse.status).to.be.eq(200)

          expect(updateResponse.body.firstname).to.be.eq('Pequeno')
          expect(updateResponse.body.lastname).to.be.eq('Principe')
          expect(updateResponse.body.totalprice).to.be.eq(50)
          expect(updateResponse.body.depositpaid).to.be.eq(true)
          expect(updateResponse.body.additionalneeds).to.be.eq('Livro infantil')


      })
  })
})

