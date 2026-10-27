// let funcNoname = function(){
//     alert('함수_01');
//     alert('함수_02');
// }
// // funcNoname();

// alert(typeof(funNoname) + ':' + funcNoname);

// function funcName(){
//     alert('함수_01');
//     alert('함수_01');    
// };

// alert(typeof(funcName) + ':' + funcName);

// function f(x){
//     return x * x;
// };

// alert(f(3));


function fun(){
    alert('함수호출');

};

function callTenTimes(callback_func){
    for(let i=0; i<5; i++){
        callback_func();
    }
}

callTenTimes(fun);