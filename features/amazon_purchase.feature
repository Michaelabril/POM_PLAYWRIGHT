Feature: Compra de productos en Amazon

  Scenario Outline: Comprar un producto en Amazon
    Given el usuario ingresa a Amazon
    When busca el producto "<producto>"
    And selecciona el primer producto
    And selecciona la cantidad "<cantidad>"
    Then el producto se agrega correctamente al carrito y se procede a pagar

    Examples:
      | producto                  | cantidad |
      | dragon ball z goku        | 4        |
      | dragon ball z goku        | 8        |
