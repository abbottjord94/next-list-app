# NextJS List App

A simple full-stack application for creating, sharing, and using lists of any type, written with NextJS

In order to learn to use the different features of this framework, I implement the following features of this relatively simple application concept:
    - Users can log in to create, share, and use lists (requires user authentication, session management)
    - Lists can be of any type, but all share this common structure/functionality:
        - One list has many categories, designated by the user.
        - Each category has many items, entered by the user.
        - Each item can be edited or deleted.
        - Each category can also be edited or deleted.
        - When a category is deleted, all of its associated items are also deleted.
        - Similarly, when a list is deleted, all of its categories (and items associated with those categories) are deleted.
    
    These features require the implementation of a REST API (with GET, PUT, POST, and DELETE methods), a backend relational database, and microservices to handle the different core features. The following microservices will be implemented:
        - Users microservice (to handle user authentication, session management, and user data)
        - Lists microservice (to handle list data)

    Additionally: 
    - Users can share lists with other users by providing a list code to another user. This creates an association between the list and the user who was given the code, allowing them to view and edit the list. If the original list owner deletes their version of the list, the shared list is not deleted.