const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];




function deleteTask(id) {
    let index = tasks.findIndex(x=>x.id===id)
    tasks.splice(index,1)
}