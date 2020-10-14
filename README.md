# product-detail
The product detail page will show relevant information for a single product in the catalogue.

## Product Detail Page
The product detail page will show relevant information for a single product in the catalogue.  Our catalogue is organized by *products*.  One single product can be associated with many sizes and styles which each result in unique SKUs (stock keeping units).  The product detail page will present items at the product level.  Further breakdown by style or size will only be reflected within the product detail page.

The same product detail page will be shown for every product in the catalogue.  Upon navigating to the product detail page or selecting a new product to display, the contents of the page will update to show information relevant to the selected product.

The item detail page will be comprised of distinct modules.  Each module will display information related to the product being displayed.
The Overview module will be the top-most module on the Product Detail page.  The functionality contained within this module can be divided into several pieces:

	1. Image gallery
		1. Default View
			* Dynamic Image
			* Overlay of Dynamic Thumbnails
			* Navigation Arrows for Thumbnails and main Image
			* Magnifying Glass
		2. Expanded View
			* Dynamic Image Overlay
			* Navigation Arrows
			* Image Icons
			* Zoom In / Zoom Out Icons
	2. Product information
		1. Star Rating
			* Average Rating
			* 5 Stars
			* Reviews Link
		2. Product Category
		3. Product Title
		4. Price
			* Dynamic Price
			* Prices Linked to SKUs
			* Default Price / Style
			* Idea: Enter promo code to see adjusted price
		5. Product Overview
			* Text Field
		6. Social Share
			* Pinterest
			* Twitter
			* Facebook
	3. Style Selector
		* Thumbnails
		* Rows
		* Default First Style / Price
		* Selected Style Checkmark Overlay
	4. Add to Cart
		1. Size Dropdown
			* Default Text “Select Size”
			* In Stock / Out of Stock
		2. Quantity Selector
			* Range from 1 to max  in stock
			* If no size selected “-“
			* If size selected 1
		3. Button
			* Places item into cart
			* If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown, and a message should appear above the dropdown stating “Please select size”
			* If there is no stock: This button should be hidden
			* If both a valid size and valid quantity are selected: Clicking this button will add the product to the user’s cart.

## Routes

apiPath = 'http://52.26.193.201:3000'

* GET /products/list/
	* Retrieves the list of products
* GET /products/:product_id
	* Returns all product level information for a specified product id
* GET /products/:product_id/styles
	* Returns all the styles available of the given product
* GET /reviews/:product_id/meta
	* Returns the review metadata for a given product
* GET /cart/:session_id
	* Retrieves a list of products added to the cart by a user
* POST /cart/
	* Adds a product to the cart
