
\c dupuh749eacd0;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    image TEXT,
    description TEXT,
    color TEXT,
    price INTEGER,
    rating INTEGER,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN
    
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    products_id INTEGER REFERENCES products (id)
    ON DELETE CASCADE
);
