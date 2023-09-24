const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// interface Email         {value: string, selected: boolean};
// interface ProductNumber {value: number, selected: boolean};
// -> 모두 호환 가능한 타입 설정 필요
// => interface에 Generic 선언
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}
// --==>> <option> value="{item.value}" {item.selected}>{item.value}</option>

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  if (selectTag !== null) selectTag.appendChild(item);
});