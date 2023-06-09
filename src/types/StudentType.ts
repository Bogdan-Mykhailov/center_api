'use strict';

type Gender = 'female' | 'male';

type GroupType = 'aerial kids'
  | 'dancing kids'
  | 'aerial teens'
  | 'dancing teens'
  | 'aerial adults'
  | 'dancing adults';

export interface Mother {
  name: string;
  surname: string;
  tel: number;
}

export interface Father {
  name: string;
  surname: string;
  tel: number;
}

export interface Parents {
  mother: Mother;
  father: Father;
}

export interface Contacts {
  tel: number;
}

export interface StudentType {
  id: number;
  name: string;
  surname: string;
  age: number;
  sex: Gender;
  group: GroupType;
  contacts: Contacts;
  parents: Parents;
}
