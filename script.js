let myObj = {
	name : 'Prince',
    getKeys(){
		let arr = [];
        for(let key in this){
            arr.push(key);
        }
        return arr;
	}
}

myObj.getKeys();