class MyRegistration {
    private users: [string, string][]; // store data here (username, pass)
  
    constructor() {
      this.users = [];
    }
  
    addUser(username: string, password: string) {
      this.users.push([username, password]);
    }
  
    getUser(username: string): [string, string] | undefined {
      return this.users.find((user) => user[0] === username);
    }
  
    removeUser(username: string) {
      this.users = this.users.filter((user) => user[0] !== username);
    }
  }
  
  const registrationPage = new MyRegistration();
  