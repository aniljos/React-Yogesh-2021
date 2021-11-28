var obj = {
    id: 10,
    print: function(x){
        console.log("x: ", x);
        console.log("id: ", this.id);
    }
}

obj.print(100);

var emp = {
    id: 20
};

//emp.print();

var fn = obj.print.bind(emp, 300);
//fn(200);

fn()