window.addEventListener("load", () => {
  const form = document.querySelector("#new-note-form");
  const input = document.querySelector("#new-note-input");
  const note_list = document.querySelector("#note-list");

  let count = 1;
  form.addEventListener("submit", (e) => {
    const note = input.value;

    const note_section = document.createElement("section");
    note_section.classList.add("note");

    const note_title = document.createElement("h2");
    note_title.classList.add("note-title");
    note_title.innerHTML = "Note " + count;
    count++;
    note_section.appendChild(note_title);

    const note_description = document.createElement("p");
    note_description.classList.add("note-description");
    note_description.innerHTML = note;
    note_section.appendChild(note_description);

    const note_view_detail = document.createElement("button");
    note_view_detail.classList.add("note-viewDetail");
    note_view_detail.innerHTML = "View Detail";
    
    const modal = document.createElement("div")
    modal.classList.add("modal")
    modal.setAttribute("id", "myModal")

    const modal_content = document.createElement("div")
    modal_content.classList.add("modal-content")
    modal.appendChild(modal_content)

    const button_close = document.createElement("span")
    button_close.classList.add("close")
    modal_content.appendChild(button_close)

    const text_detail = document.createElement("p")
    text_detail.innerHTML = note
    modal_content.appendChild(text_detail)
    
    note_view_detail.onclick = function () {
        modal.style.display = "block";
    };

    // button_close.onclick() = function(){
    //   modal.style.display = "none"
    // }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    note_section.appendChild(note_view_detail);
    note_section.appendChild(modal)
    note_list.appendChild(note_section);
    
    e.preventDefault();
  });
});
