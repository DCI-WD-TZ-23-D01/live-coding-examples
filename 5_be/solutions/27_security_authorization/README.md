# Lacking Authorization

This TODO application is almost complete! User Authentication has been implemented, but it's missing some parts of the Authorization mechanism.

## Tasks

Investigate the existing code and set up the application, testing that it works. The [frontend](./index.html) can be run using Live Server.

> 🐘 Use the `.env.example` file to set up your `.env` file, and connect your application to a database!

## Task 1

Add a `role` field to the `User` model;

- There should be 2 roles `user` and `admin`

> Hint: You may want to use an `enum` here!

## Task 2

When you run the application for the first time, it should generate some data into the database.

Examine the `Users` collection;

- Give user "Tom" the role `admin`
- Give user "Jerry" the role `user`

## Task 3

Update the **backend** application logic;

- Only allow users that have the **role** `admin` to delete records from the `TodoItem` collection

> 🐴 **Do not add the user role to the JWT!**
>
> The logic for handling roles should be in the backend, and not the frontend.

- Why would it be a bad idea to have this logic in the frontend?
