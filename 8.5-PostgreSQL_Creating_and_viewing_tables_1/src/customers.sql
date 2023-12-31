-- First, remove the table if it exists
DROP TABLE IF EXISTS customers;

-- Create the table anew
CREATE TABLE customers (
  customer_id INTEGER primary key generated by default as identity,
  customer_name varchar NOT NULL,
  phone VARCHAR(30)
);

-- Insert some test data
-- using a multi-row insert statement here
INSERT INTO customers (customer_name, phone)
VALUES
  ('Sam', '555-1234'),
  ('Ham', '555-4321'),
  ('Ram', '555-5678');
