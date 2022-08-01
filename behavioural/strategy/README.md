# Strategy Pattern → Algorithm Replacement

The strategy pattern is a behavioral design pattern that enables selecting an algorithm at runtime.

Define a faimly of algorithms, encapsulates an algorithm inside a class and makes them interchangable. Strategy lets the algorithm vary independently.

The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.

## Example

E-commerce solution that chooses different banks to pay different strategies

## Analysis

-   Create an abstract _PayStrategy_ and create a method _pay(price)_
-   Create three implementations
    -   MasterCard
    -   VisaCard
    -   Paypal
-   Create a class _PayManager_ to pass _PayStrategy_ to pay different strategies

## Benefits

-   Aligned with the Open/Closed principle
    -   If we need an additional payment method (e.g. KeksPay), we simply add the class and we don't need to modify the PayManager class

## More resources

-   https://www.dofactory.com/javascript/design-patterns/strategy
-   https://betterprogramming.pub/design-patterns-using-the-strategy-pattern-in-javascript-3c12af58fd8a
-   https://www.youtube.com/watch?v=SicL4fYCz8w
