var backdrop=document.querySelector(".backdrop");
backdrop.addEventListener('click',()=>{
    console.log("hello");
    
});
let selectPlanButton=document.querySelectorAll('.plan button');
console.dir(selectPlanButton);
var modal=document.querySelector('modal');
var no=document.querySelector('modal__action--negative');
var togglrButton=document.querySelector('.toggle-button')
var mobileNav=document.querySelector('.mobile-nav');
for(var i=0;i<selectPlanButton.length;i++){
    selectPlanButton[i].addEventListener('click',()=>{
    // modal.style.display='block';
    // backdrop.style.display='block';
        // modal.className='open' this will completelyt  override calss list;
        modal.classList.add('open');
        backdrop.classList.add('open');

    })
}

backdrop.addEventListener('click',()=>{
    mobileNav.style.display='none';
    closeModal();
});

no.addEventListener('click',closeModal);

function closeModal(){
    // backdrop.style.display='none';
    // modal.style.display='none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');

}

togglrButton.addEventListener('click',()=>{
    // mobileNav.style.display='block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

})