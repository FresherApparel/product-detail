
CREATE TABLE "Products"
(
    id integer NOT NULL DEFAULT nextval('"Products_id_seq"'),
    name text NOT NULL,
    slogan text NOT NULL,
    description text NOT NULL,
    category text NOT NULL,
    default_price text NOT NULL,
    CONSTRAINT "Products_pkey" PRIMARY KEY (id)
)

CREATE TABLE "Styles"
(
    id integer NOT NULL DEFAULT nextval('"Styles_id_seq"'),
    prod_id integer NOT NULL,
    name text NOT NULL,
    original_price text NOT NULL,
    sale_price text NOT NULL,
    "default?" boolean NOT NULL,
    CONSTRAINT "Styles_pkey" PRIMARY KEY (id),
    CONSTRAINT "Styles_prod_id_fkey" FOREIGN KEY (prod_id)
      REFERENCES "Products" (id),
)

CREATE TABLE "Features"
(
    id integer NOT NULL DEFAULT nextval('"Features_id_seq"'),
    prod_id integer NOT NULL,
    feature text NOT NULL,
    value text,
    CONSTRAINT "Features_pkey" PRIMARY KEY (id),
    CONSTRAINT "Features_prod_id_fkey" FOREIGN KEY (prod_id)
        REFERENCES "Products" (id)
)

CREATE TABLE "Photos"
(
    id integer NOT NULL DEFAULT nextval('"Photos_id_seq"'),
    style_id integer NOT NULL,
    thumbnail_url text,
    url text,
    CONSTRAINT "Photos_pkey" PRIMARY KEY (id),
    CONSTRAINT "Photos_style_id_fkey" FOREIGN KEY (style_id)
        REFERENCES "Styles" (id)
)

CREATE TABLE "Skus"
(
    id integer NOT NULL DEFAULT nextval('"Skus_id_seq"'),
    style_id integer NOT NULL,
    "One Size" smallint,
    "XS" smallint,
    "S" smallint,
    "M" smallint,
    "L" smallint,
    "XL" smallint,
    "XXL" smallint,
    "7" smallint,
    "7.5" smallint,
    "8" smallint,
    "8.5" smallint,
    "9" smallint,
    "9.5" smallint,
    "10" smallint,
    "10.5" smallint,
    "11" smallint,
    "11.5" smallint,
    "12" smallint,
    CONSTRAINT "Skus_pkey" PRIMARY KEY (id),
    CONSTRAINT "Skus_style_id_fkey" FOREIGN KEY (style_id)
        REFERENCES "Styles" (id)
)
