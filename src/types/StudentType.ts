'use strict';

export interface Mother {
  name: string;
  surname: string;
  tel: string;
}

export interface Father {
  name: string;
  surname: string;
  tel: string;
}

export interface Parents {
  mother: Mother;
  father: Father;
}

export interface Contacts {
  tel: string;
}

export interface StudentType {
  id: number;
  name: string;
  surname: string;
  age: number;
  sex: string;
  group: string;
  contacts: Contacts;
  parents: Parents;
}
