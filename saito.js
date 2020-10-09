`use-strict`;

const header =document.querySelector(`header`);
const sections =document.querySelectorAll(`section`);
const nav =document.querySelector(` header .nav`);
const lias =document.querySelectorAll(`.nav li a`);
const topbut =document.querySelector(`.toppage`);
const toggleArea =document.querySelector(`.togglearea`);
const toggles =document.querySelectorAll(`header .togglearea div`);


//toggleAreaクリックした時の処理
toggleArea.addEventListener(`click`,changeToggle);


//画面をスクロールしたらの時の処理
window.addEventListener(`scroll`,function(event) {

  //navを固定する toggleの色を黒に変更
  const winMinfHei =window.innerHeight * 1/10;
  for(let k =0; k < toggles.length; k++){
    if(window.scrollY > winMinfHei){
      header.classList.add(`sticky`);
      toggles[k].style.background =`#000`;

    } else if(window.scrollY < winMinfHei){
      header.classList.remove(`sticky`);
      toggles[k].style.background =`#fff`;
    };
  };

  //トップページボタンを表示
  const scrollAmount =window.scrollY;
  const winHei =window.innerHeight;

  if(scrollAmount >= winHei){
    topbut.classList.add(`show`);

    //topbutをクリックした時の処理
    topbut.addEventListener(`click`,goToTop);

  } else if(scrollAmount <= winHei){
    topbut.classList.remove(`show`);
  };


  //各sectionになったら.nav li a.selectedを該当箇所に付ける
  for(let m =0; m < sections.length; m++){
    const sectionsTop =sections[m].getBoundingClientRect().top;

      if(sectionsTop <= winMinfHei){
        lias[m].classList.add(`selected`);
  
      } else if(sectionsTop >= winMinfHei){
        lias[m].classList.remove(`selected`);
      };
    };
});

//クリックしたらトップページに戻る
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: `smooth`
  })
};

//toggleボタンの動き　navの動き
function changeToggle() {
  toggleArea.classList.toggle(`active`);
  nav.classList.toggle(`active`);
  if(nav.classList.contains(`active`)){
    for(let i =0; i < lias.length; i++){
      lias[i].addEventListener(`click`,function() {
        toggleArea.classList.remove(`active`);
        nav.classList.remove(`active`);
      });
    };
  };
};

