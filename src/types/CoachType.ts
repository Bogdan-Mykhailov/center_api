'use strict';

export interface Contacts {
  tel: number;
}

export interface CoachType {
  id: number;
  name: string;
  surname: string;
  group: string;
  contacts: Contacts;
  skills: string[];
}
