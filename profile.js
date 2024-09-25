class UserProfile{
	constructor(name,email) {
		this.name = name;
		this.email = email;
	}

	updatedProfile(name, email) {
		if (!name || !email) {
			console.error("Name and email cannot be empty!")
			return;
		}

		this.name = name;
		this.email = email;
		console.log(`Profile updated: ${this.name}, ${this.email}`);
	}

	displayProfile() {
		console.log(`Name: ${this.name}, Email: ${this.email}`);
	}
}

const user = new UserProfile('John Doe','john.doe@mail.com');
user.displayProfile();
user.updatedProfile('Jane Doe','jane.doe@example.com')
