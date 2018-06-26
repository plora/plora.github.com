const plora={};
(()=>{
  plora.Events=()=>{
      console.log("안녕하세요");
  },
  plora.functions={
    index: ()=>{

    }
  }
})();
/*document.addEventListener('DOMContentLoaded', () => {
  plora.Events();
  plora.functions.index();

}) vanila js*/
$(document).ready(function(){
  plora.Events();
  plora.functions.index();
})
