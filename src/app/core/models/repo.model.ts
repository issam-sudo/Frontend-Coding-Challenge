export interface repo {
 
    name: String;
    description: String;
    stargazers_count: Number;
    open_issues: Number;
    owner :{
        login: String;
        avatar_url: String;
    }
    created_at: Date;
  
    
}