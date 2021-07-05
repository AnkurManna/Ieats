const mailReg = '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$';
const nameReg ='^[^\s]+( [^\s]+)+$';
function tes(str)
{
    var patt = new RegExp(nameReg);

    console.log(patt.test(str));
}
tes('ankur manna kumar')
tes('xx');

let obj = {
    firstName:'Ankur',
    lastName:'Manna'
};

for (let key in obj) { 

    console.log(obj[key])
 }
