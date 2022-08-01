# Composite Pattern → Part and whole tree structure

A tree structure of simple and composite objects. Compose objects into tree structures to represent part-whole hierarchies.

The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.

All nodes in the Composite pattern share a common set of properties and methods which supports individual objects as well as object collections. This common interface greatly facilitates the design and construction of recursive algorithms that iterate over each object in the Composite collection.

## Example

National city tree diagram:

-   World
    -   Croatia
        -   Zagreb
        -   Varazdin
        -   Split
        -   Zadar
    -   Germany
        -   Munich
        -   Berlin
        -   Frankfurt
    -   USA
        -   New York
        -   Washington
        -   Dallas
        -   Los Angeles

## Analysis

-   Each country and city are called a _Node_
-   Each node has an attribute _name_
-   The top node _World_ is called the root node of the tree
-   There can be many child nodes under each node → *childNodes = []*
    -   Meaning each node can add many child nodes _add(node)_

## Benefits

-   Clearly defines hierarchical complex objects, representing all or part of the object hierarchy, making it easier to add new components.

## More resources

-   https://www.dofactory.com/javascript/design-patterns/composite
-   https://jsmanifest.com/the-composite-pattern-in-javascript/
