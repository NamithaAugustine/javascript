
// var tag = document.getElementById("main");
// console.log(tag.parentElement)
// tag.parentElement.style.backgroundColor = 'green';
// console.log(typeof tag);
// tag.innerText = "New Text";
// tag.style.color="green";
// tag.style.fontSize= '60px';
// tag.style.fontweight = 'normal';
// tag.style.backgroundColor='black';

// console.lo.g(tag.innerText);
// 

// document.getElementById('p1').innerText = "Paragraph 1";
// document.getElementById('p2').innerHtml = "<b> Paragraph 2 </b>";

// var elements = document.getElementsByTagName('button');
// console.log(elements);
// elements[0].style.color = 'green';
// elements[1].style.color = 'green';
// elements[2].style.color = 'green';
// elements[3].style.color = 'green';
// elements[4].style.color = 'blue';
// elements[5].style.color = 'red';
// elements[6].style.color = 'green';
// elements[7].style.color = 'green';
// elements[8].style.color = 'yellow';
// elements[9].style.color = 'green';

// console.lo.g(tag.innerText);
// 

// document.getElementById('p1').innerText = "Paragraph 1";
// document.getElementById('p2').innerHtml = "<b> Paragraph 2 </b>";

// var elements = document.getElementsByTagName('button');
// console.log(elements);
// elements[0].style.color = 'green';
// elements[1].style.color = 'green';
// elements[2].style.color = 'green';
// elements[3].style.color = 'green';
// elements[4].style.color = 'blue';
// elements[5].style.color = 'red';
// elements[6].style.color = 'green';
// elements[7].style.color = 'green';
// elements[8].style.color = 'yellow';
// elements[9].style.color = 'green';

// for ( let i = 0; i < elements.length; i++){
//     elements[i].style.backgroundColor = 'tomato';
// }

// var qs = document.querySelectorAll('div> button ');
// qs.forEach(e=>{
//     e.style.backgroundColor = 'tomato';
// })

// var table = document.createElement('table');
// var tr = document.createElement('tr');
// var th1 = document.createElement('th1');
// var th2 = document.createElement('th2');
// th1.innerText= "name";
// th2.innerText= " email";
// tr.appendChild(th1);
// tr.appendChild(th2);
// table.appendChild(tr);
// document.body.appendChild(table);

// function btnclick(){
//     alert('Button clicked');
// }

// function btnclick(e){
//     console.log(e);
//     e.target.innerText = "clicked";
// }

// var target = document.getElementById('square');

// function btnShow(){
//     target.style.display = 'block';
// }

// function btnHide(){
//     target.style.display = 'none';
// }

// document.querySelectorAll('button').forEach(e=>{
//     e.addEventListener('click, ()=>'{
//         console.log("button clicked");
//     })
// })

function validate(e){
 e.preventDefault();
 var data = document.getElementById('name').value;
alert (data);
if(namevalue.length <= 2){
document.getElementById('name').style.borderColor = "red";
document.getElementById('error-name').innerText = " invalid name";
}
}

