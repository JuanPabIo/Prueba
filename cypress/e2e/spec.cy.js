describe("Añadir producto al carrito", () => {
  it("Debería agregar un producto al carrito, abrirlo, sumar y restar la cantidad del producto", () => {
    // Visita la página donde están los productos
    cy.visit("http://localhost:3000");

    cy.wait(2000);

    cy.get(".products .item button").first().click();

    cy.get(".container-cart-icon").click();

    cy.get(".container-cart-products").should("be.visible");

    cy.get(".info-cart-product button").contains("+").click();

    cy.get(".info-cart-product .cantidad-producto-carrito").should(
      "contain",
      "2"
    );

    cy.get(".info-cart-product button").contains("-").click();

    cy.get(".info-cart-product .cantidad-producto-carrito").should(
      "contain",
      "1"
    );
  });
});
