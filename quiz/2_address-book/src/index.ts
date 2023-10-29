interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}
enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Array<Contact>> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Array<Contact> = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        [PhoneType.Home]: {
          num: 11122223333,
        },
        [PhoneType.Office]: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        [PhoneType.Home]: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        [PhoneType.Home]: {
          num: 213423452,
        },
        [PhoneType.Studio]: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Array<Contact> = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Array<Contact> {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Array<Contact> {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Array<Contact> {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): Array<string> {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): Array<string> {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
