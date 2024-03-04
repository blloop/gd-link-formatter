const base_url = "https://lh3.google.com/u/0/d/"

// Convert input link to output link
// Updates output text and status text
function convert() {
  let input = document.getElementById("input").value;
  let id = (input.split("file/d/")[1] ? 
    (input.split("file/d/")[1].split("/view?")[0] ? 
      input.split("file/d/")[1].split("/view?")[0] : 
      null) : 
    null
  );
  let output = document.getElementById("output");
  let link = id ? base_url + id : '';
  output.value = link; 
  output.style.backgroundColor = (id ? 'white' : '#c8c8c8')

  let status = document.getElementById("status");
  status.innerText = (id ? 'Successfully converted' : 
    (input ? 'Invalid link!' : '<Please paste your link above>')
  );
  status.style.color = (id ? 'green' : 
    (input ? 'red' : 'black')
  );
}

// Copies converted link to user clipboard
function copy() {
  let output = document.getElementById("output").value;
  navigator.clipboard.writeText(output);
}

// Clears the input field
function del() {
  document.getElementById("input").value = '';
  convert();
}

// Toggles instruction text
function toggle(section, button) {
  let subtext = document.getElementById(section);
  subtext.hidden = !subtext.hidden;
  let arrow = document.getElementById(button);
  arrow.innerHTML = `&#${arrow.dataset.on}`;
  arrow.dataset.on = 19310 - arrow.dataset.on;
}
