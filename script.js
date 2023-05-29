function convert() {
  let input = document.getElementById("input").value;
  let doc_id = input.split("file/d/")[1].split("/view?")[0];
  let output = "https://drive.google.com/uc?id=" + doc_id;
  document.getElementById("output").value = output;
}