# Singleton Pattern → Only one object

Ensure a class only has one instance and provide a global point of access to it. The singleton has only one instance in the memory, which reduces memory costs.

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.

Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.

## Example

-   Database connection
-   Instance of a view

## Analysis

-   Create a class _Singleton_
-   To ensure _Singleton_ has only one instance, set the member variable _instance_ as _static_

## Benefits

-   Reduces the need for global variables
-   Always ensures only one instance is running at a time

## More resources

-   https://www.dofactory.com/javascript/design-patterns/singleton
-   https://www.digitalocean.com/community/tutorials/js-js-singletons
-   https://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript
