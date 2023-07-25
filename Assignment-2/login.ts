enum Status {
    Active,
    Blocked,
  }
  
  interface UserAccess {
    username: string;
    password: string;
    status: Status;
  }
  
  class Login {
    private users: UserAccess[];
  
    constructor() {
      this.users = [];
    }
  
    addUser(user: UserAccess) {
      this.users.push(user);
    }
  
    getUser(username: string): UserAccess | undefined {
      return this.users.find((user) => user.username === username);
    }
  
    isBlocked(username: string): boolean {
      const user = this.getUser(username);
      return user ? user.status === Status.Blocked : false;
    }
  }
  
  const loginPage = new Login();
  

  loginPage.addUser({
    username: "admin",
    password: "admin",
    status: Status.Active,
  });
  
  loginPage.addUser({
    username: "user",
    password: "user",
    status: Status.Blocked,
  });
  