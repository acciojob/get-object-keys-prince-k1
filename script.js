let student = {
	name : 'Prince',
    getKeys(){
		let arr = [];
        for(let key in this){
            arr.push(key);
        }
        return arr;
	}
}

student.getKeys();