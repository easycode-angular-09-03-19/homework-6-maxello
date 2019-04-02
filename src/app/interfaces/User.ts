export interface User {
	address: Address;
	company: Company;
	email: string;
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
}

export interface EditState {
	isEdit: boolean;
}

export interface UserFormFields {
	name: string;
	username: string;
	phone: string;
	email: string;
	website: string;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo?: Geo;
}

interface Company {
	name: string;
	catchPhrase: string; 
	bs: string;
}

interface Geo {
	lat: string;
	lng: string;
}