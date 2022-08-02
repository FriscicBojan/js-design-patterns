# Factory Pattern → Create objects

Provides an interface for creating objects in a superclass, but let subclasses decide which class to instantiate.

## Example

Concrete products can be created by the factory that uses an abstract product as an interface for declaration of the products.

## Analysis

- Creator → Factory
    - Creates new products (objects)
    - Implements factoryMethod which returns newly created products
- AbstractProduct → declares an interface for products
- ConcreteProduct → the object
    - The product (object) being created
    - All products (objects) support the same interface (properties and methods)

## Benefits

- Helps centralize our object creation process by encapsulating all our constructor or class initialization logic
- Preferred solution in cases where the object creation process depends on dynamic factors → dynamically created subclasses
- Promotes loose decoupling by separating the object creation from its implementation
- Enables us to create different instances based on conditions
- Promotes code reusability and maintainability
- Encapsulates the constructor or class and exposes only a defined interface.

## More resources

- https://www.dofactory.com/javascript/design-patterns/factory-method
- https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192
- https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d