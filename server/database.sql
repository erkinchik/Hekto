--CREATE TABLE user(
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(255),
--     password VARCHAR(255),
--     role VARCHAR(255) DEFAULT 'USER'
--);
--
--create TABLE basket(
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER,
--   FOREIGN KEY (user_id) REFERENCES "user" (id)
--);
--
--create TABLE basket_device(
--   id SERIAL PRIMARY KEY,
--   basket_id INTEGER,
--   FOREIGN KEY (basket_id) REFERENCES basket (id),
--   device_id INTEGER,
--   FOREIGN KEY (device_id) REFERENCES device (id)
--);
--
--create TABLE device(
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   price VARCHAR(255),
--   type_id INTEGER,
--   FOREIGN KEY (type_id) REFERENCES type (id),
--   brand_id INTEGER,
--   FOREIGN KEY (brand_id) REFERENCES brand (id)
--);
--create TABLE type(
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(50)
--);
--create TABLE brand(
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(50)
--);

--create TABLE device_info(
--   id SERIAL PRIMARY KEY,
--   device_id INTEGER,
--   FOREIGN KEY (device_id) REFERENCES device (id),
--   title VARCHAR(100),
--   description VARCHAR(300)
--);

create TABLE rating(
   id SERIAL PRIMARY KEY,
   user_id INTEGER,
   FOREIGN KEY (user_id) REFERENCES "user" (id),
   device_id INTEGER,
   FOREIGN KEY (device_id) REFERENCES device (id),
   rate INTEGER
);
create TABLE brand_type(
   id SERIAL PRIMARY KEY
);