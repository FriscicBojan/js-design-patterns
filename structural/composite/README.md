# Composite Pattern → Part and whole tree structure

A tree structure of simple and composite objects. Compose objects into tree structures to represent part-whole hierarchies.

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
