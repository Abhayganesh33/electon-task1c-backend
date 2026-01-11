const API = "http://localhost:3000";
let editId = null;

function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) return;

  if (editId === null) {
    fetch(API + "/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    }).then(() => loadUsers());
  } else {
    fetch(API + "/updateUser/" + editId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    }).then(() => {
      editId = null;
      document.querySelector("button").innerText = "Add / Update User";
      loadUsers();
    });
  }

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

function loadUsers() {
  fetch(API + "/users")
    .then(res => res.json())
    .then(data => {
      const div = document.getElementById("users");
      div.innerHTML = "";

      data.forEach((u, i) => {
        div.innerHTML += `
          <div class="row">
            <div>${i + 1}</div>
            <div>${u.name}</div>
            <div>${u.email}</div>
            <div class="actions">
              <div class="edit" onclick="editUser(${u.id}, '${u.name}', '${u.email}')">EDIT</div>
              <div class="delete" onclick="deleteUser(${u.id})">DELETE</div>
            </div>
          </div>
        `;
      });
    });
}

function editUser(id, name, email) {
  editId = id;
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.querySelector("button").innerText = "Update User";
}

function deleteUser(id) {
  fetch(API + "/deleteUser/" + id, { method: "DELETE" })
    .then(() => loadUsers());
}

loadUsers();
