
// The data stored in array 
const list_items = [
	"1                    Rohan                  Rohan@123.gmail.com ",
    "2                    abhi                   abhi @123.gmail.com ",
    "3                    Rohanone               Rohanone@123.gmail.com ",
    "4                    Rohantwo               Rohantwo@123.gmail.com ",
    "5                    Rohanthree              Rohanthree@123.gmail.com ",
    "6                    Rohanfour               Rohanfour@123.gmail.com ",
    "7                    Rohanfive               Rohanfive@123.gmail.com ",
    "8                    Rohansix                Rohansix@123.gmail.com ",
    "9                    Rohanseven              Rohanseven@123.gmail.com ",
    "10                   Rohaneight              Rohaneight@123.gmail.com ",
    "11                   Rohannine               Rohannine@123.gmail.com ",
    "12                   Rohanten                Rohanten@123.gmail.com ",
    "13                   Rohaneleven             Rohaneleven@123.gmail.com ",
    "14                   Rohantwelve             Rohantwelve@123.gmail.com ",
    "15                   Rohanthirteen            Rohanthirteen@123.gmail.com ",
    "16                   Rohanfourteen            Rohanfourteen@123.gmail.com ",
    "17                   Rohanfifteen            Rohanfifteen@123.gmail.com ",
    "18                   Rohansixteen             Rohansixteen@123.gmail.com ",
    "19                   Rohanseventeen          Rohanseventeen@123.gmail.com ",
    "20                   Rohaneighteen          Rohaneighteen@123.gmail.com ",
    "21                   Rohannineteen           Rohannineteen@123.gmail.com ",
    "22                   Rohantwenty             Rohantwenty@123.gmail.com ",

	
];
// I just grabbed the two div in the corresponding elements 
const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

// Declaring the two variables for the current page and the rows 
let current_page = 1;
let rows = 5;


// Making the function display list to show the list of

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;
    // Now make the start and end index to work .
	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

    // Now take each item and fit in the list division 
    for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];
         // Creating every element 
		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
    
}

// Setup the pagiantion using this function 
function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";
     
    // Extract the total number of pages from the total number of avaialbele itmes 
	let page_count = Math.ceil(items.length / rows_per_page);

    // Now just make the different buttons for the pages 
	for (let i = 1; i < page_count + 1; i++) {

        // lets declare the function   below 
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

   // Now just make the pagination function that was made earlier 
function PaginationButton (page, items) {

    let button = document.createElement('button');
	button.innerText = page;
    
    // if the page and the button page is same then we just show that button active here 
	if (current_page == page) button.classList.add('active');
    

    // Now make click event on the button and just display the list here.
	button.addEventListener('click', function () {
		current_page = page;

        // Now call  the displaylist here for the corresponding button . 
		DisplayList(items, list_element, rows, current_page);
         
        
		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}








// Now calling both the displaylist and pagination function 


DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
































