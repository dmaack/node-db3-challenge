# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

    SELECT ProductName, CategoryName 
    FROM Products
    JOIN Categories ON Products.CategoryId = Categories.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    SELECT OrderId, ShipperName, OrderDate
    FROM Orders
    JOIN Shippers ON Orders.ShipperId = Shippers.ShipperId
    WHERE OrderDate < '1997-01-09';


### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    SELECT ProductName, Quantity 
    FROM OrderDetails
    JOIN Products ON OrderDetails.ProductId = Products.ProductId
    WHERE OrderId = 10251;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    SELECT OrderId, CustomerName, LastName 
    FROM Orders
    JOIN Customers ON Orders.CustomerId = Customers.CustomerId
    JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 