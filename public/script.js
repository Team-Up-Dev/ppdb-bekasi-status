const Socket = io();
let compare = [];

Socket.on("new:connection", ({ data }) => {
  compare = data;
  render(data);
});
Socket.on("file:change", ({ data }) => {
  if (JSON.stringify(data) !== JSON.stringify(compare)) {
    compare = data;
    render(data);
  }
});

function render(data) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  data
    .map((d) => {
      const tr = document.createElement("tr");

      const th = document.createElement("th");
      th.setAttribute("scope", "row");
      th.innerText = d[0];

      const nama = document.createElement("td");
      nama.innerText = d[2];

      const jarak = document.createElement("td");
      jarak.innerText = d[3];

      tr.appendChild(th);
      tr.appendChild(nama);
      tr.appendChild(jarak);

      return tr;
    })
    .forEach((element) => {
      tbody.appendChild(element);
    });
}
