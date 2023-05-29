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
  let output = id ? "https://drive.google.com/uc?id=" + id : '';
  document.getElementById("output").value = output; 
  document.getElementById("status").innerText = (id ? 'Successfully converted' : 
    (input ? 'Invalid link!' : 'Please paste your link above')
  );
  document.getElementById("status").style.color = (id ? 'green' : 
    (input ? 'red' : 'black')
  );
}

// Copies converted link to user clipboard
function copy() {
  let output = document.getElementById("output").value;
  navigator.clipboard.writeText(output);
}
