function removeItem(id, array) {
  const updatedList = array.filter(
    (item) => parseInt(item.id) !== parseInt(id)
  );

  return updatedList;
}

export default removeItem;
