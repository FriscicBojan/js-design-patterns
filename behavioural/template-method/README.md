# Template Method Pattern → Inherit and change

Define the skeleton of an algorithm in a method, and delay some steps to subclases. Template method lets subclasses redefine some steps of an algorithm without changing the algorithm's structure.

The Template Method pattern provides an outline of a series of steps for an algorithm. Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps. This pattern is designed to offer extensibility to the client developer.

An easy way to think of Template Method is that of an algorithm with holes and it is up to the developer to fill these holes with appropriate functionality for each step.

## Example

In a website, the header, left section and footer are shared by each page, only the content may be changed. We can make the first three sections into a template, which will be shared by each page, and only the content will be changed. 

## Analysis

- Create a Template class
- Create a public method show() to display the header, left section and footer
- Create an abstract method makeContent for subclasses LoginPage and Bookpage to extension

## Benefits

- It’s fairly easy to create concrete implementations of an algorithm because we're removing common parts of the problem domain by the use of an abstract class
- Clean code because we avoid duplicate code
- Ever cleaner code because you separate the algorithm into private methods/functions, which are simpler and easier to test.

## More resources

- https://www.dofactory.com/javascript/design-patterns/template-method#:~:text=The%20Template%20Method%20pattern%20provides,redefine%20or%20adjust%20certain%20steps.
- https://developpaper.com/template-method-pattern-in-js/
