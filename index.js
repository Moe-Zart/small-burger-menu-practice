//simple burger menu
function openMenu(){
    document.body.classList += " open-menu";

}
function closeMenu(){
    
    document.body.classList.remove("open-menu")
}

//more complex burger menu
let isMenuOpen;
function toggleMenu() { //if modal is open and u want to close it, you make isMenuopen false and remove it
  if (isMenuOpen) {
    isMenuOpen = false;
    return document.body.classList.remove("menu-open");
  }
  isMenuOpen = true; //otherwise make it isMenuopen true and add it
  document.body.classList += " menu-open";
}