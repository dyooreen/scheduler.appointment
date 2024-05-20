function renderChildCategories(children) {
  children.each(function () {
    const subChildren = JSON.parse($(this).data("sub").split("'").join('"'));
    x(subChildren, this);
  });
}

function isMultiLevel(item) {
  return item.name ? false : true;
}
function x(children, self) {
  const ul = $("<ul>");
  children.map((child) => {
    let text = isMultiLevel(child) ? Object.keys(child)[0] : child.name;
    let li = $(`<li><span>${text}</span></li>`);
    $(ul).append(li).appendTo(self);

    if (isMultiLevel(child)) {
      x(child[text], li);
    }
  });
}
renderChildCategories($(`.category-btn`));
