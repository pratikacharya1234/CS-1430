# Media Collection Lab - Explanation

## What This Code Does

This project creates a **video game collection** webpage that demonstrates JavaScript classes, JSON data, and DOM manipulation.

---

## Part 1: JSON Data (Lines 47-67)

```javascript
const mediaData = [ ... ];
```

This creates an array of objects with video game information:
- **title**: Name of the game
- **developer**: Who made it
- **price**: Cost in dollars
- **year**: Release year
- **image**: Path to thumbnail image

I chose video games as my media type with at least 3 attributes as required.

---

## Part 2: The MediaItem Class (Lines 70-118)

### Constructor
```javascript
constructor(title, developer, price, year, image) { ... }
```
Takes in the game data and creates a new MediaItem object.

### Private Field (Encapsulation)
```javascript
#rating;
```
The `#` makes this field private - it can only be accessed through getter/setter methods.

### Getter & Setter Methods
```javascript
getRating() { return this.#rating; }
setRating(value) { ... }
```
- **Getter**: Returns the rating value
- **Setter**: Sets the rating with validation (must be 0-10)

### getInfo() Method
Returns a string describing the game.

### displayHTML() Method
This is the key method! It:
1. Creates a `<div>` element
2. Fills it with HTML showing the game's info
3. Returns the element to be added to the page

---

## Part 3: Displaying the Collection (Lines 121-137)

```javascript
function displayMediaCollection() { ... }
```

This function:
1. Gets the container element from HTML
2. Loops through each item in the JSON data
3. Creates a new MediaItem object for each one
4. Calls `displayHTML()` to generate the HTML
5. Adds it to the page using `appendChild()`

---

## How It All Works Together

1. **Page loads** → `window.onload` triggers
2. **displayMediaCollection()** runs
3. **For each game in mediaData:**
   - Create a new MediaItem object
   - Call its displayHTML() method
   - Add the result to the webpage
4. **User sees** all games displayed nicely!

---

## Key Concepts Demonstrated

✅ **Class definition** with constructor  
✅ **At least 3 attributes** (title, developer, price, year, image)  
✅ **Private field** (#rating) with getter/setter  
✅ **Validation** in setter method  
✅ **Multiple methods** (getInfo, displayHTML)  
✅ **JSON data parsing** and iteration  
✅ **DOM manipulation** to add elements dynamically  

---

## Notes

- The image paths (images/zelda.jpg, etc.) would need actual image files to display
- You can replace them with real image URLs or use placeholder images
- The styling is basic but clean and meets requirements
- All code is original and written from scratch
