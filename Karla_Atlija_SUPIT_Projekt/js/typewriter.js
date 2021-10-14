var _CONTENT = [ 
	"Budi izvrstan u onome što ", 
];
var _CONTENT2 = [ 
	"vidiš.", "voliš." 
];

var _CONTENT3 = [
    "ZAISKRI."
]
var _PART2 = 0;

var _PART3 = 0;

var _PART2_INDEX = 0;

var _PART3_INDEX = 0;


var _PART = 0;


var _PART_INDEX = 0;


var _INTERVAL_VAL;

var _ELEMENT = document.querySelector("#text");

var _ELEMENT2 = document.querySelector("#first");

var _ELEMENT3 = document.querySelector("#third");

var _CURSOR = document.querySelector("#cursor");

var _CURSOR2 = document.querySelector("#cursor2");


function Type() { 

	_CURSOR2.style.display = 'none';
    var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

    if(_PART_INDEX == 26){
    
        clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(second_part, 100);
		}, 0);
    }

	
}

function Delete() {

   
	if(_PART2 == 0){
    var text2 =  _CONTENT2[_PART2].substring(0, _PART2_INDEX - 1);
	_ELEMENT2.innerHTML = text2;
	_PART2_INDEX--;
    };

	if(text2 === ''){
		_PART2++;
		
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(second_part, 100);
		}, 200);
	};

};


function second_part(){
    
    var text2 =  _CONTENT2[_PART2].substring(0, _PART2_INDEX + 1);
    _ELEMENT2.innerHTML = text2;
	_PART2_INDEX++;

  
    if(text2 === _CONTENT2[0]) {
		
        _CURSOR.style.display = 'none';
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	};
    if( text2 === _CONTENT2[1]){
        
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
            _CURSOR.style.display = 'inline-block';
            _CURSOR2.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(third_part, 100);
           }, 200);
    };
    
}

function third_part(){

   
    _CURSOR.style.display = 'none';
    var text3 =  _CONTENT3[_PART3].substring(0, _PART3_INDEX + 1);
	_ELEMENT3.innerHTML = text3;
	_PART3_INDEX++;
    if(text3 === _CONTENT3[0])
    {
        return;
    }
 
};
_INTERVAL_VAL = setInterval(Type, 100);

