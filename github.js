class Github {
  constructor() {
    this.clint_id = 'cd1a3ee8ff30b2d34c43';
    this.clint_secret = ' c6e6a15b5d74d9189c72c796b9b572ec89de8d41';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clint_id}&client_secret=${this.clint_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clint_id}&client_secret=${this.clint_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}