// var newEl = document.createElement('button');


// var text = document.createTextNode("Click");

// newEl.appendChild(text);
// newEl.setAttribute('style', 'display: block; background-color: blueviolet; color: white; font-weight: bolder; border: 0; padding: 1vh; border-raddius: 0.5em;')
// console.log(newEl);

// var form = document.getElementById('add');

// form.appendChild(newEl);


// form.insertBefore(newEl, form.children[0]);

// newEl.parentElement.removeChild(newEl)

var ul = document.querySelector('ul');
document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault();
    var addinput = document.getElementById('add-input');


    if(addinput.value !== ''){
        
        var li = document.createElement('li'),
            firstper = document.createElement('p'),
            secondper = document.createElement('p'),
            firsticon = document.createElement('i'),
            secondicon = document.createElement('i'),
            input = document.createElement('input');
    
        firsticon.className = "fa fas fa-lock";
        secondicon.className = "fa fa-times"
        input.className = "edit-note"
        input.setAttribute('type', 'text');
    
        firstper.innerHTML = addinput.value;
    
        secondper.appendChild(firsticon);
        secondper.appendChild(secondicon);
    
        li.appendChild(firstper);
        li.appendChild(secondper);
        li.appendChild(input);
        ul.appendChild(li);
    
        addinput.value = '';
    }

});


//Hide Items

var hideitems = document.getElementById('hide');

hideitems.addEventListener('click', function(e){

    var label = document.querySelector('label');

    if(hideitems.checked){
        label.textContent = 'unhide notes';
        ul.style.display = 'none';
    }else{
        label.textContent = 'hidenotes';
        ul.style.display = 'block';
    }
});


//Search filter

var searchinput = document.querySelector('#search-note input');

searchinput.addEventListener('keyup', function(e) {
    var searchchar = e.target.value.toUpperCase();
    // console.log(searchchar);

    var notes = ul.getElementsByTagName('li');

    Array.from(notes).forEach(function(note){
        var parText = note.firstElementChild.innerHTML;
 
        if (parText.toUpperCase().indexOf(searchchar) !== -1){
            note.style.display = 'block';
        }else{
            note.style.display = 'none';
        }

    });
});