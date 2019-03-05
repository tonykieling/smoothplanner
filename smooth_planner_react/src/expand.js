export default function expand_collapse() {

  let parent_cards = document.getElementsByClassName("itinerary_card-parent");
  let i;
  for (i = 0; i < parent_cards.length; i++) {
    parent_cards[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let main_card = this.getElementsByClassName("itinerary_card-main")[0];
      let hiden_card = this.getElementsByClassName("itinerary_card-hiden")[0];

      if (hiden_card.style.display === "block") {
        console.log("BLOCKKKKKKKKK");
        main_card.style.border = "solid black 1px";
        hiden_card.style.display = "none";
        main_card.style.border = "solid black 1px";
        main_card.style.borderRadius = "10px 10px 10px 10px";
        
      } else {
        console.log("NOTTTTTTTTTTTT BLOCK");
        hiden_card.style.display = "block";
        main_card.style.borderRadius = "10px 10px 0px 0px";
        main_card.style.borderBottom = "0px";
        main_card.style.padding = "5px 5px 0 5px";
        main_card.style.margin = "5px 5px 0 5px";

        hiden_card.style.minWidth = "600px";
        hiden_card.style.border = "solid black 1px";
        hiden_card.style.borderRadius = "0 0 10px 10px";
        hiden_card.style.borderTop = "none";
        hiden_card.style.padding = "0 5px 5px 5px";
        hiden_card.style.margin = "0 5px 5px 5px";
        hiden_card.style.backgroundColor = "whitesmoke";
        hiden_card.style.cursor = "pointer";
        hiden_card.style.outline = "none";
      }
    });
  }
}