const readMoreBtn= document.querySelector('.read-more');
const moreContent= document.querySelector('.more-content');
const content= document.querySelector('#About');

readMoreBtn.addEventListener('click',function(){
  content.classList.toggle('show-more');
  if(content.classList.contains('show-more')){
    readMoreBtn.textContent= 'Read less';
  }
  else{
    readMoreBtn.textContent='Read More';
  }
});


const Year= document.querySelector('#CurrentYear');
const CurrentYear= new Date();
Year.innerText= CurrentYear.getFullYear();
