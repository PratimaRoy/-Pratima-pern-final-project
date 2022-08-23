\c cta_dev;

INSERT INTO products (name, description,color, price, rating, featured, image) VALUES
('Gold Mayur Mugh Bala','Gold Peacock Bengali Bala Bangle', 'Gold', 4000, 5, true, 'https://static.malabargoldanddiamonds.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/b/c/bcctbib01253.jpg' ),
('Tamil Bride Divine Necklace', 'Gold Tamil Necklace for Wedding', 'Gold', 5000, 5, true, 'https://static.malabargoldanddiamonds.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/n/e/nedicdtrsda418.jpg'),
('Precia Gemstone Earring', 'Ruby with gold earrings for daily wear or any occasion', 'Red', 700, 4, true, 'https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/stprhdflhia314_n.jpg'),
('Teardrop Halo and Wishbone Stacking Ring Set', 'A 2 diamond ring set for engagement', 'White', 160, 5, true, 'https://cdn-fsly.yottaa.net/5c17f01f2bb0ac532957f9ee/us.pandora.net/v~4b.1d/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw0c732706/productimages/NAMPS0179.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5&yocs=A_F_' ),
('Gold Plated Multicolor Tikka', 'Indian jewelry worn on the head for any special occasions or temple', 'Rainbow', 50, 5, true, 'https://cdn11.bigcommerce.com/s-ls8hir/images/stencil/original/products/17474/21341/CZTIKKA1__68822.1604600800.jpg?c=2&imbypass=on&imbypass=on');



INSERT INTO reviews (products_id, reviewer, title, content, rating) VALUES

(1, 'Lisa', 'Gorgeous Bala Bangle', 'Love to wear it when going to a party!', 5 ),
(2, 'Jennie', 'Wondeful Bride Necklace', 'Loved wearing it to the wedding!', 5 ),
(3, 'Puja', 'My favorite earrings to wear in the temple!', 'It is not heavy and simple', 5 ),
(4, 'Julia', 'Gorgeous ring!', 'I loved the teardrop design!', 5 ),
(5, 'Julie', 'Exquisite Tikka', 'Love to wear it when going to a party, wedding, or temple!', 5 );