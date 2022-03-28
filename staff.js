const members=[
    {img:"img/ravii.jpg", name:"Ravi Poojary",role:"OEC-OPPO",mbl:"P:7204141314",doj:"DOJ:2014"},
    {img:"img/yash.jpeg",name:"Yashwanth Amin",role:"Partner",mbl:"Ph:9844141434",doj:"DOJ:2010"},
    {img:"img/sandeep.jpeg",name:"Sandeep Poojary(Manager)",role:"SAMSUNG",mbl:"Ph:9844998646",doj:"DOJ:2015"},
    {img:"img/hari.jpg",name:"Hari Prasad",role:"VBA-VIVO",mbl:"Ph:7338503552",doj:"DOJ:2016"},
    {img:"img/kalandhar.jpg",name:"Kalandhar",role:"Fashion partner",mbl:"Ph:8095848871",doj:"DOJ:2011"},
    {img:"img/raimond.jpeg",name:"Raimond D Souza",role:"TL-VIVO",mbl:"Ph:7348953957",doj:"DOJ:2018"}
]
let img=document.getElementById('pic')
let nam=document.getElementById('name')
let role=document.getElementById('role')
let mbl=document.getElementById('mbl')
let doj=document.getElementById('doj')

let prev=document.getElementById('prev')
let next=document.getElementById('next')

let currenMember=0;
window.addEventListener('DOMContentloaded',function(){
  showMember(currenMember)
})
function showMember(member){
    let item=members[member];
    pic.src=item.img;
    nam.textContent=item.name
    mbl.textContent=item.mbl
    role.textContent=item.role
    doj.textContent=item.doj
}
next.addEventListener('click',function(){
    currenMember++;
    if(currenMember>members.length-1){
        currenMember=0;
    }

    showMember(currenMember)
})
prev.addEventListener('click',function(){
    currenMember--;
    if(currenMember<0){
        currenMember=members.length-1;
    }
    showMember(currenMember)
})