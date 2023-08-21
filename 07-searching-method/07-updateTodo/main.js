const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function updateTask(id, newName) {
  let index = tasks.findIndex((x) => x.id === id);
  const obj = Object.assign({}, tasks[index]);
  if (index !== -1) {
    obj.name = newName;
    tasks.splice(index, 1, obj);
  }
  // tasks[index].name = newName;
}
