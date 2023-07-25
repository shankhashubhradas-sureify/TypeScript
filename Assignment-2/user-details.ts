namespace UserDetails {
    export function getUserDetails(username: string): UserAccess | undefined {
      return loginPage.getUser(username);
    }
  }
  